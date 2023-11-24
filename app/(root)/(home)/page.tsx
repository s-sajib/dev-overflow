import React from "react";
import { UserButton } from "@clerk/nextjs";
const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div>Home sweet Home!</div>
    </div>
  );
};

export default Home;
