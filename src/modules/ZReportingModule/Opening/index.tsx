import { UniButton, UniTypography } from "@/components";
import usePostAddOpening from "@/data/usePostOpening";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

interface OpeningProps {
  
}

const Opening: React.FC<OpeningProps> = () => {
  const date = new Date();
  const [dateString, setDateString] = useState<string>();
  const [cashOnHand, setCashOnHand] = useState<number>();
  const { action } = usePostAddOpening();

  const handleClick = async () => {
    await action(dateString!, cashOnHand!);
    window?.location?.reload();
  };

  useEffect(() => {
    setDateString(date.toLocaleDateString());
  }, []);

  return (
    <Box>
      <UniTypography variant="body1" text={`${dateString} - Create opening`} />
      <Box sx={{ display: "flex", mt: 4 }} gap={2}>
        <TextField
          variant="standard"
          label="Cash on-hand"
          type="number"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setCashOnHand(+e.target.value)}
        />
        <UniButton variant="outlined" onClick={handleClick}>
          <UniTypography
            sx={{ cursor: "pointer" }}
            variant="body1"
            text={`Proceed`}
          />
        </UniButton>
      </Box>
    </Box>
  );
};

export default Opening;
