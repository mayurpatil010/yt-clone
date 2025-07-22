import { useSelector } from "react-redux";
import clsx from "clsx";

const SIDEBAR_ITEMS = [
  { title: "Home", icon: "home" },
  { title: "Shorts", icon: "video_library" },
  { title: "Subscriptions", icon: "subscriptions" },
  { title: "YouTube Music", icon: "library_music" },
];

export const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.app.isSidebarOpen);

  const sidebarStyles = {
    container: clsx(
      "flex flex-col gap-6 h-screen py-5 ml-1",
      isSidebarOpen ? "w-60 pl-4" : "w-20"
    ),
    item: clsx(
      "flex items-center",
      isSidebarOpen ? "gap-3 flex-row" : "gap-1 flex-col"
    ),
    title: clsx(isSidebarOpen ? "text-sm" : "text-[11px] text-nowrap"),
  };

  const renderSidebarItem = (item, index) => (
    <div className={sidebarStyles.item} key={`${item.title}-${index}`}>
      <span className="material-icons">{item.icon}</span>
      <p className={sidebarStyles.title}>{item.title}</p>
    </div>
  );

  return (
    <div className={sidebarStyles.container}>
      {SIDEBAR_ITEMS.map(renderSidebarItem)}
    </div>
  );
};
