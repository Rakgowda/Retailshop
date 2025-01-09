import { useEffect } from "react";
import { useCustomNavigate } from "../../components/wrapper/customNavigation/useCustomNavigate";
import { NavLink } from "react-router";

const Home = () => {
  const navigate = useCustomNavigate();
  useEffect(() => {
    navigate("/login");
    return () => {};
  }, []);

  return (
    <>
      <div>
        Home{" "}
      </div>
    </>
  );
};

export default Home;
