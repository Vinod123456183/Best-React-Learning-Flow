import React, { useRef, useState } from "react";

const RefExample: React.FC = () => {
  // 1️⃣ useRef for storing a mutable value
  const countRef = useRef<number>(0);

  // 2️⃣ useRef for accessing DOM element
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useState to show re-render behavior
  const [renderCount, setRenderCount] = useState<number>(0);

  const incrementCount = () => {
    countRef.current += 1;
    console.log("Mutable count:", countRef.current);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const triggerRerender = () => {
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="p-6 font-sans max-w-md mx-auto bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">useRef Demo (TSX + Tailwind)</h2>

      <div className="mb-6">
        <input
          ref={inputRef}
          placeholder="Click button to focus me"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={focusInput}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Focus Input
        </button>
      </div>

      <div className="mb-6">
        <button
          onClick={incrementCount}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment useRef Count
        </button>
        <p className="text-gray-600 mt-2 text-sm">
          Check console to see <code>countRef.current</code> (does NOT trigger
          re-render)
        </p>
      </div>

      <div>
        <button
          onClick={triggerRerender}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Trigger Re-render
        </button>
        <p className="mt-2 text-gray-700">
          Component re-render count (useState): <strong>{renderCount}</strong>
        </p>
        <p className="text-gray-700">
          Mutable count (useRef): <strong>{countRef.current}</strong>
        </p>
      </div>
    </div>
  );
};

export default RefExample;
