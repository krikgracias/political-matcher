// List view card for browsing measures
import React from 'react';
import { Scale, Calendar } from 'lucide-react';

const BallotMeasureCard = ({ measure, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg">
      <div className="flex items-start">
        <Scale className="w-6 h-6 text-blue-600 mr-3" />
        <div>
          <h3 className="text-xl font-bold">{measure.title}</h3>
          <p className="text-gray-600 mt-2">{measure.summary}</p>
          <div className="mt-4 flex gap-4 text-sm">
            <span>📅 {new Date(measure.electionDate).toLocaleDateString()}</span>
            <span>📊 {measure.requirements.threshold}% needed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallotMeasureCard;