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
        descrição: "Uma descrição rápida sobre o produto!!",
        valor: "R$190",
        img: ""
    },
    {
        titulo: "Pulseira Trança Baiana",
        descrição: "Uma descrição rápida sobre o produto!!",
        valor: "R$180",
        img: ""
    },
    {
        titulo: "Pulseira Trança Baiana",
        descrição: "Uma descrição rápida sobre o produto!!",
        valor: "R$170",
        img: ""
    }
];

//Exportação
sessionStorage.setItem("p_aneis_masc", JSON.stringify(aneis));
sessionStorage.setItem("p_brincos_masc", JSON.stringify(brincos));
sessionStorage.setItem("p_correntes_masc", JSON.stringify(correntes));
sessionStorage.setItem("p_pingentes_masc", JSON.stringify(pingentes));
sessionStorage.setItem("p_pulseira_masc", JSON.stringify(pulseiras));