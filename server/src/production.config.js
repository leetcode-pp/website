module.exports = {
    
    mongodb: {
        uri: `mongodb+srv://admin91:91websiteisthebest@cluster0.dyykr.mongodb.net/website?retryWrites=true&w=majority`,
        options: {
            auto_reconnect: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            poolSize: 20
        }
    },
    koa: {
        port: 8000 // Koa Http Listen Port
    },
    tokenSecret: 'learn91',
    password: '91websiteisthebest',
    user: 'admin91'
};
