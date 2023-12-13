import cambioMonedas from "./moneda"

describe ("cambio monedas", ()=>{
    it ("devolver un vector vacio si el monto ingreado es 0", ()=>{
        expect (cambioMonedas (0)).toEqual([])
    })

    it ("devolver un vector con 1", ()=>{
        expect (cambioMonedas (1)).toEqual([1])
    })

    it ("devolver un vector con 2", ()=>{
        expect (cambioMonedas (2)).toEqual([2])
    })
})