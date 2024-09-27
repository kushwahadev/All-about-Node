import fs from "fs";

// write file Sync...
const writeSyncFile = () =>
  fs.writeFileSync("./text.txt", "file cretae again test");

// write file Async...
const writeAsyncFile = () =>
  fs.writeFile("./text.txt", "file create Asyncly..", (err) => {});

// read file Sync...
const readSyncFile = () => fs.readFileSync("./contact.txt", "utf-8");

// read file Async...
// async function do not return value like sync function
const readAsyncfile = () =>
  fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err, "Error reading contact file");
    } else {
      console.log(result, "read file successfully");
    }
  });

let number = 1;

// append sync file
const appendSyncFile = (fileName, data) => fs.appendFileSync(fileName, data);

// append Async file
const appendAsyncFile = (fileName, data, cb) =>
  fs.appendFile(fileName, data, cb);

// copy file
const copySyncFile = () => fs.cpSync("./text.txt", "./copy.txt", () => {});

// delete file
const deleteSyncFile = () => fs.unlinkSync("./copy.txt");

const fileStats = () => console.log(fs.statSync("./text.txt"));
// fileStats();

export {
  writeAsyncFile,
  writeSyncFile,
  deleteSyncFile,
  fileStats,
  appendSyncFile,
  appendAsyncFile,
  copySyncFile,
  readSyncFile,
  readAsyncfile,
};
