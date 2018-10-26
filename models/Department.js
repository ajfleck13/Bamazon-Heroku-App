module.exports = function(sequelize, DataTypes) {
    var Department = sequelize.define('Department', {
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
    department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
    over_head_costs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });

    Department.associate = function(models) {
      
        Department.hasMany(models.Product, {
            onDelete: 'cascade'
        });
      };
  
    return Department;
  };
  