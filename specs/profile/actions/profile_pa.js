const ProfilePage = require('../page/profile_po');
const profile = new ProfilePage();

class ProfileActions {

    getUserNameValue() {
        profile.userName.waitForDisplayed(2000);
        return profile.userName.getValue();
    };

    getUserEmailValue() {
        profile.userEmail.waitForDisplayed(2000);
        return profile.userEmail.getValue();
    }; 

    getUserPwdValue() {
        profile.userPwd.waitForDisplayed(2000);
        return profile.userPwd.getValue();
    };

    getUserPhoneValue() {
        profile.userPwd.waitForDisplayed(2000);
        return profile.userPwd.getValue();
    };

    getUserAdressValue() {
        profile.userPwd.waitForDisplayed(2000);
        return profile.userPwd.getValue();
    };

    getUserPinValue() {
        profile.userPwd.waitForDisplayed(2000);
        return profile.userPwd.getValue();
    };

    

};

module.exports = ProfileActions;