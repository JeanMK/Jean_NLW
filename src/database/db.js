// importar a dependência do SQLITE3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") // constructor / classe

module.exports = db

// utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {

//     //com comandos SQL eu vou:
//     // 1 - criar tabela 
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     ); 
//     // `)

//     // // 2 - inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (
//     //         ?,?,?,?,?,?,?);
//     //     `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa. Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e papelão"
//     // ]

//     // function aftesInsertdata(err){
//     //     if(err) {
//     //         return Console.log(err)
//     //     }

//     //    Console.log("deu boa")
//     //    Console.log(this)
//     // }

//     // db.run(query, values, aftesInsertdata)

//     // 3 - consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return Console.log(err)
    //     }

    //     console.log("Os dados Dados do banco: ")
    //     console.log(rows)
    // })

//     // // 4 - deletar um dado da tabela
    // db.run(` DELETE FROM places `, [], function(err){
    //     if(err) {
    //         return Console.log(err)
    //     }
    //     console.log("Deletou de boas")
        
    // })
})