import Navbar from "@/components/common/navbar";
import Layout from "@/components/layouts/article";
import useSetDarkMode from "@/hooks/useSetDarkMode";
import type { NextPage } from "next";

const Home: NextPage = () => {
  useSetDarkMode();

  return (
    <Layout title="anh.leduc">
      {/* <Navbar /> */}
      <></>
    </Layout>
  );
};

export default Home;
