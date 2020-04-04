module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3001),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    dbName: "bot-manager",
    app:{
        title:"Price Monitor",
        description:'To monitor price',
        head:{
            titleTemplate:'Price Monitor',
            meta:[
                {
                    name:"description",
                    content:"To monitor price."
                },
                {charset:"utf-8"}
            ]
        }
    }
};
