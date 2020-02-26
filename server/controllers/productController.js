const products = require('../products')

module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')

        let shoes = await db.get_shoes()
        if(shoes[0]) {
            products.push(...shoes)
            console.log(products)
            res.status(200).send(products)
        } else {
            res.status(500)
        }
     }
}