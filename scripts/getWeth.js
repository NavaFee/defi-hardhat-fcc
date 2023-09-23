const { getNamedAccounts, ethers } = require("hardhat")

const AMOUNT = ethers.parseEther("0.02")

async function getWeth() {
    const { deployer } = await getNamedAccounts()
    const singer = await ethers.getSigner(deployer)
    // call the "deposit" function on the weth contract
    // we need abi, contract address
    // sepolia testnet : WETH : 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9
    // mainnet : 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
        singer
    )
    console.log(iWeth)
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth }
