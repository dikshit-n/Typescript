import { ActionType } from "../constants/action-types";
import { REPOSITORIES_Payload } from "../constants/payload-interface";

interface State {
  data: string[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const repositoriesReducer = (
  state: State = initialState,
  action: REPOSITORIES_Payload
): State => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES_START:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certainty that 'action' satisfies the
      // SEARCH_REPOSITORIES_START interface
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
