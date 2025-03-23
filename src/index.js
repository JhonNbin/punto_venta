const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Escuchando', app.get('port'));
})