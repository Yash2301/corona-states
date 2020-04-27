/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import NestedList from './../../components/NestedList';
export default function HomePage() {
  return (
    <h1>
      <NestedList />
    </h1>
  );
}
