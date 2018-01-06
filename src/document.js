export const scriptTags = ( scripts ) => {
  if ( !Array.isArray( scripts ) ) throw new Error( 'Expected an array of script urls.' );

  return scripts
    .map( script => `<script type="text/javascript" src="${ script }"></script>` )
    .join( '' );
}

export const stylesheetTags = ( stylesheets ) => {
  if ( !Array.isArray( stylesheets ) ) throw new Error( 'Expected an array of stylesheet urls.' );

  return stylesheets
    .map( stylesheet => `<link rel="stylesheet" type="text/css" href="${ stylesheet }" />` )
    .join( '' );
}

export const Document = ({ state = {}, config = {}, content = '', scripts = [], stylesheets = [] } = {}) => {
  return `<html>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <title>Conjunction Example</title>

    ${ stylesheetTags( stylesheets ) }
  </head>
  <body id="body">
    <div id="modal-root"></div>
    <div id="content">${ content }</div>

    <script type="text/json" id="config">${ JSON.stringify( config ) }</script>
    <script type="text/json" id="state">${ JSON.stringify( state ) }</script>
    ${ scriptTags( scripts ) }
  </body>
</html>`;
};

export default Document;
