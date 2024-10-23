import React from "react";
import FileExplorer from "../components/SideBar";
import CodeEditor from "../components/CodeEditor";
import Terminal from "../components/Terminal";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <FileExplorer />
      <div className="flex flex-col w-full">
        <CodeEditor />
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
