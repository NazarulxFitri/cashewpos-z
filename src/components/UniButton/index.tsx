import { Button, ButtonProps } from "@mui/material";

interface UniButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const UniButton: React.FC<UniButtonProps> = ({ children, ...props }) => {
  return (
  <Button {...props}>
      {children}
    </Button>
  );
};

export default UniButton;
