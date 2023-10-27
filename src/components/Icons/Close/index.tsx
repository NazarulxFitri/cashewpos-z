import { SvgIcon } from "@mui/material";

interface CloseIconProps {
  color?: string;
  size?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color, size }) => {
  return (
    <SvgIcon viewBox="0 0 512 512" sx={{ fontSize: size || "inherit" }}>
      <path
        fill={color}
        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
