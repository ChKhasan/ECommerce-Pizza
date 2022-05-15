import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Header from "../Comps/Header";
import Footer from "../Comps/Footer";

const Layout = (props) => {
  const dataSlice = useSelector((state) => state.dataSlice);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 5,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      {" "}
      <Header {...props} />
      <div style={{ height: "130px" }}></div>
      <div className="container-fluid c-color pt-30 pb-30">
        <div className="container-xxl ptt">
          <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className={
              dataSlice.isContainerActive
                ? "buyButton animate__animated animate__bounce"
                : "buyButton"
            }
            id="animBtn"
          >
            <StyledBadge
              badgeContent={
                !dataSlice.selected.length ? "0" : dataSlice.selected.length
              }
              color="success"
            >
              <div>
                <img src="Images/Shopping bag.png" alt="" />
              </div>
            </StyledBadge>
          </div>
          <div className="row">
            <div className="col-12">{props.children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
