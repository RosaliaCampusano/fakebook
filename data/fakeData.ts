interface User {
  source: String | any;
  online: boolean;
  name: string;
  time: string;
  postImage: string | any;
  postContent: string;
  likes: string;
  comments: string;
}

const fakeUsers: User[] = [
  {
    source: require("../assets/0.jpg"),
    online: Math.random() >= 0.5,
    name: "Frankie Stein",
    time: "5min",
    postImage: require("../assets/post10.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "23",
    comments: "27 comentarios",
  },
  {
    source: require("../assets/88.jpg"),
    online: Math.random() >= 0.5,
    name: "Morty Makeijan",
    time: "15min",
    postImage: require("../assets/post6.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "168",
    comments: "29 comentarios",
  },
  {
    source: require("../assets/12.jpg"),
    online: Math.random() >= 0.5,
    name: "Turu Letis",
    time: "165min",
    postImage: require("../assets/post9.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "2k",
    comments: "27 comentarios",
  },
  {
    source: require("../assets/28.jpg"),
    online: Math.random() >= 0.5,
    name: "Zurra Kapote",
    time: "21min",
    postImage: require("../assets/post1.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "168",
    comments: "678 comentarios",
  },
  {
    source: require("../assets/39.jpg"),
    online: Math.random() >= 0.5,
    name: "Fake Sponjeitor",
    time: "22min",
    postImage: require("../assets/post2.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "3k",
    comments: "4k comentarios",
  },
  {
    source: require("../assets/8.jpg"),
    online: Math.random() >= 0.5,
    name: "Kadaver Seco",
    time: "25min",
    postImage: require("../assets/post3.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "3",
    comments: "12 comentarios",
  },
  {
    source: require("../assets/40.jpg"),
    online: Math.random() >= 0.5,
    name: "Naroa Zurrumbona",
    time: "36min",
    postImage: require("../assets/post7.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "254",
    comments: "132 comentarios",
  },
  {
    source: require("../assets/42.jpg"),
    online: Math.random() >= 0.5,
    name: "Peste Nauseabunda",
    time: "42min",
    postImage: require("../assets/post5.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "666",
    comments: "178 comentarios",
  },
  {
    source: require("../assets/1.jpg"),
    online: Math.random() >= 0.5,
    name: "Fetido Gonzalez",
    time: "64min",
    postImage: require("../assets/post4.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "345",
    comments: "227 comentarios",
  },
  {
    source: require("../assets/68.jpg"),
    online: Math.random() >= 0.5,
    name: "Penumbras Oscuras",
    time: "85min",
    postImage: require("../assets/post8.jpg"),
    postContent: `Vivamus leo elit, malesuada ac arcu non, dapibus lobortis sapien. Etiam in fringilla nunc. 
Sed interdum quam sed ex fringilla, lobortis rutrum urna dapibus...`,
    likes: "6k",
    comments: "2327 comentarios",
  },
];

export default fakeUsers;
