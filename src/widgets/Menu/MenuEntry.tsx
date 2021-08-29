import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ isActive, theme }) => (isActive ?  "#8dc971":  "transparent")};;
  color: ${({ isActive, theme }) => (isActive ?  "#fff" :  "#57565c")};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};
  border-radius:12px;
  margin: 0px 26px 6px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ isActive, theme }) => (isActive ?  "#fff" :  "#57565c")};
  }

  svg {
    fill:  ${({ isActive, theme }) => (isActive ?  "#fff":  "#8e8d95")};
    width:18px
  }

  &:hover {
    background-color:#8dc971;
    color:#fff;
    svg {
      fill:  #fff;
    }
    a {
      color:#fff;
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
