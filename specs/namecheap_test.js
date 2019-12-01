const credentials = require('./testData.json');
const LoginActions = require('./login/actions/login_pa');
const ProfileActions = require('./profile/actions/profile_pa');
const MenuActions = require('./menu/actions/menu_pa');
const Validators = require('./helpers/validators');
const Helpers = require('./helpers/helpers');
const jsonFile = require('jsonfile');

const login = new LoginActions();
const profile = new ProfileActions();
const menu = new MenuActions();
const validate = new Validators();
const help = new Helpers();

describe('ssl login', () => {

    beforeEach(() => {

        browser.maximizeWindow();
        browser.url('https://www.sbzend.ssls.com/');
        //wait.forNotificationToDisappear(); //custom waiter for what?

    });

    afterEach(() => {

        browser.reloadSession();

    });

    it('should login in system', () => {

        help.loginUser(credentials.registeredEmail, credentials.pwd);
        validate.loggedUserValidator();

    });

    xit('should not login with invalid credentials', () => {
        
        help.loginUser(credentials.unregisteredEmail, credentials.pwd);
        validate.notyTextValidator(credentials.incorrectLoginMessage);
        
    });

});

