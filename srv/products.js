const cds = require('@sap/cds');

module.exports = async (srv)=>{
    const { Products } = cds.entities;
    const products = await cds.connect.to("products");

    // Read Products
    srv.on("READ",Products, (req) => {
        return products.tx(req).run(req.query);
    });

    // Insert Products 
    srv.on("CREATE",Products, (req,res)=> {
        debugger;        
    });

}
