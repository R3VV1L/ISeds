import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import { Homepage } from "./pages/homePage";
import { Layout } from "./components/layout";
import { Sotr } from "./pages/sotr";
import { Instr } from "./pages/instr";
import { Dok } from "./pages/dok";
import { Krab } from "./pages/krab";
import { PrR } from "./pages/prR";
import { View } from "./pages/view";
import { AuthForm } from "./pages/authForm";

function App() {
  const [stage, setStage] = useState("0");

  const elementsL = (stage) => {
    setStage(stage);

    return stage;
  };

  console.log(stage);

  const nav = [
    {
      content: <Route path="sotr" element={<Sotr />} />,
      id: 1,
    },
    {
      content: <Route path="instr" element={<Instr />} />,
      id: 2,
    },
    {
      content: <Route path="dok" element={<Dok />} />,
      id: 3,
    },
    {
      content: <Route path="krab" element={<Krab />} />,
      id: 4,
    },
    {
      content: <Route path="prR" element={<PrR />} />,
      id: 5,
    },
    {
      content: <Route path="view" element={<View />} />,
      id: 6,
    },
  ];

  return (
    <>
      <Layout stage={stage} />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="auth" element={<AuthForm roles={elementsL} />} />
        {stage === 2 && nav?.map(e => (e.content))}
        {stage === 1 && nav?.map((e) => (e.id === 2 && e.content))}
        {stage === 1 && nav?.map((e) => (e.id === 5 && e.content))}
        {stage === 1 && nav?.map((e) => (e.id === 6 && e.content))}
        {/* {nav?.map((e) => e.content)} */}
      </Routes>
      <footer>
        <div className="textFooter">is_eds ver.1.1.0 </div>
      </footer>
    </>
  );
}

export default App;
