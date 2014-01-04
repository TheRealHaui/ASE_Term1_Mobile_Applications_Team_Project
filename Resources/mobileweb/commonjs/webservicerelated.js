function getShareListAsynchronous() {
    var f = '"AAPL","Apple Inc.","540.98"';
    var i = f.split(",");
    var stock = Alloy.createModel("stock", {
        sign: i[0].replace('"', "").replace('"', ""),
        stockName: i[1].replace('"', "").replace('"', ""),
        price: i[2].replace('"', "").replace('"', "")
    });
    return stock;
}