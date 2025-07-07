const express = require('express');
const router = express.Router();
require('dotenv').config();
const Note = require('../models/Notes');
const fetchUser = require('../middleware/fetchuser');
const {body , validationResult} = require('express-validator');

//to fetch all notes /api/notes/fetchall
router.get('/fetchall',fetchUser, async (req,res) => {
    try{
        let notes = await Note.find({email : req.user.email});
        return res.json({result : "Success", notes : notes});
    }catch(err)
    {
        return res.status(500).json({result : "failure", message : "Internal server error."});
    }
});

//to add note /api/notes/add
router.post('/add',[
    body("title", "Please enter title").notEmpty(),
    body("style","Please choose a style.").notEmpty()
], fetchUser, async(req,res) => {
    const errs = validationResult(req);
    if(!errs.isEmpty())
    {
        return res.status(400).json({result : "failure",message : `${errs.array().map((x) => {
            return `${x.msg}`;
        }).join('\n')}`});
    }
    try{
        let note = await Note.create({
            email : req.user.email,
            title : req.body.title,
            description : req.body.description,
            style : req.body.style
        })

        return res.json({result : "Success" , note : note});
    }catch(err){
        console.log(err);
        return res.status(500).json({result : "failure", message : "Internal server error."});
    }
});

//to edit note /api/notes/edit
router.put('/edit/:id',[
    body("title", "Please enter title").notEmpty(),
    body("style","Please choose a style.").notEmpty()
],fetchUser, async(req,res) => {
    const errs = validationResult(req);
    if(!errs.isEmpty())
    {
        return res.status(400).json({result : "failure",message : `${errs.array().map((x) => {
            return `${x.msg}`;
        }).join('\n')}`});
    }
    try{
        let temp = {};
        if(req.body.title)
            temp.title = req.body.title;
        if(req.body.description)
            temp.description = req.body.description;
        if(req.body.style)
            temp.style = req.body.style;

        let note = await Note.findOne({_id : req.params.id});
        if(!note)
            return res.status(400).json({result : "failure", message : "Note not Found."});
        if(note.email !== req.user.email)
            return res.status(401).json({result : "failure", message : "Not authorized."});

        let nres = await Note.findByIdAndUpdate(req.params.id, {$set : temp}, {new : true} );
        return res.json({result : "Success" , nres : nres});
    }catch(err){
        console.log(err);
        return res.status(500).json({result : "failure", message : "Internal server error."});
    }

});

//to delete note /api/notes/delete

router.delete('/delete/:id',fetchUser, async(req,res) => {
    try{
        let note = await Note.findOne({_id : req.params.id});
        if(!note)
            return res.status(400).json({result : "failure", message : "Note not found."});
        if(note.email !== req.user.email)
            return res.status(401).json({result : "failure",message : "Not authorized."});

        let rnote = await Note.findByIdAndDelete(req.params.id);
        return res.json({result : "success" , message : "Note deleted Successfully.", note : rnote});
    }catch(err){
        console.log(err);
        return res.status(500).json({result : "failure" , message : "Internal server error."});
    }
});

module.exports = router;