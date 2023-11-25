import "@/styles/globals.css";
import "animate.css";
import NavBarModule from "@/modules/NavBarModule";
import { Grid, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import LayoutModule from "@/modules/LayoutModule";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isReceipt = router?.pathname === "/receipt";

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
      <LayoutModule>
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              background: "#fbe3e8",
              display: isReceipt ? "none" : "block",
              overflow: "hidden",
            }}
          >
            <NavBarModule />
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </LayoutModule>
      </ThemeProvider>
    </RecoilRoot>
  );
}
