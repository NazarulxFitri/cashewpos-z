import {
  CartIcon,
  CashDrawerIcon,
  ProductCard,
  UniTypography,
} from "@/components";
import useGetProduct from "@/data/useGetProduct";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Cart from "./Cart";

const CashDrawerModule = () => {
  const { data } = useGetProduct();
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [showCart, setShowCart] = useState(false);

  const [addToCart, setAddToCart] = useState([]);

  const searchItem = data?.filter(
    (i) =>
      i.name.toLowerCase().includes(name.toLowerCase()) &&
      i.sku.toLowerCase().includes(sku.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ my: "auto", mr: 1 }}>
          <CashDrawerIcon size="24px" />
        </Box>
        <UniTypography
          variant="body1"
          sx={{ fontSize: "24px" }}
          text="Cash Drawer"
        />
      </Box>
      <Box mt={4}>
        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Sku"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setSku(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container mt={4} spacing={2}>
          {searchItem?.map((item) => {
            return (
              <Grid item xs={3} sx={{}}>
                <ProductCard
                  sku={item?.sku}
                  name={item?.name}
                  price={item?.price}
                  color={item?.color}
                  category={item?.category}
                  qty={item?.qty}
                  {...{ addToCart, setAddToCart }}
                />
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            background: "#FFF",
            boxShadow: "1px 1px 10px #D9D9D9",
            p: 4,
            position: "absolute",
            right: showCart ? "0" : "-458px",
            top: "0",
            width: "480px",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "-20px",
              background: "#FFF",

              width: "fit-content",
              px: 1,
              py: 1,
            }}
            onClick={() => (showCart ? setShowCart(false) : setShowCart(true))}
          >
            <CartIcon size="24px" />
          </Box>

          <Cart itemAdded={addToCart} {...{ setAddToCart }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CashDrawerModule;
