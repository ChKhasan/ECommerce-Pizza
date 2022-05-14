import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const OrderHistoryCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        className="accarion_mui mb-5"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between w-100 px-3 position-relative">
              <div className="divider "></div>

              <div className="d-flex flex-column ">
                <Typography sx={{ color: "text.secondary" }}>Заказ</Typography>
                <Typography sx={{ flexShrink: 0 }}>№130312</Typography>
              </div>
              <div className="d-flex flex-column">
                <Typography sx={{ color: "text.secondary" }}>
                  Сумма заказа
                </Typography>
                <Typography sx={{ flexShrink: 0 }}>399 ₽</Typography>
              </div>
              <div className="d-flex flex-column">
                <Typography sx={{ color: "text.secondary" }}>Статус</Typography>
                <Typography sx={{ flexShrink: 0 }}>Обрабатывается</Typography>
              </div>
              <div className="d-flex flex-column">
                <Typography sx={{ color: "text.secondary" }}>
                  Оплачено
                </Typography>
                <Typography sx={{ flexShrink: 0 }}>Картой</Typography>
              </div>
            </div>
            <br />
            <Divider />
            <div className="d-flex flex-row justify-content-between mt-3">
              <div>
                <Typography sx={{ flexShrink: 0 }}>
                  ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                </Typography>
              </div>
              <div>
                <img
                  className="accordion_img"
                  src="../Images/Rectangle 4.png"
                  alt=""
                />
                <img
                  className="accordion_img"
                  src="../Images/Rectangle 4.png"
                  alt=""
                />
                <img
                  className="accordion_img"
                  src="../Images/Rectangle 4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <AccordionCrad />
          <AccordionCrad />
          <AccordionCrad />
          <AccordionCrad />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const AccordionCrad = () => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <img className="accordion_img" src="../Images/Rectangle 4.png" alt="" />
      <Typography
        style={{
          fontFamily: "Inter",
          fontSize: "17px",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "0px",
          textAlign: "left",
        }}
      >
        Пепперони по-деревенски
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: "15px" }}>
        Традиционное тесто, 23 см
      </Typography>
      <div className="product_amount">1 товар</div>
      <h5 className="price"> 399 ₽</h5>
    </div>
  );
};
export default OrderHistoryCard;
