'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estudiante.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {msg:'Debe introducir nombre del estudiante'},
        notEmpty:{msg:'El nombre del estudiante no debe estar vacio'},
      }
    },
    edad: DataTypes.INTEGER,
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull:false,
      validate:{
        notNull: {msg:'Debe introducir fecha de nacimiento'},
        notEmpty:{msg:'La fecha de nacimimiento del estudiante no debe estar vacio'},
        isDate: {msg:'Introduzca formato de fecha valido'}
      }
    },
    fechaInscripcion: {
      type: DataTypes.DATE,
      allowNull:false,
      validate:{
        notNull: {msg:'Debe introducir fecha de inscripcion'},
        notEmpty:{msg:'La fecha de inscrpcion del estudiante no debe estar vacio'},
        isDate: {msg:'Introduzca formato de fecha valido'}
      }
    },
    costo: {type: DataTypes.DOUBLE, allowNull: false, defaultValue: 0},
    estado: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}
  }, {
    sequelize,
    modelName: 'estudiante',
  });
  return estudiante;
};