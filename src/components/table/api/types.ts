import { KeysToCamelCase, metaHttpResponse } from "../../../shared/api/types";

export type Layoff = {
  id: string;
  name: string;
  country: string;
  market: string;
  happened_at: string;
  reported_at: string;
  confirmed_at: string;
  amount_affected: number;
}

export type GetLayoffsResponse = metaHttpResponse & {
  layoffs: Layoff[];
}

type LayoffAsRow = "name" | "country" | "happened_at" | "amount_affected"
export type RowData = Omit<KeysToCamelCase<Pick<Layoff, LayoffAsRow>>, "name"> & { company: Layoff["name"] }
