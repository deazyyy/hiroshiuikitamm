import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

const getDisabledStyles = ({ isLoading, theme }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp = (prop: keyof ButtonThemeVariant) => ({
  theme,
  variant = variants.PRIMARY,
}: ThemedProps) => {
  return theme.button[variant][prop];
};

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background: ${getButtonVariantProp("background")};
  border:  ${getButtonVariantProp("border")};
  border-radius: 20px;
  box-shadow: ${getButtonVariantProp("boxShadow")};
  color: ${getButtonVariantProp("color")};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: 14px 34px;
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  outline:none !important;
 

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    outline:none;
  }

  &:focus:not(:active) {
    border-color: none;
    outline:none;
  }

  &:active {
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

StyledButton.defaultProps = {
  fullWidth: false,
  type: "button",
};

export default StyledButton;
