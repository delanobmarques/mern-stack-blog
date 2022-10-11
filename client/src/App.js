import TopBar from "./components/TopBar/topbar.component";
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import Settings from "./pages/settings/settings.page";
import Single from "./pages/single/single.page";
import Write from "./pages/write/write.page";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route exact path={'/'} element={ <Home /> } />
        {/* <Route path={'/register'} element={ user ? <Home/> : <Register /> } /> */}
        <Route path={'/admin-login'} element={ user ? <Home/> : <Login /> } />
        <Route path={'/write'} element={ user ? <Write /> : <Register/> } />
        <Route path={'/settings'} element={ user? <Settings /> : <Register/> } />
        <Route path={'/post/:postId'} element={<Single />} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
