const Cloud = require("@google-cloud/storage");
const path = require("path");
const gscServicesKey = path.join(__dirname, "./gcskey.json");

const { Storage } = Cloud;
const storage = new Storage({
  keyFilename: gscServicesKey,
  projectId: "firm-catalyst-322610",
});

module.exports = storage;
