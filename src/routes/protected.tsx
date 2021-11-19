import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

import { Spinner } from "@/components/elements";
import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";

const { RetrosRoutes } = lazyImport(() => import("@/features/retros"), "RetrosRoutes");
const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");
const { Profile } = lazyImport(() => import("@/features/users"), "Profile");
const { Users } = lazyImport(() => import("@/features/users"), "Users");

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <Flex h="full" w="full" justifyItems="center" justifyContent="center">
            <Spinner size="xl" />
          </Flex>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "/retros/*", element: <RetrosRoutes /> },
      { path: "/users", element: <Users /> },
      { path: "/profile", element: <Profile /> },
      { path: "/", element: <Dashboard /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
