const fs = require('fs');

const fileName = "test";

function saveFile() {
    fs.readFile(fileName, 'utf8', function (err,data) {
        if (err) {
            console.log("Erreur : ");
            return console.log(err);
        }
        console.log("Contenu du fichier : ");
        console.log(data);
        let file = data + "\n" + Date.now();
        fs.writeFile(fileName, file, function(err) {
            if(err) {
                console.log("Erreur : ");
                return console.log(err);
            }
            console.log("Fichier sauvegarde !");
        });
    });
}

setInterval(function () {
    saveFile()
},1000);
