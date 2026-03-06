import { IconBuildingBroadcastTower } from "@tabler/icons-react";

interface Props {
  id: string;
  name: string;
  hasError: boolean;
}

export function GatewayNode({ id, name, hasError }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 z-10 shrink-0">
      <div
        className={`relative flex items-center justify-center w-12 h-12 rounded-xl border-2 bg-bg-200 transition-all duration-300 ${
          hasError
            ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] text-red-500"
            : "border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)] text-sky-400"
        }`}
      >
        <IconBuildingBroadcastTower size={26} stroke={1.5} />
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`text-xs font-bold font-mono tracking-widest uppercase ${
            hasError ? "text-red-400" : "text-sky-300"
          }`}
        >
          {name}
        </span>
        <span className="text-[10px] text-slate-400 font-mono mt-0.5">
          {id}
        </span>
      </div>
    </div>
  );
}
