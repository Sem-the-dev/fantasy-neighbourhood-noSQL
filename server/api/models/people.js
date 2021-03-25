const { ObjectId } = require('mongodb');
const { init } = require ('../dbConfig')


class Person {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
    }


    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const peopleData = await db.collection('people').find().toArray()
                const people = peopleData.map(data => new Person({ ...data, id: data._id}))
                resolve(people);
            } catch (err) {
                console.log(err);
                reject("Can\'t find person")
            }

        });
    }


    static findById (id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = init()
                let personData = await (await db).collection('people').find({_id: ObjectId(id) }).toArray()
                let human = new Person({...personData[0], id: personData[0]._id});
                resolve (human)
            } catch (err){
                console.log(err)
                reject('Error getting people')
            }
        })
    }

    static create(name, age) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let peopleData = await db.collection('people').insertOne({name: "Batman", age: 25})
                let newPerson = new Person(peopleData.ops[0]);
                resolve (newPerson)
            } catch(err) {
                reject('Error creating new peson')
            }
        });
    }

    update() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let updatedData = await db.collection('people').findOneAndUpdate({_id: ObjectId(this.id)}, { $inc: {age: 1}}, {returnOriginal: false})
                let updatedPerson = new Person(updatedData.value);
                resolve (updatedPerson)
            } catch (err){
                reject ('Error updating person\'s details')

            }
        })
    }
 }

module.exports = Person;