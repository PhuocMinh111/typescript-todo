import React, { useEffect, useState } from "react";
import IDtable from "../components/IDtable";
import callApi from "../services/useApi";

type Todos =
  | {
      userId: string;
      id: number;
      title: string;
      completed: boolean;
    }[]
  | undefined;
const url: string = "https://jsonplaceholder.typicode.com/todos";

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todos>([]);
  const [idTable, setIdtable] = useState<boolean>(true);

  useEffect(() => {
    callApi(url).then((data) => {
      setTodos(data);
    });
  }, []);

  function viewByUserId() {}
  return (
    <div className="container-fluid p-5">
      <div className="w-25 row p-0">
        <div className="col-6">
          <button className="btn btn-primary">View Normal</button>
        </div>
        <div className="col-6">
          <div className="button btn btn-primary">Group by userID</div>
        </div>
      </div>
      {todos && (idTable ? <IDtable todos={todos} /> : null)}
    </div>
  );
};
