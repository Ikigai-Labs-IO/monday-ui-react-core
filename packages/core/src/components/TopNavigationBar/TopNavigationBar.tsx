import cx from "classnames";
import Flex from "../Flex/Flex";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal";
import Menu from "../Menu/Menu/Menu";
import Avatar from "../Avatar/Avatar";
import Dialog from "../Dialog/Dialog";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { withStaticProps } from "../../types";
import MenuItem from "../Menu/MenuItem/MenuItem";
import styles from "./TopNavigationBar.module.scss";
import MenuDivider from "../Menu/MenuDivider/MenuDivider";
import React, { ReactNode, useState, useRef } from "react";
import ModalContent from "../Modal/ModalContent/ModalContent";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";

enum States {
  PROJECT = "project",
  ORGANIZATION = "organization",
  BOTH = "both"
}

export interface NavbarProps {
  children: ReactNode;
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  return <nav className={`${styles.navbar} ${className}`}>{children}</nav>;
};

export interface NavbarContainerProps {
  children: ReactNode;
  className?: string;
}
export const NavbarContainer: React.FC<NavbarContainerProps> = ({
  children,
  className,
}) => <div className={`${styles.navContainer} ${className}`}>{children}</div>;

export interface NavListProps {
  children: ReactNode;
  className?: string;
}
export const NavList: React.FC<NavListProps> = ({ children, className }) => (
  <ul className={`${styles.itemList} ${className}`}>{children}</ul>
);

export interface NavLinkProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  link: string;
}
export const NavLink: React.FC<NavLinkProps> = ({
  children,
  className,
  link,
  active,
}) => (
  <li>
    <a
      href={link}
      className={active ? `${styles.navLink} ${styles.active}` : styles.navLink}
    >
      {children}
    </a>
  </li>
);

export interface ProfileContainerProps {
  children: ReactNode;
  className?: string;
}
export const ProfileContainer: React.FC<ProfileContainerProps> = ({
  children,
  className,
}) => <div className={`${styles.profile} ${className}`}>{children}</div>;

export interface DialogContentContainerStyledProps {
  children: ReactNode;
  className?: string;
}
export const DialogContentContainerStyled: React.FC<
  DialogContentContainerStyledProps
> = ({ children, className }) => (
  <DialogContentContainer className={`${styles.dialog} ${className}`}>
    {children}
  </DialogContentContainer>
);

export interface UserInfoProps {
  children: ReactNode;
  className?: string;
}
export const UserInfo: React.FC<UserInfoProps> = ({ children, className }) => (
  <div className={`${styles.userInfo} ${className}`}>{children}</div>
);

export interface SpanStyledProps {
  children: ReactNode;
  className?: string;
  styleClass?: string;
}

export const SpanStyled: React.FC<SpanStyledProps> = ({
  children,
  className = "",
  styleClass = "",
}) => {
  const combinedClassName = `${styles[styleClass] || ""} ${className}`.trim();
  return <span className={combinedClassName}>{children}</span>;
};

export interface TopNavigationBarProps {
  children: ReactNode;
  isTrial?: boolean;
  state?: States;
}

export const TopNavigationBar: React.FC<TopNavigationBarProps> & { states?: typeof States } = ({
  isTrial = false,
  state = States.PROJECT
}) => {

  const [showTrialModal, setShowTrialModal] = useState(false);
  const openTrialModalButtonRef = useRef(null);

  const openModal = () => {
    setShowTrialModal(true);
  };

  const closeModal = () => {
    setShowTrialModal(false);
  };
  return (
    <Navbar>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Flex justify={Flex.justify.SPACE_BETWEEN}>
          <NavbarContainer>
            <NavList>
              <NavLink link="">
                <div style={{ borderRadius: "var(--border-radius-small)", width: "31px", height: "31px", background: "#cdeaf7", padding: "5px" }}>
                  <Icon isCustomIcon iconName="hammer" viewBox="0 0 22 22" iconSize={21} />
                </div>
                <span>Build</span>
                <Icon isCustomIcon iconName="caretDown" viewBox="0 -2 27 30" />
              </NavLink>
              <Divider className={styles.vertical} direction={Divider.directions.VERTICAL} />
              <NavLink link="">
                {(state === States.PROJECT || state === States.BOTH) &&
                  <>
                    <img src={require("./assets/Project 1.png")} style={{ borderRadius: "var(--border-radius-small)", width: "31px", height: "31px" }} alt="Project 1" />
                    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START}>
                      {state === States.BOTH &&
                        <div style={{ fontSize: "11px", fontWeight: "500", lineHeight: "15px", color: "#666666" }}>Clooney Construction</div>
                      }
                      <div>
                        <span>400 Beale</span>
                        <Icon isCustomIcon iconName="group" iconSize={18} viewBox="0 -5 18 20" />
                        <Icon isCustomIcon iconName="caretDown" viewBox="0 -7 27 30" />
                      </div>
                    </Flex>
                  </>
                }
                {(state === States.ORGANIZATION) &&
                  <>
                    <img src={require("./assets/Clooney.png")} style={{ borderRadius: "var(--border-radius-small)", width: "32px", height: "32px" }} alt="Organization" />
                    <div>
                      <span>Clooney Construction</span>
                      <Icon isCustomIcon iconName="caretDown" viewBox="0 -7 27 30" />
                    </div>
                  </>
                }
              </NavLink>
            </NavList>
          </NavbarContainer>
          {isTrial &&
            <>
              <Button style={{ marginRight: "var(--spacing-medium)" }} onClick={openModal} size={Button.sizes.XS}>
                Trial information
              </Button>
              <Modal id="story-book-modal" width={"600px"} title="Trial information" triggerElement={openTrialModalButtonRef.current} show={showTrialModal} onClose={closeModal} contentSpacing>
                <ModalContent>
                  <div>
                    <Flex gap={68} style={{ border: "1px solid var(--ui-border-color)", borderRadius: "var(--border-radius-small)" }}>
                      <p style={{ fontSize: "12px", fontWeight: "500", lineHeight: "16px", display: "flex", flexDirection: "column", gap: "var(--spacing-xs)", margin: "28px var(--spacing-medium)" }}>
                        <span style={{ fontWeight: "700" }}>Autodesk Construction Cloud</span>
                        <span>
                          Connects workflows, teams and data at every stage of construction to reduce risk, maximize efficiency, and increase profits.{" "}
                          <span style={{ color: "var(--link-color)" }}>Learn more</span>
                        </span>
                      </p>
                      <img src={require("./assets/illustration_building_construction.svg")} style={{ width: "96px", height: "96px", marginRight: "48px" }} alt="Illustration" />
                    </Flex>
                    <Flex gap={68} style={{ color: "var(--Charcoal-900)", borderRadius: "var(--border-radius-small)", padding: "28px var(--spacing-medium)" }}>
                      <p style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", display: "flex", flexDirection: "column", gap: "var(--spacing-small)" }}>
                        <span style={{ fontWeight: "700" }}>My trials</span>
                        <span>
                          Autodesk Build<br />
                          <span style={{ color: "#666666" }}>You have 30 days remaining on your trial</span>
                        </span>
                      </p>
                      <Button size={Button.sizes.XS}>View buying options</Button>
                    </Flex>
                    <Flex style={{ margin: "0 var(--spacing-medium)" }}>
                      <Divider />
                    </Flex>
                    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={24} style={{ margin: "var(--spacing-large) var(--spacing-medium) 10px" }}>
                      <a href="" style={{ font: "var(--font-text2-bold)" }}>Opt out of seeing this banner again</a>
                      <a href="" style={{ font: "var(--font-text2-bold)", display: "flex", gap: "var(--spacing-small)", alignItems: "center" }}>
                        Help center
                        <Icon isCustomIcon iconName="openLink" viewBox="0 0 17 17" />
                      </a>
                    </Flex>
                  </div>
                </ModalContent>
              </Modal>
            </>
          }
          <ProfileContainer>
            <Dialog
              zIndex={1000}
              showTrigger={[Dialog.hideShowTriggers.CLICK]}
              hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
              content={
                <DialogContentContainerStyled>
                  <UserInfo>
                    <span
                    >
                      <Avatar
                        size={Avatar.sizes.LARGE}
                        withoutTooltip={true}
                        src={require("../Avatar/__stories__/assets/person3.png")}
                        type={Avatar.types.IMG}
                        ariaLabel="Hadas Fahri"
                      />
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <SpanStyled styleClass="username">James Taylor</SpanStyled>
                      <SpanStyled styleClass="email">James@IkigaiLabs.com</SpanStyled>
                    </div>
                  </UserInfo>
                  <Menu size={Menu.sizes.SMALL}>
                    <MenuItem title="Personal Settings" />
                    <MenuItem title="Organization Settings" />
                    <MenuItem title="Theme Settings">
                      <Menu>
                        <MenuItem title="Light Theme" />
                        <MenuItem title="Dark Theme" />
                      </Menu>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem className={styles.logout} title="Sign out" />
                  </Menu>
                </DialogContentContainerStyled>
              }
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "var(--spacing-small)",
                  color: "var(--Charcoal-900)"
                }}
              >
                <Icon isCustomIcon iconName="helpFilled" iconSize={16} viewBox="0 0 15 15" />
                <Divider direction={Divider.directions.VERTICAL} />
                <Avatar
                  size={Avatar.sizes.MEDIUM}
                  withoutTooltip={true}
                  src={require("../Avatar/__stories__/assets/person3.png")}
                  type={Avatar.types.IMG}
                  ariaLabel={"Hadas Fahri"}
                  className={styles.navbarAvatar}
                />
                <SpanStyled styleClass="username" className={cx({ display: "flex", gap: "var(--spacing-small)" })}>
                  <span>James Taylor</span>
                  <Icon isCustomIcon iconName="caretDown" viewBox="0 -5 27 30" />
                </SpanStyled>
              </div>
            </Dialog>
          </ProfileContainer>
        </Flex>
        <Divider />
      </div>
    </Navbar>
  );
};

export default withStaticProps(TopNavigationBar, {
  states: States
});
