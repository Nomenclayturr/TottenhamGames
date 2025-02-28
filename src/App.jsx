// src/App.jsx
import React from 'react';
import './App.css';

const matches = [
  {
    id: 1,
    day: "Sunday",
    date: "02 FEB, 08:00",
    homeScore: 0,
    awayScore: 2,
    homeTeamLogo: "src/PL Team Logos/Brentford.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "Premier League",
    venue: "Brentford Community Stadium",
    matchType: "A", // A for Away win, H for Home win, D for Draw
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/brentford-v-spurs-match-report-february-2025/"
  },
  {
    id: 2,
    day: "Thursday",
    date: "06 FEB, 14:00",
    homeTeam: "LIV",
    awayTeam: "TOT",
    homeScore: 4,
    awayScore: 0,
    homeTeamLogo: "src/PL Team Logos/Liverpool.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "Carabao Cup",
    venue: "Anfield, Liverpool",
    matchType: "A",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/liverpool-v-spurs-carabao-cup-second-leg-match-report/"
  },
  {
    id: 3,
    day: "Sunday",
    date: "09 FEB, 11:35",
    homeTeam: "AVL",
    awayTeam: "TOT",
    homeScore: 2,
    awayScore: 1,
    homeTeamLogo: "src/PL Team Logos/AstonVilla.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "FA Cup",
    competitionDetail: "Fourth Round",
    venue: "Villa Park, Birmingham",
    matchType: "A",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/aston-villa-vs-spurs-fa-cup-match-report-february-2025/"
  },
  {
    id: 4,
    day: "Sunday",
    date: "16 FEB, 10:30",
    homeTeam: "TOT",
    awayTeam: "MUN",
    homeScore: 1,
    awayScore: 0,
    homeTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    awayTeamLogo: "src/PL Team Logos/Manchester-United.png",
    competition: "Premier League",
    venue: "Tottenham Hotspur Stadium",
    matchType: "H",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/spurs-vs-manchester-united-premier-league-match-report/"
  },
  {
    id: 5,
    day: "Saturday",
    date: "22 FEB, 09:00",
    homeTeam: "IPS",
    awayTeam: "TOT",
    homeScore: 1,
    awayScore: 4,
    homeTeamLogo: "src/PL Team Logos/Ipswich.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "Premier League",
    venue: "Portman Road Stadium, Ipswich",
    matchType: "A",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/ipswich-town-vs-spurs-premier-league-match-report/"
  },
  {
    id: 6,
    day: "Wednesday",
    date: "26 FEB, 13:30",
    homeTeam: "TOT",
    awayTeam: "MCI",
    homeScore: 0,
    awayScore: 1,
    homeTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    awayTeamLogo: "src/PL Team Logos/Manchester-City.png",
    competition: "Premier League",
    venue: "Tottenham Hotspur Stadium",
    matchType: "H",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/spurs-vs-manchester-city-premier-league-match-report-february-2025/"
  },
  {
    id: 7,
    day: "Monday",
    date: "04 MAR, 20:00",
    homeTeam: "TOT",
    awayTeam: "ARS",
    homeScore: 1,
    awayScore: 1,
    homeTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    awayTeamLogo: "src/PL Team Logos/Arsenal.png",
    competition: "Premier League",
    venue: "Tottenham Hotspur Stadium",
    matchType: "D",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/arsenal-v-spurs-match-report-february-2025/"
  },
  {
    id: 8,
    day: "Saturday",
    date: "09 MAR, 15:00",
    homeTeam: "CHE",
    awayTeam: "TOT",
    homeScore: 2,
    awayScore: 2,
    homeTeamLogo: "src/PL Team Logos/Chelsea.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "Premier League",
    venue: "Stamford Bridge, London",
    matchType: "D",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/chelsea-v-spurs-match-report-february-2025/"
  },
  {
    id: 9,
    day: "Thursday",
    date: "14 MAR, 20:00",
    homeTeam: "TOT",
    awayTeam: "ROM",
    homeScore: 3,
    awayScore: 0,
    homeTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    awayTeamLogo: "https://placehold.co/60x60/maroon/yellow?text=ROM",
    competition: "Europa League",
    competitionDetail: "Round of 16",
    venue: "Tottenham Hotspur Stadium",
    matchType: "H",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/roma-v-spurs-match-report-february-2025/"
  },
  {
    id: 10,
    day: "Sunday",
    date: "18 MAR, 14:30",
    homeTeam: "NEW",
    awayTeam: "TOT",
    homeScore: 1,
    awayScore: 2,
    homeTeamLogo: "src/PL Team Logos/Newcastle.png",
    awayTeamLogo: "src/PL Team Logos/Tottenham-Hotspur.png",
    competition: "Premier League",
    venue: "St. James' Park, Newcastle",
    matchType: "A",
    matchReportUrl: "https://www.tottenhamhotspur.com/news/2025/february/newcastle-v-spurs-match-report-february-2025/"
  }
];

// Match Card component - Horizontal Layout
const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      {/* Match image section */}
      <div className="match-image">
        <div className="match-result">
          <div className="team home-team">
            <img src={match.homeTeamLogo} alt={match.homeTeam} className="team-logo" />
          </div>
          
          <div className="score">
            {match.homeScore} - {match.awayScore}
          </div>
          
          <div className="team away-team">
            <img src={match.awayTeamLogo} alt={match.awayTeam} className="team-logo" />
          </div>
        </div>
      </div>

      {/* Match info section */}
      <div className="match-info">
        <div className="match-date">
          <div className="day">{match.day}</div>
          <div className="date">{match.date}</div>
        </div>
        
        <div className="competition">
          {match.competition}
          {match.competitionDetail && <div className="competition-detail">{match.competitionDetail}</div>}
        </div>
        
        <div className="venue">
          <i className="location-icon">📍</i> {match.venue}
        </div>
      </div>

      {/* Actions section */}
      <div className="match-actions">
        <a 
          href={match.matchReportUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="report-button"
        >
          View Match Report
        </a>
      </div>
    </div>
  );
};

// Main component
function App() {
  return (
    <div className="matches-board">
      <h1>Tottenham Match Results</h1>
      <div className="matches-container">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default App;