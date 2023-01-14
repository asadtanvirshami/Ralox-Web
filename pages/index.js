import React from "react";
import Head from "next/head";
import Index from "../components/layout/indexpage/Index";
import "aos/dist/aos.css";

export const index = () => {
  return (
    <>
      <Head>
        <meta
          name="RaloxSoft: WE HELP BUSINESSES BECOME DIGITAL GIANTS, PROMOTE THEM AS SO"
          content="We are Ralox, a single solution for all your business needs. We offer all IT software services along with consultation for small-scale companies. It’s our first-hand experience with big-ticket clients that has led to the development of an innovative mindset. Expect Ralox Soft team to stay on their feet to address all your worries. is now one of the leading digital hubs that has helped countless start-up businesses to stand up on their feet across the globe. We don’t make logos; we create brand identities; we don’t make websites; we make an online presence. With a flexible, capable and experienced team, our game-changing deliveries give our clients the direct path to prosperity and success in these extraordinarily competitive times."
        />
      </Head>
      <div>
        <Index />
      </div>
    </>
  );
};

export default index;
