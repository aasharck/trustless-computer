require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mynw: {
      // chainId: 22213,
      url: "https://tc-node-auto.regtest.trustless.computer",
      accounts:[process.env.PRIVATE_KEY, process.env.PRIVATE_KEY],
      timeout: 100_000,
    },
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/iSHKNe_jzKMjJvZb6UiZ5owt9VVMw9HE",
      accounts:[process.env.PRIVATE_KEY, process.env.PRIVATE_KEY],
    }
  }
};
