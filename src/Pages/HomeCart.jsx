import React, { useState } from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { dataBase } from "../redux/dataSlice";
import { CarouselPro, FormInput, PromocodeSend, RegistrationCart } from "../Comps";

const HomeCart = (props) => {
  const { nameCategory } = props;
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedValue1, setSelectedValue1] = useState("b");
  const [selectedValue2, setSelectedValue2] = useState("c");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const controlProps1 = (item) => ({
    checked: selectedValue1 === item,
    onChange: handleChange1,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const controlProps2 = (item) => ({
    checked: selectedValue2 === item,
    onChange: handleChange2,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const dispatch = useDispatch();

  const addElementToData = (item) => {
    document.getElementById(item.id).disabled = "true";
    dispatch(dataBase(item));
  };
  const selected = useSelector((state) => state.dataSlice.selected);
  return (
    <>
      <div className="container-fluid c-color pt-30 pb-30 ">
        <div className="container-xxl ptt">
          <div className="row">
            <div className="col-12">
              <h1>Ваш заказ</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {selected.map((item) => (
                <RegistrationCart {...item} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>

      <PromocodeSend />
      <CarouselPro
        addElementToData={addElementToData}
        title={"Добавить к заказу?"}
        filteName={nameCategory}
        bool={false}
      />
      <CarouselPro
        addElementToData={addElementToData}
        filteName={nameCategory}
        title={nameCategory}
        bool={true}
      />

      <div className="row">
        <div className="col-12">
          <h3>О вас</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <FormInput
            label={"Имя*"}
            placeholder={"Алексей"}
            id={"forname"}
            type={"text"}
          />
        </div>
        <div className="col-4">
          <FormInput
            label={"Номер телефона*"}
            placeholder={"+998"}
            id={"fornomer"}
            type={"number"}
          />
        </div>
        <div className="col-4">
          <FormInput
            label={"Почта"}
            placeholder={"mail@gmail.com"}
            id={"foremail"}
            type={"email"}
          />
        </div>
        
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h3>Доставка</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <FormInput
            label={"Улица*"}
            placeholder={"Пушкина"}
            id={"forstreet"}
            type={"text"}
          />
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-2">
          <FormInput
            label={"Дом"}
            placeholder={"1а"}
            id={"forhome"}
            type={"text"}
          />
        </div>
        <div className="col-2">
          <FormInput
            label={"Подъезд*"}
            placeholder={"1"}
            id={"fortrain"}
            type={"number"}
          />
        </div>
        <div className="col-2">
          <FormInput
            label={"Этаж"}
            placeholder={"2"}
            id={"forleft"}
            type={"number"}
          />
        </div>
        <div className="col-2">
          <FormInput
            label={"Квартира"}
            placeholder={"3"}
            id={"forkvartira"}
            type={"number"}
          />
        </div>
        <div className="col-2">
          <FormInput
            label={"Домофон"}
            placeholder={"0000"}
            id={"forhomein"}
            type={"number"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label className="mt-3 labelInput">Когда выполнить заказ?</label>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex ">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps("a")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Как можно скорее"
              />
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps("b")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="По времени"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h3>Оплата</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex ">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps1("b")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Наличными"
              />
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps1("c")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Картой"
              />
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps1("d")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Apple Pay"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h3>Сдача</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex ">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps2("c")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Без сдачи"
              />
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    {...controlProps2("g")}
                    sx={{
                      color: "#ff7010",
                      "&.Mui-checked": {
                        color: "#ff7010",
                      },
                    }}
                  />
                }
                label="Сдача с"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h3>Комментарий</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Есть уточнения?"
            ></textarea>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12   d-flex justify-content-between  mt-4 align-items-center  ">
          <h5
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "28px",
              letterSpacing: "0px",
              textAlign: "left",
              color: "#FF7010",
            }}
          >
            Итого:{" "}
            {selected.reduce((a, b) => {
              return a + b.price * b.quality;
            }, 0)}{" "}
            ₽
          </h5>
          <button
            className="btn btn2 btn-primary"
            onClick={() => props.propro(selected)}
          >
            <Link to="/orderisaccepted">Оформить заказ</Link>
          </button>
        </div>
      </div>
      <div className="row mt-5"></div>
    </>
  );
};

export default HomeCart;
