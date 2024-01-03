import React from 'react';
const EcommerceCarousel = () => {
  return (
    <>
      <header style={headerStyle}>
        <img
          src="https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1703330691~exp=1703331291~hmac=1103b77b96757d7bb3c266ce7791cf79daaf83172169988250993fad6cebde43"
          alt="Header"
          style={imageStyle}
        />
      </header>
    </>
  );
};
const headerStyle = {

  textAlign: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};



export default EcommerceCarousel;
