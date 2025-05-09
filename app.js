const http = require("http")
const fileSystem = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    const d = url.parse(req.url, true)
    const query = d.query
    let fileLocation

    switch (query.menu) {
        case "/":
            fileLocation = "pages/index.html"
            break
        case "dashboard":
            fileLocation = "pages/index.html"
            break
        case "mahasiswa":
            fileLocation = "pages/mahasiswa.html"
            break
        case "kaprodi":
            fileLocation = "pages/kaprodi.html"
            break
        case "manager":
            fileLocation = "pages/manager.html"
            break
        default:
            fileLocation = "pages/index.html"
    }

    fileSystem.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-type:": "text/html"})
            return res.end()
        }
        res.writeHead(200, {"Content-type": "text/html"})
        res.write(data)
        return res.end()
    }) 
})
server.listen(8000, () => {
    console.log("Server run at port https://localhost:8000")
})