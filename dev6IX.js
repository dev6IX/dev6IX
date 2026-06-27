#!/usr/bin/env node

/**
 * dev6IX · Profile Script
 * Run: node dev6IX.js
 */

const profile = {
  handle: "dev6IX",
  role: "Developer",
  location: "Portugal",
  core: ["JavaScript", "TypeScript", "Node.js"],
  web: ["HTML", "CSS"],
  tools: ["Git", "GitHub", "VS Code", "npm"],
  discord: "six_05",
  status: "Building the next thing →",
};

const banner = `
     _          __ _____  __
  __| |_____ __/ /|_ _\\ \\/ /
 / _\` / -_) V / _\\| | >  <
 \\__,_\\___|\\_/\\___/___/_/\\_\\

         Developer · Portugal · JS · TS · Node
`;

console.log(banner);
console.log(JSON.stringify(profile, null, 2));
console.log("\n→ https://github.com/dev6IX\n");
