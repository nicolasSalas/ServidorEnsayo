const sequelize = require("sequelize");
const connection = require("../conection");
const SubSector = require("./SubSector");
const Contact = require("./Contact");

const Enterprise_stored = connection.define(
  "Enterprise_stored",
  {
    ID: {
      type: sequelize.INTEGER,
      field: "ID",
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: sequelize.STRING,
      field: "Name"
    },
    Alias: {
      type: sequelize.STRING,
      field: "Alias"
    },
    Web: {
      type: sequelize.STRING,
      field: "Web"
    }
  },
  {
    freezeTableName: true,
    operatorsAliases: false
  }
);
Enterprise_stored.belongsTo(SubSector, {
  as: "Subsector_ID_as",
  foreignKey: "Subsector_ID"
});
Enterprise_stored.belongsTo(Contact, {
  as: "Contact_ID_as",
  foreignKey: "Contact_ID"
});

module.exports = Enterprise_stored;
