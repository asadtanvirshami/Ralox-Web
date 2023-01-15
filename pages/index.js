import React from "react";
import Head from "next/head";
import Index from "../components/layout/indexpage/Index";
import "aos/dist/aos.css";

export const index = () => {
  return (
    <> 
      <div>
        <Index />
      </div>
    </>
  );
};

export default index;
