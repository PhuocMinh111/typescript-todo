import React from "react";
import { Link } from "react-router-dom";
interface Iprops {
  todos:
    | {
        userId: string;
        id: number;
        title: string;
        completed: boolean;
      }[];
  isNormal: boolean;
}

const IDtable: React.FC<Iprops> = ({ todos, isNormal }): JSX.Element => {
  return (
    <table className="table">
      <thead className="">
        <th>ID</th>
        <th>UserId</th>
        <th colSpan={4}>Title</th>
        <th>Action</th>
      </thead>
      <tbody>
        {todos.map((item, index) => {
          const { id, userId, title, completed } = item;
          return (
            <tr>
              <td>{id}</td>
              <td>{userId}</td>
              <td colSpan={4}>{title}</td>
              <td>
                <Link to={`/${id}`}>detail</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default IDtable;
