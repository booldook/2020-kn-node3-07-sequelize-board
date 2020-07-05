require("dotenv").config();

module.exports = (env) => {
  if(env === "development") {
    return {
      username: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
      database: process.env.DB_DATABASE_DEV,
      host: process.env.DB_HOST_DEV,
      dialect: "mysql",
      port: process.env.DB_PORT_DEV,
      operatorsAliases: false
    }
  }
  else if(env === "production") {
    return {
      username: process.env.DB_USER_PRD,
      password: process.env.DB_PASS_PRD,
      database: process.env.DB_DATABASE_PRD,
      host: process.env.DB_HOST_PRD,
      dialect: "mysql",
      port: process.env.DB_PORT_PRD,
      operatorsAliases: false
    }
  }
  else {
    return {};
  }
}
