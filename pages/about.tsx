import { Button } from "antd";
import { useRouter } from "next/dist/client/router";
import { HomePath } from "./paths";

export const path = "about";

export const About = () => {
  const router = useRouter();

  return (
    <>
      <div>About</div>
      <Button onClick={() => router.push(HomePath)}>Back</Button>
    </>
  );
};

export default About;
