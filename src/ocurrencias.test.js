import contarOcurrencias from "./ocurrencias"

describe ("contar ocurrencias", ()=>{
    it ("contar la cantidad de ocurrencias de una palabra si no hay ocurrencias",()=>{
        expect (contarOcurrencias ("")).toEqual({})
    })
})