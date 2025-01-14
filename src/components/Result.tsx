import React from 'react'
//import PropTypes from 'prop-types'

interface ResultProps {
    formula: string;
    result: number;
}

const Result: React.FC<ResultProps> = ({ formula, result }) => {
    return (
        <div className="bg-secondary-100 px-4 py-2 rounded-lg flex justify-between items-center">
            <p className="text-sm text-gray-500">{formula}</p>
            <p className="text-4xl font-bold">{result}</p>
        </div>
    )
}

// Do I need this while I'm using TypeScript?
// Result.propTypes = {
//     formula: PropTypes.string.isRequired,
//     result: PropTypes.number.isRequired,
// }

export default Result