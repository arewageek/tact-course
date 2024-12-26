import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";

const phrase =
  "absence mainstream pick indication loose astonishing pill selection glimpse vain strike theft heal orgy episode tape delay retire insert lay stay diet truth wave";

class Assessments {
  async generateWallet(mnemonic: string) {
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({
      workchain: 0,
      publicKey: key.publicKey,
    });

    return { address: wallet.address, workchain: wallet.workchain };
  }
}

const assessment = new Assessments();

const wallet = await assessment.generateWallet(phrase);
console.log({ wallet });
