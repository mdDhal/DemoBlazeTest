const LoginPage = require('../../pages/login.page');
const HomePage = require('../../pages/home.page');
const loginData=require("../../testdata/demoblazetestdata");
const { homedir } = require('os');
const homePage = require('../../pages/home.page');
const ProductPage = require('../../pages/product.page');
const { month, year } = require('../../testdata/demoblazetestdata');
const common=require('../../utils/elementUtil');
describe('My DemoBlaze  application', () => {
    const userName = common.generateString(5);

    it('Validating New User registered succssfully', async () => {
        await LoginPage.open();
        await LoginPage.getBrowserMaximize();
        const demoBalzeHomePageTitle = await HomePage.getDemoBlazeHomePageTitle();
        // logger.info("DemoBlaze Homeapge Title = " + demoBalzeHomePageTitle);
        console.log("DemoBlaze Homeapge Title = " + demoBalzeHomePageTitle);
        expect(demoBalzeHomePageTitle).toEqual(loginData.demoBlazeTitle);
        await HomePage.clickOnSignUpButton();
        await LoginPage.waitForTheElement(10000);
        // await LoginPage.registerUser(loginData.user,loginData.password);
        
        await LoginPage.registerUser(await userName,loginData.password);
        const alertText = await LoginPage.getAlertTextFormWebsite();
        expect(alertText).toEqual(loginData.signUpSuccesfulMessage);
        await LoginPage.waitForTheElement(2000);
        await LoginPage.clickOnAcceptAlert();
    });

    it('Validate newly cretaed user should logged in successfully', async () => {
        await HomePage.clickOnLoginButton();
        await LoginPage.loginWithValidUser(await userName,loginData.password);
        await LoginPage.waitForTheElement(2000);
        const loogedInUserName= await LoginPage.getLoggedInUserNameText();
        expect(loogedInUserName).toEqual("Welcome " + await userName);
        await LoginPage.waitForTheElement(5000);
        await HomePage.clickOnLogoutButton();
    });

    it('Add phone product to cart from catagory and Validate ', async () => {
        await HomePage.clickOnPhoneCatagory();
        await LoginPage.waitForTheElement(5000);
        await HomePage.clickOnFirstPhoneList();
        const PhoneTitle = await homePage.getFirstPhoneProduct();
        console.log("Selected first phone Title = " + PhoneTitle);
        expect(PhoneTitle).toEqual(loginData.firstPhoneTitle);
        await ProductPage.clickOnAddToCartButton();
        await LoginPage.waitForTheElement(5000);
        const alertText = await LoginPage.getAlertTextFormWebsite();
        expect(alertText).toEqual(loginData.addProductSuccessfullyMessage);
        await LoginPage.waitForTheElement(2000);
        await LoginPage.clickOnAcceptAlert();

    });

    it('Validate the added product into cart ', async () => {
        await HomePage.clickOnCart();
        await LoginPage.waitForTheElement(5000);
        await HomePage.clickOnPlaceOrderButton();
        await LoginPage.waitForTheElement(3000);
        await HomePage.userDetailsPage(loginData.name,loginData.country,loginData.city,loginData.credit_card,loginData.month,loginData.year);
        // await LoginPage.waitForTheElement(1000);
        const purchaseMsg = await HomePage.getSuccessfullPurchaseMsgFormWebsite();
        console.log("Thank you msg on success purchase = " + purchaseMsg);
        expect(purchaseMsg).toEqual(loginData.ItemSuccessfullyMessage); 
        // await LoginPage.waitForTheElement(2000);
        // const purchaseMsgDetails = await HomePage.getPurchaseMsgDetailsFormWebsite();
        // console.log("Message details on purchase = " + purchaseMsgDetails);
        // expect(purchaseMsgDetails).toEqual(loginData.messageDetailsOnPurchase); 
        // await LoginPage.waitForTheElement(2000);
        await HomePage.clickOnOkButton();
        
    });

    it('Add Laptop product to cart from catagory and Validate ', async () => {
        await HomePage.clickOnLaptopCatagory();
        await LoginPage.waitForTheElement(2000);
        await homePage.clickOnFirstLaptopList();
        await LoginPage.waitForTheElement(1000);
        const laptopTitle = await homePage.getFirstLaptopProduct();
        console.log("Selected first Laptop Title = " + laptopTitle);
        expect(laptopTitle).toEqual(loginData.firstLaptopTitle);
        await HomePage.clickOnAddToCartButton();
        await LoginPage.waitForTheElement(4000);
        const alertTextMsgForLaptop = await LoginPage.getAlertTextFormWebsite();
        console.log("Thankyou msg on adding Laptop = " + alertTextMsgForLaptop);
        expect(alertTextMsgForLaptop).toEqual(loginData.alertMessageForLaptop);
        await LoginPage.waitForTheElement(4000);
        await LoginPage.clickOnAcceptAlert();
        await LoginPage.waitForTheElement(4000);
        await HomePage.clickOnCart();
        await LoginPage.waitForTheElement(3000);
        await homePage.clickOnDeleteFromCartButton();
        await LoginPage.waitForTheElement(3000);
    });


    it('Validate the About us tab ', async () => {
        await HomePage.clickOnAboutUsButton();
        await LoginPage.waitForTheElement(3000);
        await HomePage.clickOnCloseButton();
        await LoginPage.waitForTheElement(3000);
    });

    it('Validate the Contact tab ', async () => {
        await HomePage.clickOnContactButton();
        await LoginPage.waitForTheElement(2000);
        await HomePage.validateNewMessage(loginData.contact_email, loginData.contact_name, loginData.message);
        await LoginPage.waitForTheElement(1000);
        await HomePage.clickOnSensgButton();
        const alertTextMsg = await LoginPage.getAlertTextFormWebsite();
        console.log("Thankyou msg on success contact = " + alertTextMsg);
        expect(alertTextMsg).toEqual(loginData.contactSuccesMsg);
        await LoginPage.waitForTheElement(2000);
        await LoginPage.clickOnAcceptAlert();
    });

  

    

});


