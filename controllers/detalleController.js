const {menu} = require("../database")


module.exports = {
    detallePorId:(req,res) => {
        let param = req.params.id

        const productoFiltradoPorId = menu.find(x => x.id == Number(param))

            res.render("detalleMenu", {
                plato:productoFiltradoPorId
            })
        }
    }

    