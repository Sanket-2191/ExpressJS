// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // static db = [
  //   {
  //     id: 1,
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     year: 1889,
  //     imageUrl: "https://example.com/starry-night.jpg"
  //   }
  // ];
  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }
  // id, title, artist, year, and imageUrl.
  static findAll(query) {
    // Write your code here to retrieve all art pieces
    return this.db;
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    id = parseInt(id);
    const result = this.db.find(elem => elem.id === id);
    // console.log("looking for :", id + "rd art...>>", result);
    return result;
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const toUpdate = this.db.find(elem => elem.id == id);;
    if (toUpdate) {
      if (data.title) toUpdate.title = data.title;
      if (data.artist) toUpdate.artist = data.artist;
      if (data.year) toUpdate.year = data.year;
      if (data.imageUrl) toUpdate.imageUrl = data.imageUrl;
    }

    return toUpdate;
  }
  // static update(id, data) {
  //   const artPiece = ArtPiece.findOne(id);
  //   if (artPiece) {
  //     Object.assign(artPiece, data);
  //   }
  //   return artPiece;
  // }

  static delete(id) {
    // Write your code here to delete a specific art piece
    id = parseInt(id);
    // console.log("looking to delete product number :", id);
    this.db = this.db.filter(elem => elem.id !== id);
    // console.log("after deleting :", this.db);
    return this.db;
  }
}


// ArtPiece.db.push(new ArtPiece(1, "Starry Night", "Vincent van Gogh", 1889, "https://example.com/starry-night.jpg"));
// ArtPiece.db.push(new ArtPiece(2, "Mona Lisa", "Leonardo da Vinci", 1503, "https://example.com/mona-lisa.jpg"));
// ArtPiece.db.push(new ArtPiece(3, "The Persistence of Memory", "Salvador Dalí", 1931, "https://example.com/persistence-of-memory.jpg"));
// ArtPiece.db.push(new ArtPiece(4, "The Scream", "Edvard Munch", 1893, "https://example.com/the-scream.jpg"));
// ArtPiece.db.push(new ArtPiece(5, "Girl with a Pearl Earring", "Johannes Vermeer", 1665, "https://example.com/girl-with-a-pearl-earring.jpg"));

// { id: 1, title: "Starry Night", artist: "Vincent van Gogh", year: 1889, imageUrl: "https://example.com/starry-night.jpg" },
//     { id: 2, title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503, imageUrl: "https://example.com/mona-lisa.jpg" },
//     { id: 3, title: "The Persistence of Memory", artist: "Salvador Dalí", year: 1931, imageUrl: "https://example.com/persistence-of-memory.jpg" },
