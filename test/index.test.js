const app = require("../src")
const request = require('supertest')


describe('test app', () => { 
   test('It should response the GET method' , () =>{
    return request(app)
    .get('/')
    .expect(200)
   })
})