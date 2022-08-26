const express = require ('express'),
    handlebars = require ('express-handlebars');



const app = express(),
    PORT = process.env.PORT || 8080;

app.use (express.urlencoded({express: true})),
    use (express.json()),
    use (express.static('public'));

app.set ("view engine", "hbs"),
    set ("views", "./views/layuots");

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultlayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
)


app.listen(8080, err => {
    if(err) throw new Error (`Error on server: ${err}`);
    console.log(`Server is running on port: ${PORT}`);
})