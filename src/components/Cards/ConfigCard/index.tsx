import { UniTypography } from "@/components";
import ActionPopup from "@/modules/InboundModule/ExistingItem/ActionPopup";
import { Box } from "@mui/material";
import Image from "next/image";

interface ConfigCardProps {
  sku: string;
  name: string;
  price: number;
  color: string;
  category: string;
  qty: number;
}

const ConfigCard: React.FC<ConfigCardProps> = ({ sku, name, price, qty }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        boxShadow: "1px 1px 10px #EFEFEF",
        cursor: "pointer",
        p: 2,
      }}
    >
      <Box display="flex" mb={1}>
        <Box my="auto">
          <UniTypography
            sx={{ fontWeight: "700" }}
            variant="body1"
            text={sku}
          />
        </Box>
        <Box
          m="0 0 0 auto"
          sx={{
            background: "#5cbdb9",
            borderRadius: "24px",
            color: "#FFF",
            p: 1,
            textAlign: "center",
            width: "56px",
          }}
        >
          <UniTypography
            sx={{ fontWeight: "700" }}
            variant="body1"
            text={`${qty}`}
          />
        </Box>
      </Box>
      <Box>
        <Image
          src={`/example-2.webp`}
          alt="Cashew POS"
          width={300}
          height={200}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box mt={1}>
        <UniTypography variant="body1" text={name} />
        <UniTypography variant="body1" text={`RM ${price}`} />
      </Box>
      <Box>
        <ActionPopup {...{ sku }} />
      </Box>
    </Box>
  );
};

export default ConfigCard;
