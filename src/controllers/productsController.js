const products = require('../models/products')
module.exports = {
    async store(req, res) {
        const {id, produto, med, preçoClient, dataRep, preçoForn, img, qnt} = req.body

        const itemExists = await products.findOne({produto:produto}) 

        if (itemExists){
            console.log(
                `
                Item já cadastrado:
                ID: ${itemExists.id}
                PRODUTO: ${itemExists.produto}
                QUANTIDADE: ${itemExists.qnt}
                UNIDADE DE MEDIDA: ${itemExists.med}
                PREÇO CLIENTE: ${itemExists.preçoClient}
                DATA REPOSiÇÃO: ${itemExists.dataRep},
                PREÇO FORNECEDOR: ${itemExists.preçoForn}
                IMAGEM: ${itemExists.img}
                `
            )
            return res.json(itemExists)
        }

        const sendItens = await products.create({
            id,
            produto,
            med,
            qnt,
            preçoClient,
            dataRep,
            preçoForn,
            img
        }) 
        console.log(
            `
            Novo item cadastrado:
            ID: ${id}
            PRODUTO: ${produto}
            QUANTIDADE: ${qnt}
            UNIDADE DE MEDIDA: ${med}
            PREÇO CLIENTE: ${preçoClient}
            DATA REPOSiÇÃO: ${dataRep},
            PREÇO FORNECEDOR: ${preçoForn}
            IMAGEM: ${img}
            `
        )
        
        return res.json(sendItens)
}
}