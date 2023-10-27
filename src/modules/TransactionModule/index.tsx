import { UniButton, UniTypography } from "@/components";
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

const TransactionModule = () => {
  const { data } = useGetTransaction();

  return (
    <Box>
      <UniTypography variant="h1" text="Transaction" />
      <Box mt={8}>
        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Date"
              InputLabelProps={{
                shrink: true,
              }}
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
            />
          </Grid>
        </Grid>
        <Table>
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
            {data?.map((i) => (
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
                  <UniButton variant="outlined" sx={{ mx: 1 }}>
                    Detail
                  </UniButton>
                  <UniButton variant="outlined" sx={{ mx: 1 }}>
                    Quick Print
                  </UniButton>
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
