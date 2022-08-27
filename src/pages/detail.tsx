import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../constant";
import { callDetail } from "../services/\buseApi";
interface detail {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Detail: React.FC = (props): JSX.Element => {
  const [detail, setDetail] = useState<detail | null>(null);
  const param = useParams();
  useEffect(() => {
    callDetail(param.id).then((data) => setDetail(data));
  }, []);

  if (detail)
    return (
      <>
        <div style={{ width: "18rem" }} className="card mx-auto mt-5">
          <div className="card-body">
            <h4 className="card-title text-primary">Detail</h4>
            <h6 className="">
              status:{" "}
              <span
                className={detail.completed ? "text-success" : "text-danger"}
              >
                {detail.completed ? "completed" : "not completed"}
              </span>
            </h6>
            <h6 className="">id: {detail.id}</h6>
            <h6 className="">userId: {detail.userId}</h6>
            <h6>
              title: <span className="text-success">{detail.title}</span>
            </h6>
          </div>
        </div>
      </>
    );
  return <h3 className="w-25 mt-5 mx-auto text-primary">...loading</h3>;
};

export default Detail;
