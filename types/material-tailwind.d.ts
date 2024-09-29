// material-tailwind.d.ts
import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
  export interface ButtonGroupProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface AvatarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ListItemSuffixProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ListProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ListItemProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface ListItemPrefixProps extends EventCapture {
    placeholder?: unknown;
  }
}