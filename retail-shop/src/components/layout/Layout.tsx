import { Outlet } from "react-router";
import "./Layout.css";
import { Header } from "../header/Header";

export const Layout = () => {
  return (
    <>
      <div className="h-screen">
        <div className="layout h-full grid grid-cols-[0.2fr_2fr] grid-rows-[0.1fr_2fr_0.1fr]">
          <header className="header justify-self-center self-center">
            <Header></Header>
          </header>
          <nav className="nav justify-self-center self-center">nav</nav>
          <main className="main justify-self-center self-center">
            <Outlet></Outlet>
          </main>
          <footer className="footer justify-self-center self-center">
            footer
          </footer>
        </div>
      </div>
    </>
  );
};
