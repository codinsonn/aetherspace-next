const post = (app, server, handle) => {
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post';
        const queryParams = { id: req.params.id, title: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
};

/* --- Export Route ------------------------------------------------------------------------------ */

export default post;
