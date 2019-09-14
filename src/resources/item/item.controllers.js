import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
  await connect('mongodb://localhost:27017/api-test')
  const item = await Item.create({
    name: 'Clean up',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId()
  })
  const remove = await Item.findByIdAndRemove(item._id).exec()

  console.log(remove)
  //   console.log(item)
}

// export default {}
// console.log(await Item.find({}).exec()) for Read
// const updated = await Item.findByIdAndUpdate(
//     item._id,
//     { name: 'eat' },
//     { new: true }
//   ).exec()

//   console.log(updated) for update
run()
