var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value;
  }
  if (prop === "tracks" && collection[id][prop] === undefined) {
    collection[id][prop] = [value];
  }
  if (prop === "tracks") {
    let track = collection[id][prop];
    track.push(value);
  }
  if (value === "") {
    delete collection[id][prop];
  }
  console.log(collection);
  return collection;
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 2548, "tracks", ""));
console.log(updateRecords(collection, 2468, "artist", ""));
