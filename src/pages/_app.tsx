import "@/styles/globals.css";
import NavBarModule from "@/modules/NavBarModule";
import { Grid } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [expandNav, setExpandNav] = useState(true);

  return (
    <>
      <Grid container>
        <Grid item xs={!expandNav ? 3 : 1} md={2} sx={{ overflow: "hidden", background: "blackgit"}}>
          <NavBarModule />
        </Grid>
        <Grid item xs={9} md={10} py={4} px={4}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  );
}
