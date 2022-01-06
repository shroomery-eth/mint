import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  font-family: reagan !important;
`;

const WalletButton = styled(WalletDialogButton)`
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 17px !important;
  font-family: synthemesc !important;
`;

export function ConnectWallet() {
  return (
    <Container>
      <WalletButton>Connect Wallet</WalletButton>
    </Container>
  );
}
