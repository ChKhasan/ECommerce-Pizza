import React from "react";
import { catigorys } from "../data/Products";
import { useSelector } from "react-redux";
import Cardbox from "./Cardbox";
import Cards from "./Cards";
import { ChangeMediaCard } from ".";

const Catigory = () => {
  const store = useSelector((state) => state.dataSlice);
  return (
    <>
      <XLCardsDraw store={store}/>
      <SXCardsDraw store={store}/>
    </>
  );
};

const XLCardsDraw = ({ store }) => {
  return (
    <div className="d-none d-lg-block">
      {catigorys.map((item) => (
        <Cardbox
          name={item.name}
          cards={store.data
            .filter((items) => items.category == item.name)
            .map((item) => (
              <Cards {...item} />
            ))}
        />
      ))}
    </div>
  );
};

const SXCardsDraw = ({ store }) => {
  return <div className=" d-lg-none">
    {catigorys.map((item) => (
      <Cardbox
        name={item.name}
        cards={store.data
          .filter((items) => items.category == item.name)
          .map((item) => (
            <ChangeMediaCard {...item} />
          ))}
      />
    ))}
  </div>;
};
export default Catigory;
