import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, unAddProduct } from "../redux/dataSlice";

const addArrayData = (Component) => {
  return class extends React.Component {
   
 addPro = (itemId) => {
   
      // dispatch(addProduct(itemId));
    };

   unAddPro = (itemId) => {
      // dispatch(unAddProduct(itemId));
    };
    render() {
      return (
        <Component addPro={"this.addPro"} unAddPro={this.unAddPro} />
      );
    }
  };
};

export default addArrayData;
