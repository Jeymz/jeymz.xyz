const express = require('express')
const port = 3000
const app = express()

let knownLanguages = ["NodeJS", "HTML", "JS", "CSS", "Bash", "Python", "VisualBasic"]
let knownTechnologies = ["Express", "Socket.io", "Bootstrap", "JQuery", "MySQL"]
let pastExperience = ["Desktop Support", "Server Administration", "Datacenter Support"]

app.use('/', express.static(__dirname + '/src'))

app.listen(port, (err) => {
  if (err) console.log(err)
  else console.log('Server is listening on port ' + port)
})
