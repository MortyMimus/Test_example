const credentials = require('./testData.json');
const LoginActions = require('./login/actions/login_pa');
const ProfileActions = require('./profile/actions/profile_pa');
const MenuActions = require('./menu/actions/menu_pa');
const Validators = require('./helpers/validators');
const Helpers = require('./helpers/helpers');
const CustomWaits = require('./helpers/waiters')
const userinfo = require('../info.json');

const login = new LoginActions();
const profile = new ProfileActions();
const menu = new MenuActions();
const validate = new Validators();
const help = new Helpers();
const wait = new CustomWaits();

describe('login tests', () => {

    beforeEach(() => {

        browser.maximizeWindow();
        browser.url(credentials.appURl);
        wait.forSpinner();

    });

    afterEach(() => {

        browser.reloadSession();

    });

    it('should login in system', () => {

        help.loginUser(credentials.registeredEmail, credentials.pwd);
        validate.loggedUserValidator();

    });

    it('should not login with invalid credentials', () => {
        
        help.loginUser(credentials.unregisteredEmail, credentials.pwd);
        validate.notyTextValidator(credentials.incorrectLoginMessage);
        
    });

});

describe('profile test', () => {

    before(() => {

        //browser.maximizeWindow();
        browser.url(credentials.appURl);
        help.loginUser(credentials.registeredEmail, credentials.pwd);
        wait.forSpinner();
        menu.navigateToProfile();
        help.saveUserInfoToJson();
        browser.reloadSession();
        browser.url(credentials.appURl);
});


    it('check user info', () => {

        help.loginUser(credentials.registeredEmail, credentials.pwd);
        menu.navigateToProfile();
        validate.userInfoValidator(userinfo[0].name, profile.getUserNameValue(), 
        userinfo[0].email, profile.getUserEmailValue(), 
        userinfo[0].pwd, profile.getUserPwdValue(), 
        userinfo[0].phone, profile.getUserPhoneValue(), 
        userinfo[0].address, profile.getUserAdressValue(),
        userinfo[0].pin, profile.getUserPinValue(),
        userinfo[0].newsEnable, profile.getNewsEnable());
 
     });

});