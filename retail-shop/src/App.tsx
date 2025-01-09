import "./App.css";
import { Layout } from "./components/layout/Layout";
import Authentication from "./pages/Authentication/Authentication";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home></Home>} />
      <Route path="/login" element={<Authentication></Authentication>} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
