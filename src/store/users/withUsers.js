import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const mapStateToProps = ({ projectsReducer }) => projectsReducer;
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export const withUsers = (Component) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
