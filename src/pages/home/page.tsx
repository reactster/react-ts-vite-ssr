import * as React from "react";
import { useLoaderData } from "react-router-dom";

const HomePage: React.FC = () => {
  const data = useLoaderData() as any

  return (
    <div>
      <h1>
        {data.message}
      </h1>
    </div>
  );
};

export default HomePage;
