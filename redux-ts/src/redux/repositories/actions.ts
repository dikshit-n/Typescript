import axios from "axios";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { ActionType } from "../constants/action-types";
import { REPOSITORIES_Payload } from "../constants/payload-interface";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<REPOSITORIES_Payload>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES_START });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_FAILURE,
        payload: "Failed to load results",
      });
    }
  };
};
