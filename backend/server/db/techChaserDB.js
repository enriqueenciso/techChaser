var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//x9rWk8ivLDM8ERu6

mongoose.connect('mongodb://localhost:27017/TechChaserApp', { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database!');
})
.catch(() =>{
  console.log('Connection failed!');
});
//mongoose.connect('mongodb+srv://FuerzaDON:x9rWk8ivLDM8ERu6@cluster0-tzvi1.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

module.exports = {mongoose}
