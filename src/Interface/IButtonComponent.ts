
import { OverridableStringUnion } from "@mui/types";
import { ButtonPropsColorOverrides } from "@mui/material/Button";

export interface IButtonComponent { children: React.ReactNode;color: OverridableStringUnion<
    | "primary"
    | "secondary"
    | "success"
    | "inherit"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >,  className?: string
}