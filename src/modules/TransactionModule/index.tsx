import { TransactionIcon, UniButton, UniTypography } from "@/components";
import useGetTransaction from "@/data/useGetTransaction";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TransactionModule = () => {
  const { data } = useGetTransaction();
  const [dateInput, setDateInput] = useState<string>();
  const [trxInput, setTrxInput] = useState<string>();

  const filteredData = !!dateInput
    ? data?.filter((i) => i.date === dateInput).reverse()
    : data.reverse();

  return (
    <Box sx={{ position: "relative", px: 4 }}>
      <Box sx={{ display: "flex", pt: 4 }}>
        <Box sx={{ my: "auto", mr: 1 }}>
          <TransactionIcon size="24px" />
        </Box>
        <UniTypography
          variant="body1"
          sx={{ fontSize: "24px" }}
          text="Transaction"
        />
      </Box>
      <Box mt={4}>
        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Transaction ID"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setTrxInput(e.target.value)}
            />
          </Grid>
        </Grid>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Transaction ID</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Total Amount</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Amount Paid</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Balance</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Date</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Time</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ textAlign: "center" }}>
            {filteredData?.map((i) => (
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>{i.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {i.totalAmount}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {i.amountPaid}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{i.balance}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{i.date}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{i.time}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Link href={`/receipt?id=${i.id}`} target="_blank">
                    <UniButton variant="outlined" sx={{ mx: 1 }}>
                      <UniTypography
                        variant="body1"
                        sx={{ textTransform: "capitalize", fontWeight: "300" }}
                        text="Detail"
                      />
                    </UniButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default TransactionModule;
