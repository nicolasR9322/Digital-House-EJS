const {menu} = require("../database")

module.exports = {
    index: (req,res) => {
        res.render("index", {
            producto:menu
        })
    },
    
}