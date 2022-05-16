import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment, setTreatment }) => {
  const {_id, name, slots } = treatment;
  const handleSubmit = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary text-center">Booking for : {name}</h3>
          <form onSubmit={handleSubmit} className=' grid grid-cols-1 gap-2  justify-items-center mt-2'>
            <input readOnly value={format(date, 'PP')} class="input w-full max-w-xs  input-bordered" />
            <select name='slot' class="select select-bordered max-w-xs w-full">
              {slots.map(slot => <option key={_id} value={slot}>{slot}</option>)}
            </select>
            <input type="tex" name='name' placeholder="Your Name" class="input w-full max-w-xs  input-bordered" />
            <input type="text" placeholder="Email Address" class="input w-full max-w-xs  input-bordered" />
            <input type="text" placeholder="" class="input w-full max-w-xs  input-bordered" />
            <input type="submit" value="Submit" class="input w-full max-w-xs btn-secondary  input-bordered" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;