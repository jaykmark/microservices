module.exports.development = {
  dialect: "mysql",
  senderStorage: "sequelize",
  url: process.env.DB_URI
};