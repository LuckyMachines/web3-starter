import React, { useState } from "react";
import { Header, Button } from "semantic-ui-react";
import Web3 from "web3";

const ConnectWallet = (props) => {
  let provider;
  let accounts;
  const [connectWalletLoading, setConnectedWalletLoading] = useState(false);
  const connectWallet = async () => {
    setConnectedWalletLoading(true);
    try {
      if (window.ethereum) {
        ethereum.request({ method: "eth_requestAccounts" });
        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new Web3(window.ethereum);
        props.setProvider(provider);
        accounts = await provider.eth.getAccounts();
        props.setAccounts(accounts);
        props.setConnectedWallet(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
      } else {
        console.log("Wallet not connected, no window.ethereum");
      }
    } catch (err) {
      console.log(err.message);
    }
    setConnectedWalletLoading(false);
  };

  return (
    <div>
      <Header>
        <Button onClick={connectWallet} loading={connectWalletLoading}>
          Connect
        </Button>
      </Header>
      {props.children}
    </div>
  );
};

export default ConnectWallet;
