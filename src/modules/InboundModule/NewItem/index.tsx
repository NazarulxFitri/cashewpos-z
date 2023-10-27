import { UniButton } from "@/components";
import usePostAddProduct from "@/data/usePostAddProduct";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface NewItemProps {}

const NewItem: React.FC<NewItemProps> = () => {
  const { action } = usePostAddProduct();

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState<Number | string>("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const inputError = !sku || !name || !price || !color || !category || !image;

  async function handleClick() {
    if (!inputError) {
      await action(sku, name, price as number, category, color, image);
      window.sessionStorage.setItem("recent", `Created SKU ${sku}`);
      window.location.reload();
    }
  }

  return (
    <Box mt={8}>
      <Grid container mt={4} flexDirection={"column"} rowGap={2}>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Sku"
            InputLabelProps={{
              shrink: true,
            }}
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Price"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Color"
            InputLabelProps={{
              shrink: true,
            }}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Category"
            InputLabelProps={{
              shrink: true,
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "320px" }}
            variant="standard"
            label="Image"
            InputLabelProps={{
              shrink: true,
            }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <UniButton
          disabled={inputError}
          variant="outlined"
          onClick={handleClick}
        >
          Submit
        </UniButton>
      </Box>
    </Box>
  );
};

export default NewItem;
