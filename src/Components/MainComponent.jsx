import React, { Component } from "react";
import BooksList from "./BooksList";

export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: 1,
          title: "Spider-Man: No Way Home",
          publishedYear: 2021,
          isHiding: false,
        },
        {
          id: 2,
          title: "Iron Man",
          publishedYear: 2008,
          isHiding: false,
        },
        {
          id: 3,
          title: "Thor: Love and Thunder",
          publishedYear: 2022,
          isHiding: false,
        },
        {
          id: 4,
          title: "Avengers-Endgame",
          publishedYear: 2019,
          isHiding: false,
        },
      ],
    };
  }
  handleChange = (id) => {
    console.log(id);
    const { books } = this.state;
    books.map((data) => {
      if (data.id === id) {
        data.isHiding = data.isHiding ? false : true;
        console.log(data.isHiding);
      }
    });
    // this.setState({ books: this.state.books});
    this.setState([...this.state.books,books])
  };
  render() {
    return (
      <div className="">
        <BooksList data={this.state.books} func={this.handleChange} />
      </div>
    );
  }
}
