const products = require('../models/products')
module.exports = {
    async update(req, res){
        const { itemId } = req.params;
        const findUpdateItem = await products.findOne({_id:itemId})

        if (!findUpdateItem) {
            console.log('Item não encontrado.')
            return res.status(400).json({error: 'Item não encontrado'})
            
        } console.log(req.params.itemId)

        const sendItens = await products.findByIdAndUpdate(itemId, req.body, {new:true}) 
        console.log(`${itemId} Atualizado com sucesso!`)
        return res.json(sendItens)
        
    }
}