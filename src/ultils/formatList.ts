interface users {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
}

function formatList(data: users[]) {
  let idArray: Array<Array<users>> | null = [];
  let userId: number = 1;
  let singleIdArray: Array<users> = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].userId === userId) {
      singleIdArray.push(data[i]);
    } else {
      singleIdArray = [];
      userId++;
      idArray.push(singleIdArray);
    }
  }
  return idArray;
}

export default formatList;
