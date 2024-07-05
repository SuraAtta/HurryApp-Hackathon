const divStyle = {
  backgroundImage: 'url(../assets/backgroundImage.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

const title = {
    paddingTop: '130px',
    paddingLeft: '50px',
    color: '#85a5ff',
    fontFamily: 'cursive',
    fontWeight: '900'
};

const paraghraph = {
    color: '#d6e4ff',
    paddingTop: '15px',
    paddingLeft: '55px',
    fontSize: '20px',
    fontFamily: 'cursive',

};

const image1 = {
    width: '343px',
    float: 'right',
    marginRight: '0',
    borderRadius: '15px',
    marginTop: '-235px'
}

import Image1 from "../assets/backgroundImage.jpg"

function App() {
  return (
    <div className="container">
            <div style={divStyle}>
        <h1 style={title}>Take Action for <br /> Our Planet</h1>
        <p style={paraghraph}>Explore solutions and join the movement to protect <br /> our climate.</p>
        <img src={Image1} style={image1} alt="Not Found" />
    </div>
    </div>
  );
}
export default App;
