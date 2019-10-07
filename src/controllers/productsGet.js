const products = require('../models/products')
const date = require('../getDate')
module.exports = {
    async index(req, res){ 
        const getAll = await products.find()
        console.log(`${date.date()} Busca por todos os itens!`)
        return res.json(getAll)
    },
    async getItem(req, res) {
        const { itemId } = req.params

        const itemGetExist = await products.findOne({_id:itemId})

        if(!itemGetExist){
            console.log('O item não existe!')
            return res.status(400).json({error: 'O item não existe!'})
        }
        console.log(
            `
            Dados do item da busca:
            ID: ${itemGetExist.id}
            PRODUTO: ${itemGetExist.produto}
            QUANTIDADE: ${itemGetExist.qnt}
            UNIDADE DE MEDIDA: ${itemGetExist.med}
            PREÇO CLIENTE: ${itemGetExist.preçoClient}
            DATA REPOSiÇÃO: ${itemGetExist.dataRep},
            PREÇO FORNECEDOR: ${itemGetExist.preçoForn}
            IMAGEM: ${itemGetExist.img}
            `
        )
        return res.json(itemGetExist)
    }
}