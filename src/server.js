const express = require("express");

const app = express();

const PORT = 3333;

app.get("/message", (request, response) => {
    response.send("Hello World!")
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

