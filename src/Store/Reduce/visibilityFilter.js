import { visibilityFilters } from "../Actions";

const VisibilityFilters = (state = visibilityFilters, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_fILTER":
      return action.filter;
    default:
      return state;
  }
};
export default VisibilityFilters;
