class LoginPage {

    get loginBtn() {return $('a[href="/authorize"]')};
    get emailField() {return $('/html/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/input')};
    get pwdField() {return $('input[name="password"]')};
    get eyeIcon() {return $('span.icon.icon-eye')};
    get applyLoginBtn() {return $('button.primary')};
    get loginNotification() {return $('div.noty_message')};

};

module.exports = LoginPage;