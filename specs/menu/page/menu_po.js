class UserMenu {

    get userBtn() {return $('a.user-btn')};
    get dropdownBtn() {return $('button.dropdown-btn')};
    get purchasedCertsBtn() {return $('a[href="/bundles"]')};
    get orderHistoryBtn() {return $('a[href="/user/orders"]')};
    get addFundsBtn() {return $('a[href="/user/add_funds"]')};
    get profileBtn() {return $('a[href="/user/profile"]')};
    get logoutBtn() {return $('button.drop-button')};

};

module.exports = UserMenu;