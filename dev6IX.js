#!/usr/bin/env node

/**
 * dev6IX · Profile Script
 * Run: node dev6IX.js
 */

const profile = {
  handle: "dev6IX",
  role: "Software Engineer",
  location: "Portugal",
  stack: ["JavaScript", "TypeScript", "Node.js", "Express"],
  frontend: ["HTML", "CSS", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code", "npm"],
  principles: ["Clean Code", "Performance", "Scalability"],
  status: "Building the next thing →",
};

const banner = `
╔══════════════════════════════════════╗
║                                      ║
║              d e v 6 I X             ║
║         Software Engineer            ║
║                                      ║
╚══════════════════════════════════════╝
`;

console.log(banner);
console.log(JSON.stringify(profile, null, 2));
console.log("\n→ https://github.com/dev6IX\n");
