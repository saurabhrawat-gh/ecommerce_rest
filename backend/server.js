const dotenv = require('dotenv')

const app = require('./app')

//config path and initialisation
dotenv.config({ path: 'backend/config/config.env' })

app.listen(process.env.PORT, () => console.log(`Server is up and running on port: ${process.env.PORT}`))