import Link from 'next/link';
import React from 'react';

export default function FirstCategory() {
  return (
    <>
      <h1>First Category</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

