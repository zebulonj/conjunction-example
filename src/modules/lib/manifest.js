// @flow

export const assets = ( picks = [], manifest = {} ) => {
  return picks.reduce( ( acc, key ) => {
    let files = manifest[key];

    if ( !files ) return acc;

    files = Array.isArray( files ) ? files : [files];

    const scripts = files.filter( file => file.match( /\.js$/i ) );
    const stylesheets = files.filter( file => file.match( /\.css$/i ) );

    return {
      scripts: [
        ...( acc.scripts || [] ),
        ...scripts
      ],
      stylesheets: [
        ...( acc.stylesheets || [] ),
        ...stylesheets
      ]
    };
  }, {});
};
