// Produtos em Acessórios Masculinos
const carteiras = [
    {
        titulo: "Produto 1",
        descricao: "Uma descrição rápida sobre o produto!!",
        valor: "R$190",
        img: "https://cdn.awsli.com.br/2500x2500/1931/1931120/produto/111965939/img_0024-xmnc3tw33r.jpeg"
    }
];

const mochilas = [
    {
        titulo: "Produto 1",
        descricao: "Uma descrição rápida sobre o produto!!",
        valor: "R$190",
        img: "https://cdn.awsli.com.br/2500x2500/1931/1931120/produto/111965939/img_0024-xmnc3tw33r.jpeg"
    }
];

const relogios = [
    {
        titulo: "Produto 1",
        descricao: "Uma descrição rápida sobre o produto!!",
        valor: "R$190",
        img: "https://cdn.awsli.com.br/2500x2500/1931/1931120/produto/111965939/img_0024-xmnc3tw33r.jpeg"
    }
];



//Exportação
sessionStorage.setItem("CarteirasAcessoriosMasc", JSON.stringify(carteiras));
sessionStorage.setItem("MochilasAcessoriosMasc", JSON.stringify(carteiras));
sessionStorage.setItem("RelogiosAcessoriosMasc", JSON.stringify(relogios));