const Producto = require('../models/Producto');

function filterInt(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value)
    } else {
      return NaN
    }
  }

const dataFind = ( palabraBuscada ) =>{

    let busqueda = null;
    let idNumerico = filterInt(palabraBuscada);

    if(palabraBuscada.length > 3 ){        
        if(idNumerico){
            busqueda = [
                {"id": palabraBuscada }, 
                {"brand":{$regex: ".*" + palabraBuscada + ".*"}}, 
                {"description": {$regex: ".*" + palabraBuscada + ".*"}}
            ];
        }else{
            busqueda = [
                {"brand":{$regex: ".*" + palabraBuscada + ".*"}}, 
                {"description": {$regex: ".*" + palabraBuscada + ".*"}}
            ];
        }    
    }else{
        if(idNumerico){
            busqueda = [{"id": palabraBuscada}];    
        }
    }

    return busqueda;
};

exports.buscarProducto = async (req, res) => {

    try{
        let busqueda = dataFind(req.body.search);
        let respuesta = {
            codigo: "00",
            productos: null
        }
        if(busqueda){
            const busquedaNormalizada = JSON.stringify(busqueda);

            const productos = await Producto.find({ $or : JSON.parse(busquedaNormalizada) });
            
            respuesta.codigo = productos && productos.length > 0 ? "00":"02";
            respuesta.productos = productos;
            res.json(respuesta);
        }else{
            respuesta.codigo = "01";
            res.json(respuesta);
        }
    }catch (error){
        console.error(error);
        res.status(400).json({ msg: 'Hubo un error en la busqueda del producto'});
    }
}