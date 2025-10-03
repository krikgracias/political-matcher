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
      
      // Update URL and trigger election load
      window.history.pushState(null, '', `?${params.toString()}`);
      onElectionSelect();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '32px',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Your Voter Guide
        </h1>
        
        <p style={{
          color: '#666',
          fontSize: '16px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          Find candidates and understand ballot measures that align with your values

        </p>

        <form onSubmit={handleSubmit}>
          {/* State Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#2c3e50'
            }}>
              Select State:
            </label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCounty('');
                setSelectedOffice('');
              }}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '16px'
              }}
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
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Select County:
              </label>
              <select
                value={selectedCounty}
                onChange={(e) => {
                  setSelectedCounty(e.target.value);
                  setSelectedOffice('');
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
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

          {/* Office Selection */}
          {selectedCounty && (
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Select Election Type:
              </label>
              <select
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
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
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Start Candidate Matching
            </button>
          )}
        </form>

        {/* Available Elections Info */}
        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Available Elections:</h3>
          <ul style={{ color: '#666', lineHeight: '1.6' }}>
            <li><strong>Hernando County:</strong> School Board, County Commission, City Council, Ballot Measures</li>
            <li><strong>Citrus County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Hillsborough County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Polk County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Pinellas County:</strong> School Board, County Commission, Ballot Measures</li>
            <li><strong>Pasco County:</strong> School Board, County Commission, Ballot Measures</li>
          </ul>
          <p style={{ 
            color: '#666', 
            fontSize: '14px', 
            marginTop: '15px',
            fontStyle: 'italic'
          }}>
            More counties and elections coming soon. Contact us to request coverage for your area.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElectionSelector;