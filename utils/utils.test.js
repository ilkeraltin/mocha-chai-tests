//const expect = require('expect');
const utils = require('./utils');
const expect = require('chai').expect;

//BDD
it('should add two numbers', () => {
    let res = utils.add(33,11);
    expect(res).to.equal(44).to.be.a('number');
});

it('should return square of a given number', ()=> {
    let res = utils.square(2);
    expect(res).to.equal(4).to.be.a('number');
});

it('should deep equal',() => {
    expect({name: 'ilker'}).to.deep.equal({name: 'ilker'});
    expect('ilker').to.equal('ilker');

    expect({
        name: 'ilker',
        city: 'soke',
        age: 32
    })
    .to.include({age: 32});
});


it('should set first and last name', () => {
    let user = { age: 32, city: 'soke' };
    let res = utils.setName(user, 'ilker altin');

    expect(res).to.include({firstName: 'ilker', lastName: 'altin'});
})


//async test
it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).to.equal(7);
        done();
    });
});