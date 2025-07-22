import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginThunk } from "../redux/features/auth/authThunks";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      { theme: "outline", size: "large" }
    );

    // window.google.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = (response) => {
    dispatch(loginThunk(response.credential));
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <h2 className="text-2xl text-red-700">Youtube Login</h2>
        <div id="google-btn"></div>
      </div>
    </div>
  );
};
