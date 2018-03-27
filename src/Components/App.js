import Main from "./Main";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import { withRouter } from "react-router"
/*<==== This is the Container Component, this passes the data to top level====>*/
//<====  The top level is Main.js====>//
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;