const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/experiment-db',
    {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // //   useCreateIndex: true,
    //   useFindAndModify: false
    }
  ).then(s => 
    {
        let connection = s.connections[0];

        console.log(connection);
        //console.log(s)
    }).catch(e => console.error(e));
  