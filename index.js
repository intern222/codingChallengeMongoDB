const fs = require("fs");

///////////READ PART/////////

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

jsonReader("./file.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const isObject = function(object){
    if(object === null){
      return false;
    }
    return (typeof object === 'object');
  };

  var i=0;
  var j=0;

  var objects = [];
  var childs = [];

  var objectsData = [];
  var childsData = [];

  var response = [];
  var row = JSON.parse('{}');
  var colName = '';

  for (let object in data){
    {/*objects[i]=Object.keys(data)[i];*/} // write "a", "b" and "c"

    if (!isObject(data[object])){
      colName = Object.keys(data)[i];
      row[`${colName}`] = data[object];
      response = row;
    }

    if (isObject(data[object])){

      for (let child in data[object]){
        //console.log(secundary, data[object][child]);  child: value
        {/*childs[j] = child;
        childsData[j] = data[object][child];
        j++;*/}

        colName = [Object.keys(data)[i] + '.' + child];
        row[`${colName}`] = data[object][child];
        response = row;
        
      }

    } else {
      //console.log(object, data[object])  object: value
      {/*objectsData[i] = data[object];*/}

    }
    i++;
  }

///////////////WRITE PART/////////

  response = JSON.stringify(response, null, 2);

  fs.writeFile('./newFile.json', response, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
});





