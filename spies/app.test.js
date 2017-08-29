const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db',db);

    it('should call the spy correctly', () => {
       let spy = expect.createSpy();
       spy('ilker',32); 

       expect(spy).toHaveBeenCalledWith('ilker',32);
    });

    it('should call saveUser with user object', () => {
        var email = 'andrew@example.com';
        var password = '123abc';
    
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
      });
      
});