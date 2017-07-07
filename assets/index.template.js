module.exports = markup => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Example App</title>
        <meta charset="utf-8">
    </head>
    <body>
        ${markup}
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
`;
