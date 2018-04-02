const bsonObjectId = require('bson-objectid');

(function() {
  const args = process.argv;
  if (/^-n\d*$/.test(args[2])) {
    let num;
    num = parseInt(((args[2] || '0').match(/\d+/) || [0])[0], 10);
    if (!num) {
      num = parseInt(((args[3] || '1').match(/\d+/) || [1]), 10);
    }

    for (var i = 0; i < num; i++) {
      console.log(bsonObjectId.generate());
    }
  } else {
    console.log(bsonObjectId.generate());
  }
})()
