export interface IntensityItem {
  forecast: number;
  actual: number;
  index: "low" | "moderate" | "high";
}

export interface DataItem {
  from: string;
  to: string;
  intensity: IntensityItem;
}

export interface Data {
  data: Array<DataItem>;
}
