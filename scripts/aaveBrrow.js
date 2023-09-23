const { getWeth } = require("./getWeth")
async function main() {
    // the protoccal treats everything as an ERC20 token
    await getWeth()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
