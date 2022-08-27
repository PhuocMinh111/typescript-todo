interface user {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
}

function formatList(data: user[]) {
  let idArray: Array<Array<user>> | null = [];
  let userId: number = 1;
  let singleIdArray: Array<user> = [];
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
