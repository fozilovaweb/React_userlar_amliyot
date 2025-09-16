import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function useGetData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Qandaydir xatolik bor!");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}

export default useGetData;
