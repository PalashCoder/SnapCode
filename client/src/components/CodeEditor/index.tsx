import React from "react";

const CodeEditor: React.FC = () => {
  return (
    <div className="w-full h-3/4 bg-gray-900 text-white p-4">
      <textarea
        className="w-full h-full bg-gray-900 text-green-400 font-mono p-2"
        defaultValue={`// Your code goes here\n\nconst greeting = "Hello, World!";\nconsole.log(greeting);`}
      />
    </div>
  );
};

export default CodeEditor;
