// init database
const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const parks = data.parks;
const activities = data.activities;

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
    console.log(columbus.insertedId + " : " + columbus.acknowledged);
    const playgroundColumbus = await activities.createActivity(
      columbus.insertedId.toString(),
      "Playground Columbus Park",
      "1",
      "20"
    );
    const Tennis Columbus = await activities.createActivity(
        columbus.insertedId.toString(),
        "Tennis Columbus Park",
        "2",
        "4"
    );
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
    const PC = await parks.createPark(
      "Pier C Park",
      "08:00",
      "22:00",
      "340 Sinatra Dr, Hoboken, NJ 07030"
    ); //Activities: Playground
    const PA = await parks.createPark(
      "1600 Park",
      "07:00",
      "22:00",
      "340 Sinatra Dr, Hoboken, NJ 07030"
    ); //Activities: Soccer
  } catch (e) {
    console.log(e);
  }
  console.log("Done seeding database");

  await dbConnection.closeConnection();
};

main();
