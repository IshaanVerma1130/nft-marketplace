require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = process.env.PROJECT_ID;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
