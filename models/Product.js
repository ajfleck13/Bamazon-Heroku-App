module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define('Product', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
    price: {
        type: DataTypes.DECIMAL(2),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    product_sales: {
        type: DataTypes.DECIMAL(2),
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    });

    Product.associate = function(models) {
      
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Product.belongsTo(models.Department, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Product;
  };
  