interface Users {
  source: String | any;
  user: String | any;
  name: String;
  cheked: boolean;
}

const fakeStories: Users[] = [
  {
    source: require("../assets/story5.jpg"),
    user: require("../assets/28.jpg"),
    name: "Frankie Stein",
    cheked: false,
  },
  {
    source: require("../assets/story4.jpg"),
    user: require("../assets/40.jpg"),
    name: "Morty Jones",
    cheked: false,
  },
  {
    source: require("../assets/story3.jpg"),
    user: require("../assets/68.jpg"),
    name: "King Kobra",
    cheked: true,
  },
  {
    source: require("../assets/story2.jpg"),
    user: require("../assets/8.jpg"),
    name: "Turu Leta",
    cheked: false,
  },
];

export default fakeStories;
