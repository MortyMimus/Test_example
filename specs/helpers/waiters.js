class CustomWaits {

    forSpinner() {
        const spinner = $('//*[@id="ng-app"]/body/div[1]/div/div/div/div[2]/div/span');
        //spinner.waitForDisplayed(3000);
        spinner.waitForDisplayed(10000, true);
    };

};

module.exports = CustomWaits;