import { useEffect, useState } from 'react';
import { getWeb4Site, type Web4File } from '../lib/web4';

interface Props {
  domain: string;
}

export function Web4Site({ domain }: Props) {
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function loadSite() {
      const site = await getWeb4Site(domain);
      
      if (!site) {
        setError('Site not found');
        return;
      }

      const path = window.location.pathname || '/index.html';
      const file = site.files.find(f => f.path === path);

      if (!file) {
        setError('Page not found');
        return;
      }

      if (file.type === 'text/html') {
        setContent(file.content);
      } else {
        // Handle other file types if needed
        setError('Unsupported file type');
      }
    }

    loadSite();
  }, [domain]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // Render HTML content safely
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}