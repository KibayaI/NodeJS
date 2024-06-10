import events_data from "../Database/eventsData.mjs";

const findUser = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const id_num = parseInt(id);
  console.log(id_num);

  //TODO: GHJK
  //first num be good even though
  if (isNaN(id_num)) {
    return res.status(400).json({
      error: "Id must be a number!!!",
    });
  }

  const get_index = events_data.findIndex((event) => {
    return event.id === id_num;
  });

  if (get_index === -1) {
    return res.status(404).json({
      error: "Event does not exist",
    });
  }
  req.get_index = get_index;

  next();
};

export default findUser;
