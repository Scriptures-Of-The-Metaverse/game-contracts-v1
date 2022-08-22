import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    edge: {
      url: 'https://e0uriay20g:7dVh2dQluU6nZCJ65qzwaXPinShQ97G7BrXvBVXBatM@e0ses7keib-e0euxt7ine-rpc.de0-aws.kaleido.io/',
      accounts: {
        mnemonic: process.env.MN
      }
    }
  }
};

export default config;
