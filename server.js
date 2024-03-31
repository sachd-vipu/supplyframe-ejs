var express = require('express');
const path = require("path")
const cacheControl = require('express-cache-controller');
const fetch = require('node-fetch');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
  app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

  app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

  app.use(cacheControl({
    noCache: true
  }));
app.set('view engine', 'ejs');


let cache = {};
const CACHE_DURATION = 120000; 

app.get('/', function(req, res) {
res.render('pages/home');
});

  app.get('/search', async (req, res) => {
    try {
        const { apt, dep, arr } = req.query;
        let queryParams = { apt };
        
        if (dep) queryParams.dep = dep;
        if (arr) queryParams.arr = arr;
        
        const response = await axios.get(`https://api.aviationapi.com/v1/vatsim/pilots`, {
      params: queryParams
    });

      res.render('pages/home', { data: response.data });
    } catch (error) {
      res.send(error.message);
    }
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Ref: https://mammothinteractive.com/build-a-hello-world-website-and-web-server-with-ejs-node-and-express/
