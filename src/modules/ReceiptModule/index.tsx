import { UniButton, UniTypography } from "@/components";
import useGetTransaction from "@/data/useGetTransaction";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";

const ReceiptModule = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const { data, isLoading } = useGetTransaction();
  const trxItem = data?.find((i) => i.id === id);

  return (
    <Box mt={4} justifyContent={"center"} id="yesy">
      <UniTypography variant="body1" sx={{ fontSize: "24px" }} text="Logo" />
      <Box>
        <Box>
          <UniTypography variant="h2" text={`Invoice no. - ${trxItem?.id}`} />
          <UniTypography variant="body1" text={`${trxItem?.date}`} />
          <UniTypography variant="body1" text={`${trxItem?.time}`} />
        </Box>

        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Remark</TableCell>
                  <TableCell sx={{ textAlign: "right" }}>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trxItem?.itemAdded?.map((i) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {i.sku} | {i.name} | {i.color}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell sx={{ textAlign: "right" }}>
                        RM{i.price}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell />
                  <TableCell sx={{ fontWeight: "700" }} colSpan={1}>
                    Subtotal
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "right" }}>
                    RM{trxItem?.totalAmount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell sx={{ fontWeight: "700" }} colSpan={1}>
                    Amount paid
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "right" }}>
                    RM{trxItem?.amountPaid}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell sx={{ fontWeight: "700" }} colSpan={1}>
                    Balance
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "right" }}>
                    RM{trxItem?.balance}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box mt={4}>
        <UniButton variant="outlined" onClick={() => window?.print()}>Print</UniButton>
      </Box>
    </Box>
  );
};

export default ReceiptModule;
