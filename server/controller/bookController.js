let books = []
let id = 0


module.exports = {
    read(req, res){
        res.send(books)
    },
    make(req, res){
        let { title, author}= req.body
        books.push({
            id,
            title,
            author
        })
        id++
        
        res.send(books)
    },
    update(req, res) {
        console.log('hello')
        let { id } = req.params;
        let { title, author } = req.body;
        let i = books.findIndex(book => book.id === parseInt(id));
        
        if (i !== -1) {
           
          books[i] = {
            id: books[i].id,
            title: title ? title : books[i].title,
            author: author ? author : books[i].author
          }
        }
        res.status(200).send(books)
    },
    delete(req, res){
        let { id } = req.params
        let index = books.findIndex(book => book.id === parseInt(id))
            if(index !== -1 ){
                books.splice(index, 1)
            }
            res.send(books)
        }
        
    }

