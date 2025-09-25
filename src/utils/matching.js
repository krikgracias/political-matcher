// Matching algorithm 
export function calculateMatch(userAnswers, candidate) {
  let matches = 0;
  let totalQuestions = 0;
  
  for (const questionId in userAnswers) {
    if (candidate.positions[questionId]) {
      totalQuestions++;
      if (userAnswers[questionId] === candidate.positions[questionId]) {
        matches++;
      }
    }
  }
  
  const percentage = totalQuestions > 0 ? Math.round((matches / totalQuestions) * 100) : 0;
  
  return {
    candidate: candidate,
    matchPercentage: percentage,
    matches: matches,
    totalQuestions: totalQuestions
  };
}

export function calculateAllMatches(userAnswers, candidates) {
  return candidates
    .map(candidate => calculateMatch(userAnswers, candidate))
    .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by highest match first
}