import logo from "../assets/footerLogo.png"
const logoStyle = {
  width: '50px',
  marginLeft: '60px',
  paddingTop: '30px'
};
const climate = {
  fontFamily: 'cursive',
  fontSize: '30px',
  paddingTop: '30px',
  color: '#d6e4ff',
  paddingLeft: '10px'
};
const footer = {
  display: 'flex',
  background: '#120338',
  width: '100%',
  paddingBottom: '25px', 
}
const copyRight = {
  textAlingn: 'center',
  marginTop: '-65px',
  fontSize: '25px',
  fontFamily: 'cursive',
  color: '#d6e4ff',
}

function App() {
  return (
    <div className="footer ">
      <div className="title" style={footer}><img src={logo} style={logoStyle} alt="" /> <span style={climate}>Climate</span></div>
    <div className="copyRight" style={copyRight}>
    <span>&copy; CopyRight Climate of IRQ.</span>
    </div>
    </div>
  );
}
export default App;
