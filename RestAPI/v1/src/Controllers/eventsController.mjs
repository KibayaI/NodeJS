import events_data from "../Database/eventsData.mjs";

export const listEvents = (req, res) => {
 res.send(events_data)
};

listEvents()
