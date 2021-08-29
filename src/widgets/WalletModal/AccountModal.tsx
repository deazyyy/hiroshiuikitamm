import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss} className="modalwallet">
    <img src="images/hiroshi/userimg.png" alt="user" className="useridimg" />
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" ,color:"rgba(47, 75, 96, 0.6)"}}
    >
      {account}
    </Text>
    <Flex mb="32px" justifyContent="space-between">
      <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px" style={{color:"rgba(47, 75, 96, 0.6)"}}> 
        View on BscScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        size="sm"
        variant="tertiary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
