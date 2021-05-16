const router = require('express').Router();
const verify = require('./verifyToken');
const Food = require('../model/Food');


// router.get('/', verify, (req,res) => {
//     res.send(req.user);    
// });


//FOODME


//Get back all posts
router.get('/', async (req,res) => {
    try{
        const posts = await Food.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//submit the post
router.post('/', async (req,res) =>{
    const post = new Food({
        itemname: req.body.itemname,
        course: req.body.course,
        price: req.body.price
    });
try {
    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});
//specfic post
router.get('/:postId', async (req,res) => {
    try{
    const post = await Food.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});
//delete Post
router.delete('/:postId', async (req,res) =>{
    try{
    const removedPost = await Food.remove({_id: req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

//update a post
router.patch('/:postId', async (req,res) => {
    try{
    const updatedPost = await Food.updateOne(
        {_id: req.params.postId},
        { $set: {itemname: req.body.itemname} }
        );
        res.json(updatedPost);
    }catch(err){
    res.json({message: err});
    }
});

module.exports = router;