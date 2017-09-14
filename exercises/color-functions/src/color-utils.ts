// TODO: Implement hexToRgb
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let size = hex.length;
  if (size === 3)
    return hexToRgb(`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`);
  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16));
  return { r, g, b };
}

// TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(ch => Math.max(0, Math.min(ch, 255)))
    .map(ch => ch.toString(16))
    .map(ch => (ch.length === 1 ? `0${ch}` : ch))
    .join('');
}
