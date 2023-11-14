import "@/styles/globals.css";
import "animate.css";
import NavBarModule from "@/modules/NavBarModule";
import { Grid } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [expandNav, setExpandNav] = useState(true);
  const isReceipt = router?.pathname === "/receipt";

  return (
    <RecoilRoot>
      <Grid container>
        <Grid
          item
          xs={!expandNav ? 3 : 1}
          md={2}
          sx={{ display: isReceipt ? "none" : "block", overflow: "hidden" }}
        >
          <NavBarModule />
        </Grid>
        <Grid item xs={isReceipt ? 12 : 9} md={isReceipt ? 12 : 10}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </RecoilRoot>
  );
}
