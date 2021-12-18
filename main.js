const express = require('express');
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.zzhx2.mongodb.net/test')
const bodyParser = require('body-parser')
//TODO подключение к базе данных
const cors = require('cors')
// TODO импорт библиотеки
const PORT = process.env.Port || 4000;
const app = express();
app.use(cors()) //TODO подключение cors
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//TODO в json формате отправляю переменную data
//TODO регистрация end point для get запроса по адресу ('/test')
//TODO async function - это обработчик запроса,принимает 2 аргумента
// });

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
const createposts = async ({title,description,id}) => {
    return await client.db().collection("Posts").insertOne({
        postName: title,
        postDescription: description,
        id: id
    })
}



 app.get('/test', async function (req, res) {
      let data = await moove()
      res.json(data)
 })


app.post('/test', async function(req, res) {
    let posts = await createposts(req.body)
    let data = req.body
    console.log(req.body)
    res.json(posts)
})

const moove = async () => {
 return await client.db().collection("Posts").find().toArray();
 //TODO  Обращение к базе данных с функцией найти коллекции и привети её к массиву
 }