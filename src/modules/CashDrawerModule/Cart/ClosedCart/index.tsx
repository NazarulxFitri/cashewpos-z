import { UniButton, UniTypography } from "@/components";
import { Box } from "@mui/material";

interface ClosedCartProps {}

const ClosedCart: React.FC<ClosedCartProps> = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <UniTypography
        variant="body1"
        text={`Please do Opening first to do sale transaction`}
      />
      <UniButton variant="outlined" sx={{ mt: 2 }} href="/z-reporting">
        <UniTypography variant="body1" text={`Create opening`} />
      </UniButton>
    </Box>
  );
};

export default ClosedCart;
