import React from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

function About() {
  const { id } = useParams();

  const { data } = useGetData(id);
  console.log(data);

  return (
    <div>
      <h1>About:{id}</h1>
    </div>
  );
}

export default About;
