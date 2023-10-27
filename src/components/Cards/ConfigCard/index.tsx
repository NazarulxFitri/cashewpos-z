import { UniTypography } from "@/components";
import ActionPopup from "@/modules/InboundModule/ExistingItem/ActionPopup";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface ConfigCardProps {
  sku: string;
  name: string;
  price: number;
  color: string;
  category: string;
  qty: number;
}

const ConfigCard: React.FC<ConfigCardProps> = ({
  sku,
  name,
  price,
  color,
  category,
  qty,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    showPopup ? setShowPopup(false) : setShowPopup(true);
  }

  return (
    <Box>
      <Box
        sx={{
          borderRadius: "16px",
          boxShadow: "1px 1px 10px #EFEFEF",
          cursor: "pointer",
          p: 2,
        }}
        onClick={handleClick}
      >
        <Box>
          <Image
            src={`/eyeglasses.webp`}
            alt="Cashew POS"
            width={300}
            height={120}
          />
        </Box>
        <UniTypography variant="body1" text={sku} />
        <UniTypography variant="body1" text={name} />
        <UniTypography variant="body1" text={`RM ${price}`} />
        <UniTypography
          sx={{ background: "#EFEFEF", borderRadius: "16px", mt: 2, p: 2 }}
          variant="body1"
          text={`Stock Quantity : <b>${qty}</b>`}
        />
      </Box>
      {showPopup && (
        <Box
          sx={{
            position: "absolute",
            background: "rgba(0,0,0,0.8)",
            width: "100vw",
            height: "100vh",
            left: "0",
            top: "0",
          }}
        >
          <ActionPopup
            handleClickProp={handleClick}
            {...{ sku, name, price, color, category, qty }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ConfigCard;
