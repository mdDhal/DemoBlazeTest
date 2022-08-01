const Page = require('./basepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

  /**
   * define selectors using getter methods
   */
   get signUpButton(){
    return $('//*[@id="signin2"]')
}
/**
 * login Button locators
 */
get loginButton(){
    return $('//*[@id="login2"]')
}

get logoutButton(){
    return $('//*[@id="logout2"]')
}


/**
 * Phone Catagory locators
 */
 get phoneGroup(){
    return $('//a[@class="list-group-item"][2]')
}

get phoneTitle(){
    return $('//*[contains(text(),"Samsung galaxy s6")]')
}

get laptopTitle(){
    return $('//*[contains(text(),"Sony vaio i5")]')
}

get cartButton(){
    return $('//*[@id="cartur"]')
}


get deleteFromCart(){
    return $('//*[contains(text(),"Delete")]')
}

get placeOrderButton(){
    return $('//button[@data-target="#orderModal"]')
}

get nameOfUser(){
    return $('//*[@id="name"]')
}

get userCountry(){
    return $('//*[@id="country"]')
}

get userCity(){
    return $('//*[@id="city"]')
}

get userCreditCard(){
    return $('//*[@id="card"]')
}

get validMonthOfCc(){
    return $('//*[@id="month"]')
}

get validYearOfCc(){
    return $('//*[@id="year"]')
}


get purchaseButton(){
    return $('//*[contains(text(),"Purchase")]')
}

get laptopGroup(){
    return $('//a[@class="list-group-item"][3]')
}

/**
 * Thank You Purchase Message Locators for validation
 */

get thankYouMessage(){
    return $('//*[contains(text(),"your purchase!")]')
}


get messageDetailsOnPurchase(){
    return $('//div[@class="sweet-alert  showSweetAlert visible"]/p')
}

get okButton(){
    return $('//button[@class="confirm btn btn-lg btn-primary"]')
}


get contactButton(){
    return $('//*[@data-target="#exampleModal"]')
}


get contactEmail(){
    return $('//*[@id="recipient-email"]')
}

get contactName(){
    return $('//*[@id="recipient-name"]')
}

get messageIfAny(){
    return $('//*[@id="message-text"]')
}


get sendMessage(){
    return $('//*[@id="exampleModal"]/div/div/div[3]/button[2]')
}

get addToCartButton(){
    return $('//a[@class="btn btn-success btn-lg"]')
}

get aboutUs(){
    return $('//*[@data-target="#videoModal"]')
}

get closeButton(){
    return $('//*[@id="videoModal"]/div/div/div[3]/button')
}



/**
 * 
 * @returns 
 */
 async getDemoBlazeHomePageTitle(){
    return await this.getTitleCurrentPage();
    
}

async clickOnSignUpButton(){
    console.log("Click on sign up button started")
    await this.signUpButton.click();
    console.log("Click on sign up button finished")
}

async clickOnLoginButton(){
    console.log("Click on Login button started")
    await this.loginButton.click();
    console.log("Click on Login button finished")
}

async clickOnLogoutButton(){
    console.log("clickOnLogoutButton started")
    await this.logoutButton.click();
    console.log("clickOnLogoutButton finished")
}

async clickOnPhoneCatagory(){
    console.log("clickOnPhoneCatagory started")
    await this.phoneGroup.click();
    console.log("clickOnPhoneCatagory finished")
}

async clickOnLaptopCatagory(){
    console.log("clickOnLaptopCatagory started")
    await this.laptopGroup.click();
    console.log("clickOnLaptopCatagory finished")
}

async clickOnFirstPhoneList(){
    console.log("clickOnFirstPhoneList started")
    await this.phoneTitle.click();
    console.log("clickOnFirstPhoneList finished")
}

async clickOnFirstLaptopList(){
    console.log("clickOnFirstLaptopList started")
    await this.laptopTitle.click();
    console.log("clickOnFirstLaptopList finished")
}


async clickOnCart(){
    console.log("clickOnCart started")
    await this.cartButton.click();
    console.log("clickOnCart finished")
}

async clickOnDeleteFromCartButton(){
    console.log("clickOnDeleteFromCartButton started")
    await this.deleteFromCart.click();
    console.log("clickOnDeleteFromCartButton finished")
}


async clickOnSendMsgButton(){
    console.log("clickOnSendMsgButton started")
    await this.sendMessage.click();
    console.log("clickOnSendMsgButton finished")
}


async clickOnPlaceOrderButton(){
    console.log("clickOnPlaceOrderButton started")
    await this.placeOrderButton.click();
    console.log("clickOnPlaceOrderButton finished")
}

async clickOnPurchaseButton(){
    console.log("clickOnPurchaseButton started")
    await this.purchaseButton.click();
    console.log("clickOnPurchaseButton finished")
}

async getFirstPhoneProduct(){
    return await this.phoneTitle.getText();
    
}

async getFirstLaptopProduct(){
    return await this.laptopTitle.getText();
    
}


async clickOnLoginButton(){
    return await this.loginButton.click();
}

async userDetailsPage (name, country, city, credit_card, month, year) {
    console.log("orderDetails staretd ");
    await this.waitForTheElement(2000);
    console.log("Name of the User " + name);
    await this.nameOfUser.setValue(name)
    await this.waitForTheElement(2000);
    console.log("User country " + country);
    await this.userCountry.setValue(country);
    await this.waitForTheElement(2000);
    console.log("User city " + city);
    await this.userCity.setValue(city);
    await this.waitForTheElement(2000);
    console.log("User credit Card Number " + credit_card);
    await this.userCreditCard.setValue(credit_card);
    await this.waitForTheElement(2000);
    console.log("Valid month of CC " + month);
    await this.validMonthOfCc.setValue(month);
    await this.waitForTheElement(2000);
    console.log("Valid month of CC " + year);
    await this.validYearOfCc.setValue(year);
    await this.waitForTheElement(2000);
    console.log("Purchase button click started ");
    await this.clickOnPurchaseButton();
    console.log("Purchase button click finished ");
    await this.waitForTheElement(30000);
    console.log("orderDetails finished ");
}

async getSuccessfullPurchaseMsgFormWebsite(){
    return await this.thankYouMessage.getText();
}

async getPurchaseMsgDetailsFormWebsite(){
    return await this.messageDetailsOnPurchase.getText();
}


async clickOnOkButton(){
    console.log("clickOnOkButton started")
    await this.okButton.click();
    console.log("clickOnOkButton finished")
}

async clickOnContactButton(){
    console.log("clickOnContactButton started")
    await this.contactButton.click();
    console.log("clickOnContactButton finished")
}

async clickOnAddToCartButton(){
    console.log("clickOnAddToCartButton started")
    await this.addToCartButton.click();
    console.log("clickOnAddToCartButton finished")
}

async clickOnAboutUsButton(){
    console.log("clickOnAboutUsButton started")
    await this.aboutUs.click();
    console.log("clickOnAboutUsButton finished")
}

async clickOnCloseButton(){
    console.log("clickOnAboutUsButton started")
    await this.closeButton.click();
    console.log("clickOnAboutUsButton finished")
}


async validateNewMessage(contact_email, contact_name, message) {
    console.log("userDetailsPage staretd ");
    await this.waitForTheElement(2000);
    console.log("Contact_email of the User " + contact_email);
    await this.contactEmail.setValue(contact_email)
    await this.waitForTheElement(2000);
    console.log("contact_name of the User " + contact_name);
    await this.contactName.setValue(contact_name);
    await this.waitForTheElement(2000);
    console.log("message if any" + message);
    await this.messageIfAny.setValue(message);
    await this.waitForTheElement(2000);
    console.log("userDetailsPage finished ");
}




 /**
     * overwrite specific options to adapt it to page object
     */
  open () {
    return super.open('home');
}

}

module.exports = new HomePage();