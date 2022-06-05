// nested object
const eatLess = {
  eat: {
    morning: {
      dawn: " dates and fruits",
      morning: "mashed potato and lentil soup",
      lastMorning: "fruits drinks",
    },
    lunch: "chicken fri and cows Meat",
    breakFist: "milk and dates",
  },
};

// nasted Array
const myMusic = [
  {
    artist: "sammy sone",
    title: "voice tone",
    release_year: 2007,
    formats: ["cd", "8T", "LP", "RIP", "until 16D"],
    gold: "true",
    team: {
      learBbew: "sicago",
      freeVoice: "japan",
    },
  },
  {
    artist: "Beau lewn",
    title: "cereal man",
    release_year: 1997,
    formats: ["youtube video", "music box"],
  },
];

console.log(myMusic[0].team.learBbew); // accesing manipulating objects values
