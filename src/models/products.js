const {Schema, model} = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const ProductsSchema = new Schema({
    id: Number,
    produto: {type:String, required:true},
    med: String,
    preçoClient: String,
    qnt: Number,
    dataRep: String,
    preçoForn: String,
    img: String
}, {
    timestamps: true,
})

ProductsSchema.plugin(mongoosePaginate)

module.exports = model('Produto', ProductsSchema)
