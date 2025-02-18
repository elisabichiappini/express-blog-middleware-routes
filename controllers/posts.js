const posts = require("../db/posts.json");

const show = (req, res) => {
    res.format({
        html: () => {
            let html = '<ul>';
            posts.forEach(post => {
                html += `
            <li>
                <h3>titolo: ${post.title}</h3>
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
    })
}

module.exports = {
    show
}