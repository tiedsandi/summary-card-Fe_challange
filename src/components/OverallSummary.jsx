import React from 'react';

export default function OverallSummary() {
  return (
    <div
      className='bg-gradient-to-t from-secondary-400 to-primary-400 
    text-center text-slate-300  rounded-t-none rounded-xl sm:rounded-xl p-custom grid content-start gap-8'>
      <h1 className='font-bold text-lg'>Your Result</h1>
      <p className='grid content-center w-48 ms-auto me-auto bg-gradient-to-b from-primary-500 to-secondary-500 aspect-square rounded-full'>
        <span className='block text-7xl font-bold text-white'>76</span> of 100
      </p>
      <div className='grid content-start gap-4'>
        <p className='text-white font-semibold text-2xl'>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}
