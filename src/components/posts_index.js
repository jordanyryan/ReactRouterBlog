import React, {Component} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    console.log(this.props.posts);
    return <div>Posts Index</div>
  }
}

function mapStateToProps({posts}) {
  return {posts};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
