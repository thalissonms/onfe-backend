const google = require('googleapis').google
const customSearch = google.customsearch('v1')

module.exports = {
    async store(req, res) {
        const { p } = req.params
const resp = await customSearch.cse.list({
    auth:'AIzaSyBn50-oYDqD3ioQ9zj4BkwmTFv9I2BusqM',
    cx:'012358337667130757373:lfqh9lhbutg',
    q: p,
    searchType: 'image',
    num:4
})

for(let i = 0; i < resp.data.items.length; i++){
console.log(resp.data.items[i].link)
    
}

return res.json(
resp.data.items
)
    }
}