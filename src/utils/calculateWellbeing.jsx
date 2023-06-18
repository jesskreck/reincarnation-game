function calculateWellbeing(progress) {
    const stressThreshold = 20;
    const powerThreshold = 80;

    let sum = 0;
    let count = 0;

    for (const key in progress) {
      const level = progress[key];

      let weight = 1;
      if (level < stressThreshold) {
        weight = 0.5;
      } else if (level > powerThreshold) {
        weight = 2;
      }

      sum += level * weight;
      count += weight;
    }
    
    const wellBeing = Math.round(sum / count);
    return wellBeing;
}
  

export default calculateWellbeing