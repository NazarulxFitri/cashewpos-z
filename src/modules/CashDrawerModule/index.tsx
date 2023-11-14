import {
  CartIcon,
  CashDrawerIcon,
  ProductCard,
  UniButton,
  UniTypography,
} from "@/components";
import useGetProduct from "@/data/useGetProduct";
import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { useRecoilState } from "recoil";
import { recentActivity } from "@/state/atom";
import Link from "next/link";

const CashDrawerModule = () => {
  const { data } = useGetProduct();
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useRecoilState(recentActivity);

  const [addToCart, setAddToCart] = useState([]);

  const searchItem = data?.filter(
    (i) =>
      i.name.toLowerCase().includes(name.toLowerCase()) &&
      i.sku.toLowerCase().includes(sku.toLowerCase())
  );

  return (
    <Box sx={{ position: "relative" }}>
      {/* {!!message && (
        <Box
          sx={{
            background: "#66FF99",
            mb: 2,
            p: 2,
            display: "flex",
          }}
        >
          <UniTypography
            sx={{ height: "fit-content", my: "auto", mr: 2 }}
            variant="body1"
            text={`Transaction successfully stored. Invoice ID : ${message!}`}
          />
          <Link href={`/receipt?id=${message}`} target="_blank">
            Quick print
          </Link>
        </Box>
      )} */}

      <Box sx={{ display: "flex", pt: 4 }}>
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
        key={`${showCart}`}
         className={`animate__animated animate__fadeInRight`}
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
              width: "fit-content",
              px: 1,
              py: 1,
            }}
            onClick={() => (showCart ? setShowCart(false) : setShowCart(true))}
          >
            <CartIcon color={!showCart ? "#333" : "#7CB9E8"} size="24px" />
          </Box>

          <Cart itemAdded={addToCart} {...{ setAddToCart }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CashDrawerModule;
