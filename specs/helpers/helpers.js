const LoginActions = require('../login/actions/login_pa');
const Validators = require('./validators');
const ProfileActions = require('../profile/actions/profile_pa');
const fs = require('fs');

const login = new LoginActions();
const validate = new Validators();
const profile = new ProfileActions();

class Helpers {

    loginUser(email, pwd) {
        login.openLoginPage();
        login.enterEmail(email);
        login.enterPassword(pwd);
        login.showPwd();
        validate.pwdIsDisplayed();
        login.clickLoginButton();
    };

    saveUserInfoToJson() {
        const obj = [];
        obj.push({name: profile.getUserNameValue(), 
            email: profile.getUserEmailValue(), 
            pwd: profile.getUserPwdValue(), 
            phone: profile.getUserPhoneValue(), 
            address: profile.getUserAdressValue(), 
            pin : profile.getUserPinValue(), 
            newsEnable : profile.getNewsEnable()});
        const json = JSON.stringify(obj);
        fs.writeFile('info.json', json, function(err) {});
    };

}

module.exports = Helpers;