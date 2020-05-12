let produto = 30;
let venda = 40;
let lucro

lucro = 1000 * (venda - (produto * 0,8))

if ( produto <= 0 || venda <= 0){
    console.log ("erro")
} else {
    console.log(lucro)
}