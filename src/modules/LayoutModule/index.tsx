import { isAuth } from "@/state/atom";
import { Box } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import LoginModule from "../LoginModule";
import { useEffect, useState } from "react";

interface LayoutModuleProps {
  children: React.ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  const sessionAuth = useRecoilValue(isAuth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(sessionAuth);
  }, [sessionAuth]);

  if (!isLoggedIn) return <LoginModule />;

  return <Box>{children}</Box>;
};
export default LayoutModule;
