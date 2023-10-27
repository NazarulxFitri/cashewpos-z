import Link, { LinkProps } from "next/link";

interface UniLinkProps extends LinkProps {
  children: React.ReactNode;
  openNewPage?: boolean;
}

const UniLink: React.FC<UniLinkProps> = ({
  children,
  openNewPage,
  ...props
}) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      target={openNewPage ? "_blank" : "_self"}
      {...props}
    >
      {children}
    </Link>
  );
};

export default UniLink;
