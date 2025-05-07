import { AppRootState } from "./store";

// Селектор для получения status
export const selectStatus = (state: AppRootState) => state.app.status