const fs = require('fs');

const fileName = "test";

function saveFile() {
    if (fs.existsSync(fileName)) {
        fs.appendFile(fileName, "\n" + Date.now(), function (err) {
            if(err) {
                console.log("Erreur : ");
                return console.log(err);
            }
            console.log("Fichier sauvegarde !");
        });
    } else {
        fs.writeFile(fileName, Date.now(), function(err) {
            if(err) {
                console.log("Erreur : ");
                return console.log(err);
            }
            console.log("Creation du fichier !");
        });
    }
}

setInterval(function () {
    saveFile()
},1000);
