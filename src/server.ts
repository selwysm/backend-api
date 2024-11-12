import { connectDB } from "./config/database.js"
import app from './app.js';


const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`Auth-service running on port ${PORT}`);
});
