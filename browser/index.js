const path = require('path');
const paths = require('../utils/paths');
require('module-alias')(path.dirname(paths.package));
// const jsdomDevtoolsFormatter = require('jsdom-devtools-formatter');
// jsdomDevtoolsFormatter.install();
const SdenvExtend = require('sdenv-extend');

module.exports = (win, type = 'chrome') => {
  new SdenvExtend({
    memory: {
      SdenvExtend,
    }
  }, win);
  require(`@/browser/${type}`);
  return new SdenvExtend();
}
