const dotenv = require('dotenv')

const app = require('./app')
const connect_db = require('./db/database')

//config path and initialisation
dotenv.config({ path: 'backend/config/config.env' })

// calling function to connect from our db
connect_db()

app.listen(process.env.PORT, () => console.log(`Server is up and running on port: ${process.env.PORT}`)) 