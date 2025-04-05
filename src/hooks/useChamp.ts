import seedrandom from 'seedrandom'

function shuffleArray<T>(array: T[], seed: string): T[] {
  const rng = seedrandom(seed); 
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function useChamp() {
  return (
    
  )
}
