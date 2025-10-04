import { useState } from 'react';

const AVAILABLE_ELECTIONS = [
  {
    state: 'florida',
    stateName: 'Florida',
    counties: [
      {
        county: 'hernando',
        countyName: 'Hernando County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-11-03' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'city-council', name: 'City Council (Brooksville)', date: '2025-11-05', county: 'brooksville' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      },
      {
        county: 'citrus',
        countyName: 'Citrus County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-08-18' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      },
      {
        county: 'hillsborough',
        countyName: 'Hillsborough County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-08-18' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      },
      {
        county: 'polk',
        countyName: 'Polk County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-08-18' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      },
      {
        county: 'pinellas',
        countyName: 'Pinellas County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-08-18' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      },
      {
        county: 'pasco',
        countyName: 'Pasco County',
        offices: [
          { office: 'school-board', name: 'School Board', date: '2026-08-18' },
          { office: 'county-commission', name: 'County Commission', date: '2026-11-03' },
          { office: 'ballot-measures', name: '2026 Ballot Measures', date: '2026-11-03', year: '2026' }
        ]
      }
    ]
  }
];

// Add this near the top after AVAILABLE_ELECTIONS
const COUNTY_MEETING_LINKS = {
  hernando: {
    commission: 'https://hernandocountyfl.legistar.com/Calendar.aspx',
    schoolBoard: 'https://hernandoschools.legistar.com/Calendar.aspx'
  },
  citrus: {
    commission: 'https://citrusclerk.portal.civicclerk.com/',
    schoolBoard: 'https://citrus-k12-fl.community.highbond.com/Portal/MeetingTypeList.aspx',
    planning: 'https://www.citrusbocc.com/departments/administrator/strategic_planning.php'
  },
  hillsborough: {
    commission: 'https://hcfl.gov/events?refinementList%5BeventConnection.edges.node.calendar%5D%5B0%5D=Public%20Meetings&refinementList%5BeventConnection.edges.node.calendar%5D%5B1%5D=Commission%20Meetings&range%5B_start_date%5D=1759118400000%3A',
    schoolBoard: 'https://www.hillsboroughschools.org/events?section_ids=493682&view=cal-month'
  },
  polk: {
    commission: 'https://polkcountyfl.legistar.com/Calendar.aspx',
    schoolBoard: 'https://go.boarddocs.com/fl/polk/Board.nsf/Public?open',
    notices: 'https://polkcounty.column.us/search'
  },
  pinellas: {
    commission: 'https://pinellas.gov/events/list/?tribe_eventcategory=2058',
    schoolBoard: 'https://www.pcsb.org/Page/3924'
  },
  pasco: {
    commission: 'https://www.pascocountyfl.gov/government/agendas_minutes.php',
    schoolBoard: 'https://go.boarddocs.com/fl/pasco/Board.nsf/Public'
  }
};


function ElectionSelector({ onElectionSelect }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');

  const selectedStateData = AVAILABLE_ELECTIONS.find(s => s.state === selectedState);
  const selectedCountyData = selectedStateData?.counties.find(c => c.county === selectedCounty);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCounty && selectedOffice) {
      const office = selectedCountyData?.offices.find(o => o.office === selectedOffice);
      const params = new URLSearchParams({
        state: selectedState,
        county: selectedCounty,
        office: selectedOffice
      });
      
      if (office?.year) {
        params.set('year', office.year);
      }
      
      window.history.pushState(null, '', `?${params.toString()}`);
      onElectionSelect();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-2xl w-full">
        <h1 className="text-gray-800 text-4xl font-bold mb-3 text-center">
          Your Voter Guide
        </h1>
        
        <p className="text-gray-600 text-lg text-center mb-8">
          Find candidates and understand ballot measures that align with your values
        </p>

        <form onSubmit={handleSubmit}>
          {/* State Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Select State:
            </label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCounty('');
                setSelectedOffice('');
              }}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg bg-white hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">Choose a state...</option>
              {AVAILABLE_ELECTIONS.map(state => (
                <option key={state.state} value={state.state}>
                  {state.stateName}
                </option>
              ))}
            </select>
          </div>

          {/* County Selection */}
          {selectedState && (
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">
                Select County:
              </label>
              <select
                value={selectedCounty}
                onChange={(e) => {
                  setSelectedCounty(e.target.value);
                  setSelectedOffice('');
                }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg bg-white hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Choose a county...</option>
                {selectedStateData?.counties.map(county => (
                  <option key={county.county} value={county.county}>
                    {county.countyName}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Meeting Links */}
          {selectedCounty && COUNTY_MEETING_LINKS[selectedCounty] && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="mb-2 text-gray-700 text-sm">
                Looking for meeting agendas and schedules?
              </p>
              <strong className="text-blue-700 text-base">County Meeting Information:</strong>
              <div className="mt-3 flex flex-col gap-2">
                <a 
                  href={COUNTY_MEETING_LINKS[selectedCounty].commission} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  → County Commission Meetings & Agendas
                </a>
                <a 
                  href={COUNTY_MEETING_LINKS[selectedCounty].schoolBoard} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  → School Board Meetings & Agendas
                </a>
              </div>
            </div>
          )}

          {/* Office Selection */}
          {selectedCounty && (
            <div className="mb-8">
              <label className="block mb-2 font-semibold text-gray-700">
                Select Election Type:
              </label>
              <select
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg bg-white hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Choose an election...</option>
                {selectedCountyData?.offices.map(office => (
                  <option key={office.office} value={office.office}>
                    {office.name} - {office.date}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit Button */}
          {selectedState && selectedCounty && selectedOffice && (
            <button
              type="submit"
              className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-bold cursor-pointer transition-colors shadow-lg hover:shadow-xl"
            >
              Start Candidate Matching
            </button>
          )}
        </form>

        {/* Available Elections Info */}
        <div className="mt-10 p-5 bg-gray-50 rounded-lg">
          <h3 className="text-gray-800 font-semibold text-lg mb-4">Available Elections:</h3>
          <ul className="text-gray-600 leading-relaxed space-y-1">
            <li><strong>Hernando County:</strong> School Board, County Commission, City Council, Ballot Measures</li>
            <li><strong>Citrus County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Hillsborough County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Polk County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Pinellas County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Pasco County:</strong> School Board, County Commission, Ballot Measures</li>
          </ul>
          <p className="text-gray-500 text-sm mt-4 italic">
            More counties and elections coming soon. Contact us to request coverage for your area.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElectionSelector;