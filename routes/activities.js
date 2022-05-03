const express = require('express');
const router = express.Router();
const data = require('../data/activities');
const parkdata = require('../data/parks');
router
  .route('/')
  .get(async (req, res) => {
    try {

      const tennis = await data.getAllParksByActivityName("Tennis");
      const Basketball = await data.getAllParksByActivityName("Basketball");
      const Jog = await data.getAllParksByActivityName("Jog");
      const Soccer = await data.getAllParksByActivityName("Soccer");
      const Baseball = await data.getAllParksByActivityName("Baseball");
      const Skate = await data.getAllParksByActivityName("Skate");
      const Yoga = await data.getAllParksByActivityName("Yoga");
      const Rugby = await data.getAllParksByActivityName("Rugby");

      res.render('function/Activity', { tennis, Basketball, Jog, Soccer, Baseball, Skate, Yoga, Rugby });
    } catch (e) {
      res.status(500).json(e);
    }
  })
  .post(async (req, res) => {
    let activityInfo = req.body;

    try {
      if (!activityInfo.parkId || !activityInfo.name || !activityInfo.numberOfCourts || !activityInfo.maxPeople || !activityInfo.appointmens || !activityInfo.comments || !activityInfo.reviews)
        throw 'please provide all inputs for act';
      const activity = await data.createActivity(
        activityInfo.parkId,
        activityInfo.name,
        activityInfo.numberOfCourts,
        activityInfo.maxPeople,
        activityInfo.appointmens,
        activityInfo.comments,
        activityInfo.reviews
      );
      res.status(200).json(activity);
    } catch (e) {
      res.status(400).json(e);
    }
  });
router
  .route("/id/:id")
  .get(async (req, res) => {
    try {
      const parks = await data.getParkById(req.params.id);
      res.render("function/SinglePark", { parks: parks });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

module.exports = router;