import Products from "../models/Products.model.js";

export const create = async (req, res) => {
  try {
    let { name, price, category, userId, company } = req.body;
    let product = new Products({
      name,
      price,
      category,
      userId,
      company,
    });
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    let result = await Products.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = async (req, res) => {
  let { id } = req.params;
  try {
    await Products.findByIdAndDelete(id);
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Products Not Delete server Error" });
  }
};

export const updateProducts = async (req, res) => {
  let { id } = req.params;
  let { name, price, category, userId, company } = req.body;

  try {
    let product = await Products.findById(id);
    if (product) {
      product.name = name;
      product.price = price;
      product.category = category;
      product.userId = userId;
      product.company = company;

      await product.save();

      return res
        .status(200)
        .json({ message: "Product updated successfully", product });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to update product due to server error" });
  }
};
