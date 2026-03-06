import { IconBuildingBroadcastTower } from "@tabler/icons-react"

function MarkerGateway() {
    return (
        <div className="relative">
            <div className="border-2 border-white w-7 h-7  rotate-45  bg-bg-200/80 flex justify-center items-center">
                <IconBuildingBroadcastTower size={20} stroke={1.6} className="text-sky-300 -rotate-45" />
            </div>
            <div className="absolute translate-y-3.5 rotate-45 bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 border-b-2 border-sky-300 border-r-2 border-r-skyborder-sky-300"></div>
            <div className="absolute translate-y-3.5 rotate-45 -bottom-0.5 m-0 left-1/2 -translate-x-1/2 w-5 h-5 border-b-2 border-sky-600 border-r-2 border-r-skyborder-sky-300"></div>
        </div>
    )
}

export default MarkerGateway