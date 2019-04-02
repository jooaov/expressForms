var express = require('express');
var router = express.Router();
const model= require("../data_base/db_connect")
var contUsers=0

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forms');
  console.log("coonectou a rota /")
});

//sucess-create
router.post("/sucess-create",function (req,res,next) {
contUsers++
  model.User.create(req.body, (err) => {
    if(err) return next(err)
    console.log(req.body)
    res.redirect('/listUser')
  })
});

//list
router.get('/listUser', (req, res, next) => {
  console.log("entrou no list")
  model.User.find({}, (err, users) => {
      if (err) return next(err)
      console.log(users)
      res.render('listUser', { users : users })
  })
})
//delete user
//:id=variavel que vem da url
router.get("/delete/:id",(req,res,next) =>{
  console.log("entrou na rota delete")
  model.User.deleteOne({_id : req.params.id }, (err) =>{
  if (err) return next(err)
  console.log("entrou na rota delete E DELETOU")
  res.redirect("/listUser")
 })
})

router.get("/update/:id",(req,res,next) =>{
  console.log("dando update no id="+req.params.id)
  model.User.findById(req.params.id,(err,users) =>{
    if (err) return next(err)
    res.render("update" , {users : users})
  })
})

module.exports = router;
