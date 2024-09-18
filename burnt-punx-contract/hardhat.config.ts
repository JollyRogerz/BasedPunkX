import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATEKEY || '']
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATEKEY || '']
    },
  },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: "USD",
  // },
  // etherscan: {
  //   apiKey: {
  //     testnet: 'no-api-key-needed',
  //     mainnet: 'no-api-key-needed'
  //   },
  //   customChains: [
  //     {
  //       network: "testnet",
  //       chainId: 4201,
  //       urls: {
  //         apiURL: "https://api.explorer.execution.testnet.lukso.network/api",
  //         browserURL: "https://explorer.execution.testnet.lukso.network",
  //       },
  //     },
  //     {
  //       network: 'mainnet',
  //       chainId: 42,
  //       urls: {
  //         apiURL: 'https://api.explorer.execution.mainnet.lukso.network/api',
  //         browserURL: 'https://explorer.execution.mainnet.lukso.network',
  //       },
  //     },
  //   ],
  // },
};

export default config;