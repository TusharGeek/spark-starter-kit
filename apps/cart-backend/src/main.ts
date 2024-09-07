
import express from 'express';
import * as path from 'path';
import categoriesRoute from "./routes/categories.js";
import productRoute from "./routes/products.js";
import customersRoutes from "./routes/products.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use("/categories",categoriesRoute);
app.use("/products",productRoute);
app.use("/customers",customersRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
