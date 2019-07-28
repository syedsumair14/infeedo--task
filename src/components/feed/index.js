import React, { Component } from "react";
import "../../assets/styles/feed.css";

//ACTION
import { getApi, changeEditStatus } from "../../action";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterData: [],
      closeClass: false,
      search: ""
    };
  }

  componentDidMount() {
    this.props.changeEditStatus();
    if (this.props.apiResult.length === 0) {
      this.props.getApi();
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.getApiReducer !== prevProps.getApiReducer) {
  //     this.setState({
  //       data: this.props.getApiReducer.apiResult,
  //       filterData: this.props.getApiReducer.apiResult
  //     });
  //   }
  // }

  searchHandler = e => {
    let searchPattern = e.target.value;
    this.setState({
      search: searchPattern
    });
  };

  viewDetails = post => {
    let { id } = post;
    let savePost = JSON.stringify(post);
    localStorage.setItem(`${id}`, savePost);
    this.props.history.push(`/feed-details/${id}`);
  };

  filterData = item => {
    const { search } = this.state;
    if (item.title && item.title.toLowerCase().includes(search.toLowerCase())) return true;
    if (item.body && item.body.toLowerCase().includes(search.toLowerCase()))
      return true;

  };

  getCards = () => {
      return this.props.apiResult.filter(this.filterData).map((post, i) => {
        return (
          <div key={post.id} className="card mt-3">
            <div className="card-body">
              <li>
                <div className="comment_body text-center font-weight-bold">
                  <h3 className="text-bold text-primary font-weight-bold">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.title.replace(
                          new RegExp(this.state.search.toLowerCase(), "g"),
                          `<span style="background-color: yellow;" >${
                            this.state.search
                          }</span>`
                        )
                      }}
                    />
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.body.replace(
                          new RegExp(this.state.search.toLowerCase(), "g"),
                          `<span style="background-color: yellow;" >${
                            this.state.search
                          }</span>`
                        )
                      }}
                    />
                  </p>
                </div>
              </li>
              <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-2" />
                <div className="col-sm-2" />
                <div className="col-sm-2" />
                <div className="col-sm-2" />
                <div className="col-sm-2">
                  <button
                    onClick={() => this.viewDetails(post)}
                    className="btn btn-dark"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
  };

  toggleSearchBar = () => {
    this.setState({
      closeClass: !this.state.closeClass
    });
  };

  render() {
    return (
      <div className="">
        <div className="comment_block">
          <div id="wrap row">
            <form
              onSubmit={e => e.preventDefault()}
              className="col-sm-12"
              autoComplete="off"
            >
              <input
                autoComplete="off"
                onChange={this.searchHandler}
                id="search"
                name="search"
                type="text"
                placeholder="What title and body are we looking for ?"
              />
              <input id="search_submit" type="submit" />
            </form>
          </div>
        </div>
        <div className="new_comment container p-5">
          <ul className="user_comment">{this.getCards()}</ul>
        </div>

        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apiResult: state.getApiReducer.apiResult,
  isLoading: state.getApiReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getApi, changeEditStatus }
)(index);