import React from "react";
import ReactDom from "react-dom/client";

//const h1Ele=<h1>hello reavct component</h1>
const App = () => {
    return (
        <div>
            <App1/>
            <App2/>
        </div>
    )
}
const App1 = () => {
    return (
        <div>
            <h1>
                Hello React1
            </h1>
        </div>
    )
}
const App2 = () => {
    return (
        <div>
            <h1>
                Hello React2
            </h1>
        </div>
    )
}

  const ReactRoot=ReactDom.createRoot(document.getElementById("root"));
ReactRoot.render(<App/>);

