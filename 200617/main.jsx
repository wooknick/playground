import React from "react";

export class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "",
      items: [],
    };

    this.changeInputComments = this.changeInputComments.bind(this); //this.method.bid(this)
    this.submitItem = this.submitItem.bind(this);
  }
  //this.onChange={this.changeInputComments를 pass하고 있으므로 binding이 필요하다.}

  changeInputComments(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  }

  submitItem() {
    let items = this.state.items;
    let item = this.state.item;

    items.push(item);
    this.setState({ items: items });
  }

  render() {
    return (
      <>
        <div>
          <div className="comments" name="replies">
            <div className="댓글" name="댓글">
              {this.state.items.map((item) => {
                return (
                  <p>
                    <span className="username1">user1</span> {item}
                  </p>
                );
              })}
            </div>
            <p>
              <span className="time">1시간전 </span>
            </p>
          </div>
        </div>
        <form className="addcomment">
          <textarea
            onChange={this.changeInputComments}
            className="Add"
            id="Add"
            type="text"
            placeholder=" 댓글달기..."
            name="item"
          ></textarea>
          <button
            onClick={this.submitItem}
            className="Submit"
            id="Submit"
            type="button"
          >
            게시
          </button>
        </form>
      </>
    );
  }
}
export default Main;
