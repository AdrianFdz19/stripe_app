import { config } from "dotenv";
import app from "./src/app.js";
const PORT = 3005 | process.env.PORT;

app.listen(PORT, () => console.log('Server is running on port: ', PORT));