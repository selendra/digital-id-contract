require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const Identity = await hre.ethers.getContractFactory("Identity");
  const identity = await Identity.deploy();

  await identity.deployed();

  console.log("Greeter deployed to:", identity.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
