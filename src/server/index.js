import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../App';


const app = express();

//* - it will match every request
app.use(express.static('public'))
app.get('*', (req, res) => {
    const html = renderToString(
            <App />
    );
    res.send(
        `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Portfolio Maeva Tarati</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
    )
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})