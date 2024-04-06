import { api } from "../config/api";
import { AUTH_API } from "../config/api";

export const authService = {
  login(data) {
    return api.post(`${AUTH_API}/login`, data);
  },
  refreshToken(data) {
    return api.post(`${AUTH_API}/refresh-token`, data);
  },
};
