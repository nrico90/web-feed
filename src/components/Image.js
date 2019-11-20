import React from "react";
import spinner from "../spinner.jpg";
import LikeCounter from "./LikeCounter";
import Form from "./Form";
import CommentBox from "./CommentBox";

export default class Image extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    fetch(
      "https://apodapi.herokuapp.com/api/?start_date=2018-10-05&end_date=2018-10-10&thumbs=true&image_thumbnail_size=480&image_thumbnail_size=240"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ post: json });
      });
    console.log(this.post);
  }

  render() {
    if (this.state.post === null) {
      return <img src={spinner} alt={"spinner"} />;
    }
    return (
      <div>
        {this.state.post.map(post => {
          return (
            <div className="flexy" key={post.id}>
              <section>
                {/* <p>
                  Name: {post.name} <br />
                  WebSite: {post.url}
                </p> */}
                <img className="image-post" src={post.hdurl} />
                <LikeCounter />
                <Form />
                <CommentBox />
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

/* <div>
        {this.state.post.map(post => {
          return (
              <div key={post.id}>
                  <p >
                      Name: {post.name} <br/>
                      WebSite: {post.url}
                  </p>
                  <img className="image-post" src= {post.hdurl} />
                </div>);
    </div> */
