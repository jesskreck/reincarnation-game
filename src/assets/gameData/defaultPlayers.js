const defaultPlayersData = [
  {
    name: "Eve Nebular",
    default: true,
    reincarnate: false,
    prevReincar: 0,
    age: 20,
    progress: {
      attractiveness: 60,
      mental: 70,
      education: 20,
      wealth: 20,
      social: 10,
    },
    trauma: {
      attractiveness: true,
      mental: true,
      education: false,
      wealth: false,
      social: false
    }

  },
  {
    name: "Adam Celestial",
    default: true,
    reincarnate: true,
    age: 80,
    prevReincar: 0,
    progress: {
      attractiveness: 20,
      mental: 50,
      education: 20,
      wealth: 20,
      social: 10,
    }

  }
];

export default defaultPlayersData