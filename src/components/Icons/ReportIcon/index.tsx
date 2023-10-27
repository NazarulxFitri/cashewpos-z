import { SvgIcon } from "@mui/material";

interface ReportIconProps {
  color?: string;
  size?: string;
}

const ReportIcon: React.FC<ReportIconProps> = ({ color, size }) => {
  return (
    <SvgIcon viewBox="0 0 384 512" sx={{ fontSize: size || "inherit" }}>
      <path
        fill={color}
        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
      />
    </SvgIcon>
  );
};

export default ReportIcon;
