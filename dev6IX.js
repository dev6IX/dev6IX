#!/usr/bin/env node

/**
 * dev6IX · Profile Script
 * Run: node dev6IX.js
 */

const profile = {
  handle: "dev6IX",
  role: "Developer",
  location: "Portugal",
  stack: ["JavaScript", "TypeScript", "Node.js"],
  frontend: ["HTML", "CSS", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code", "npm"],
  discord: "six_05",
  status: "Building the next thing →",
};

const banner = `
╔══════════════════════════════════════╗
║                                      ║
║              d e v 6 I X             ║
║              Developer               ║
║                                      ║
╚══════════════════════════════════════╝
`;

console.log(banner);
console.log(JSON.stringify(profile, null, 2));
console.log("\n→ https://github.com/dev6IX\n");
