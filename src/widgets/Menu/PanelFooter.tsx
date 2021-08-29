import React from "react";
import styled from "styled-components";

import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
// import { Heading, Card, CardBody, Button } from 'uikit'

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  violaPriceUsd,
  linkviola,
  linkmelody,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  // if (!isPushed) {
  // return (
  //   <Container>
  //     <IconButton variant="text" onClick={() => pushNav(true)}>
  //       <CogIcon />
  //     </IconButton>
  //   </Container>
  // );
  // }
  return (
    <Container>
      <SettingsEntry>
        <SocialEntry style={{ display: "flex", justifyContent: "center" }}>
          {(cakePriceUsd && violaPriceUsd) ? (
            <PriceLink>
              <div className="priceouter">
                <a href={linkviola} >
                  {/* <img
                    src="images/mozart/mozart-head-sm.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "4px" }}
                    alt="img"
                  /> */}
                  <Text color="textSubtle" bold><span>$</span>{`${cakePriceUsd.toFixed(3)}`}</Text>
                </a>
                {/* <a href={linkmelody}>
                  <img
                      src="images/mozart/mozart-head-viola.png"
                      width="30"
                      height="30"
                      style={{ marginRight: "4px" }}
                      alt="img"
                  />
                  <Text color="textSubtle" bold>
                  <span>$</span>{`${violaPriceUsd.toFixed(3)}`}
                  </Text>
                </a> */}
              </div>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}
        </SocialEntry>
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            // if (social.items) {
            //   return (
            //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
            //       {social.items.map((item) => (
            //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
            //           {item.label}
            //         </Link>
            //       ))}
            //     </Dropdown>
            //   );
            // }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
