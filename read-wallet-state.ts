import { mnemonicToWalletKey } from "@ton/crypto";
import { TonClient, WalletContractV4 } from "@ton/ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";

async function main() {
  const phrase =
    "absence mainstream pick indication loose astonishing pill selection glimpse vain strike theft heal orgy episode tape delay retire insert lay stay diet truth wave";
  const key = await mnemonicToWalletKey(phrase.split(" "));
  const wallet = WalletContractV4.create({
    workchain: 0,
    publicKey: key.publicKey,
  });

  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  const balance = await client.getBalance(wallet.address);
  console.log({ balance });

  console.log({ deployed: await client.isContractDeployed(wallet.address) });

  const walletContract = client.open(wallet);
  const seqno = await walletContract.getSeqno();
  console.log({ seqno });
}

main();
