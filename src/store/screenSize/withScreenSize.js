import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const mapStateToProps = ({ screenSize }) => screenSize;
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export const withScreenSize = (Component) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
