const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  hours_coding: {
    type: Number,
    required: true
  },
  what_I_did: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

// // Virtual property that generate the file URL location
// uploadSchema.virtual('fileUrl').get(function () {
//   // Generatiing
//   const url = 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName
//   // Return the value
//   return url
// })

module.exports = mongoose.model('Log', logSchema)
