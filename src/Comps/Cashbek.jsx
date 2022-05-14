import Cashin from "./Cashin";
import ScrollContainer from "react-indiana-drag-scroll";
const Cashbek = () => {
  const cash = [
    {
      name: "Images/Group 737.png",
      price: "3 средние пиццы от 999 рублей",
    },
    {
      name: "Images/Group 738.png",
      price: "Кэшбек 10% на самовывоз (доставка)",
    },
    {
      name: "Images/Group 737.png",
      price: "3 средние пиццы от 999 рублей",
    },
    {
      name: "Images/Group 738.png",
      price: "Кэшбек 10% на самовывоз (доставка)",
    },
  ];
 
  return (
    <>
      <div className="container-fluid c-color  pb-30">
        <div className="container-xxl ptt">
          <div className="row">
            <div className="col-12  d-flex justify-content-between  flex-wrap">
              <ScrollContainer className="scroll-container w-100 d-flex justify-content-between">
                {cash.map((item, index) => (
                  <Cashin key={index} name={item.name} price={item.price} />
                ))}
              </ScrollContainer>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashbek;
