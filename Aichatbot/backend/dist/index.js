import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PROT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server open and connected to database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map