require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "ethlocal",
  networks: {
    ethlocal: {
      url: "http://0.0.0.0:8545",
      chainId: 2025, // ✅ Chain ID personalizado para Ethereum privado
      accounts: [
        "0x619f8673a25be4109a0338808f69f398701f6bfead134a0828713262dd08bcb8"
      ]
    },
  },
  solidity: "0.8.20",
};
