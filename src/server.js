const express = require("express");

const app = express();

const PORT = 3333;



app.get("/message/:num/:user/:age", (request, response) => {

    const {num, user, age} = request.params

    response.send(`Num. da mensagem: ${num}
        Nome do usuário: ${user}   
        Idade do usuário: ${age}
    `)

});

app.get("/users", (request, response) => {
    const {page, limit} = request.query

    response.send(`Página, ${page}. Mostrar: ${limit}`)
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

