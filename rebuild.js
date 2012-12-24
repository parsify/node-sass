var spawn = require('child_process').spawn;

if (process.platform === 'darwin' || (process.platform === 'sunos' || process.platform === 'solaris')) {
  spawn('node-gyp', ['rebuild']);
}
