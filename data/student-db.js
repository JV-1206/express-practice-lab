const students = [
    {student: 'Henry', score: '80%', Boolean: true},
    {student: 'Emily', score: '70%', Boolean: true},
    {student: 'Jackson', score: '30%', Boolean: false}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };