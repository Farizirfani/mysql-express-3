import { DataTypes } from 'sequelize';

const productModel = (sequelize) =>
  sequelize.define('products', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default productModel;
