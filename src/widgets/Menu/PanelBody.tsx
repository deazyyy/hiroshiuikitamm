import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  isDark:boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;


const PanelBody: React.FC<Props> = ({ isDark, isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      
      <img width="160" height="51" src={isDark ? 'images/hiroshi/logo.png' : 'images/hiroshi/logo.png'} alt="navimg" className="navlogo"/>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined ;

        if (entry.items) {

       
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={`${calloutClass} menulinkouter`}
            >             
            
              {isPushed &&
                entry.items.map((item) => (
           
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick} className="navaccordion">
                    
                    <MenuLink target={item.external ? "_blank" : ""}  href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={`${calloutClass} menulinkouter`}>
            
            <MenuLink target={entry.external ? "_blank" : ""}   href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              <div className="btn_shiny"/>
            </MenuLink>
            
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
