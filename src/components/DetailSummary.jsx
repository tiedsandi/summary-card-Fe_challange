import React from 'react';
import DetailItem from './DetailItem';

export default function DetailSummary() {
  return (
    <div className='p-custom grid content-start gap-8'>
      <h2 className='font-bold text-lg'>Summary</h2>

      <div className='grid content-start gap-4'>
        <DetailItem type='reaction' />
        <DetailItem type='memory' />
        <DetailItem type='verbal' />
        <DetailItem type='visual' />
      </div>

      <button className='bg-gradient-to-t from-secondary-400 to-primary-400 text-white py-4 pw-8 rounded-full cursor-pointer'>
        Continue
      </button>
    </div>
  );
}
