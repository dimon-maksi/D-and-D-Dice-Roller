import React from 'react'

interface NumberSectionProps {
    dice: string;
}

const NumberSection: React.FC<NumberSectionProps> = ({dice}) => {
  return (
    <div className="mb-4">
        <label className="flex items-center space-x-2 font-bold text-4xl text-primary">
          <input type="number" className="mt-1 block size-12 text-3xl text-center rounded-md shadow-sm focus:outline-none" defaultValue={0}/>
            <div className=''>{dice}</div>
        </label>
      </div>
  )
}

export default NumberSection