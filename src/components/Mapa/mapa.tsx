import React from 'react';

function Mapa() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.6530857705698!2d-52.38244308276597!3d-24.04329570581182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed7512489beb1b%3A0x2f3ba4bdfb430072!2sCentro%2C%20Campo%20Mour%C3%A3o%20-%20State%20of%20Paran%C3%A1!5e0!3m2!1sen!2sbr!4v1711061189362!5m2!1sen!2sbr"
      width="700"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Mapa;