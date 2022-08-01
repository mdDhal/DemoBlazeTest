class ElementUtil {

    async  logMessage(message) {
        process.emit('test:log', message);
    }

    
/**
 * 
 * @param {*} length as per need we can give the length
 * @returns Random string
 */
 async generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let result = "Test_"+randomString;
    return result;
}

}

module.exports = new ElementUtil();