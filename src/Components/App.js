import Main from "./Main";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { removePost } from "../redux/actions";

/*<==== This is the Container Component, this passes the data to top level====>*/
//<====  The top level is Main.js====>//
function mapStateToProps(state) {
  return {
    posts: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePost}, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;