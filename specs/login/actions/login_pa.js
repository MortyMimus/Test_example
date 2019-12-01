const LoginPage = require('../page/login_po');
const login = new LoginPage();

class LoginActions {

    openLoginPage() {
        login.loginBtn.waitForDisplayed(2000);
        login.loginBtn.click();
    };

    enterEmail(value) {
        login.emailField.waitForDisplayed(2000);
        login.emailField.setValue(value);
    };

    enterPassword(value) {
        login.pwdField.waitForDisplayed(2000);
        login.pwdField.setValue(value);
    };

    showPwd() {
        login.eyeIcon.waitForDisplayed(2000);
        login.eyeIcon.click();
    }

    clickLoginButton() {
        login.applyLoginBtn.waitForDisplayed(2000);
        login.applyLoginBtn.click();
    };

    getNotyText() {
        login.loginNotification.waitForDisplayed(5000);
        return login.loginNotification.getText();
    };

};

module.exports = LoginActions;