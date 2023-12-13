import pagosRealizados from "./pagos"

describe ("calcular pagos por horas trabajadas", ()=>{
    it ("no haya trabajado ninguna hora", ()=>{
        expect (pagosRealizados (0)).toEqual([])
    })
})