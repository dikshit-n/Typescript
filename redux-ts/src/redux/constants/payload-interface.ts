import { ActionType } from "./action-types";

// global
export interface dispatch {
  data: { type: string; payload?: any };
}

// 1) repositories page
interface REPOSITORIES_StartAction {
  type: ActionType.SEARCH_REPOSITORIES_START;
}
interface REPOSITORIES_SuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface REPOSITORIES_FailureAction {
  type: ActionType.SEARCH_REPOSITORIES_FAILURE;
  payload: string;
}

export type REPOSITORIES_Payload =
  | REPOSITORIES_StartAction
  | REPOSITORIES_SuccessAction
  | REPOSITORIES_FailureAction;
