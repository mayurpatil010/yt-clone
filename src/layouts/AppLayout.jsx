import { Outlet } from "react-router-dom";

import { Header, Sidebar, Filters } from "../components";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-[calc(100vh-56px)] overflow-y-auto">
          <Filters />

          {/* The Outlet component will render the child routes */}
          {/* defined in AppRoutes.jsx */}
          {/* This allows us to have a common layout with Header and Sidebar */}
          {/* while rendering different pages like Home, Watch, etc. */}
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
