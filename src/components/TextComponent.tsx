import { Typography } from "@mui/material";

export default function TextComponent({
  children, color = "white"
}: {
  children: React.ReactNode;
  color?: string
}) {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: "0.7rem",
          sm: "1rem",
        },
        color: color,
        textWrap: "wrap",
      
      }}
    >
      {children}
    </Typography>
  );
}
