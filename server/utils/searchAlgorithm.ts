export interface SearchResult {
  name: string;
  score: number;
}

export function complexSearch(names: string[], query: string): SearchResult[] {
  // Normalize the query
  const normalizedQuery = query.toLowerCase();

  // Calculate the score for each name based on the query
  const results = names.map((name) => {
    const normalizedName = name.toLowerCase();
    let score = 0;

    // Example scoring algorithm: increase score for each matching character
    for (let i = 0; i < normalizedQuery.length; i++) {
      if (normalizedName.includes(normalizedQuery[i])) {
        score++;
      }
    }

    return { name, score };
  });

  // Sort results by score in descending order
  results.sort((a, b) => b.score - a.score);

  return results;
}
