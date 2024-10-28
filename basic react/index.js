import React from "react";
import ReactDom from "react-dom/client";

const h1Ele=React.createElement("h1",null,"hello react");
const ReactRoot=ReactDom.createRoot(document.getElementById("root"));
ReactRoot.render(h1Ele);

