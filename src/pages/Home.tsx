import React, { useEffect, useState } from "react";
import IDtable from "../components/IDtable";
import { URL } from "../constant";
import { callApi } from "../services/useApi";
interface todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  const [idTable, setIdtable] = useState<boolean>(false);

  useEffect(() => {
    callApi(URL).then((data) => {
      setTodos(data);
    });
  }, []);

  function viewNormal() {
    setIdtable(false);
  }
  return (
    <div className="container-fluid p-5">
      <div className="w-25 row p-0">
        <div className="col-6">
          <button onClick={() => setIdtable(false)} className="btn btn-primary">
            View Normal
          </button>
        </div>
        <div className="col-6">
          <div
            onClick={() => setIdtable(true)}
            className="button btn btn-primary"
          >
            Group by userID
          </div>
        </div>
      </div>
      {todos && <IDtable isNormal={!idTable} todos={todos} />}
    </div>
  );
};
