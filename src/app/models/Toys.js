const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
const Schema = mongoose.Schema

const Toy = new Schema({
    name: { type: String, minLength: 1, required: true },
    description: { type: String, minLength: 1, required: true },
    price: { type: String, minLength: 1, required: true },
    image: { type: String, minLength: 1 },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Toy', Toy)