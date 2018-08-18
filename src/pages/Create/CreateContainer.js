import { connect } from "react-redux";
import actions from "../../redux/actions";

import Create from "./Create";

const mapState = state => ({
  create: state.create
});

const mapDispatch = {
  startCreate: actions.startCreate
};

export default connect(
  mapState,
  mapDispatch
)(Create);
