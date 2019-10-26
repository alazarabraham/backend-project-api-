var express = require('express');
var router = express.Router();


/* GET home page. */
const boxrec = require("boxrec").Boxrec;


router.get('/', async (req, res, next) =>{
    const cookieJar = await boxrec.login('zooforprez', 'boxrec');

    const gennadyGolovkin = await boxrec.getPersonById(cookieJar, 356831);
    console.log('RESPONSE' + gennadyGolovkin);
    console.log(gennadyGolovkin.name); // Gennady Golovkin
    // console.log(gennadyGolovkin.division); // middleweight
    // console.log(gennadyGolovkin.titlesHeld); // currently held titles
    // console.log(gennadyGolovkin.otherInfo); // other info that couldn't be categorized
    // console.log(gennadyGolovkin.suspended); // will tell if boxer is currently suspended
    // console.log(gennadyGolovkin.bouts); // list of bouts
    // console.log(gennadyGolovkin.bouts[37].opponent.name); // Saul Alvarez    console.log(ggg, boxrec);
    res.render('template', {
    locals: {
      title: 'Boxer Reviews',
      data: gennadyGolovkin
    },
    partials: {
      partial: 'partial-index'}
    });
  });



// const gennadyGolovkin = await boxrec.getPersonById(cookieJar, 356831);
// console.log(gennadyGolovkin.name); // Gennady Golovkin
// console.log(gennadyGolovkin.division); // middleweight
// console.log(gennadyGolovkin.titlesHeld); // currently held titles
// console.log(gennadyGolovkin.otherInfo); // other info that couldn't be categorized
// console.log(gennadyGolovkin.suspended); // will tell if boxer is currently suspended
// console.log(gennadyGolovkin.bouts); // list of bouts
// console.log(gennadyGolovkin.bouts[37].opponent.name); // Saul Alvarez

// // other profiles
// // we optionally specify the `role` as some people have multiple roles
// boxrec.getPersonById(cookieJar, 356831, BoxrecRole.judge);
// const boxerhtml = document.getElementById("recipelist")

module.exports = router;

