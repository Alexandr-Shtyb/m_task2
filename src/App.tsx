import { Route, Routes } from "react-router-dom";
import { RoutesApp } from "./routes/routes";
import Auth from "./pages/Auth";
import Clients from "./pages/Clients";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <Routes>
      <Route path={RoutesApp.Auth} element={<Auth />} />
      <Route path={RoutesApp.Clients} element={<Clients />} />
      <Route path={RoutesApp.Edit} element={<Edit />} />
    </Routes>
  );
};

export default App;
