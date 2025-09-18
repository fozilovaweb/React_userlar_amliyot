import React from "react";
import useGetData from "../hooks/useGetData";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = useGetData();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div>
      <h1 className="flex items-center justify-center  text-2xl mb-2">
        Mahsulotal:
      </h1>
      {data && (
        <ul className="flex flex-col gap-6 items-center">
          {data.map((obj) => {
            return (
              <li key={obj.id}>
                <Link
                  to={"/about/" + obj.id}
                  className="w-fit flex  text-xl font-500 hover:text-blue-600 active:text-red-500"
                >
                  {obj.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
