export type SensorStatus = "ok" | "error";

export interface SensorData {
  id: string;
  status: SensorStatus;
  longitude: number;
  latitude: number;
}

export interface GatewayData {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  sensors: SensorData[];
}
