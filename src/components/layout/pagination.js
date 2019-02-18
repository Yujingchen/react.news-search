import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [1, 2, 3, 4, 5, 6, 7, 8]
    };
    this.handleOnClickPage = this.handleOnClickPage.bind(this);
  }
  handleOnClickPage(e) {
    e.preventDefault();
    const pageName = e.target.name;
    this.props.onClickPage(pageName);
  }
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {this.state.pages.map(page => (
              <li className="page-item" key={page}>
                <a
                  className="page-link"
                  name={page - 1}
                  onClick={this.handleOnClickPage}
                  href="/"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
