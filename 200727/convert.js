const util = require("util");
const fs = require("fs");
const blue = require("./js/blue");
const red = require("./js/red");

const parsing = (data, label) => {
  let artist = "";
  let id = "";
  let targetArtist = "";
  let targetVideo = "";
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].ARTIST !== "") {
      artist = data[i].ARTIST;
      let artist_obj = { stage: label, artist: artist, videos: [] };
      newData.push(artist_obj);
    }
    if (data[i].ID !== "") {
      id = data[i].ID;
      let video_obj = { id: id, comments: [] };
      targetArtist = newData.find((i) => i.artist === artist);
      targetArtist.videos.push(video_obj);
    }
    targetVideo = targetArtist.videos.find((i) => i.id === id);
    targetVideo.comments.push(data[i].COMMENT);
  }
  return newData;
};

const parsedBlue = parsing(blue, "blue");
const parsedRed = parsing(red, "red");

// console.log(util.inspect(parsedBlue, { depth: 4 }));
fs.writeFile(
  "parsed.json",
  JSON.stringify([...parsedBlue, ...parsedRed]),
  "utf8",
  (e) => {
    // console.error(e);
  }
);
