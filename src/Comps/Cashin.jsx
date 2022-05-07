
const Cashin = ({ name, price }) => {
  return (
    <>
      <div className="col-3 mt-5 cashin-box d-flex justify-content-center  col-lg-3 rel ">
        <img className="cashbek" src={name} alt="" />
        <p className="abs">{price}</p>
      </div>
    </>
  );
};

export default Cashin;
