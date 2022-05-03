import React from "react";
import Cardbox from "./Cardbox";
import ChangeMediaCard from "./ChangeMediaCard";
import { catigorys } from "../data/Products";
import Cards from "./Cards";
import { useSelector } from 'react-redux';
import dataSlice from '../redux/dataSlice';

const Catigory = (props) => {
  const store = useSelector(state => state.dataSlice)
  console.log(store);
  return (
    <>
      <div className="d-none d-lg-block">
        {catigorys.map((item) => (
          <Cardbox
            filterTitle={props.filterTitle}
            color={props.color}
            name={item.name}
            cardd={store.data
              .filter((items) => items.category == item.name)
              .map((item) => (
                <Cards anim={props.anim} {...item} />
              ))}
          />
        ))}
      </div>
      <div className=" d-lg-none">
        {catigorys.map((item) => (
          <Cardbox
            filterCartigoriy={props.filterCartigoriy}
            filterTitle={props.filterTitle}
            color={props.color}
            name={item.name}
            cardd={store.data
              .filter((items) => items.category == item.name)
              .map((item) => (
                <ChangeMediaCard anim={props.anim} {...item} />
              ))}
          />
        ))}
      </div>
    </>
  );
};

export default Catigory;
