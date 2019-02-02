const express = require('express');
const path = require('path');
const request=require('request');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
function getRequest(url) {
    return new Promise(function (success, failure) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                success(body);
            } else {
                failure(error);
            }
        });
    });
};

// An api endpoint that returns a short list of items
app.get('/home', (req,res) => {
    var weathers=[{},{},{},{},{},{}];
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var istanbul=`https://www.metaweather.com/api/location/2344116/${yyyy}/${mm}/${dd}/`;
    var london=`https://www.metaweather.com/api/location/44418/${yyyy}/${mm}/${dd}/`;
    var vancouver=`https://www.metaweather.com/api/location/9807/${yyyy}/${mm}/${dd}/`;
    var dublin=`https://www.metaweather.com/api/location/560743/${yyyy}/${mm}/${dd}/`;
    var helsinki=`https://www.metaweather.com/api/location/565346/${yyyy}/${mm}/${dd}/`;
    var berlin=`https://www.metaweather.com/api/location/638242/${yyyy}/${mm}/${dd}/`;
    
    getRequest(istanbul).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[0]=weatherjson[0];
        
    return getRequest(london);
    }).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[1]=weatherjson[0];
        
        return getRequest(vancouver);
    }).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[2]=weatherjson[0];
       
        return getRequest(dublin);
    }).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[3]=weatherjson[0];
        
        return getRequest(helsinki);
    }).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[4]=weatherjson[0];
        
        return getRequest(berlin);
    }).then(function (body) {
        var weatherjson= JSON.parse(body);
        weathers[5]=weatherjson[0];
        res.json(weathers);
    });

});
app.get('/search/:city', (req,res) => {
    console.log(req.params.city);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var city=req.params.city;
    var first=`https://www.metaweather.com/api/location/search/?query=${city}`;
    var second=`https://www.metaweather.com/api/location/2344116/2000000/${mm}/${dd}/`;
    var woeid=0;
    getRequest(first).then(function (body) {
        var cityinfo= JSON.parse(body);
        if(cityinfo.length==1)
        {
            woeid=cityinfo[0].woeid;
            console.log(woeid);
            second=`https://www.metaweather.com/api/location/${woeid}/${yyyy}/${mm}/${dd}/`;
            return getRequest(second);
        }
        else{
            res.json([]);
        }
       
    }).then(function (body) {
        var last= JSON.parse(body);
        res.json(last);
    });
});

app.get('/woeid/:id', (req,res) => {
    console.log(req.params.id);
   
    var id=req.params.id;
    
    var second=`https://www.metaweather.com/api/location/${id}/`;
    
    getRequest(second).then(function (body) {
        var info= JSON.parse(body);
        res.json(info);
        
   
    });
});
app.use((req,res,next)=>
{
    res.header("Access-Controll-Allow-Origin","*");
    res.header("Access-Controll-Allow-Headers","*");
    if(req.method==='OPTIONS')
    {
        res.header("Access-Controll-Allow-Methods","PUT, POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    
})
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);