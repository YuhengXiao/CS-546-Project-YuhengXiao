// init database
const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const parks = data.parks;

const main = async () => {
  const db = await dbConnection.connectToDb();
  await db.dropDatabase();
  try {
    //Parks
    const columbus = await parks.createPark(
      "Columbus Park",
      "06:00",
      "22:00",
      "900 Clinton St, Hoboken, NJ 07030"
    ); //Activities: Playground, Tennis, Basketball
    const churchSquare = await parks.createPark(
      "Church Square Park",
      "06:00",
      "23:00",
      "400 Garden St, Hoboken, NJ 07030"
    ); //Activities: Dog Park, Basketball
    const madison = await parks.createPark(
      "Madison Park",
      "06:00",
      "22:00",
      "305 Monroe St, Hoboken, NJ 07030"
    ); //Activities: Playground
    const sinatra = await parks.createPark(
      "Sinatra Park",
      "00:01",
      "00:00",
      "500 Frank Sinatra Dr, Hoboken, NJ 07030"
    ); //Activities: Soccer
    const stevens = await parks.createPark(
      "Stevens Park",
      "08:00",
      "22:00",
      "401 Hudson St, Hoboken, NJ 07030"
    ); //Activities: Baseball
    const CP = await parks.createPark(
      "Castle Point Skatepark",
      "00:01",
      "00:00",
      "9 Castle Point Terrace, Hoboken, NJ 07030"
    ); //Activities: Skate
  } catch (e) {
    console.log(e);
  }
  console.log("Done seeding database");

  await dbConnection.closeConnection();
};

main();
