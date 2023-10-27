import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import { Montserrat } from "next/font/google";

interface UniTypographyProps extends TypographyProps {
  text: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const UniTypography: React.FC<UniTypographyProps> = ({ text, ...props }) => {
  return (
    <MuiTypography
      className={montserrat.className}
      sx={{
        "&.MuiTypography-h1": {
          fontSize: "32px",
          fontWeight: "500",
        },
        "&.MuiTypography-h2": {
          fontSize: "24px",
          fontWeight: "500",
        },
        "&.MuiTypography-subtitle1": {
          fontSize: "20px",
        },
        "&.MuiTypography-body1": {
          fontSize: "16px",
          fontWeight: "300",
        },
      }}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};

export default UniTypography;
