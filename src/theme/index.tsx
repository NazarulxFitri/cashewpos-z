import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#333",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiFormLabel-root": {
            color: "#333",
            "&:active": {
              color: "#333",
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fbe3e8", // default
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5cbdb9", // focus
            },
            "&:hover fieldset": {
              borderColor: "#5cbdb9",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#ebf6f5",
          border: "1px solid #5cbdb9",
          color: "#333",
          "&:hover": {
            background: "#ebf6f5",
            border: "1px solid #5cbdb9",
          },
        },
      },
    },
  },
});
