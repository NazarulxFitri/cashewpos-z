import { SvgIcon } from "@mui/material";

interface InboundIconProps {
  color?: string;
  size?: string;
}

const InboundIcon: React.FC<InboundIconProps> = ({ color, size }) => {
  return (
    <SvgIcon viewBox="0 0 448 512" sx={{ fontSize: size || "inherit" }}>
      <path
        fill={color}
        d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"
      />
    </SvgIcon>
  );
};

export default InboundIcon;
