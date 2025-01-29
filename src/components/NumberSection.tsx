import React from 'react'

interface NumberSectionProps {
    dice: string;
    value: number;
    setDiceCounts: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const NumberSection: React.FC<NumberSectionProps> = ({ dice, value, setDiceCounts }) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="mb-4">
        <label className="flex items-center space-x-2 font-bold text-4xl text-primary">
        <input
          type="number"
          className="mt-1 block size-12 text-3xl text-center rounded-md shadow-sm focus:outline-none"
          value={value}
          min={0}
          max={99}
          onChange={(e) =>
            setDiceCounts((prev) => ({
              ...prev,
              [dice]: Math.min(99, Math.max(0, Number(e.target.value) || 0)),
            }))
          }
          onFocus={handleFocus}
        /> 
        <div className=''>{dice}</div>
        </label>
      </div>
  )
}

export default NumberSection