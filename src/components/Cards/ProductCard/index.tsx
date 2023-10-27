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
  addToCart: Array<Object>;
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
        borderTop: "4px solid #7CB9E8",
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
            background: "#333",
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
        src={`/eyeglasses.webp`}
        alt="Cashew POS"
        width={300}
        height={200}
        style={{ width: "100%", height: "auto" }}
      />
      <Box>
        <Box display="flex">
          <Box>
            <UniTypography
              sx={{ fontWeight: "700" }}
              variant="body1"
              text={name}
            />
          </Box>
          <Box m="0 0 0 auto">
            <UniTypography
              sx={{ fontWeight: "700" }}
              variant="body1"
              text={`RM ${price}`}
            />
          </Box>
        </Box>
        <Box>
          <UniTypography variant="body1" text={`Color : ${color}`} />
          <UniTypography variant="body1" text={`Category : ${category}`} />
        </Box>

        <UniButton
          onClick={handleClick}
          sx={{ display: "flex", mt: 4, py: 2 }}
          fullWidth
          variant="outlined"
        >
          <CartIcon size="24px" />
          <Box ml={2}>
            <UniTypography variant="body1" text="Add to cart" />
          </Box>
        </UniButton>
      </Box>
    </Box>
  );
};

export default ProductCard;