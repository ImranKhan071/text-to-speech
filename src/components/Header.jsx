import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        style={{ height: 80, marginLeft: 10, marginBottom: 0, marginTop: 10 }}
      />
    </>
  );
};

export default Header;
