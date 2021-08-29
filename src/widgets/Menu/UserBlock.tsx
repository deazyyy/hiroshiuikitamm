import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div className="connectBtn">
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          <img src="images/hiroshi/face.png" alt="connect"/>
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
