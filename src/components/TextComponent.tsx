import { Typography } from "@mui/material";

export default function TextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: "0.7rem",
          sm: "1rem",
        },
      }}
    >
      {children}
    </Typography>
  );
}
