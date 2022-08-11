import TopBar from "./components/TopBar/topbar.component";
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import Settings from "./pages/settings/settings.page";
import Single from "./pages/single/single.page";
import Write from "./pages/write/write.page";

function App() {
  return (
    <>
      <TopBar/>
      {/* <Home /> */}
      <Login/>
    </>
  );
}

export default App;
