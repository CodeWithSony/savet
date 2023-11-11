import mongoose from "mongoose";
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

const userSchema = mongoose.Schema({
    // A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints(pratibandh) and indexes.
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    about: {type: String},
    Address: {type: String, required: true},
    JoinedOn: {type: Date, default: Date.now}
})

export default mongoose.model("users", userSchema)