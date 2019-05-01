const show = (app, server, handle) => {
    server.get('/s/:id', (req, res) => {
        const actualPage = '/show';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
};

/* --- Export Route ------------------------------------------------------------------------------ */

export default show;
