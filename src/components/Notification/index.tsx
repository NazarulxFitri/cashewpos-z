import { Box } from "@mui/material";
import { CloseIcon, UniTypography } from "..";

interface NotificationProps {
  status: "success" | "warning" | "error";
  text: string;
  onClick: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  status,
  text,
  onClick,
}) => {
  return (
    <Box
      sx={{
        background:
          status === "success"
            ? "#90EE90"
            : status === "error"
            ? "#ff0e0e"
            : "#EED202",
        borderRadius: "16px",
        boxShadow: "1px 1px 10px #d9d9d9",
        display: "flex",
      }}
      mb={2}
      p={2}
    >
      <Box>
        <UniTypography variant="body1" text={text} />
      </Box>
      <Box sx={{ m: "auto 0 0 auto" }} onClick={onClick}>
        <CloseIcon />
      </Box>
    </Box>
  );
};

export default Notification;
