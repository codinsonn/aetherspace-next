import glob from 'glob';
import path from 'path';
import express from 'express';
import next from 'next';

/* --- Server Setup ------------------------------------------------------------------------------ */

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

/* --- Routing ------------------------------------------------------------------------------ */

app.prepare().then(() => {

    // Create server
    const server = express();

    // Support dynamic routing
    glob.sync('./src/NextWalkthrough/routes/**/*.js').forEach(file => {
        const route = require(path.resolve(file));
        route.default(app, server, handle);
    });

    // Let Next handle other routes
    server.get('*', (req, res) => handle(req, res));

    // Start server
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });

}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
