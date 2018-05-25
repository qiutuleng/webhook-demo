const Crypto = require('crypto');

// Configure the webhook secret in your github repository
const secret = 'secret'; // For example, please change to your secret.

const getSignature = payload => {
    return Crypto.createHmac('sha1', secret).update(payload).digest('hex');
};

module.exports = (request, response, next) => {
    let signature = getSignature(JSON.stringify(request.body));
    let hubSignature = request.header('x-hub-signature');

    if (Crypto.timingSafeEqual(new Buffer(hubSignature), new Buffer('sha1=' + signature))) {
        next();
    } else {
        return response.status(403).send();
    }
};
