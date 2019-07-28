import React from 'react'

import Comments from "../comments"
import "../../assets/styles/feedDetail.css"


import { getDetail, deleteGetApi, editAPI } from "../../action"
import { connect } from 'react-redux'
import {toast} from 'react-toastify'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      editTrue: false,
      isEdited: false
    };
  }

  deletePost = () => {
    this.props.deleteGetApi(this.props.match.params.id)
    toast.error('Post Deleted')
  };

  savePost = () => {
    let id = this.props.match.params.id;
    this.props.editAPI(this.state.title, this.state.body, id);
    toast.warning('Edited')
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    let dataPersist = localStorage.getItem(this.props.match.params.id);
    if (!dataPersist) {
      return this.props.getDetail(id);
    }
    let fillTheBlanks = JSON.parse(localStorage.getItem(id));

    this.setState({
      title: fillTheBlanks.title,
      body: fillTheBlanks.body
    });
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps &&
      prevProps.getApiReducer &&
      this.props.getApiReducer &&
      prevProps.getApiReducer.apiResult !== this.props.getApiReducer.apiResult
    ) {
      this.props.history.push("/feed");
    }
    if (
      prevProps &&
      prevProps.getApiReducer &&
      this.props.getApiReducer &&
      prevProps.getApiReducer.apiResult.length ===
        this.props.getApiReducer.apiResult.length &&
      this.props.getApiReducer.isEdited
    ) {
      this.props.history.push("/feed");
    }
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div>
            <div className=" row ">
              <div className="offset-sm-10 col-sm-2">
                {this.state.editTrue ? (
                  <abbr title="Save post">
                  <a  onClick={this.savePost}>
                    <img alt="Save Button" src="https://img.icons8.com/carbon-copy/66/000000/save.png" />
                  </a>
                  </abbr>
                ) : (
                  <abbr title="Delete post">
                  <a onClick={this.deletePost} >
                    <img alt="Delete Button" src="https://img.icons8.com/wired/50/000000/delete-forever.png" />
                  </a>
                  </abbr>
                )}
                {this.state.editTrue ? (
                  <abbr title="Cancel">
                  <a
                    
                    onClick={() =>
                      this.setState({ editTrue: !this.state.editTrue })
                    }
                  >
                    <img alt="Cancel Button" src="https://img.icons8.com/pastel-glyph/48/000000/cancel.png" />
                  </a>
                  </abbr>
                ) : (
                  <abbr title="Edit post">
                  <a
                    
                    onClick={() =>
                      this.setState({ editTrue: !this.state.editTrue })
                    }
                  >
                    <img alt="Save Button" src="https://img.icons8.com/wired/48/000000/edit.png" />
                  </a>
                  </abbr>
                )}
              </div>
            </div>
          </div>
          {this.state.editTrue ? (
            <div className="form-group">
              <textarea
                onChange={e => this.handleChange(e, "title")}
                value={this.state.title}
                className="form-control"
                rows="5"
              />
            </div>
          ) : (
            <h1 className="newspaper-title text-primary">{this.state.title}</h1>
          )}
          <article className="main-article shadow">
            <h4 className="author"> Description</h4>
            {this.state.editTrue ? (
              <textarea
                className="form-control"
                onChange={e => this.handleChange(e, "body")}
                rows="10"
                value={this.state.body}
              />
            ) : (
              <div>
                {this.props.getDetailReducer.details
                  ? this.props.getDetailReducer.details.body
                  : this.state.body}
              </div>
            )}
          </article>
          <Comments id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // let detail = getDetailReducer.details
  return state;
};
export default connect(
  mapStateToProps,
  { getDetail, deleteGetApi, editAPI }
)(Details);
