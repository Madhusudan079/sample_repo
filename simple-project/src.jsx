import React from "react";
import {createRoot} from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./style.css";
function App(){return <div className="page"><h1>Hello Guys👋</h1><p>My first Vercel website.</p><button>Click Me</button></div>}
createRoot(document.getElementById("root")).render(<App/>);
