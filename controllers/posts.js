const posts = require("../db/posts.json");
const path = require("path");

const show = (req, res) => {
    res.format({
        html: () => {
            let html = '<ul>';
            posts.forEach(post => {
                html += `
            <li>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <img width="200px" src=${`/${post.image}`}/>
                <h6>tags: ${post.tags}</h6>
                <a href="/${post.immagine}" target="_blank"> Visualizza immagine</a> 
                <a href="/posts/${post.slug}/download" target="_blank"> Scarica immagine </a>
            </li>`;
        });
            html += '</ul>';
            res.send(html);
        },
        json: () => {
            res.json({
                data: posts,
                count: posts.length
            })
        }
    })
};

const  updatePost = (nuoviPosts) => {
    const filePath = path.join("__dirname", '../db/posts.json');
}

const store = (req, res) => {
    //step 1 leggere il contenuto del body, ok router.use per il parser del body
    // 2 fare i controlli di validità del body, 
    ['title', 'content'].forEach(stringKey => {
        const value = req.body[stringKey]
        if(!value || typeof value !== 'string' || value.trim().replaceAll('/','').length === 0) {
            res.status(400).send(`Il ${value} non è valido`);
        }
    });
    const { tags } = req.body;
    if(!tags || Array.isArray(tags) || tags.length !== 0) {

    }
    //SE non è valido segnaliamo errore 400, ALTR salviamo nel file.json il nuovo post
    //SE richiesta HTML faccio redirect a /posts aggiornato, SE richiesta JSON invio post in json
    res.end();
}

module.exports = {
    show,
    store
}