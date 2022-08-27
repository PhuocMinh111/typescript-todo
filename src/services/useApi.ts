interface Idata {
  userId: string;
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

export default callApi;
