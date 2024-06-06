import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const events_data = JSON.parse(
  await fs.readFile(path.join(__dirname, "eventsData.json"))
);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(events_data);
});

app.get("/events/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const id_num = parseInt(id);

  const get_id = events_data.find((event) => event.id === id_num);

  res.send(get_id);
});

app.put("/events/:id", (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const id_num = parseInt(id);
  const findIndex = events_data.findIndex((event) => {
    return event.id === id_num;
  });
  events_data[findIndex] = { id: id_num, ...body };
  fs.writeFile(
    path.join(__dirname, "eventsData.json"),
    JSON.stringify(events_data)
  );

  res.sendStatus(200);
});

app.post("/events", (req, res) => {
  const { body } = req;
  const postData = { id: events_data[events_data.length - 1].id + 1, ...body };
  events_data.push(postData);
  fs.writeFile(
    path.join(__dirname, "eventsData.json"),
    JSON.stringify(events_data)
  );
  res.sendStatus(200).send(events_data);
});

app.delete("/events/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const id_num = parseInt(id);
  const delete_event = events_data.findIndex((event) => event.id === id_num);
  events_data.splice(delete_event, 1);
  fs.writeFile(
    path.join(__dirname, "eventsData.json"),
    JSON.stringify(events_data)
  );
  res.send(`Event ${id_num} deleted successfully`);
});

app.listen(3000 || process.env.PORT, () =>
  console.log("The port is running on port 3000")
);
