// export breakpoints as numbers map, e.g { MD: 900 }
export const BREAKPOINTS = {
  XS: 420,
  SM: 600,
  MD: 900,
  LG: 1200,
  LGR: 1475,
  XL: 1800,
};

// export breakpoints as strings map, e.g { MD: "900px" } (convenient for media queries)
export const MEDIA = Object
  .entries(BREAKPOINTS)
  .reduce((acc, [key, value]) => (
    { ...acc, [key]: `${value}px` }
  ), {});
