const express = require("express");
const app = express();
const PORT = 3500;
const routes = require("./routes")

app.use(express.json())
app.use(routes)


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

