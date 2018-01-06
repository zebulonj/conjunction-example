import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import proxy from 'http-proxy-middleware';

const middlewareConfig = {
  publicPath: '/'
};

export const factory = ({ devServer = {}, ...webpackConfig }, app ) => {
  const { proxy: proxyConfig = {} } = devServer;
  const bundler = webpack( webpackConfig );

  Object.keys( proxyConfig ).forEach( path => {
    app.use( path, proxy( proxyConfig[path] ) );
  });

  return [
    middleware( bundler, { ...middlewareConfig, ...devServer }),
    hot( bundler )
  ]
};

export default factory;
