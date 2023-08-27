import React from "react";

import Container from "@/components/Container";

const bg = require("@/assets/images/bg.png").default;
const App: React.FC = () => {
  return (
    <div className="warp" style={{backgroundImage: `url(${bg})` }}>
      <Container />
    </div>
  );
};

export default App;
