import React from "react";

import Container from "@/components/Container";
import Mark from "@/components/Mark";

const bg = require("@/assets/images/bg.png").default;
const App: React.FC = () => {
  return (
    <div className="warp" style={{ backgroundImage: `url(${bg})` }}>
      <div className="box">
        <Container />
        <Mark />
      </div>
    </div>
  );
};

export default App;
