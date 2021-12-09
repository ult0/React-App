import { Button } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { AboutPath } from "./paths";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push(AboutPath)}>About</Button>
    </div>
  );
};

export default Home;
