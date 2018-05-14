const fs = require('fs');

const fileName = "test";

function saveFile() {
    fs.appendFile(fileName, "\n" + Date.now(), function (err) {
        if (err) {
            console.log("Erreur : ");
            return console.log(err);
        }
        console.log("Fichier sauvegarde !");
    });
}

setInterval(function () {
    saveFile()
}, 1000);
