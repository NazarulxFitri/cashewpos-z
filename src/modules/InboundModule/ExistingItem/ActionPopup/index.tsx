import { UniButton, UniTypography } from "@/components";
import usePostUpdateProduct from "@/data/usePostUpdateProduct";

import { Box, TextField } from "@mui/material";
import { useState } from "react";

interface ActionPopupProps {
  sku: string;
}

const ActionPopup: React.FC<ActionPopupProps> = ({ sku }) => {
  const { action } = usePostUpdateProduct();
  const [incomingQty, setIncomingQty] = useState<number>(0);

  const handleClick = async () => {
    await action(sku, incomingQty!);
    window.location.reload();
  };

  return (
    <Box>
      <Box mt={3}>
        <TextField
          fullWidth
          variant="outlined"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          label="Incoming qty"
          onChange={(e) => setIncomingQty(+e.target.value)}
        />
      </Box>
      <Box mt={3} textAlign={"center"}>
        <UniButton sx={{ py: 1}} fullWidth variant="outlined" onClick={handleClick}>
          <UniTypography
            text="Submit"
            variant="body1"
            sx={{ fontWeight: "300", textTransform: "capitalize" }}
          />
        </UniButton>
      </Box>
    </Box>
  );
};

export default ActionPopup;
