export function pxRem(px: number, baseFontSize = 16) {
    return (px / baseFontSize).toFixed(3) + 'rem';
}
