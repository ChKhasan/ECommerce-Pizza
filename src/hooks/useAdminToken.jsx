import { ADMIN } from "../const/Token";

const useAdminToken = () => {
  const adminAuth = JSON.parse(localStorage.getItem(ADMIN));
  if (adminAuth.username === "admin") {
    return true;
  } else {
    return false;
  }
};

export default useAdminToken;
