const UserMenu = require('../page/menu_po');
const menu = new UserMenu();

class MenuActions {

    openMenu() {
        menu.dropdownBtn.waitForDisplayed(10000);
        menu.dropdownBtn.click();
    };

    navigateToProfile() {
        this.openMenu();
        menu.profileBtn.waitForDisplayed(10000);
        menu.profileBtn.click();
    };

    logout() {
        this.openMenu();
        menu.logoutBtn.waitForDisplayed(2000);
        menu.logoutBtn.click();
    };

    getUserEmail() {
        menu.userBtn.waitForDisplayed(2000);
        return menu.userBtn.getValue();
    };

};

module.exports = MenuActions;