const Database = require('sqlite-async')

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions,
            opening_hours,
            open_on_weekends
        );
    `)
}

// O módulo exporta o retorno da função execute, ou seja, o db
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)