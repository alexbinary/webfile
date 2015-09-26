#!/usr/bin/env node

/**
 * PictureSource - HTTP endpoint that returns pictures from a directory
 *
 * index.js - main file
 *
 * @author Alexandre Bintz <alexandre@bintz.io>
 * 09.2015
 */

"use strict";

var folder = './';
var port   = 0;

[ process.argv.length > 2 ? process.argv[2] : null,
  process.argv.length > 3 ? process.argv[3] : null
].forEach(function(arg) { if(arg) {
    if(arg.match(/[0-9]+/)) port   = arg;
    else                    folder = arg;
}});

folder = require('fs').realpathSync(folder);

var server = require('http').createServer(function (req, res) {

  console.log(new Date() + ' request from ' + req.headers.host);

  res.writeHead(200, {
    // 'Content-Type': 'image/jpg',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'referer, range, accept-encoding, x-requested-with'
  });

  var files = require('fs').readdirSync(folder);
  var file = files[Math.floor(Math.random()*files.length)];

  console.log(new Date() + ' serving file ' + file);

  require('fs').createReadStream(folder+'/'+file).pipe(res);

}).listen(port).on('listening', function() {

  console.log('Server running at '+server.address().address+':'+server.address().port);
  console.log('Serving files from '+folder);
});
