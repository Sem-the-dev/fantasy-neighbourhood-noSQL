const db = connect("mongodb://localhost:27017/shelter")


db.people.drop()
// db.homes.drop()

db.people.insertMany([
    { name: "Robin Hood", age: 10 },
    { name: "Cinderella", age: 2 },
    { name: "Little Red Riding Hood", address: '24 Whitehorse Lane' },
    { name: "Mickey", age: 5, colour: "red", owner: "Elizabeth" },
    { name: 'Tiger', age: 5 },
    { name: "Winnie the Pooh", age: 4 },
    { name: "Snoopy", age: 5, },
    { name: 'Rupanzle', age: 3, address: '1 Top of the Tower' },
    { name: 'Arial', age: 5, address: '1 Under the Sea'},
    { name: 'Little Pig', age: 5, address: '3 House made out of Bricks' },
    { name: 'Middle Pig', age: 5, address: '3 House made out of Bricks' },
    { name: 'Older Pig', age: 5, address: '3 House made out of Bricks' },

])

//db.people.insertOne({ name: "Batman", age: 25 })

// db.homes.insertMany([
//     { address: '24 Whitehorse Lane' },
//     { address: '1 Under the Sea' },
//     { address: '3 House made out of Bricks' },
//     { address: '1 The Top of the Tower' }
// ])