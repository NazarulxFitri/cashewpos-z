import { CloseIcon, UniButton, UniTypography } from "@/components";
import { GetProductConfig } from "@/data/useGetProduct";
import usePostAddTransaction from "@/data/usePostAddTransaction";
import usePostUpdateProduct from "@/data/usePostUpdateProduct";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import useGetOpening from "@/data/useGetOpening";
import ClosedCart from "./ClosedCart";

interface CartProps {
  itemAdded: GetProductConfig[];
  setAddToCart: any;
}

interface ExistingSku {
  sku: string;
  qty: number;
}

const Cart: React.FC<CartProps> = ({ itemAdded, setAddToCart }) => {
  const [paymentType, setPaymentType] = useState("cash");
  const [amountPaid, setAmountPaid] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [remark, setRemark] = useState("");

  const { action } = usePostAddTransaction();
  const { action: updateProduct } = usePostUpdateProduct();

  const dateJs = new Date();
  const date = dateJs.toLocaleDateString();
  const time = dateJs.toLocaleTimeString();

  const { data: openingData } = useGetOpening();
  const isOpen = !!openingData?.find((i) => i.date === date && !i.hasClosed);

  let subtotal = 0;
  for (let i = 0; i < itemAdded.length; i++) {
    subtotal += itemAdded?.[i]?.price;
  }
  const total = +(subtotal - discount).toFixed(2);
  let balance = (amountPaid - total).toFixed(2);
  const disabled = amountPaid < total || !paymentType || itemAdded.length < 1;

  const handleClick = async () => {
    await action(
      date,
      time,
      paymentType,
      +subtotal.toFixed(2),
      amountPaid,
      balance,
      itemAdded,
      +discount.toFixed(2),
      remark,
      +total.toFixed(2)
    );

    let existingSku: ExistingSku[] = [];
    itemAdded?.forEach(async (i, idx) => {
      if (!existingSku.find((x) => x?.sku === i.sku)) {
        existingSku.push({ sku: i.sku, qty: i.qty });
      } else {
        const findSkuIdx = existingSku.findIndex((x) => x?.sku === i.sku);

        existingSku[findSkuIdx].qty += i.qty;
      }

      existingSku?.forEach(async (i) => {
        await updateProduct(i.sku, -i.qty);
      });
    });

    window?.location?.reload();
  };

  const removeItem = (selectedId: number) => {
    setAddToCart((prevItem: Array<Object>) =>
      prevItem.filter((i, idx) => selectedId !== idx)
    );
  };

  if (!isOpen) return <ClosedCart />;

  return (
    <Box>
      <UniTypography variant="body1" sx={{ fontSize: "24px" }} text="Cart" />

      <Box sx={{ borderTop: "1px solid #EFEFEF", mt: 4 }}>
        {itemAdded?.map((i, idx) => {
          return (
            <Box
              key={idx}
              id={`${idx}`}
              sx={{
                borderBottom: "1px solid #EFEFEF",
                display: "flex",
                py: 1,
              }}
              gap={2}
            >
              <Box
                onClick={() => {
                  removeItem(idx);
                }}
              >
                <CloseIcon />
              </Box>
              <Box width={"100px"}>
                <UniTypography variant="body1" text={i.sku!} />
              </Box>
              <Box>
                <UniTypography variant="body1" text={i.name!} />
              </Box>
              <Box sx={{ m: "0 0 0 auto" }}>
                <UniTypography variant="body1" text={`RM${i.price!}`} />
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box>
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          type="number"
          label="Add discount (RM)"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setDiscount(+e.target.value)}
        />
      </Box>

      <Box sx={{ width: "fit-content", m: "24px 0 0 auto" }}>
        <UniTypography
          variant="h2"
          text={`RM${(+subtotal! - +discount).toFixed(2)}`}
        />
      </Box>

      <Grid container textAlign={"center"} spacing={2} mt={2}>
        <Grid item xs={4}>
          <UniButton
            fullWidth
            sx={{
              py: 1,
              background: paymentType === "cash" ? "#5cbdb9" : "inherit",
            }}
            onClick={() => setPaymentType("cash")}
          >
            <UniTypography variant="body1" text={`Cash`} />
          </UniButton>
        </Grid>
        <Grid item xs={4}>
          <UniButton
            fullWidth
            sx={{
              py: 1,
              background: paymentType === "card" ? "#5cbdb9" : "inherit",
            }}
            onClick={() => setPaymentType("card")}
          >
            <UniTypography variant="body1" text={`Card`} />
          </UniButton>
        </Grid>
        <Grid item xs={4}>
          <UniButton
            fullWidth
            sx={{
              py: 1,
              background: paymentType === "ewallet" ? "#5cbdb9" : "inherit",
            }}
            onClick={() => setPaymentType("ewallet")}
          >
            <UniTypography variant="body1" text={`eWallet`} />
          </UniButton>
        </Grid>
      </Grid>

      <Box mt={4}>
        <TextField
          fullWidth
          label="Remark"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setRemark(e.target.value!)}
        />
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          type="number"
          label="Total paid (RM)"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setAmountPaid(+e.target.value)}
        />
      </Box>
      <Box mt={2} textAlign={"right"}>
        {!!amountPaid && (
          <UniTypography
            sx={{ color: amountPaid < total ? "red" : "inherit" }}
            variant="subtitle1"
            text={`Balance : RM ${balance}`}
          />
        )}
      </Box>

      <Box mt={4}>
        <UniButton
          fullWidth
          variant="outlined"
          sx={{ py: 2 }}
          disabled={disabled}
          onClick={handleClick}
        >
          Proceed
        </UniButton>
      </Box>
    </Box>
  );
};

export default Cart;
