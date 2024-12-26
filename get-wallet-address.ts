import { mnemonicToPrivateKey, mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";

async function main() {
  const mnemonic =
    "large manufacturer coffee objective empirical meal complication secular wash past sniff smash migration dream pair enhance harvest admit skin car week mechanism rung grimace";
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({
    publicKey: key.publicKey,
    workchain: 0,
  });

  console.log({ address: wallet.address.toString({ testOnly: true }) });
  console.log("Workchain: ", wallet.address.workChain);
}

main();
