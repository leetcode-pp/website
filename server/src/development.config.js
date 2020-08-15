module.exports = {
    
    mongodb: {
        uri: `mongodb://localhost:27017/website`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true, // If this option is false, program won't create indexes automatically
            poolSize: 20
        }
    },
    koa: {
        port: 8000 // Koa Http Listen Port
    },
    tokenSecret: 'learn91'
};
