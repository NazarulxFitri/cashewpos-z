import ConfigCard from "@/components/Cards/ConfigCard";
import useGetProduct from "@/data/useGetProduct";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface ExistingItemProps {}

const ExistingItem: React.FC<ExistingItemProps> = () => {
  const { data } = useGetProduct();
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const searchItem = data.filter(
    (i) =>
      i.name.toLowerCase().includes(name.toLowerCase()) &&
      i.sku.toLowerCase().includes(sku.toLowerCase()) &&
      i.category.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <Box mt={8}>
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
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Category"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container mt={4} spacing={2}>
        {searchItem?.map((item) => {
          return (
            <Grid item xs={3} sx={{}}>
              <ConfigCard
                sku={item?.sku}
                name={item?.name}
                price={item?.price}
                color={item?.color}
                category={item?.category}
                qty={item?.qty}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ExistingItem;
