const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  booking_id: Number,
  customer_name: String,
  collection_date: Date,
  booking_date: Date,
  lead_id: Number,
  uhid: Number,
  useruuid: String,
  test_id: Number,
  test_code: String,
  test_name: String,
  test_values: [
    {
      key: String,
      value: Number,
    },
  ],
  created_at: Date,
  updated_at: Date,
  __hevo_id: String,
  __hevo__ingested_at: Number,
  __hevo__loaded_at: Number,
  __hevo__marked_deleted: Boolean,
  __hevo__source_modified_at: Number,
},
{
  collection: "booking_wise_user_data",
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
