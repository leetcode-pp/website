export default {
    mongodb: {
        uri: `mongodb+srv://admin91:91websiteisthebest@cluster0.dyykr.mongodb.net/website?retryWrites=true&w=majority`,
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
    tokenSecret: 'learn91',
    password: '91websiteisthebest',
    user: 'admin91'
};
