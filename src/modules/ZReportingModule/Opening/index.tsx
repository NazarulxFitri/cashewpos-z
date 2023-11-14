import usePostAddOpening from "@/data/usePostOpening";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Opening = () => {
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
      <h1>Opening</h1>
      <p>Do opening for {dateString}</p>
      <TextField
        placeholder="Cash on-hand"
        variant="outlined"
        type="number"
        onChange={(e) => setCashOnHand(+e.target.value)}
      />
      <Box mt={2} onClick={handleClick}>
        Proceed
      </Box>
    </Box>
  );
};

export default Opening;
