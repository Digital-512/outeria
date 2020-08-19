const polka = require("polka");
const sirv = require("sirv");
const app = polka();

const port = 3000;
const dev = true;

// Initialize public directories
app.use(sirv("static", { dev }));
app.use("/dist", sirv("dist", { dev }));

app.listen(port, () => console.log("App listening on port " + port));
