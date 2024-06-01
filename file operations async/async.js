const fsPromise = require("fs").promises;

const path = require("path");

process.on("uncaughtException", (err) => {
  if (err) {
    // throw `Go look at your code for this: ${err}`
    console.log(`Go look at your code for this: ${err}`);
    process.exit(1);
  }
});

async function all() {
  try {
    const out = await fsPromise.writeFile(
      path.join(__dirname, "toBeRenamed.txt"),
      "Wrote.............\nThis is the first line\n\n"
    );
    await fsPromise.appendFile(
      path.join(__dirname, "toBeRenamed.txt"),
      "Appended..............\nThis is the second line!!!"
    );
    const read = await fsPromise.readFile(
      path.join(__dirname, "toBeRenamed.txt"),
      "utf8",
      (err, data) => console.log(data)
    );
    console.log(read);
    await fsPromise.rename(
      path.join(__dirname, "toBeRenamed.txt"),
      path.join(__dirname, "SuccessRename.txt")
    );
  } catch (error) {
    throw error;
  }
}

all();
