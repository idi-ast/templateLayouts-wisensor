import { IconBuildingBroadcastTower } from "@tabler/icons-react"

function MarkerGateway() {
    return (
        <div className="relative">
            <div className="absolute translate-y-5 rotate-45 bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 border rounded-full -skew-x-35 border-white "></div>
            <div className="absolute translate-y-8 backdrop-blur-xs rotate-45 bottom-1 left-1/2 -translate-x-1/2 w-10 h-10 border-2 rounded-full -skew-x-35 border-white "></div>
            <div className="absolute translate-y-4 rotate-45 bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border rounded-full -skew-x-35 border-white bg-white/80 "></div>
            <div className="absolute translate-y-5 rotate-45 bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 border rounded-full -skew-x-35 border-white bg-white/50 "></div>

            <div className="border-2 border-white w-7 h-7  rotate-45  bg-bg-200/80 flex justify-center items-center">
                <IconBuildingBroadcastTower size={20} stroke={1.6} className="text-sky-300 -rotate-45" />
            </div>
        </div>
    )
}

export default MarkerGateway