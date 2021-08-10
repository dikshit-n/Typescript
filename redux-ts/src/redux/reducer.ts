import { combineReducers } from "redux";
import repositoriesReducer from "./repositories/reducer";

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;
