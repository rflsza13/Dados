const user = [
    {
        usuario: "rafael",
        senha: "10082024"
    },
    {
        usuario: "julia",
        senha: "10082024"
    }
]

sessionStorage.setItem("user", JSON.stringify(user));