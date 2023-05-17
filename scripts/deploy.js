// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy()

  await upload.deployed();

  console.log("Deployed to",upload.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0