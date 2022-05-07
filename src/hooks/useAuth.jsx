
import { TOKEN } from "../const/Token";

const useAuth = () => {
  
    const auth = localStorage.getItem(TOKEN)
    if(auth) {
        return true
    } else {
        return false
    }
};

export default useAuth;
