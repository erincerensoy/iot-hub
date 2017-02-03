var express = require('express')
  , router = express.Router();

global.actions =
[
{
id:1,
action:"click"
},
{
id:2,
action:"click2"
}
];

router.get('/',function(req,res){
    return res.json({
    actions:global.actions,
    error:false
    });

});
/*
router.get('/:actionid',function(req,res){

for(let i =0;i<global.actions.length;i++)
{
  if(global.actions[i].id === parseInt(req.params.actionid,10)){
     return res.json({
       action:global.actions[i],
       message:"success",
       error:false
     });
}

});
*/
router.post('',function(req,res){

  global.actions.push(req.body);
  return res.json({
   action:global.actions,
   message:"posted",
   error:false
  });
});

module.exports = router;
