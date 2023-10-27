import { CloseIcon, UniButton, UniTypography } from "@/components";
import usePostUpdateProduct from "@/data/usePostUpdateProduct";

import { Box, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ActionPopupProps {
  sku: string;
  name: string;
  price: number;
  color: string;
  category: string;
  qty: number;
  handleClickProp: () => void;
}

const ActionPopup: React.FC<ActionPopupProps> = ({
  sku,
  name,
  price,
  color,
  category,
  qty,
  handleClickProp,
}) => {
  const { action } = usePostUpdateProduct();
  const [incomingQty, setIncomingQty] = useState<number>(0);
  const [calcQty, setCalcQty] = useState<number>();

  useEffect(() => {
    setCalcQty(qty + incomingQty);
  }, [incomingQty]);

  const handleClick = async () => {
    await action(sku, calcQty!);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        background: "#FFF",
        borderRadius: 3,
        p: 3,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "fit-content",
        zIndex: 1,
      }}
    >
      <Image
        src={`/eyeglasses.webp`}
        alt="Cashew POS"
        width={300}
        height={120}
      />
      <Box
        sx={{
          position: "absolute",
          right: "12px",
          top: "12px",
          cursor: "pointer",
        }}
        onClick={handleClickProp}
      >
        <CloseIcon size="24px" />
      </Box>
      <Box>
        <UniTypography variant="body1" text={`Sku : <b>${sku}</b>`} />
        <UniTypography variant="body1" text={`Name : <b>${name}</b>`} />
        <UniTypography variant="body1" text={`Price : <b>RM ${price}</b>`} />
        <UniTypography variant="body1" text={`Color : <b>${color}</b>`} />
        <UniTypography variant="body1" text={`Category : <b>${category}</b>`} />
        <UniTypography variant="body1" text={`Current Qty : <b>${qty}</b>`} />
      </Box>

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
        <UniButton variant="outlined" onClick={handleClick}>
          Submit
        </UniButton>
      </Box>
    </Box>
  );
};

export default ActionPopup;
