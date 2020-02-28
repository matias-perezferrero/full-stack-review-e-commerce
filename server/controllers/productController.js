module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')

        let products = await db.get_products()
        if(products[0]) {
            res.status(200).send(products)
        } else {
            res.sendStatus(500)
        }
     }
}