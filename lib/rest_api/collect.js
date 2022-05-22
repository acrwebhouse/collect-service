exports.on = function(app) {
    const preRestApi = '/collect';
    const collect = require('../role/collect');

    app.get(preRestApi + '/accessTime', function(req, res) {
       
        const response = {
            'status':true,
            'data':''
        }

        collect.addAccessTime((result,data)=> {
                response.status = result;
                response.data = data
                res.send(response);
        })
    });

    app.get(preRestApi + '/getData', function(req, res) {
       
        const response = {
            'status':true,
            'data':''
        }

        collect.getData((result,data)=> {
                response.status = result;
                response.data = data
                res.send(response);
        })
    });
}