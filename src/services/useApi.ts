import { URL } from "../constant";

interface Idata {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function callApi(url: string): Promise<Idata[]> {
  return fetch(url).then((res) => res.json());
  // .then((data) => {
  //   return data as unknown as Idata[];
  // });
}

function callDetail(id: string | undefined): Promise<Idata> {
  return fetch(URL + id).then((res) => res.json());
}
export { callApi, callDetail };
