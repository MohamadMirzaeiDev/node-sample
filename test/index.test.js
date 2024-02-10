const app = require("../src")
const request = require('supertest')

describe('test app', () => { 
   test('It should response the GET method' , done =>{
    request(app)
    .get('/')
    .then(res=>{
      expect(res.statusCode).toBe(200)
      done()  
    })
   })
})