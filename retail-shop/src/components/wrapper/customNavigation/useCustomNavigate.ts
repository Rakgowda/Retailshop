import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  return (path: string, options?: { replace?: boolean }) => {
    navigate(path, options);
  };
};
