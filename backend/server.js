import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"

//enviorment variable setup
dotenv.config();

const app = express()

const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json())
app.use(cookieParser())

//routes setup
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)

app.listen(PORT,()=>{
    console.log("server is running on port http://localhost:" + PORT);
    connectDB();
})
