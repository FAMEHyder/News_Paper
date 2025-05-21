import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    Date: {
      type: String,
      trim: true,
      required: true,
    },
    
    images: {
      type: [String],
      validate: [
        {
          validator: (arr) => Array.isArray(arr) && arr.length > 0 && arr.length <= 4,
          message: 'You must supply between 1 and 8 images.',
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
