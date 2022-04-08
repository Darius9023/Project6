const {mongoClient} = require("mongodb");

async function main() {
   
  const uri = "mongodb+srv://Darius2390:Darius2390@cluster0.hnetq.mongodb.net/Cluster0?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try{
    await client.connect();

    await listDatabases(client);

  } catch(e){

    console.error(e);
  } finally{

    await client.close();
  }
  
}

main.catch(console.error);

async function listDatabases(client){

  const dataBasesList = await client.db().admin().listDatabases();

  console.log("DataBases:");

  dataBasesList.databases.forEach(db => {

    console.log(`- ${db.name}`);

  })
}