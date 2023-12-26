"use client"

// only doing this because nextjs requires the client component

export const SiteHeader = () => (
  <header>
    <button onClick={() => (window.location.pathname = "/")}>Home</button>
    <button onClick={() => (window.location.pathname = "/table")}>Table</button>
  </header>
)
