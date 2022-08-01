const Page = require('./basepage');
const log4js = require('@log4js-node/log4js-api');
const logger = log4js.getLogger('LoginPage');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

   

    /**
     * define selectors using getter methods
     */
    get userName(){
        return $('//*[@id="sign-username"]')  
    }
    get userPassword(){
        return $('//*[@id="sign-password"]')  
    }

    get signUpSubmitButton(){
        return $('//*[@id="signInModal"]/div/div/div[3]/button[2]')  
    }

    get loginUserName(){
        return $('//*[@id="loginusername"]')  
    }
    get loginUserPassword(){
        return $('//*[@id="loginpassword"]')  
    }

    get loginSubmitButton(){
        return $('//*[@id="logInModal"]/div/div/div[3]/button[2]')  
    }

    get loogedInUserName(){
        return $('//*[@id="nameofuser"]')  
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async registerUser (username, password) {
        logger.info("registerUser staretd ");
        await this.waitForTheElement(2000);
        console.log("User Name for demoblaze " + username);
        await this.userName.setValue(username)
        await this.waitForTheElement(4000);
        console.log("User Name for demoblaze " + password);
        await this.userPassword.setValue(password);
        await this.waitForTheElement(4000);
        console.log("signUpButton click started " + password);
        await this.signUpSubmitButton.click();
        console.log("signUpButton click finished " + password);
        await this.waitForTheElement(10000);
        console.log("registerUser finished ");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async loginWithValidUser(username, password) {
        console.log("loginWithValidUser staretd ");
        await this.waitForTheElement(2000);
        console.log("loginUserName set staretd with :  " + username);
        await this.loginUserName.setValue(username)
        console.log("loginUserName set finished with :  " + username);
        await this.waitForTheElement(4000);
        console.log("loginUserPassword set staretd with :  " + password);
        await this.loginUserPassword.setValue(password);
        console.log("loginUserPassword set finished with :  " + password);
        await this.waitForTheElement(4000);
        console.log("loginSubmitButton click started");
        await this.loginSubmitButton.click();
        console.log("loginSubmitButton click finished");
        await this.waitForTheElement(10000);
        console.log("loginWithValidUser finished ");
    }


    async getTitleOfDemoBlaze() {
        await this.getTitleCurrentPage();
    }

    async getBrowserMaximize(){
        return await this.browserMaximize();
    }

    async acceptAlertPopUp(){
        return await this.clickOnAcceptAlert();
    }

    async getAlertTextFormWebsite(){
        return await this.getAlertTextFromWeb();
    }

    async getLoggedInUserNameText(){
        return await this.loogedInUserName.getText();
     }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('../pages/login');
    }
}

module.exports = new LoginPage();
