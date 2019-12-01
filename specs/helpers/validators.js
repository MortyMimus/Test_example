const assert = require('assert');
const LoginActions = require('../login/actions/login_pa');
const MenuActions = require('../menu/actions/menu_pa')
const credentials = require('../testData.json');

const login = new LoginActions();
const menu = new MenuActions();

class Validators {

    notyTextValidator(expectedText) {
        assert.equal(login.getNotyText(), expectedText);
    };

    loggedUserValidator(expectedEmail) {
        assert.equal(menu.getUserEmail(), expectedEmail)
        assert.equal($('button.dropdown-btn').isDisplayed(), true);
        console.log("DROPDOWN BTN POSITION" + $('button.dropdown-btn').getLocation());
    };

    pwdIsDisplayed() {
        assert.equal($('input[name="password"][type="text"]').isDisplayed(), true);
    };

};

module.exports = Validators;