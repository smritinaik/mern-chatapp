import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/" , (req , res) => {
    //root route https:localhost:5000/
    res.send("hello server !!")
} );

app.listen(PORT , () => console.log(`server running on port ${PORT}`));
