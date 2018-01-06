const el = document.getElementById( 'config' );
const text = el && el.textContent;
const config = text ? JSON.parse( text ) : {};

export default config;
