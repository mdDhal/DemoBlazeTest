const Page = require('./basepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {

    get addToCart(){
        return $('//a[@class="btn btn-success btn-lg"]')
    }

    async clickOnAddToCartButton(){
       console.log("clickOnAddToCartButton Started");
     await this.addToCart.click();
       console.log("clickOnAddToCartButton Finished");
    }

/**
     * overwrite specific options to adapt it to page object
     */
 open () {
    return super.open('../pages/product');
}
}
module.exports = new ProductPage();