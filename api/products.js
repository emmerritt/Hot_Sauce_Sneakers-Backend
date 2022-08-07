import express from "express";
const productRouter = express.Router();
import {
  createProduct,
  getAllProductsInStock,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductsInStockBySize,
  getAllProductsInStockByBrand,
  getAllProductsInStockByGender,
} from "../db/index.js";

// get all products
productRouter.get("/admin", async (req, res, next) => {
  const user = req.user;

  if (!user || !user.isAdmin) {
    next({
      error: "Admin Permissions Required",
      message: `You must be logged in as an admin user to perform this action.`,
    });
  }

  try {
    const products = await getAllProducts();

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// get all products in stock by brand
productRouter.get("/brands/:brandId", async (req, res, next) => {
  const { brandId } = req.params;

  try {
    const products = await getAllProductsInStockByBrand(brandId);

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// get all Men's products in stock
productRouter.get("/category/men", async (req, res, next) => {
  const gender = "Men's";

  try {
    const products = await getAllProductsInStockByGender(gender);

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// get all Men's products in stock
productRouter.get("/category/women", async (req, res, next) => {
  const gender = "Women's";

  try {
    const products = await getAllProductsInStockByGender(gender);

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// get all products in stock of a specific size, by sizeId (ie women's 9, men's 7.5, etc.)
productRouter.get("/size/:sizeId", async (req, res, next) => {
  const { sizeId } = req.params;

  try {
    const products = await getAllProductsInStockBySize(sizeId);

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// get product by id
productRouter.get("/:productId", async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await getProductById(productId);

    res.send(product);
  } catch (error) {
    next(error);
  }
});

// update product
productRouter.patch("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const { name, price, image, brandId } = req.body;
  try {
    const productToUpdate = await updateProduct({
      id: productId,
      name,
      price,
      image,
      brandId,
    });
    res.send(productToUpdate);
  } catch (error) {
    next(error);
  }
});

// delete product
productRouter.delete("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const productToDelete = await deleteProduct(productId);
    res.send(productToDelete);
  } catch (error) {
    next(error);
  }
});

// get all products in stock
productRouter.get("/", async (req, res, next) => {
  try {
    const productsInStock = await getAllProductsInStock();
    console.log(productsInStock);
    res.send(productsInStock);
  } catch (error) {
    next(error);
  }
});

// create new product
productRouter.post("/", async (req, res, next) => {
  const { name, brandId, price, image } = req.body;
  const productData = {
    name,
    brandId,
    price,
    image,
  };
  try {
    const newProduct = await createProduct(productData);
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

export { productRouter };
