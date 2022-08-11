import TopBar from "./components/TopBar/topbar.component";
import Home from "./pages/home/home.page";
import Settings from "./pages/settings/settings.page";
import Single from "./pages/single/single.page";
import Write from "./pages/write/write.page";

function App() {
  return (
    <>
      <TopBar/>
      {/* <Home /> */}
      <Settings />
    </>
  );
}

export default App;
