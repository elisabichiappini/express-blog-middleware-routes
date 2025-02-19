const posts = require('../db/posts.json');

module.exports = (req, res, next) => {
    //decostructuring di slug nella req params
    const { slug } = req.params;
    const sluggedPost = posts.find(p => p.slug === slug);

    if(sluggedPost) {
        //scriverlo subito per chè va eseguito
        next();
    }
}