import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// middleware
// const log = (req, res, next) => {
//   console.log('logging')
//   next()
// }

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.router('/api', router)

app.get('/data', (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.put('/data', (req, res) => {})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is on 3000')
  })
}

// app.get('/', (req, res) => {
//     res.send({message: 'hello'})
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send({message: 'ok'})
// })
