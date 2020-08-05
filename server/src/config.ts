export default {
    mongodb: {
        uri: 'localhost:27017/website',
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
    // Log Type
    // morgan: 'tiny' 
    tokenSecret: 'learn91'
};
