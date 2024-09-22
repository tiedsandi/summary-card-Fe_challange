import React from 'react';

const CONTENT = {
  reaction: {
    title: 'Reaction',
    value: 80,
    color: 'text-accent-1',
    bg: 'bg-accent-1/20',
    icon: 'fa-solid fa-bolt',
  },
  memory: {
    title: 'Memory',
    value: 85,
    color: 'text-accent-2',
    bg: 'bg-accent-2/20',
    icon: 'fa-solid fa-brain',
  },
  verbal: {
    title: 'Verbal',
    value: 90,
    color: 'text-accent-3',
    bg: 'bg-accent-3/20',
    icon: 'fa-solid fa-comment',
  },
  visual: {
    title: 'Visual',
    value: 80,
    color: 'text-accent-4',
    bg: 'bg-accent-4/20',
    icon: 'fa-solid fa-eye',
  },
};

export default function DetailItem({type = 'reaction'}) {
  const content = CONTENT[type.toLowerCase()] || CONTENT.reaction;

  return (
    <div className={`flex justify-between items-center p-4 rounded-2xl ${content.bg}`}>
      <div className={`flex items-center gap-2 flex-wrap ${content.color}`}>
        <h3>
          <i className={content.icon}></i>
        </h3>
        <h3 className='font-bold'>{content.title}</h3>
      </div>
      <p className='font-medium text-slate-800'>
        <span className='font-bold'>{content.value}</span> / 100
      </p>
    </div>
  );
}
