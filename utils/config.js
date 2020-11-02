require('dotenv').config()

let PORT=process.env.PORT
let MONGOURL=process.env.MONGOURL
let PIN=process.env.PIN

module.exports = {
    PORT,
    MONGOURL,
    PIN
}