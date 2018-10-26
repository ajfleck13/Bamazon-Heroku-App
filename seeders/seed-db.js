// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.Author.bulkCreate([{
    firstName: 'Jane',
    lastName: 'Austen'
  },{
    firstName: 'Mark',
    lastName: 'Twain'
  },{
    firstName: 'Lewis',
    lastName: 'Carroll'
  },{
    firstName: 'Andre',
    lastName: 'Asselin'
  }]).then(function(response) {
    
    db.Book.bulkCreate([{
      title: 'Pride and Prejudice',
      AuthorId: 1
    },{
      title: 'Emma',
      AuthorId: 1
    },{
      title: 'Adventures of Huckleberry Finn',
      AuthorId: 2
    },{
      title: 'The Adventures of Tom Sawyer',
      AuthorId: 2
    },{
      title: 'Alice\'s Adventures in Wonderland',
      AuthorId: 3
    }]).then(function(data) {
      console.log('Data successfully added!');
    }).catch(function(error) {
      console.log('Error', error)
    })
  }).catch(function(error) {
    console.log('Error', error)
  });
});