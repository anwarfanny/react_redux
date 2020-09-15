import { connect } from "react-redux";
import { setVisibilityFilters } from "../../../Store/Actions/index";
import Link from "../../../component/Link/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilters,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Link);
