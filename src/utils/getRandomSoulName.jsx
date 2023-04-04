const soulNames = [
  "Orion Supernova",
  "Cassiopeia Quasar",
  "Andromeda Galaxina",
  "Apollo Starweaver",
  "Celestia Stardancer",
  "Gemini Astrolight",
  "Lyra Skyspinner",
  "Vega Moonrider",
  "Pulsar Starburst",
  "Aurora Borealis",
  "Cosmos Dreamweaver",
  "Nova Starbeam",
  "Comet Tailswift",
  "Ursa Luminary",
  "Astra Nightbreeze"
];

export const getRandomSoulName = () => {
  const randomIndex = Math.floor(Math.random() * soulNames.length);
  return soulNames[randomIndex];
};



// export const getRandomSoulName = () => {
//   const shuffledNames = soulNames.sort(() => Math.random() - 0.5);
//   return shuffledNames[0];
// };