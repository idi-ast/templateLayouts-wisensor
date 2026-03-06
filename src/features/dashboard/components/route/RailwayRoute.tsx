import type { GatewayData } from "./types";
import { RouteSegment } from "./RouteSegment";
import { IconTrain, IconMapPinFilled } from "@tabler/icons-react";

interface Props {
  gateways: GatewayData[];
}

export function RailwayRoute({ gateways }: Props) {
  if (!gateways || gateways.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto overflow-y-visible py-16 px-12 bg-bg-100/50 backdrop-blur-md border border-white/5 rounded-2xl custom-scrollbar flex items-center">
      <div className="flex items-center min-w-max pr-12">
        <div className="mr-8 flex items-center justify-center shrink-0 w-14 h-14 rounded-full border-2 border-sky-400/50 bg-sky-900/30 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] z-10">
          <IconTrain size={32} stroke={1.5} />
        </div>
        {gateways.map((gw, index) => (
          <RouteSegment
            key={gw.id}
            gateway={gw}
            isLast={index === gateways.length - 1}
          />
        ))}
        <div className="ml-8 flex items-center justify-center shrink-0 w-14 h-14 rounded-full border-2 border-sky-400/50 bg-sky-900/30 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] z-10">
          <IconMapPinFilled size={32} />
        </div>
      </div>
    </div>
  );
}
