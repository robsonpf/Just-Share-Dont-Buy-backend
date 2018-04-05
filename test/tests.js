require("dotenv").load()
const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../app");
const config = require("../knexfile").test;


chai.use(chaiHttp);
chai.use(require("chai-as-promised"));

describe("API Routes", () => {
  before(() => {
    tempConnection = require("knex")({ client: "pg", connection: process.env.DATABASE_URL })

    return tempConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
    .catch(() => Promise.resolve("Everything is OK"))
    .then(() => global.knex = require("../queries/db"))
    .then(() => knex.migrate.rollback(config))
    .then(() => knex.migrate.latest(config))
    .then(() => knex.seed.run())
    .catch(() => console.log(`Migrations or seeds failed.`))
  });

  describe("GET /items")
})
