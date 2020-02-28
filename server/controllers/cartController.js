module.exports = {
  addToCart: async (req, res) => {
    console.log("hit addtocart", req.body, req.session.user);
    if (!req.body.product_id || !req.session.user.user_id) {
        return res.status(400);
      }
    const db = req.app.get("db");
    let { product_id } = req.body;
    let { user_id } = req.session.user;
  

    try {
      let cart = await db.get_cart([user_id]);
      let alreadyExists = cart.filter(
        product => +product.product_id === +product_id
      ).length;
      if (alreadyExists) {
        cart = await db.increase_qty({ user_id, product_id });
        return res.status(200).send(cart);
      } else {
        cart = await db.add_to_cart({ product_id, user_id });
        return res.status(200).send(cart);
      }
    } catch (error) {
        console.log('error caught in addtocart', error)
      return res.sendStatus(500);
    }
  },
  getCart: async (req, res) => {
    console.log("hit getcart", req.body, req.session.user);
    if (!req.session.user.user_id) {
        return res.status(400);
      }
    let {user_id} = req.session.user
    const db = req.app.get("db");

    try {
      let cart = await db.get_cart([user_id]);
      if (cart) {
        return res.status(200).send(cart);
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  }
};
