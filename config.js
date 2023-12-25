const config = {
    MONGO_DB_URL:"mongodb://localhost:27017/Chatme",
    MONGO_DB_URL_DEBUG:"",
    PORT:process.env.PORT || 3300,
    PRIVATE_KEY:"56454743358713353",
    API_ROUTE:"api/",
    MIN_PASSWORD_LENGTH:6,
    AUTHORIZATION:"Bearer ",
    PROD:false,
    ONE_SIGNAL_ID:"5702b6c3-b860-41a4-a652-84d8e232d126",
    ONE_SIGNAL_SECRET:"NWVhNDYyMGMtNzQ3Mi00OTE2LTllYzMtNWVjMWQxMGJlZTg0",
    HOST:"http://45.147.46.119:3300",
    APP_NAME:"Chat Me",
    EMAIL: "chatme@gmail.com",
    AUTHOR:"ChatMe",
}
module.exports = config