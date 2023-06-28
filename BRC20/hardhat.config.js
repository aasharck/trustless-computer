require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mynw: {
      url: "https://tc-node.trustless.computer",
      account: process.env.PRIVATE_KEY,
    },
  }
};
