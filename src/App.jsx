import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Login from "./components/auth/login";

function App() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <Header></Header>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
