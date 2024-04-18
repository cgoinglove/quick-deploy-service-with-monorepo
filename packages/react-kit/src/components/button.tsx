import { useEffect } from 'react';

export function Button() {
  useEffect(() => {
    console.log(`hello`);
  }, []);
  return (
    <div>
      <h1>Button Component!</h1>
    </div>
  );
}
