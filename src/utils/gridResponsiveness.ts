export function gridResponsiveness(width: number) {
  if (width < 450) return 1;
  if (width < 750) return 2;
  if (width < 1050) return 3;
  return 4;
}
