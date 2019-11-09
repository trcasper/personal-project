module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_all_products()
      .then(response => {
        console.log(response);
        res.send(response).status(200);
      })
      .catch(err => {
        console.log("hititijti");
        res.send(err).status(500);
      });
  },

  addProduct: (req, res) => {
    let db = req.app.get("db");
    const {
      product_url,
      product_name,
      product_description,
      product_price
    } = req.body;
    db.add_product([
      product_url,
      product_name,
      product_description,
      product_price
    ])
      .then(response => {
        res.send(response).status(200);
      })
      .catch(err => {
        res.send(err).status(500);
      });
  },

  editProduct: async (req, res) => {
    console.log(req.body);
    let db = req.app.get("db");
    const {
      product_id,
      product_url,
      product_name,
      product_description,
      product_price
    } = req.body;
    db.edit_product([
      product_id,
      product_url,
      product_name,
      product_description,
      product_price
    ])
      .then(response => {
        res.send(response).status(200);
      })
      .catch(err => {
        res.send(err).status(500);
      });
  },

  addToCart: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    let correctProduct = await db.get_product_by_id(+id);
    console.log(correctProduct);
    req.session.cart = correctProduct[0];
    res.status(200).send(req.session.cart);

  },

  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log("product deleted", id)
    db.delete_product(id)
    .then(() => res.sendStatus(200))
        
},

  // deleteFromCart(req, res) {
  //   const { id } = req.params;
  //   const { index } = req.query;
  //   product[id].product.splice(index, 1);
  //   res.status(200).send(product[id].product)
  // },

  // getProductById: async (req, res) => {
  //     let db = req.app.get('db');
  //     db.get_product_by_id(req.params.id).then(response => {
  //         res.send(response[0]).status(200);
  //     }).catch(err => {
  //         res.send(err).status(500);
  //     })
  // }

  // getProductById: async (req, res) => {
  //   let db = req.app.get("db");
  //   const { product_id } = req.body;
  //   db.get_product_by_id([product_id])
  //     .then(response => {
  //       res.send(response).status(200);
  //     })
  //     .catch(err => {
  //       res.send(err).status(500);
  //     });
  // }

  // getProducts: (req, res) => {
  //     let db = req.app.get('db');
  //     db.get_all_products().then(response => {
  //         console.log(response)
  //         res.send(response).status(200);
  //     }).catch(err => {
  //         console.log("hititijti")
  //         res.send(err).status(500)
  //     })
  // },

  // editProduct: async (req, res) => {
  //     let {product_id} = req.params;
  //     let {new_product_url, new_product_name, new_product_description, new_product_price} = req.body;
  //     const db = req.app.put('db');
  //     let productInfo = await db.edit_product_info([
  //         +product_id,
  //         new_product_url,
  //         new_product_name,
  //         new_product_description,
  //         new_product_price
  //     ]);
  //     res.send(productInfo);

  // }
};
