import {
  CashDrawerIcon,
  HomeIcon,
  InboundIcon,
  ReportIcon,
  TransactionIcon,
  UniLink,
  UniTypography,
} from "@/components";
import { Box, Grid } from "@mui/material";
import { Nothing_You_Could_Do } from "next/font/google";
import { useRouter } from "next/router";

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBarModule: React.FC = () => {
  const router = useRouter();

  return (
    <Grid
      container
      flexDirection={`column`}
      p={4}
      sx={{
        boxShadow: "1px 1px 10px #D9D9D9",

        height: "100%",
        minHeight: "100vh",
      }}
      rowGap={3}
    >
      <Grid item display="flex" mx="auto" mb={2}>
        <h1 className={nothingYouCouldDo.className}>Cashew</h1>
        <h1 className={nothingYouCouldDo.className}>POS</h1>
      </Grid>
      <Grid item display="flex">
        <Box my="auto" mr={1}>
          <HomeIcon color="#333" size="24px" />
        </Box>
        <UniLink href="/">
          <UniTypography color={"#000"} variant="body1" text={`Dashboard`} />
        </UniLink>
      </Grid>
      <Grid item display="flex">
        <Box my="auto" mr={1}>
          <CashDrawerIcon color="#333" size="24px" />
        </Box>
        <UniLink href="/cash-drawer">
          <UniTypography color={"#000"} variant="body1" text={`Cash Drawer`} />
        </UniLink>
      </Grid>

      <Grid item display="flex">
        <Box my="auto" mr={1}>
          <InboundIcon color="#333" size="24px" />
        </Box>
        <UniLink href="/inbound">
          <UniTypography color={"#000"} variant="body1" text={`Inbound`} />
        </UniLink>
      </Grid>

      <Grid item display="flex">
        <Box my="auto" mr={1}>
          <TransactionIcon color="#333" size="24px" />
        </Box>
        <UniLink href="/transaction">
          <UniTypography color={"#000"} variant="body1" text={`Transaction`} />
        </UniLink>
      </Grid>

      <Grid item display="flex">
        <Box my="auto" mr={1}>
          <ReportIcon color="#333" size="24px" />
        </Box>
        <UniLink href="/z-reporting">
          <UniTypography color={"#000"} variant="body1" text={`Z-reporting`} />
        </UniLink>
      </Grid>
    </Grid>
  );
};

export default NavBarModule;
