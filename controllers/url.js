const{shortId}=require("shortid");

const URL=require("../models/url");
const shortid = require("shortid");

async function  handlegenerateNewShortUrl(req, res) {
    const body=req.body;
    if(!body.redirectUrl){
        return res.status(400).json({error:"redirectUrl is required"});
    }
    if(!isValidUrl(body.redirectUrl)){
        return res.status(400).json({error:"redirectUrl is not valid"});
    }

    const shortId=shortid(8);
    await URL.create({
        shortId,
        redirectUrl:req.body.redirectUrl,
        visitHistory:[],
    });
    return res.json({shortId});
    }

module.exports={handlegenerateNewShortUrl};