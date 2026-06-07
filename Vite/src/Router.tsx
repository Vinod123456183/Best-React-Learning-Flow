import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Ab from "./Ab";
import NotFound from "./components/reusable/NotFound";
import DynamicParams from "./components/reusable/DynamicParams";
import Nested1 from "./components/reusable/NestedRoutes/Nested1";
import Nested1Child from "./components/reusable/NestedRoutes/Nested1Child";
import FetchUsingUseEffect from "./components/API/FetchUsingUseEffect";

// Hook components
import UseStateComponent from "./Hooks/UseState";
import UseEffectComponent from "./Hooks/UseEffectComponent";
import UseRefComponent from "./Hooks/UseRefComponent";
import UseContextComponent from "./Hooks/UseContextComponent";
import UseReducerComponent from "./Hooks/UseReducerComponent";
import UseMemoComponent from "./Hooks/UseMemoComponent";
import UseCallbackComponent from "./Hooks/UseCallbackComponent";
import ForwardRefComponent from "./Hooks/ForwardRefComponent";
import UseImperativeHandleComponent from "./Hooks/UseImperativeHandleComponent";
import UseLayoutEffectComponent from "./Hooks/UseLayoutEffectComponent";
import UseDebugValueComponent from "./Hooks/UseDebugValueComponent";
import UseTransitionComponent from "./Hooks/UseTransitionComponent";
import UseDeferredValueComponent from "./Hooks/UseDeferredValueComponent";
import UseIDComponent from "./Hooks/UseIDComponent";
import CustomHookComponent from "./Hooks/CustomHookComponent";
import AdvancedContextComponent from "./Hooks/AdvancedContextComponent";
import UseSyncExternalStoreComponent from "./Hooks/UseSyncExternalStoreComponent";
import HooksFrontPage from "./HookFrontPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "resume", element: <Ab /> },
      { path: "contact", element: <Contact /> },
      { path: "fetch-using-use-effect", element: <FetchUsingUseEffect /> },
      { path: "user/:userId", element: <DynamicParams /> },
      {
        path: "nested1",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <div>
                <Nested1 />
              </div>
            ),
          },
          { path: "children", element: <Nested1Child /> },
        ],
      },
      {
        path: "hooks",
        element: <Outlet />, // layout for child routes
        children: [
          { index: true, element: <HooksFrontPage /> }, // /hooks -> front page
          { path: "use-state", element: <UseStateComponent /> },
          { path: "use-effect", element: <UseEffectComponent /> },
          { path: "use-ref", element: <UseRefComponent /> },
          { path: "use-context", element: <UseContextComponent /> },
          { path: "use-reducer", element: <UseReducerComponent /> },
          { path: "use-memo", element: <UseMemoComponent /> },
          { path: "use-callback", element: <UseCallbackComponent /> },
          { path: "forward-ref", element: <ForwardRefComponent /> },
          {
            path: "use-imperative-handle",
            element: <UseImperativeHandleComponent />,
          },
          { path: "use-layout-effect", element: <UseLayoutEffectComponent /> },
          { path: "use-debug-value", element: <UseDebugValueComponent /> },
          { path: "use-transition", element: <UseTransitionComponent /> },
          {
            path: "use-deferred-value",
            element: <UseDeferredValueComponent />,
          },
          { path: "use-id", element: <UseIDComponent /> },
          { path: "custom-hook", element: <CustomHookComponent /> },
          { path: "advanced-context", element: <AdvancedContextComponent /> },
          {
            path: "use-sync-external-store",
            element: <UseSyncExternalStoreComponent />,
          },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
