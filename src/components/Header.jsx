import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toggleSidebar } from "../redux/features/app/appSlice";
import { logoutThunk } from "../redux/features/auth/authThunks";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="grid grid-cols-12 items-center p-2 bg-white">
      <div className="col-span-3 flex items-center gap-6">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="material-icons cursor-pointer pl-4"
          aria-label="Toggle menu"
        >
          menu
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-5"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-span-6 flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-400 rounded-l-full p-2 pl-4 focus:outline-none"
        />
        <button className="w-16 bg-gray-300 border border-gray-400 border-l-0 rounded-r-full flex items-center justify-center">
          <span className="material-icons text-white">search</span>
        </button>
      </div>
      <div className="col-span-3 flex justify-end">
        <span>{user?.name}</span>
        <span className="material-icons cursor-pointer">account_circle</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};
