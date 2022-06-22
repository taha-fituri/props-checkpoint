import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import logo from "./Images/logo.jpeg";
import Carousal from "./Component/Carusal/Carusal";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Table from "./Component/Table/Table";
import Form from "./Component/Form/Form";
import Card from "./Component/Card/Card";

function App() {
  const handleName = (name) =>
    alert(`the Discounts fo ${name} is very Amazing`);

  const CompanyVision =
    "To receive your inquiries, visit us and communicate with us, please visit our website or contact the nearest branch of the company";
  const address = "Alowaina-Tunes";

  return (
    <div className="App">
      {/* NavBar Code */}
      <NavBar />
      {/* Carousel Code */}
      <Carousal />
      {/* Table Code */}
      <Table />
      {/* Card  & Pagination Code */}
      <Card />
      {/* Pargraph & Form Code */}
      <Form />
      {/* Footer Code */}

      <Footer
        name="LIQUI-MOLY"
        bio={CompanyVision}
        adress={address}
        handleName={handleName}
      >
        {" "}
        <img src={logo} alt="logoCompuny" width="50px" />{" "}
      </Footer>
    </div>
  );
}

export default App;
