/**
 * Created by nevda on 5/12/13.
 */
module.exports = function(server){
    //setup the errors
    server.error(function(err, req, res, next){
        if (err instanceof NotFound) {
            res.render('404.jade', { locals: {
                title : '404 - Not Found'
                ,description: ''
                ,author: ''
                ,analyticssiteid: 'XXXXXXX'
            },status: 404 });
        } else {
            res.render('500.jade', { locals: {
                title : 'The Server Encountered an Error'
                ,description: ''
                ,author: ''
                ,analyticssiteid: 'XXXXXXX'
                ,error: err
            },status: 500 });
        }
    });
}