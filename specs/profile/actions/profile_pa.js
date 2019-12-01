const ProfilePage = require('../page/profile_po');
const profile = new ProfilePage();

class ProfileActions {

    getUserNameValue() {
        profile.userName.waitForDisplayed(2000);
        return profile.userName.getText();
    };

    getUserEmailValue() {
        profile.userEmail.waitForDisplayed(2000);
        return profile.userEmail.getText();
    }; 

    getUserPwdValue() {
        profile.userPwd.waitForDisplayed(2000);
        return profile.userPwd.getText();
    };

    getUserPhoneValue() {
        profile.userPhone.waitForDisplayed(2000);
        return profile.userPhone.getText();
    };

    getUserAdressValue() {
        profile.userAdress.waitForDisplayed(2000);
        return profile.userAdress.getText();
    };

    getUserPinValue() {
        profile.userPin.waitForDisplayed(2000);
        return profile.userPin.getText();
    };

    getNewsEnable() {
        profile.newsBtnOn.waitForDisplayed(2000);
        return profile.newsBtnOn.isDisplayed();
    };

};

module.exports = ProfileActions;