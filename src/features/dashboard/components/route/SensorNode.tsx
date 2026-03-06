import { IconWifi } from "@tabler/icons-react";
import { SensorData } from "./types";

interface Props {
  data: SensorData;
}

export function SensorNode({ data }: Props) {
  const isError = data.status === "error";

  return (
    <div className="group relative flex items-center justify-center transition-transform">
      <div
        className={`flex items-center justify-center rounded-full p-0.5 bg-bg-200 border transition-all duration-300 ${isError
          ? "border-red-500 text-red-500 "
          : "border-sky-400 text-sky-400"
          }`}
      >
        <IconWifi size={20} stroke={2} />
      </div>
      <div className="absolute transition-all duration-300 -top-6 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-bg-100 border border-white/10 text-white text-lg font-mono px-2 py-0.5 rounded pointer-events-none whitespace-nowrap z-50">
        {data.id}
      </div>
    </div>
  );
}
