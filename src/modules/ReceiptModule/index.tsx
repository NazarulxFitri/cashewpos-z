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
    <Box my={4} justifyContent={"center"} id="yesy">
      <UniTypography variant="body1" sx={{ fontSize: "24px" }} text="The Eye Shop" />
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
                  <TableCell sx={{ textAlign: "right" }}>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trxItem?.itemAdded?.map((i, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell>
                        {i.sku} | {i.name} | {i.color}
                      </TableCell>
                      <TableCell sx={{ textAlign: "right" }}>
                        RM{i.price}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell sx={{ fontWeight: "700", borderBottom: "none" }}>
                    Subtotal
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    RM{trxItem?.subtotal}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "700", borderBottom: "none" }}
                    colSpan={1}
                  >
                    Discount
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    - RM{trxItem?.additionalDiscount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "700", borderBottom: "none" }}
                    colSpan={1}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    RM{trxItem?.total}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "700", borderBottom: "none" }}
                    colSpan={1}
                  >
                    Payment type
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    {trxItem?.paymentType}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "700", borderBottom: "none" }}
                    colSpan={1}
                  >
                    Amount paid
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    RM{trxItem?.amountPaid}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "700", borderBottom: "none" }}
                    colSpan={1}
                  >
                    Balance
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      textAlign: "right",
                      borderBottom: "none",
                    }}
                  >
                    RM{trxItem?.balance}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box mt={2} maxWidth={"400px"}>
        <UniTypography variant="body1" text={`Remark : ${trxItem?.remark}`} />
      </Box>
      <Box mt={4}>
        <Box
          sx={{
            background: "#5cbdb9",
            borderRadius: "24px",
            py: 1,
            px: 4,
            width: "fit-content",
          }}
          onClick={() => window?.print()}
        >
          <UniTypography variant="body1" text="Print" />
        </Box>
      </Box>
    </Box>
  );
};

export default ReceiptModule;
