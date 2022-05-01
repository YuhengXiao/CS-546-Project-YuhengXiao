// init database
const users = require("../data/users");
const parks = require("../data/parks");
const activities = require("../data/activities");
const appointments = require("../data/appointments");
const comments = require("../data/comments");
const reviews = require("../data/reviews");

const dbConnection = require("../config/mongoConnection");
const { getPark, getParkByName } = require("../data/parks");

async function test() {
  const db = await dbConnection.connectToDb();
  await db.dropDatabase();

  console.log("------------Init Users------------");
  const user1 = await users.createUser(
    "Yuheng",
    "Xiao",
    "yxiao38@stevens.edu",
    "Xyh123456"
  );
  const user2 = await users.createUser(
    "Yue",
    "Qin",
    "qinyue12345@gmail.com",
    "qinyue12345"
  );
  const user3 = await users.createUser(
    "David",
    "Yang",
    "davidtayloryang@gmail.com",
    "davidyang12345"
  );
  await users.createUser(
    "Yutong",
    "Wei",
    "weiyutong123@stevens.edu",
    "12345678"
  )
  console.log("------------create users successfully------------");

  console.log("------------Init Parks------------");
  const columbus = await parks.createPark(
    "Columbus Park",
    "06:00",
    "22:00",
    "900 Clinton St, Hoboken, NJ 07030"
  ); //Activities: Tennis
  console.log(columbus._id + " : " + columbus._id);
  const churchSquare = await parks.createPark(
    "Church Square Park",
    "06:00",
    "23:00",
    "400 Garden St, Hoboken, NJ 07030"
  ); //Activities: Basketball
  const madison = await parks.createPark(
    "Madison Park",
    "06:00",
    "22:00",
    "305 Monroe St, Hoboken, NJ 07030"
  ); //Activities: Jog
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
  ); //Activities: Yoga
  const PA = await parks.createPark(
    "1600 Park",
    "07:00",
    "22:00",
    "340 Sinatra Dr, Hoboken, NJ 07030"
  ); //Activities: Rugby
  await parks.updateParkImg(columbus._id, "/public/img/columbus.jpg");
  await parks.updateParkImg(churchSquare._id, "/public/img/church.jpg");
  await parks.updateParkImg(madison._id, "/public/img/madison.jpg");
  await parks.updateParkImg(sinatra._id, "/public/img/sinatra.jpg");
  await parks.updateParkImg(stevens._id, "/public/img/stevens.jpg");
  await parks.updateParkImg(CP._id, "/public/img/castlePoint.jpg");
  await parks.updateParkImg(PC._id, "/public/img/pierC.jpg");
  await parks.updateParkImg(PA._id, "/public/img/1600park.jpg");
  await parks.updateParkLikes(columbus._id, 55);
  await parks.updateParkLikes(churchSquare._id, 90);
  await parks.updateParkLikes(madison._id, 80);
  await parks.updateParkLikes(sinatra._id, 90);
  await parks.updateParkLikes(stevens._id, 100);
  await parks.updateParkLikes(CP._id, 60);
  await parks.updateParkLikes(PC._id, 65);
  await parks.updateParkLikes(PA._id, 70);
  console.log("------------create parks successfully------------");

  console.log("------------Init Activities------------");
  // create a new activities:

  const TennisColumbus = await activities.createActivity(
    columbus._id.toString(),
    "Tennis",
    "1",
    "10"
  );
  const BasketballChurchSquare = await activities.createActivity(
    churchSquare._id.toString(),
    "Basketball",
    "1",
    "30"
  );
  const JogMadison = await activities.createActivity(
    madison._id.toString(),
    "Jog",
    "1",
    "40"
  );
  const SoccorSinatra = await activities.createActivity(
    sinatra._id.toString(),
    "Soccer",
    "1",
    "22"
  );
  const BaseballStevens = await activities.createActivity(
    stevens._id.toString(),
    "Baseball",
    "1",
    "14"
  );
  const SkateCP = await activities.createActivity(
    CP._id.toString(),
    "Skate",
    "1",
    "15"
  );
  const YogaPC = await activities.createActivity(
    PC._id.toString(),
    "Yoga",
    "2",
    "4"
  );
  const RugbyPA = await activities.createActivity(
    PA._id.toString(),
    "Rugby",
    "4",
    "16"
  );
  //CHURCH SQUARE PARK
  const dogParkChurch = await activities.createActivity(
    churchSquare._id.toString(),
    "Dog Park Church Square Park",
    "1",
    "20"
  );
  const BasketballChurch = await activities.createActivity(
    churchSquare._id.toString(),
    "Basketball Church Square Park",
    "2",
    "4"
  );
  //MADISON PARK
  const playgroundMadison = await activities.createActivity(
    madison._id.toString(),
    "Playground Madison Park",
    "1",
    "20"
  );
  //SINATRA PARK
  const soccerSinatra = await activities.createActivity(
    sinatra._id.toString(),
    "Soccer Sinatra Park",
    "1",
    "22"
  );
  //STEVENS PARK
  const baseballStevens = await activities.createActivity(
    stevens._id.toString(),
    "Baseball Stevens Park",
    "1",
    "20"
  );
  //CASTLE POINT SKATEPARK
  const skateCastlePoint = await activities.createActivity(
    CP._id.toString(),
    "Skate Castle Point Skatepark",
    "1",
    "20"
  );
  //PIER C PARK
  const playgroundPierC = await activities.createActivity(
    PC._id.toString(),
    "Playground Pier C Park",
    "1",
    "20"
  );
  //1600 PARK
  const soccer1600 = await activities.createActivity(
    PA._id.toString(),
    "Soccer 1600 Park",
    "1",
    "22"
  );
  console.log("------------create activities successfully------------");


  console.log("------------Init Appointments------------");
  const appointment1 = await appointments.createAppointment(
    user1._id,
    churchSquare._id,
    BasketballChurchSquare._id,
    "2022",
    "4",
    "16",
    "5",
    "20"
  );
  console.log("------------create appointments successfully------------");

  console.log("------------Init Comments------------");
  const comment1 = await comments.createComment(churchSquare._id, user3._id, 3.5, "I love it!");
  const comment2 = await comments.createComment(columbus._id, user3._id, 4.6, "amazing!");
  const comment3 = await comments.createComment(madison._id, user3._id, 3.9, "free to play");
  const comment4 = await comments.createComment(sinatra._id, user3._id, 4.55, "nice view!");
  const comment5 = await comments.createComment(stevens._id, user3._id, 4.8, "amazing!");
  const comment6 = await comments.createComment(CP._id, user3._id, 4.75, "god!");
  const comment7 = await comments.createComment(PC._id, user3._id, 4.91, "nice park!");
  const comment8 = await comments.createComment(PA._id, user3._id, 4.2, "amazing!");
  await comments.replyComment(comment1._id, "say it again????");
  await comments.replyComment(comment2._id, "say it again????");
  await comments.replyComment(comment3._id, "say it again????");
  await comments.replyComment(comment4._id, "say it again????");
  await comments.replyComment(comment5._id, "say it again????");
  await comments.replyComment(comment6._id, "say it again????");
  await comments.replyComment(comment7._id, "say it again????");
  await comments.replyComment(comment8._id, "say it again????");
  console.log("------------create comments successfully------------");

  console.log("------------Init Reviews------------");
  // const review1 = await reviews.createReview(
  //   user1._id,
  //   BasketballColumbus._id,
  //   "nice!!!!!"
  // );
  console.log("------------create reviews successfully------------");

  console.log("------------add favorite park---------------------");
  await users.addfavorite(user1._id, columbus._id)

  console.log("------------test------------");

  await dbConnection.closeConnection();
}

test();
