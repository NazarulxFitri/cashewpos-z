import { Notification, UniTypography } from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NewItem from "./NewItem";
import ExistingItem from "./ExistingItem";

const InboundModule = () => {
  const [recentAction, setRecentAction] = useState("");
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setRecentAction(window?.sessionStorage?.getItem("recent") || "");
  }, []);

  function closeNotification() {
    window?.sessionStorage?.removeItem("recent");
    setRecentAction("");
  }
  return (
    <Box>
      {recentAction && (
        <Notification
          status="success"
          text={`Successfully ${recentAction}`}
          onClick={closeNotification}
        />
      )}
      <UniTypography variant="h1" text="Inbound" />
      <Box
        sx={{
          borderTop: "1px solid #EFEFEF",
          cursor: "pointer",

          width: "fit-content",
        }}
        display={"flex"}
        mt={4}
        columnGap={2}
      >
        <Box
          onClick={() => setTab(0)}
          sx={{ background: tab === 0 ? "#EFEFEF" : "inherit", p: 2 }}
        >
          <UniTypography
            sx={{ fontWeight: tab === 0 ? "700" : "300" }}
            text="Update Existing Item"
            variant="body1"
          />
        </Box>
        <Box
          onClick={() => setTab(1)}
          sx={{ background: tab === 1 ? "#EFEFEF" : "inherit", p: 2 }}
        >
          <UniTypography
            sx={{ fontWeight: tab === 1 ? "700" : "300" }}
            text="New Registration Item"
            variant="body1"
          />
        </Box>
      </Box>
      {tab === 0 ? <ExistingItem /> : <NewItem />}
    </Box>
  );
};

export default InboundModule;
