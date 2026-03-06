import { useMemo } from "react";
import { Source, Layer, Marker } from "react-map-gl";
import type { GatewayData } from "./types";
import MarkerGateway from "../markers/MarkerGateway";
import { SensorNode } from "./SensorNode";

interface Props {
  gateways: GatewayData[];
}

export function MapRailwayRoute({ gateways }: Props) {
  const lineData = useMemo(() => {
    if (!gateways || gateways.length === 0) return null;

    const coordinates: [number, number][] = [];
    const colors: number[] = [];

    gateways.forEach((gw, index) => {
      coordinates.push([gw.longitude, gw.latitude]);

      const hasError = gw.sensors.some(s => s.status === "error");
      colors.push(hasError ? 1 : 0);

      gw.sensors.forEach(sensor => {
        coordinates.push([sensor.longitude, sensor.latitude]);
        colors.push(sensor.status === "error" ? 1 : 0);
      });

      if (index < gateways.length - 1) {
        colors.push(hasError ? 1 : 0);
      }
    });

    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coordinates
          }
        }
      ]
    };
  }, [gateways]);

  const errorLineData = useMemo(() => {
    if (!gateways || gateways.length === 0) return null;

    const features: any[] = [];

    gateways.forEach((gw, index) => {
      const hasError = gw.sensors.some(s => s.status === "error");
      if (!hasError || index === gateways.length - 1) return;

      const nextGw = gateways[index + 1];
      const segmentCoords = [
        [gw.longitude, gw.latitude],
        ...gw.sensors.map(s => [s.longitude, s.latitude]),
        [nextGw.longitude, nextGw.latitude]
      ];

      features.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: segmentCoords
        }
      });
    });

    return { type: "FeatureCollection", features };
  }, [gateways]);

  if (!gateways || gateways.length === 0) return null;

  return (
    <>
      {lineData && (
        <Source id="railway-route-base" type="geojson" data={lineData as any}>
          <Layer
            id="railway-route-line-base"
            type="line"
            paint={{
              "line-color": "#38bdf8", 
              "line-width": 2,
              "line-opacity": 0.6,
            }}
          />
          <Layer
            id="railway-route-glow-base"
            type="line"
            paint={{
              "line-color": "#38bdf8",
              "line-width": 12,
              "line-opacity": 0.2,
              "line-blur": 11
            }}
          />
        </Source>
      )}

      {errorLineData && errorLineData.features.length > 0 && (
        <Source id="railway-route-error" type="geojson" data={errorLineData as any}>
          <Layer
            id="railway-route-line-error"
            type="line"
            paint={{
              "line-color": "#ef4444", 
              "line-width": 2,
              "line-opacity": 0.9,
            }}
          />
          <Layer
            id="railway-route-glow-error"
            type="line"
            paint={{
              "line-color": "#ef4444",
              "line-width": 8,
              "line-opacity": 0.4,
              "line-blur": 2
            }}
          />
        </Source>
      )}

      {gateways.map((gw) => {
        const hasError = gw.sensors.some((s) => s.status === "error");
        return (
          <Marker
            key={gw.id}
            longitude={gw.longitude}
            latitude={gw.latitude}
            anchor="bottom"
          >
            <div className="flex flex-col items-center justify-center relative -translate-y-2 ">
              <MarkerGateway />

              <div className="flex flex-col items-center absolute top-full mt-8 bg-bg-100 px-2 py-1">
                <span className={`text-[10px] text-nowrap font-bold font-mono tracking-widest uppercase ${hasError ? "text-red-400" : "text-sky-300"}`}>
                  {gw.name}
                </span>
                <span className="text-[9px] text-text-100 font-semibold font-mono">
                  {gw.id}
                </span>
              </div>
            </div>
          </Marker>
        );
      })}

      {gateways.flatMap((gw) =>
        gw.sensors.map((sensor) => (
          <Marker
            key={sensor.id}
            longitude={sensor.longitude}
            latitude={sensor.latitude}
            anchor="center"
          >
            <div className="scale-75 top-10 origin-center">
              <SensorNode data={sensor} />
            </div>
          </Marker>
        ))
      )}
    </>
  );
}
