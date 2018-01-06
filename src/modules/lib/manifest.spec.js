import test from 'tape';

import { assets } from './manifest';

test( "manifest#assets...", sub => {
  sub.test( "...should categorize assets from the provided manifest.", assert => {
    const MANIFEST = {
      "main": [
        "main-33cd5d72e05d09cbbdfc.js",
        "main-d37359c9f2e1365ac54099f3d1c3dc91.css"
      ],
      "vendor": "vendor-e570d6b3ee5df4fda300.js"
    };

    const { scripts, stylesheets } = assets(['vendor', 'main'], MANIFEST );

    assert.deepEqual( scripts, ['vendor-e570d6b3ee5df4fda300.js', 'main-33cd5d72e05d09cbbdfc.js'], 'The correct scripts should be extracted.' );
    assert.deepEqual( stylesheets, ['main-d37359c9f2e1365ac54099f3d1c3dc91.css'], 'The correct stylesheets should be extracted.' );
    assert.end();
  });
});
