import BottomBar from "@/components/bars/BottomBar";
import RightBar from "@/components/bars/RightBar";
import BaseMap from "@/components/baseMap/components/BaseMap";
import { useBreakpoint } from "@/hooks/useBreakpoints";
import { LineChartWrapper } from "@/libs/recharts";
import { useState } from "react";
import { IconArrowNarrowLeft, IconX } from "@tabler/icons-react";
import LineGradientWhite from "@/components/ui/LineGradientWhite";

// Ejemplo de uso
const actividadPuertas = [
  { nombre: "Puerta 1", aperturas: 45, cierres: 42 },
  { nombre: "Puerta 2", aperturas: 32, cierres: 30 },
  { nombre: "Puerta 3", aperturas: 28, cierres: 28 },
  { nombre: "Puerta 4", aperturas: 15, cierres: 14 },
  { nombre: "Puerta 5", aperturas: 52, cierres: 50 },
];

function Dashboard() {
  const { isMobile } = useBreakpoint();
  const [isOpenRightBar, setOpenRightBar] = useState(false);
  return (
    <div
      className={`w-full h-full  ${isMobile ? "flex flex-row" : "grid grid-cols-12 overflow-hidden"}`}
    >
      <div className="col-span-10 h-full flex flex-col justify-between items-center w-full">
        <BaseMap>
          <LineGradientWhite top="1.1rem" height="1.5rem" color={"#f9fafb50"} />
          <div className="absolute px-4 w-full h-10 bg-linear-to-r from-bg-200 to-bg-100 top-0 left-0 flex justify-start items-center gap-5">
            <h5 className="text-text-200">Gateways</h5>
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
                    className={`w-1.5 h-1.5 rounded-full ${
                      status ? "bg-green-500" : "bg-amber-500"
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
        </BaseMap>
        <BottomBar title="">
          <LineChartWrapper
            data={actividadPuertas}
            dataKey={["aperturas", "cierres"]}
            xAxisKey="nombre"
            height={170}
            colors={["gray", "red"]}
            showGrid={true}
            showLegend={true}
          ></LineChartWrapper>
        </BottomBar>
      </div>
      {!isMobile ? (
        <RightBarDashboard />
      ) : isOpenRightBar ? (
        <RightBarDashboard setOpenRightBar={setOpenRightBar} />
      ) : (
        <button
          className="absolute right-0 z-50 top-[50%] rounded-s-sm bg-brand-100 "
          onClick={() => setOpenRightBar && setOpenRightBar(true)}
        >
          <IconArrowNarrowLeft size={24} stroke={1.5} />
        </button>
      )}
    </div>
  );
}

const RightBarDashboard = ({
  setOpenRightBar,
}: {
  setOpenRightBar?: (isOpen: boolean) => void;
}) => {
  return (
    <div className="relative col-span-2 z-50 ">
      {setOpenRightBar && (
        <button
          onClick={() => setOpenRightBar && setOpenRightBar(false)}
          className="absolute top-2 flex justify-center items-center right-2 z-50  outline outline-transparent"
        >
          <IconX size={20} stroke={1.5} />
        </button>
      )}
      <RightBar
        title="Detalles de Puertas"
        overlays={
          <div className="px-3 py-4  border-b border-border-200">
            <small>Overlays</small>
          </div>
        }
      >
        <div>
          <small>Contenido del RightBar</small>
        </div>
      </RightBar>
    </div>
  );
};

export default Dashboard;
