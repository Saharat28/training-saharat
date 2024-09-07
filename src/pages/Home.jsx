import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
        <h1 className="text-6xl">หน้าหลัก</h1>
        <hr className="h-1 bg-black border-1"/>
        <div className="flex items-center justify-center mt-5">
          <img src="https://www.ssc.edu/wp-content/uploads/2023/05/computer-lab_header.jpg" alt="" />
        </div>
    </Layout>
  );
};

export default Home;
