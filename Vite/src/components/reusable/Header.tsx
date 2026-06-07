import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-yellow-500" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-gray-900">
              Vinod Singh
            </span>
            <span className="text-sm text-gray-800 ">Editor</span>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-4 text-[14px] text-gray-600">
          <a href="#resume" className="hover:text-gray-900 transition-colors">
            Resume
          </a>
          <span className="text-gray-500">|</span>
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Projects
          </a>
          <span className="text-gray-500">|</span>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
