import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

function About() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
        <span className="loading loading-spinner loading-lg text-[#e3c39d]"></span>
      </div>
    );
  }
  if (error)
    return (
      <h2 className="text-red-500 text-center text-2xl mt-20 font-semibold">
        {error}
      </h2>
    );
  if (!data)
    return (
      <h2 className="text-gray-300 text-center text-xl mt-20">
        Xatolik yuz berdi
      </h2>
    );

  return (
    <div className="container mx-auto px-4 sm:mb-[50px]">
      <h1 className="text-4xl font-bold text-emerald-500 mb-8 text-center">
        {data.name}
        <span className="text-cyan-800">ning ma’lumotlari</span>
      </h1>

      <div className="space-y-5 text-xl text-center ">
        <p>
          <span className="font-semibold text-cyan-900 mr-5">Name:</span>
          {data.name}
        </p>
        <p>
          <span className="font-semibold  text-cyan-900 mr-5">Username:</span>
          {data.username}
        </p>
        <p>
          <span className="font-semibold  text-cyan-900 mr-5">Email:</span>
          {data.email}
        </p>
        <p>
          <span className="font-semibold  text-cyan-900 mr-5">Phone:</span>
          {data.phone}
        </p>
        <p>
          <span className="font-semibold  text-cyan-900 mr-5">Website:</span>
          {data.website}
        </p>
      </div>
      <div className="flex justify-end mt-8">
        <Link
          to={"/"}
          className="bg-amber-200 border text-cyan-900 px-6 py-2 rounded-md active:bg-red-300"
        >
          <button className="font-bold">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
