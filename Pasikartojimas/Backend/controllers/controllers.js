import Product from "../Models/product.js";

export async function addNewProduct(req, res) {
  const { name, price, amount, description, expirationDate } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }

  try {
    const product = new Product({
      name,
      price,
      amount,
      description,
      expirationDate,
    });

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find({}, { __v: 0 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(204).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, amount, description, expirationDate } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.name = name;
    product.price = price;
    product.amount = amount;
    product.description = description;
    product.expirationDate = expirationDate;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
