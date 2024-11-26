/**
 * 首字母大写
 */
export const capitalizeFirstLetter = (str?: string) => {
  if (str && str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str
}
