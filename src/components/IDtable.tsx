import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import formatList from "../ultils/formatList";

interface Iprops {
  todos:
    | {
        userId: number;
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
        {isNormal
          ? todos.map((item, index) => {
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
            })
          : formatList(todos).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0].userId}</td>
                  <td>
                    <ul className="list-group">
                      {item.map((item, index) => {
                        return (
                          <Link
                            to={`/detail/${item.id}`}
                            className="list-item"
                            key={index}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};
export default IDtable;
