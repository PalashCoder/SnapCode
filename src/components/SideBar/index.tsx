import React from 'react';
import { FaFolder, FaFileCode } from 'react-icons/fa';

const FileExplorer: React.FC = () => {
  return (
    <div className="w-1/4 h-full bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Files</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <FaFolder className="mr-2" /> components
        </div>
        <div className="flex items-center ml-4">
          <FaFileCode className="mr-2" /> HeroSection.tsx
        </div>
        <div className="flex items-center ml-4">
          <FaFileCode className="mr-2" /> Navbar.tsx
        </div>
        <div className="flex items-center">
          <FaFolder className="mr-2" /> pages
        </div>
        <div className="flex items-center ml-4">
          <FaFileCode className="mr-2" /> index.tsx
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
