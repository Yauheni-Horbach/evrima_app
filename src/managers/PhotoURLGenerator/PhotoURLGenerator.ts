export const photoURLGenerator = (
  data: {prefix: string; suffix: string},
  size?: {width: number; height: number},
) => {
  const {prefix, suffix} = data;
  return prefix + (size ? `${size.width}x${size.height}` : 'original') + suffix;
};
