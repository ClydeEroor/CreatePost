const express = require('express');
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.zzhx2.mongodb.net/test')
//TODO подключение к базе данных
const cors = require('cors')
// TODO импорт библиотеки
// TODO переводится Cross-origin resource sharing он дает разрешение делать запрос обмена данными
const PORT = process.env.Port || 4000;
const app = express();
app.use(cors()) //TODO подключение cors
app.get('/test', async function (req, res) {
    let data = await moove()
    res.json(data); // TODO в json формате отправляю переменную data
    //TODO регистрация end point для get запроса по адресу ('/test')
    //TODO async function - это обработчик запроса,принимает 2 аргумента
});

async function start() {
    try {
        await client.connect();
        app.listen(PORT, () => {
            console.log("Server has been started...!");
        });
    } catch (e) {
        console.log(e);
    }
}

start();

const moove = async () => {
    await client.connect();
    //await client.db().collection("asdkffwf").insertOne({name: "donpablo"})
    return await client.db().collection("asdkffwf").find().toArray();
    //TODO  Обращение к базе данных с функцией найти коллекции и привети её к массиву



    //await client.db().collection("asdkffwf").insertOne({name: "kakoitonick",age:21})

    // await client.db.collection("accounts").insertOne({name:"Peter",age:15});
    //await client.db().collection('users').find({});
    // const users = await clienct.db().collection('users').find({});
    //const users = await client.db().collection()
    //await users.findOne({name: "admin"});
    //const obj = users.findOne({name: "admin"});
    //console.log(users);
}
/*
function getValue(){
   let nameUser = document.getElementById('name').value;
   let snameUser = document.getElementById('sname').value;
   let nickUser = document.getElementById('nick').value;
   let passUser = document.getElementById('pas').value;
   let user = {
       name: nameUser,
       sname: snameUser,
       nick: nickUser,
       password: passUser,
   }
   return user;
}
const getDateUsers = getValue();
*/
// db.asdkffwf.update(
//     { name: "Jekatop"},
//     {
//         $set: {
//             name: "Petyatop",
//             age: 33
//         }
//     }
// )
// db.asdkffwf.insertOne([
//{name: "pes",age:3},
//{name: "Nadia",age:17},
//{name: "Stas",age:29},
// ])

