import LineGradientWhite from '@/components/ui/LineGradientWhite'

function TopBarMap() {
    return (
        <>
            <LineGradientWhite top="1.1rem" height="1.5rem" color={"#f9fafb50"} />
            <div className="absolute px-4 w-full h-10 bg-linear-to-r from-bg-200 to-bg-100 top-0 left-0 flex justify-start items-center gap-5">
                <div className="flex gap-5 items-center">
                    <h5 className="text-text-400 bg-bg-400 border-t border-t-white px-2 rounded-full">Gateways</h5>
                    <div className="flex">
                        {[
                            ["GW-001", true],
                            ["GW-002", true],
                            ["GW-003", true],
                            ["GW-004", true],
                            ["GW-005", false],
                            ["GW-006", true],
                            ["GW-007", true],
                            ["GW-008", false],
                            ["GW-009", true],
                            ["GW-010", true],
                        ].map(([name, status], index) => (
                            <div key={index} className="flex items-center gap-1 px-2">
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${status ? "bg-green-500" : "bg-amber-500"
                                        }`}
                                ></span>
                                <small
                                    className={`${status ? "text-green-500" : "text-amber-500"}`}
                                >
                                    {name}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    )
}

export default TopBarMap