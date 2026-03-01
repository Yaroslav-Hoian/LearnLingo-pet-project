import { RV, RVFilterParams } from "@/types/RV";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

interface fetchRV {
  total: number;
  items: RV[];
}

export async function fetchRV(filter: RVFilterParams): Promise<fetchRV> {
  const response = await axios.get<fetchRV>("", { params: filter });
  return response.data;
}

export async function fetchRVById(id: string): Promise<RV> {
  const res = await axios.get<RV>("" + "/" + id);
  return res.data;
}
