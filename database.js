//database.js

//update 
//db.<col_name>.update({},{},{})
//1st object is query builder eg color:red
//2nd object is payload with $set as key eg {$set : {payload}}
//3rd object is optional multi, upsert

//remove
//db.<col_name>.remove({}) //dont keep empty object
//

//drop collection
//db.<col_name>.drop()

//drop database
//db.dropDatabase()