var fs = require('fs');

var config = null;

var get = (o) => {
    if(config == null){
        var data = fs.readFileSync('config.json', 'utf8');
        config = JSON.parse(data);
    }
    return config[o];
};

module.exports = {
    get
}