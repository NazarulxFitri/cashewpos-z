import "@/styles/globals.css";
import "animate.css";
import NavBarModule from "@/modules/NavBarModule";
import { Grid } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import LayoutModule from "@/modules/LayoutModule";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isReceipt = router?.pathname === "/receipt";

  return (
    <RecoilRoot>
      <LayoutModule>
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              boxShadow: "1px 1px 10px #EFEFEF",
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
    </RecoilRoot>
  );
}
