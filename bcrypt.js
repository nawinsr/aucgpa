const bcrypt = require('bcrypt');
const saltRounds = 12;

function hash(myPlaintextPassword) {
    return bcrypt.hashSync(myPlaintextPassword, saltRounds);
}

function compare(myPlaintextPassword, hash) {
    return bcrypt.compareSync(myPlaintextPassword, hash); // true
}

module.exports.hash = hash;
module.exports.compare = compare;