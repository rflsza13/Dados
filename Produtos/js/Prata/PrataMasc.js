// Produtos em Prata Masculinos
const aneis = [
    {
        descricao: "Anel trançado",
        valor: "R$75",
        img: ""
    }
];

const brincos = [
    {
        descricao: "",
        valor: "",
        img: ""
    }
];

const correntes = [
    {
        descricao: "",
        valor: "",
        img: ""
    }
];

const pingentes = [
    {
        descricao: "",
        valor: "",
        img: ""
    }
];

const pulseiras = [
    {
        titulo: "Pulseira Trança Baiana",
        descrição: "",
        valor: "R$190",
        img: ""
    }
];

//Exportação
sessionStorage.setItem("aneisPrataMasc", JSON.stringify(aneis));
sessionStorage.setItem("brincosPrataMasc", JSON.stringify(brincos));
sessionStorage.setItem("correntesPrataMasc", JSON.stringify(correntes));
sessionStorage.setItem("pingentesPrataMasc", JSON.stringify(pingentes));
sessionStorage.setItem("pulseirasPrataMasc", JSON.stringify(pulseiras));