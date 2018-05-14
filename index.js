const fs = require('fs');

const fileName = "test";

function saveFile() {
    if (fs.existsSync(fileName)) {
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
