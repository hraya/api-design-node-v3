const getAll = (req, res) => {
  res.send({ message: 'I am an item get' })
}

const add = (req, res) => {
  res.send({ message: 'I am an item post' })
}

const update = (req, res) => {
  res.send({ message: 'I am an item put' })
}

const remove = (req, res) => {
  res.send({ message: 'I am an item delete' })
}

export default {
  getAll,
  add,
  update,
  remove
}
