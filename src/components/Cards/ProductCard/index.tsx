import { CartIcon, UniButton, UniTypography } from "@/components";
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductCardProps {
  sku: string;
  name: string;
  price: number;
  color: string;
  category: string;
  qty: number;
  addToCart: {
    category: string;
    color: string;
    name: string;
    price: number;
    qty: number;
    sku: string;
  }[];
  setAddToCart: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  sku,
  name,
  price,
  color,
  category,
  qty,
  addToCart,
  setAddToCart,
}) => {
  const [currQty, setCurrQty] = useState(qty);
  const skuInCart = addToCart?.filter((i) => i.sku === sku).length;

  function handleClick() {
    setAddToCart((prevArray: any) => [
      ...prevArray,
      {
        sku,
        name,
        price,
        color,
        category,
        qty: 1,
      },
    ]);
  }

  useEffect(() => {
    setCurrQty(qty - skuInCart);
  }, [handleClick]);

  return (
    <Box
      sx={{
        boxShadow: "1px 1px 10px #D9D9D9",
        p: 2,
        borderRadius: 4,
        position: "relative",
      }}
    >
      <Box display="flex">
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
            text={`${currQty}`}
          />
        </Box>
      </Box>
      <Image
        src={`/example-2.webp`}
        alt="Cashew POS"
        width={300}
        height={200}
        style={{ width: "100%", height: "auto", marginTop: "8px" }}
      />
      <Box mt={1}>
        <Box>
          <UniTypography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="body1"
            text={name}
          />
        </Box>
        <Box m="0 0 0 auto">
          <UniTypography
            variant="body1"
            text={`RM ${price}`}
          />
        </Box>

        <UniButton
          onClick={handleClick}
          sx={{ display: "flex", mt: 1, py: 2 }}
          fullWidth
          variant="outlined"
        >
          <CartIcon size="24px" />
          <UniTypography
            sx={{ fontWeight: "300", ml: 1, textTransform: "capitalize" }}
            variant="body1"
            text="Add to cart"
          />
        </UniButton>
      </Box>
    </Box>
  );
};

export default ProductCard;
