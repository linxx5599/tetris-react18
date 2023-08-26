import React from "react";
import { createRoot } from "react-dom/client";
import icons from "@/icons";
icons();
import "@/style/index.less";
// 定义当前项目的路由模式
import App from "./App";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
