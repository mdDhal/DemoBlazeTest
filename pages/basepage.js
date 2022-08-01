

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url('https://www.demoblaze.com');
    }

    async waitForTheElement(time){
        return browser.pause(time);
    }

    async keysArrowDown(){
        return browser.keys(['ArrowDown']);
    }

    async keysEnter(){
        return browser.keys(['Enter']);
    }

    async browserMaximize(){
        return browser.setWindowSize( 1480, 1000 );
    }

    async getTitleCurrentPage(){
        return browser.getTitle();
    }
    async getFirstPhone(){
        return browser.getFirstPhoneTitle();
    }
    

    async clickOnAcceptAlert(){
        return browser.acceptAlert();
    }


    async getAlertTextFromWeb(){
        return await browser.getAlertText();
    }
    
    async switchWindow(url){
        return browser.switchWindow(url);
        
    }

    async getMsgTextFromWeb(){
        return await browser.getMsgText();
    }
    

    
   

 

   

    


}
