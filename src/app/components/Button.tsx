import { Button, createTheme, ThemeProvider } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";
import { OverridableStringUnion } from "@mui/types";
import { ButtonPropsColorOverrides } from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    success: green,
  },
});

export const CustomButton = ({
  children,
  color,
  className
}: { children: React.ReactNode;color: OverridableStringUnion<
    | "primary"
    | "secondary"
    | "success"
    | "inherit"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >,  className?: string
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color ? color : "primary"} className={className ? className : ""}>
        {children}
      </Button>
    </ThemeProvider>
  );
};
