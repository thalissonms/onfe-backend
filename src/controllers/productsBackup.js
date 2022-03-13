const products = require('../models/products')
const axios = require('axios') /*
const google = require('googleapis').google
const customSearch = google.customsearch('v1')
*/

module.exports = {
    async store(req, res) {
        //const {id, produto, med, preçoClient, dataRep, preçoForn, img} = req.body
        const { ip } = req.body
        const itemExists = await products.findOne({id:ip/*produto:produto*/}) 

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
        
        const response = await axios.get(`http://localhost/alpha/loja.php?id=${ip}`)
        const {id, produto, med, qnt, preçoClient, dataRep, preçoForn, img} = response.data
       

        const sendItens = await products.create({
            id,
            produto,
            qnt,
            med,
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
