import * as repositoryActions from "./repositories/actions";

// store all actions in one variable
const actionCreators = {
  ...repositoryActions,
};

// then export it as single variable
export { actionCreators };
