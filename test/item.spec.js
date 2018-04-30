require('dotenv').load();

const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const axios = require('axios');

const config = require('../knexfile').test;
const server = require('../app');
const knex = require('../query/db')
// const knex = require('../db/knex');
const items = require('../src/models/items')

const token = require('../query/token');

const baseUrl = 'http://localhost:3000';

// temporary user data
const loginEmail = 'alice@example.com';
const loginPassword = 'pa$$w04D';
const loginPhone = '555-1212';
const loginUsername = 'alice';

chai.should();
chai.use(chaiAsPromised);
chai.use(chaiHttp);

describe('test items', function () {
  beforeEach(function (done) {

    // rollback migrations
    knex.migrate.rollback()
      .then(function () {

        // migrate to latest version
        knex.migrate.latest()
          .then(function () {

            // insert seed data
            return knex.seed.run()
              .then(function () {
                done();
              });
          });
      });
  });

  describe('test stuff', function () {
    var access_token;

    it('should not show items without authentication', done => {
      chai.request(server)
        .get('/items')
        .end((err, res) => {
          res.should.have.status(401);
        });
        done();
    });

    it('should return a JWT with three segments on user login', done => {
      axios.post(`${baseUrl}/login`, {
        'email': 'Jriemer@gmail.com',
        'password': 'welcome1'
      }).then(result => {
        // console.log('result', result);
        access_token = result.data.access_token;
        console.log('jwt should be defined here', access_token);
        // expect(access_token.split('.').length).to.equal(3);
      }).catch(err => {
        console.log('!!!!!!! err.response.status is:', err.response.status);
      });
      done();
    });
    console.log(access_token)
    // for(var i = 1; i < 9; i++) {

        it('should return an item by id', function (done) {
            chai.request(server)
            .get('/items/2')
            .set('Authorization', access_token)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
            });
            done();
        });  
    // }
      
      it('should insert an item', function (done) {
        chai.request(server)
          .post('/items')
          .send({
            "category_id": 4,
            "user_id": 1,
            "description": "test insert1",
            "name": "test insert1",
            "photo": "test insert1"
          })
          .set('Authorization', access_token)
          .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
          });
        done();
      });      

      it('should return items', function (done) {
        chai.request(server)
          .get('/items')
          .set('Authorization', access_token)
          .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            // console.log(res)
          });
        done();
      });

  });

});