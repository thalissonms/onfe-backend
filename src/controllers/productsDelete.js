const products = require('../models/products')

module.exports = {
    async delete(req, res){
        const { itemId } = req.params;

        const findDeleteItem = await products.findOne({_id:itemId})
    
        if (!findDeleteItem){
            console.log('Item não encontrado.')
            return res.status(400).json({error: 'Item não encontrado.'})
        }

        const deleteItem = await products.findByIdAndDelete({_id:itemId})
        console.log(`${findDeleteItem.produto} Deletado com sucesso!`)
        return res.json('Item deletado com sucesso!')
        
    }
}