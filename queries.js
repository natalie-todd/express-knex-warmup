const database = require('./database-connection');

const getAll = () => {
return database('student').select()
}

module.exports= {
    getAll
}

//module.exports always exports in an obj. can access obj with dot notation.