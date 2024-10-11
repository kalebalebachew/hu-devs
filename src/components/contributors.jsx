import { useEffect, useState } from 'react';

export function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const owner = 'kalebalebachew';
  const repo = 'hu-devs';

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) return <p></p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=''>
      <h1 className='text-purple-500 text-center text-xl font-bold pb-4'>Contributors</h1>
      <div className="flex space-x-8">
        {contributors.map((contributor) => (
          <a
            key={contributor.id}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-12 h-12 rounded-full"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
