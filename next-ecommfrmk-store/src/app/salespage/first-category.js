import Link from 'next/link';
import React from 'react';

function FirstCategoryPage() {
  return (
    <div>
      <h1>First Category Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}

export default FirstCategoryPage;
