const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');


var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var fs = require('fs');
var Estructurador = require('./Estructurador');

//set IBM cloud credentials in this section
var personalityInsights = new PersonalityInsightsV3({
  version_date: '2017-10-13',
  username: 'apikey',
  password: 'K7RZakeGruUSOgnKUA_S3e3ebyExB-_APyWu5iuhQNep'
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.get('/upload', (req, res) => {
res.render('upload', {qs: req.query});
});
var x;
app.post('/upload', urlencodedParser ,(req, res) => {
  //here we already have req.body data
  // console.log(req.body);
  // console.log(typeof req.body);
  // console.log(JSON.stringify(req.body));
  // console.log(typeof JSON.stringify(typeof req.body));

var cont = JSON.stringify(req.body.p1 + req.body.p2 + req.body.p3 + req.body.p4 + req.body.p5);


var audaciaN;
console.log(cont);
  var profileParams = {
    // Get the content from the JSON file.

    content: cont,
    content_type: 'text/plain',
    consumption_preferences: true,
    content_language: 'es',
    accept_language: 'es',
    raw_scores: true
  };
  personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    //console.log(JSON.stringify(profile, null, 2));
    x = profile;
    var audaciaN = JSON.stringify(x.personality[0].children[0].name, null, 2);
    var audaciaP = JSON.stringify(x.personality[0].children[0].percentile, null, 2);
    var inAr = JSON.stringify(x.personality[0].children[1].name, null, 2);
    var inArP = JSON.stringify(x.personality[0].children[1].percentile, null, 2);
    var emocional = JSON.stringify(x.personality[1].children[2].name, null, 2);
    var emocionalP = JSON.stringify(x.personality[1].children[2].percentile, null, 2);
    var imagin = JSON.stringify(x.personality[0].children[3].name, null, 2);
    var imaginP = JSON.stringify(x.personality[0].children[3].percentile, null, 2);
    var intelec = JSON.stringify(x.personality[0].children[4].name, null, 2);
    var intelecP = JSON.stringify(x.personality[0].children[4].percentile, null, 2);
    var desafAut = JSON.stringify(x.personality[0].children[5].name, null, 2);
    var desafAutP= JSON.stringify(x.personality[0].children[5].percentile, null, 2);
    var necex = JSON.stringify(x.personality[1].children[0].name,null,2);
    var necexP = JSON.stringify(x.personality[1].children[0].percentile,null,2);
    var caut = JSON.stringify(x.personality[1].children[1].name,null,2);
    var cautP = JSON.stringify(x.personality[1].children[1].percentile,null,2);
    var ob = JSON.stringify( x.personality[1].children[2].name, null, 2);
    var obP = JSON.stringify( x.personality[1].children[2].percentile, null, 2);
    var dis = JSON.stringify( x.personality[1].children[3].name, null, 2);
    var disP = JSON.stringify( x.personality[1].children[3].percentile, null, 2);
    var autodis = JSON.stringify( x.personality[1].children[4].name, null, 2);
    var autodisP = JSON.stringify( x.personality[1].children[4].percentile, null, 2);
    var autoEf = JSON.stringify( x.personality[1].children[5].name, null, 2);
    var autoEfP = JSON.stringify( x.personality[1].children[5].percentile, null, 2);
    var act = JSON.stringify( x.personality[2].children[0].name, null, 2);
    var actP = JSON.stringify( x.personality[2].children[0].percentile, null, 2);
    var seg = JSON.stringify( x.personality[2].children[1].name, null, 2);
    var segP = JSON.stringify( x.personality[2].children[1].percentile, null, 2);
    var aleg = JSON.stringify( x.personality[2].children[2].name, null, 2);
    var alegP = JSON.stringify( x.personality[2].children[2].percentile, null, 2);
    var busqem = JSON.stringify( x.personality[2].children[3].name, null, 2);
    var busqemP = JSON.stringify( x.personality[2].children[3].percentile, null, 2);
    var sim = JSON.stringify( x.personality[2].children[4].name, null, 2);
    var simP = JSON.stringify( x.personality[2].children[4].percentile, null, 2);
    var sociab = JSON.stringify( x.personality[2].children[5].name, null, 2);
    var sociabP = JSON.stringify( x.personality[2].children[5].percentile, null, 2);
    var altru = JSON.stringify( x.personality[3].children[0].name, null, 2);
    var altruP = JSON.stringify( x.personality[3].children[0].percentile, null, 2);
    var coo = JSON.stringify( x.personality[3].children[1].name, null, 2);
    var cooP = JSON.stringify( x.personality[3].children[1].percentile, null, 2);
    var modes = JSON.stringify( x.personality[3].children[2].name, null, 2);
    var modesP = JSON.stringify( x.personality[3].children[2].percentile, null, 2);
    var intransi = JSON.stringify( x.personality[3].children[3].name, null, 2);
    var intransiP = JSON.stringify( x.personality[3].children[3].percentile, null, 2);
    var compas = JSON.stringify( x.personality[3].children[4].name, null, 2);
    var compasP = JSON.stringify( x.personality[3].children[4].percentile, null, 2);
    var confianzab = JSON.stringify( x.personality[3].children[5].name, null, 2);
    var confianzaP = JSON.stringify( x.personality[3].children[5].percentile, null, 2);
    var vehem = JSON.stringify( x.personality[4].children[0].name, null, 2);
    var vehemP = JSON.stringify( x.personality[4].children[0].percentile, null, 2);
    var preoc = JSON.stringify( x.personality[4].children[1].name, null, 2);
    var preocP = JSON.stringify( x.personality[4].children[1].percentile, null, 2);
    var mel = JSON.stringify( x.personality[4].children[2].name, null, 2);
    var melP = JSON.stringify( x.personality[4].children[2].percentile, null, 2);
    var desm = JSON.stringify( x.personality[4].children[3].name, null, 2);
    var desmP = JSON.stringify( x.personality[4].children[3].percentile, null, 2);
    var tim = JSON.stringify( x.personality[4].children[4].name, null, 2);
    var timP = JSON.stringify( x.personality[4].children[4].percentile, null, 2);
    var susTen = JSON.stringify( x.personality[4].children[5].name, null, 2);
    var susTenP = JSON.stringify( x.personality[4].children[5].percentile, null, 2);
  


    var y=Estructurador.cleansing(x);
    console.log(y);

  }
  res.render('profile', {
  au: audaciaN,
  aup: audaciaP,
  inar: inAr,
  inarp: inArP,
  emo: emocional,
  emoP:emocionalP,
  ima:imagin,
  imaP:imaginP,
  inte:intelec,
  intep:intelecP,
  desa:desafAut,
  desap:desafAutP,
  nec:necex,
  necP:necexP,
  cau:caut,
  cauP:cautP,
  o: ob,
   ob1:  obP ,
   di:  dis ,
   dis1:  disP ,
   autodi:  autodis ,
   autodis1:  autodisP ,
   autoE:  autoEf ,
   autoEf1:  autoEfP ,
   ac:  act ,
   act1:  actP ,
   se:  seg ,
   seg1:  segP ,
   ale:  aleg ,
   aleg1:  alegP ,
   busqe:  busqem ,
   busqem1:  busqemP ,
   si:  sim ,
   sim1:  simP ,
   socia:  sociab ,
   sociab1:  sociabP ,
   altr:  altru ,
   altru1:  altruP ,
   co:  coo ,
   coo1:  cooP ,
   mode:  modes ,
   modes1:  modesP ,
   intrans:  intransi ,
   intransi1:  intransiP ,
   compa:  compas ,
   compas1:  compasP ,
   confianza:  confianzab ,
   confianza1:  confianzaP ,
   vehe:  vehem ,
   vehem1:  vehemP ,
   preo:  preoc ,
   preoc1:  preocP ,
   me:  mel ,
   mel1:  melP ,
   des:  desm ,
   desm1:  desmP ,
   ti:  tim ,
   tim1:  timP ,
   susTe:  susTen ,
   susTen1:  susTenP



    });//este es el view que se carga
});


});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
