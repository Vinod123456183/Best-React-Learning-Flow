// HooksFrontPage.tsx
import { Link } from "react-router-dom";

interface HookItem {
  name: string;
  path: string;
}

interface HookSection {
  level: string;
  hooks: HookItem[];
}

const hooksList: HookSection[] = [
  {
    level: "Beginner",
    hooks: [
      { name: "useState", path: "/hooks/use-state" },
      { name: "useEffect", path: "/hooks/use-effect" },
      { name: "useRef", path: "/hooks/use-ref" },
      { name: "useContext", path: "/hooks/use-context" },
    ],
  },
  {
    level: "Intermediate",
    hooks: [
      { name: "useReducer", path: "/hooks/use-reducer" },
      { name: "useMemo", path: "/hooks/use-memo" },
      { name: "useCallback", path: "/hooks/use-callback" },
      { name: "forwardRef", path: "/hooks/forward-ref" },
      { name: "useImperativeHandle", path: "/hooks/use-imperative-handle" },
      { name: "useLayoutEffect", path: "/hooks/use-layout-effect" },
      { name: "useDebugValue", path: "/hooks/use-debug-value" },
    ],
  },
  {
    level: "Advanced",
    hooks: [
      { name: "useTransition", path: "/hooks/use-transition" },
      { name: "useDeferredValue", path: "/hooks/use-deferred-value" },
      { name: "useID", path: "/hooks/use-id" },
      { name: "Custom Hook", path: "/hooks/custom-hook" },
      { name: "Advanced Context", path: "/hooks/advanced-context" },
      { name: "useSyncExternalStore", path: "/hooks/use-sync-external-store" },
    ],
  },
];

const HooksFrontPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 p-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
        React Hooks Playground
      </h1>

      {hooksList.map((section) => (
        <div key={section.level} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            {section.level} Hooks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.hooks.map((hook) => (
              <Link
                key={hook.name}
                to={hook.path}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex items-center justify-center 
                           hover:bg-indigo-100 hover:scale-105 transform transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-medium text-gray-800">
                  {hook.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HooksFrontPage;
