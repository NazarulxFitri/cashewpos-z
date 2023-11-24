import { UniButton, UniTypography } from "@/components";
import { isAuth } from "@/state/atom";
import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";

const LoginModule = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isAuth);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState(false);

  function handleClick() {
    if (
      username === process.env.NEXT_PUBLIC_APP_USERNAME &&
      password === process.env.NEXT_PUBLIC_APP_PASSWORD
    ) {
      setIsLoggedIn(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <Box
      mt={16}
      mx={"auto"}
      sx={{
        border: "1px solid #D9D9D9",
        maxWidth: "400px",
        width: "100%",
        p: 4,
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setUsername(e.target.value!)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            fullWidth
            label="Password"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setPassword(e.target.value!)}
          />
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <UniButton variant="outlined" onClick={handleClick}>
            <UniTypography variant="body1" text={`Login`} />
          </UniButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginModule;
