const LoginActions = require('../login/actions/login_pa');
const Validators = require('./validators');

const login = new LoginActions();
const validate = new Validators();

class Helpers {

    loginUser(email, pwd) {
        login.openLoginPage();
        login.enterEmail(email);
        login.enterPassword(pwd);
        login.showPwd();
        validate.pwdIsDisplayed();
        login.clickLoginButton();
    };


}

module.exports = Helpers;