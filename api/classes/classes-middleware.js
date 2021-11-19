const Classes = require("./classes-model");

const verifyClassById = async (req, res, next) => {
  try {
    const classRow = await Classes.getById(req.params.class_id);
    if (classRow) {
      req.class = classRow;
      next();
    } else {
      next({ status: 404, message: "class does not exist" });
    }
  } catch (err) {
    next(err);
  }
};

//fine tune once front end consulted - add name, capacity, reservations
const verifyClassPayload = (req, res, next) => {
  const { time, date, duration, type, intensity, location } = req.body;
  if (!time || !date || !duration || !type || !intensity || !location) {
    next({
      status: 400,
      message:
        "bad payload: time, date, duration, type, intensity, and location required",
    });
  } else if (
    time.length > 128 ||
    date.length > 32 ||
    duration.length > 128 ||
    type.length > 256 ||
    intensity.length > 128 ||
    location.length > 256
  ) {
    next({
      status: 400,
      message:
        "bad payload: time (128), date (32), duration (128), type (256), intensity (128), or location (256) exceeds character limit",
    });
  } else {
    next();
  }
};

module.exports = {
  verifyClassById,
  verifyClassPayload,
};
