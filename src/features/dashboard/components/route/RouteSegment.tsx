import type { GatewayData } from "./types";
import { SensorNode } from "./SensorNode";
import { GatewayNode } from "./GatewayNode";

interface Props {
  gateway: GatewayData;
  isLast: boolean;
}

export function RouteSegment({ gateway, isLast }: Props) {
  const segmentHasError = gateway.sensors.some((s) => s.status === "error");

  return (
    <div className="flex items-center">
      <GatewayNode
        id={gateway.id}
        name={gateway.name}
        hasError={segmentHasError}
      />
      {!isLast && (
        <div className="flex items-center justify-between h-24 min-w-[600px] px-8 relative">
          <div
            className={`absolute left-0 right-0 h-[2px] top-1/2 -translate-y-1/2 transition-colors duration-500 ${segmentHasError
                ? "bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                : "bg-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              }`}
          />
          <div className="relative w-full flex items-center justify-evenly z-10">
            {gateway.sensors.map((sensor) => (
              <SensorNode key={sensor.id} data={sensor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
