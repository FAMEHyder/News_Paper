import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    /* 1–8 image paths/URLs */
    images: {
      type: [String],
      validate: [
        {
          validator: (arr) => Array.isArray(arr) && arr.length > 0 && arr.length <= 8,
          message: 'You must supply between 1 and 8 images.',
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
