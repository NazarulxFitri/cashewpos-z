import { isAuth } from "@/state/atom";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import LoginModule from "../LoginModule";

interface LayoutModuleProps {
  children: React.ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isAuth);

  if (!isLoggedIn) return <LoginModule />;

  return <Box>{children}</Box>;
};
export default LayoutModule;
