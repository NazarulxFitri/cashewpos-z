import { InboundIcon, Notification, UniTypography } from "@/components";
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
    <Box sx={{ position: "relative", px: 4 }}>
      {recentAction && (
        <Notification
          status="success"
          text={`Successfully ${recentAction}`}
          onClose={closeNotification}
        />
      )}
      
      <Box sx={{ display: "flex", pt: 4 }}>
        <Box sx={{ my: "auto", mr: 1 }}>
          <InboundIcon size="24px" />
        </Box>
        <UniTypography
          variant="body1"
          sx={{ fontSize: "24px" }}
          text="Inbound"
        />
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #ebf6f5",
          cursor: "pointer",
          width: "fit-content",
        }}
        display={"flex"}
        mt={4}
        columnGap={2}
      >
        <Box
          onClick={() => setTab(0)}
          sx={{ background: tab === 0 ? "#ebf6f5" : "inherit", p: 2 }}
        >
          <UniTypography
            text="Update Existing Item"
            variant="body1"
          />
        </Box>
        <Box
          onClick={() => setTab(1)}
          sx={{ background: tab === 1 ? "#ebf6f5" : "inherit", p: 2 }}
        >
          <UniTypography
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
