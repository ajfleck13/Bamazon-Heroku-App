const db = require('../app/models');

module.exports = function(app) {
  app.get('/api/products', function(req, res) {
    console.log(employeeList);
    res.json(employeeList);
  });

  app.post('/api/employees', function(req, res) {
    res.json({success: true});
  });
};