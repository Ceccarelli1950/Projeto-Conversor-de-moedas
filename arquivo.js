const meuBotao = document.querySelector("button");

let select = document.querySelector("#select")

meuBotao.addEventListener("click", converterMoedas);

function converterMoedas() {
    const meuInput = document.querySelector("input").value;
    console.log(select.value)

    let real = document.querySelector(".Resulta");
    let dolar = document.querySelector(".Resultados");
    
    const dolarDeHoje = 5.22;
    const euroHoje = 6.19
    const libraHoje = 7.07
    const bitcoinHoje = 353.301


    if(select.value == "bitcoins"){
        dolar.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format(meuInput / bitcoinHoje )
    }
    
    if (select.value == "libras"){
        dolar.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
    }).format(meuInput / libraHoje )
    
    }

    if (select.value == "moeda") {
        dolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(meuInput / dolarDeHoje)

    }
    if (select.value == "money") {
        dolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(meuInput / euroHoje)
    }


    real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(meuInput)

}

function trocasDeImagem() {
    const band = document.querySelector("#flags")
    let imagesBandeiras = document.querySelector("#imges")

    if (select.value == "moeda") {
        band.innerHTML = "Dólar Americano"
        imagesBandeiras.src = "./images/estados-unidos (1) 1.png"
    }

    if (select.value == "money") {
        band.innerHTML = "Euro"
        imagesBandeiras.src = "./images/euro.png"

    }

    if (select.value == "libras"){
        band.innerHTML = "Libra"
        imagesBandeiras.src = "./images/libra 1.png"

    }

    if(select.value == "bitcoins"){
        band.innerHTML = "Bitcoin"
        imagesBandeiras.src = "./images/bitcoin 1.png"

    }

    converterMoedas()
}
select.addEventListener('change', trocasDeImagem)
