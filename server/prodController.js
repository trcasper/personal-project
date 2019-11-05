
module.exports = {

    getProducts: (req, res) => {
        let db = req.app.get('db');
        db.get_all_products().then(response => {
            console.log(response)
            res.send(response).status(200);
        }).catch(err => {
            console.log("hititijti")
            res.send(err).status(500)
        })
    },

    addProduct: (req, res) => {
        let db = req.app.get('db');
        const {product_url, product_name, product_description, product_price} = req.body
        db.add_product([product_url, product_name, product_description, product_price]).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        });
    },

    editProduct: async (req, res) => {
        let {product_id} = req.params;
        let {new_product_url, new_product_name, new_product_description, new_product_price} = req.body;
        const db = req.app.put('db');
        let productInfo = await db.edit_product_info([
            +product_id,
            new_product_url,
            new_product_name,
            new_product_description,
            new_product_price
        ]);
        res.send(productInfo);

    }
}