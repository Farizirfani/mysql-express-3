import { product } from '../db/db.js';

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await product.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error.message,
      });
    }
  },

  getById: async (req, res) => {
    try {
      const findProduct = await product.findByPk(req.params.id);
      console.log(findProduct);
      if (findProduct) {
        res.json({
          status: 'success',
          statusCode: 200,
          data: findProduct,
        });
      } else {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Product not found',
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error.message,
      });
    }
  },

  addProduct: async (req, res) => {
    try {
      if (req.body.title && req.body.price && req.body.stock) {
        const newProduct = await product.create(req.body);
        res.json({
          status: 'success',
          statusCode: 201,
          message: 'Product created',
          data: newProduct,
        });
      } else {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Invalid data',
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error.message,
      });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updateProduct = await product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateProduct[0] === 0) {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Product not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Product updated!',
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error.message,
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deleteProduct = await product.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteProduct === 0) {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Product not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Product deleted',
          data: product,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error.message,
      });
    }
  },
};

export default productController;
