const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

const client = new mongoclient(url)

async function firstmongo(){
    await client.connect()
    const db = client.db('firstdb');
    console.log('connected');
    const myfirstdata = await db.collection('firstdata').insertOne({name:"Merlins",course:"angular"})
    console.log(myfirstdata);
    client.close();
}
firstmongo();