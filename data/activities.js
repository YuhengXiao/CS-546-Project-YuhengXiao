// Activities is a sub-document of park
const mongoCollections = require("../config/mongoCollections");
const parks = mongoCollections.parks;
const { ObjectId } = require("mongodb");

module.exports = {
  async createActivity(parkId, name, numberOfCourts, maxPeople) {
    if (!parkId || !name || !numberOfCourts || !maxPeople)
      throw "please provide all inputs";
    if (!ObjectId.isValid(parkId)) throw "invalid park ID";

    const newId = ObjectId();
    let newActivity = {
      _id: newId,
      name: name,
      numberOfCourts: numberOfCourts,
      maxPeople: maxPeople,
      appointments: [],
      reviews: [],
    };

    const parkCollection = await parks();
    const updateInfo = await parkCollection.updateOne(
      { _id: ObjectId(parkId) },
      { $addToSet: { activities: newActivity } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Could not add an activity";
    return true;
  },
};
