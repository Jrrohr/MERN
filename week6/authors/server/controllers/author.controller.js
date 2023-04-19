const Author = require('../models/author.model');

const createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json({ author }))
        .catch(err => response.status(400).json({ err }));
}

const getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => {
            console.log(authors);
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.status(400).json({ err })
        })
}

const getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.status(400).json({ err }));
}

const updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedAuthor => response.json({ updatedAuthor }))
        .catch(err => response.status(400).json({ err }))
}

const deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json({ deleteConfirmation }))
        .catch(err => response.status(400).json({ err }))
}

module.exports = {
    createAuthor,
    deleteAuthor,
    updateAuthor,
    getAuthor,
    getAllAuthors
}