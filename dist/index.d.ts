/**
 * 合并图片
 * @param urls
 * @param direction
 */
declare function mergeImages(urls: string[], direction?: 'vertical' | 'horizontal', width?: number, height?: number): Promise<string>;
export { mergeImages };
export default mergeImages;
