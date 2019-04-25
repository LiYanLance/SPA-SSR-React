import React, {Component} from "react"
import {Link} from "react-router-dom";
import Home from "./Home";


export default class Post extends Component{
  constructor(props) {
    super(props)
    this.state = {
      post:{}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        post:{
          title: "test title",
          content: "post content",
          author: "li yan",
          url: "https://github.com/LiYanLance"
        }
      })
    },2000)
  }

  render() {
    const post = this.state.post
    return (
      <div>
        <h1>Post Page</h1>
        <Link to="/">Link to Home</Link>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <article>{post.content}</article>
        <p>Link<a href={post.url} target="_blank">{post.url}</a></p>
      </div>
    )
  }
}
