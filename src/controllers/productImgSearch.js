const google = require('googleapis').google
const customSearch = google.customsearch('v1')

module.exports = {
    async store(req, res) {
        const { p } = req.params
const resp = await customSearch.cse.list({
    auth:'GOOGLE API',
    cx:'GOOGLE API',
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
