import React from 'react'

import {loadComments} from '../../action'
import {connect} from 'react-redux'

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter: 10
        }
    }

    componentDidMount(){
        this.props.loadComments(this.props.id)
    }

    loadMoreComments = () => {
        this.setState({
            counter: this.state.counter+10
        })
    }

    showComments = () => {
        if(this.props.comments){
            return this.props.comments.map((comment, i) => {
                if(i<this.state.counter){
                 return <div key={comment.id} name="fade-up" tag="ul" className="comments shadow">
                      <li>
                        <div className="comment-author-meta match">
                          <div className="avatar">
                            <img
                              src="http://orig07.deviantart.net/4bc8/f/2013/240/2/2/free_avatar_aang_icon_by_zutarart-d6k31hx.gif"
                              alt="comment.user"
                            />
                          </div>
                          
                          <div className="user">{comment.name}</div>
                        </div>
                        <div className="comment-text">
                          <p style={{ whiteSpace: "pre-line" }}>
                            {comment.body}
                          </p>
                        </div>
                        <div className="comment-meta">
                          <span>{comment.email}</span>
                        </div>
                      </li>
                    </div>
                    }
            })

        }
    }

    render(){
        return(
            <div className="row">
            <div className="col">
              <div id="comments" className="comments-wrapper">
                <h2>
                  <span> Comments</span>
                </h2>
                    {this.showComments()}
              </div>
              <div className="row">
                  <div className="offset-5"></div>
                  <div className="col-md-3 pb-5">
                    <a onClick={this.loadMoreComments} >Load more</a>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = ({loadCommentsReducer}) => {
    return {comments:loadCommentsReducer.comments}
}

export default connect(mapStateToProps, {loadComments})(Comments)