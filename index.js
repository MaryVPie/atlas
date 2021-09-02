const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/experiment-db',
    {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // //   useCreateIndex: true,
    //   useFindAndModify: false
    }
  ).then(s => console.log(s)).catch(e => console.error(e));
  