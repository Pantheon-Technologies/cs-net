import { connect } from 'react-redux'
import { togglePost } from '../actions'
import PostsList from '../components/PostsList'
import { VisibilityFilters } from '../actions'

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return posts
    case VisibilityFilters.SHOW_COMPLETED:
      return posts.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return posts.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  togglePost: id => dispatch(togglePost(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)