import { Button, createTheme, ThemeProvider } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";
import { IButtonComponent } from "@/Interface/IButtonComponent";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    success: green,
  },
});

export const ButtonComponent = ({
  children,
  color,
  className
}: IButtonComponent) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color ? color : "primary"} className={className ? className : ""}>
        {children}
      </Button>
    </ThemeProvider>
  );
};
