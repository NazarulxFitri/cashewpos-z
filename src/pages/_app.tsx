import "@/styles/globals.css";
import NavBarModule from "@/modules/NavBarModule";
import { Grid } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <NavBarModule />
        </Grid>
        <Grid item md={10} py={4} px={4}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  );
}
