import { useDispatch } from "react-redux";
import { addProduct, unAddProduct } from "../redux/dataSlice";

const useGainDecrease = () => {
  const dispatch = useDispatch();
  const gain = (itemId) => {
    dispatch(addProduct(itemId));
  };

  const decrease = (itemId) => {
    dispatch(unAddProduct(itemId));
  };

  return { gain, decrease };
};

export default useGainDecrease;
