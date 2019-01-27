const lib = require('lib');

/**
* Send sms to phone
* @param {string} name Who you are
* @param {string} body Message
* @param {string} number phone number
* @param {string} token token
* @returns {string} token token
*/

module.exports = async (name, body, number, token) => {
    const sms = lib({ token }).utils.sms['@1.0.9'];
    try {
        await sms({
            to   : number,
            body : `From ${name}. ${body}.`
        });
        return `hello ${name}, I am venikman. I got your message.`;
    }
    catch (error) {
        console.log('err', error);
        return `We got problem to send a Message. ${error}`;
    }
};
