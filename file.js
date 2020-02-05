console.log('Read begins .. >>')
read('./files/new1.txt', 'UTF-8')
    .then(data => {
        console.log('Success >> ', data)
    })
    .catch(err => {
        console.log('Error >> ', err)
    })
    .finally(()=>{
        console.log('Finally block ends')
    })


//rename
console.log('Rename begins >> ')
rename('./files/new7.txt', './files/new4.txt')
    .then(data => {
        console.log('Successfully renamed >> ', data)
    })
    .catch(err => {
        console.log('Error while renaming >> ', err)
    })
    .finally(()=> {
        console.log('Finally from rename')
    })


    //delete
   
    deleteFile('./files/new5.txt')
        .then(data => {
            console.log('Successfully deleted >> ', data)
        })
        .catch(err => {
            console.log('Error while deleting file >> ',  err)
        })
        .finally(()=>{
            console.log('Finally block from delete')
        })