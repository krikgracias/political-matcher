import React, { useState } from 'react';
import { getBallotMeasuresForLocation } from '../data/ballotMeasuresRegistry';
import BallotMeasureCard from '../components/ballot-measures/BallotMeasureCard';
import BallotMeasureMatcher from '../components/ballot-measures/BallotMeasureMatcher';

const BallotMeasuresPage = () => {
  const [selectedCounty, setSelectedCounty] = useState('hernando');
  const [selectedMeasure, setSelectedMeasure] = useState(null);
  
  const measures = getBallotMeasuresForLocation(selectedCounty);

  if (selectedMeasure) {
    return <BallotMeasureMatcher measure={selectedMeasure} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Ballot Measures & Amendments</h1>
      
      {/* County Selector */}
      <div className="mb-8">
        <label className="block mb-2 font-medium">Select Your County:</label>
        <select 
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="hernando">Hernando County</option>
          <option value="citrus">Citrus County</option>
          <option value="hillsborough">Hillsborough County</option>
          <option value="polk">Polk County</option>
          <option value="pasco">Pasco County</option>
        </select>
      </div>

      {/* Measures List */}
      <div className="space-y-4">
        {measures.map(measure => (
          <BallotMeasureCard 
            key={measure.id}
            measure={measure}
            onClick={() => setSelectedMeasure(measure)}
          />
        ))}
      </div>
    </div>
  );
};

export default BallotMeasuresPage;