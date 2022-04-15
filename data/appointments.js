// Appointments is a sub-document
const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;

module.exports = {
  async createAppointment(userOneId, userTwoId, activityId, parkId, time) {
    if (!userOneId || !userTwoId || !activityId || !parkId)
      throw "please provide all inputs";
    if (!ObjectId.isValid(userOneId)) throw "invalid user ID";
    if (!ObjectId.isValid(userTwoId)) throw "invalid user ID";
    if (!ObjectId.isValid(activityId)) throw "invalid activity ID";
    if (!ObjectId.isValid(parkId)) throw "invalid park ID";

    const newId = ObjectId();
    const newDate = new Date();
    let newAppointment = {
      appointmentId: newId,
      userOneId: userOneId,
      userTwoId: userTwoId,
      parkId: parkId,
      activityId: activityId,
      date: newDate,
      time: time,
      approvement: false,
      status: "not matched",
    };

    const userCollection = await users();
    const updateInfo = await userCollection.updateOne(
      { _id: ObjectId(userId) },
      { $addToSet: { appointments: newAppointment } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Could not add a review";
    return true;
  },
};
