const assert = require('assert');
const LoginActions = require('../login/actions/login_pa');
const MenuActions = require('../menu/actions/menu_pa')

const login = new LoginActions();
const menu = new MenuActions();

class Validators {

    notyTextValidator(expectedText) {
        assert.equal(login.getNotyText(), expectedText, "Notification message changed!");
    };

    loggedUserValidator(expectedEmail) {
        assert.equal(menu.getUserEmail(), expectedEmail, "User email is not displayed")
        assert.equal($('button.dropdown-btn').isDisplayed(), true);
        const btnLocationX = $('button.dropdown-btn').getLocation('x');
        const btnLocationY = $('button.dropdown-btn').getLocation('y');
        console.log($('button.dropdown-btn').getLocation());
        assert.equal(btnLocationX, 1441.5, "Dropdown X position changed!");
        assert.equal(btnLocationY, 15, "Dropdown Y position changed!");
    };

    pwdIsDisplayed() {
        assert.equal($('input[name="password"][type="text"]').isDisplayed(), true, "Password is not displaying");
    };

    userInfoValidator(expName, actName, expMail, actMail, expPwd, actPwd, expPhone, actPhone, expAddr, actAddr, expPin, actPin, expNews, actNews) {
        assert.equal(expName, actName, "User name changed");
        assert.equal(expMail, actMail, "User mail changed");
        assert.equal(expPwd, actPwd, "User password changed");
        assert.equal(expPhone, actPhone, "User phone changed");
        assert.equal(expAddr, actAddr, "User address changed");
        assert.equal(expPin, actPin, "User pin changed");
        assert.equal(expNews, actNews, "User news state changed");
    };

};

module.exports = Validators;