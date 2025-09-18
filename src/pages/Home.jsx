import React from "react";
import useGetData from "../hooks/useGetData";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = useGetData();
  console.log(data);
  return (
    <div>
      <h1>Mahsulotal:</h1>
      {data && (
        <ul>
          {data.map((obj) => {
            return (
              <li key={obj.id}>
                <Link className="bg-amber-200">{obj.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
