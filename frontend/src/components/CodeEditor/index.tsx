"use client";
import React from "react";
import Monaco from "@monaco-editor/react";

const CodeEditor: React.FC = () => {
  return (
    <div className="w-full h-3/4 bg-vscode text-white">
      <Monaco language="javascript" theme="vs-dark" />
    </div>
  );
};

export default CodeEditor;
