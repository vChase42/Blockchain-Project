import Moralis from "moralis/types";

Moralis.Cloud.define("getTransactions",async(request) => {
    const logger = Moralis.Cloud.getLogger();
    const address = request.params.address.toLowerCase();
    const squery = new Moralis.Query("_AddressSyncStatus");
    squery.equalTo("address",address);

    if(Number(queryCount) <= 0) {
        await Moralis.Cloud.run("watchEthAdress", {address: address, sync_historical: true}, {useMasterKey: true});
    }
    logger.info(await squery.count());

    
})