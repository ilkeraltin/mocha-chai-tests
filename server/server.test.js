const request = require('supertest');
const expect = require('chai').expect;

const app = require('./server').app;

describe('Server Test', () => {

    describe('#GET /', () => {
        it('should return hello world', (done) => {
            //supertest
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).to.include({name: 'todo app'});
                })
                .end(done);
        });
    });

    describe('#GET /users', () => {
        it('should include ilker user', (done) =>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.deep.include({
                        name: 'ilker',
                        age: 32
                    });
                })
                .end(done);
        });
    });

});




