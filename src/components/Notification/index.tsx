import { Box } from "@mui/material";
import { CloseIcon, UniButton, UniTypography } from "..";
import Link from "next/link";

interface NotificationProps {
  status: "success" | "warning" | "error";
  text: string;
  onClose: () => void;
  redirectCta?: string;
}

const Notification: React.FC<NotificationProps> = ({
  status,
  text,
  onClose,
  redirectCta,
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
        boxShadow: "1px 1px 10px #d9d9d9",
        display: "flex",
      }}
      mb={2}
      p={2}
    >
      <Box m={"auto 8px auto 0"}>
        <UniTypography variant="body1" text={text} />
      </Box>
      <Box>
        <Link href={redirectCta!} target="_blank">
          <UniButton variant="outlined">
            <UniTypography variant="body1" text="View receipt" />
          </UniButton>
        </Link>
      </Box>
      <Box sx={{ m: "auto 48px 0 auto" }} onClick={onClose}>
        <CloseIcon />
      </Box>
    </Box>
  );
};

export default Notification;
