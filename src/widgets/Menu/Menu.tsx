import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import PanelFooter from "./PanelFooter";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  // margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  margin-top: 64px;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    // margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    margin-left: auto;
    margin-right: auto;
    // max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  violaPriceUsd,
  linkviola,
  linkmelody,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(false);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} className="menutopdesk">
        <div className="menutopdeskinner">
          <div className="logoleft">
            <Logo
              isPushed={isPushed}
              togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
              isDark={isDark}
              href={"https://hiroshi.farm/"}
            />
            <div className="navigation">
              <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
              {
                // @ts-ignore}
                <label for="menu-icon"></label>
              }
              <div className="text">Menu</div>
              <nav className="navigation__nav">
                <ul className="navigation__list">
                  {/* <li className="navigation__item">
                    <a href="#" className="navigation__link">
                      melody farm
                    </a>
                  </li> */}
                  <li className="navigation__item">
                    <a href="#" className="navigation__link">
                      coingecko
                    </a>
                  </li>
                  <li className="navigation__item">
                    <a href="#" className="navigation__link">
                      coinmarketcap
                    </a>
                  </li>
                  <li className="navigation__item">
                    <a href="#" className="navigation__link">
                      roadmap
                    </a>
                  </li>
                  <li className="navigation__item">
                    <a href="#" className="navigation__link">
                      audited by hacken
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="menuconntouter">
            <div className="menulinkouter">
              <PanelFooter
                isPushed={isPushed}
                isDark={isDark}
                toggleTheme={toggleTheme}
                langs={langs}
                setLang={setLang}
                currentLang={currentLang}
                cakePriceUsd={cakePriceUsd}
                violaPriceUsd={violaPriceUsd}
                linkmelody={linkmelody}
                linkviola={linkviola}
                pushNav={setIsPushed}
                links={links}
                priceLink={priceLink}
              />
              <div className="dropdown">
                <input type="checkbox" id="dropdown" />
                {
                  // @ts-ignore}
                  <label className="dropdown__face" for="dropdown">
                    <div className="dropdown__text">
                      <img src="images/link.png" alt="Link" />
                    </div>

                    <div className="dropdown__arrow"></div>
                  </label>
                }

                <ul className="dropdown__items">
                  <li>
                    {" "}
                    <a target="_blank" aria-label="Instagram" href="https://instagram.com/kabosubsc">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" aria-label="Medium" href="https://medium.com/@KabosuToken">
                      <i className="fab fa-medium"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a target="_blank" aria-label="Telegram" href="https://t.me/kabosuchat">
                      <i className="fas fa-paper-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" aria-label="Twitter" href="https://twitter.com/KabosuOfficial">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="connectrowouter">
              

              <a href="https://exchange.hiroshi.farm/" className="nav_link outlineBtn exchangemenubtn">
                Exchange
              </a>
              <a href="https://hiroshi.farm/" className="nav_link outlineBtn backtofarmbtn">
                Back to Farm
              </a>
              <UserBlock account={account} login={login} logout={logout} />
            </div>

            {/* {profile && <Avatar profile={profile} />} */}
          </div>
        </div>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          violaPriceUsd={violaPriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      <div className="menutopdesk menufooter">
        <div className="menutopdeskinner">
          <div>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={"https://hiroshi.farm/"}
          />
          </div>
          <a href="https://inu-ecosystem.io/"><img src="images/hiroshi/ecosystem.png" alt="piano" className="ecosystemimg"/></a>
          <div className="socialIcons">
          <ul className="dropdown__items">
                  <li>
                    <a target="_blank" aria-label="Instagram" href="https://instagram.com/kabosubsc">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" aria-label="Medium" href="https://medium.com/@KabosuToken">
                      <i className="fab fa-medium"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" aria-label="Telegram" href="https://t.me/kabosuchat">
                      <i className="fas fa-paper-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" aria-label="Twitter" href="https://twitter.com/KabosuOfficial">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
