const activitiesData = require("./activities");
const appointmentsData = require("./appointments");
const commentData = require("./comments");
const parksData = require("./parks");
const reviewData = require("./reviews");
const userData = require("./users");

module.exports = {
  activities: activitiesData,
  appointments: appointmentsData,
  comments: commentData,
  parks: parksData,
  reviews: reviewData,
  users: userData,
};
