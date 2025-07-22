import { useSelector } from "react-redux";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const user = useSelector((state) => state.auth.user);

  // if (!user) {
  //   return <Login />;
  // }

  return <AppRoutes />;
}

export default App;
