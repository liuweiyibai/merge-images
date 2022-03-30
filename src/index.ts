/**
 * 合并图片
 * @param urls
 * @param direction
 */
async function mergeImages(
    urls: string[],
    direction: 'vertical' | 'horizontal' = 'horizontal',
    width = 700,
    height = 700,
) {
    const images = await getImgDomObjs(urls);
    if (direction === 'horizontal') {
        return drawImagesHorizontal(images, height);
    } else {
        return drawImagesVertical(images, width);
    }
}

/**
 * 根据图片地址获取图片对象
 * @param urls
 * @returns
 */
function getImgDomObjs(urls: string[]): Promise<HTMLImageElement[]> {
    return new Promise((resolve) => {
        const length = urls.length;
        const instances: HTMLImageElement[] = [];
        let finished = 0;
        urls.forEach((url, index) => {
            const image = new Image();
            image.src = url;
            image.crossOrigin = 'Anonymous';
            image.onload = () => {
                // 图片实例化成功后存起来
                instances[index] = image;
                finished++;
                if (finished === length) {
                    resolve(instances);
                }
            };
        });
    });
}

/**
 * 根据传入的图片对象竖直方向拼接图片
 * @param images
 * @returns
 */
function drawImagesVertical(images: HTMLImageElement[], width: number) {
    // 拼出来的图片的质量，0-1之间，越大质量越好
    const encoderOptions = 0.5;
    const heights = images.map((item) => (width / item.width) * item.height);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = heights.reduce((total, current) => total + current);
    const context = canvas.getContext('2d');
    let y = 0;
    images.forEach((item, index) => {
        const height = heights[index];
        context?.drawImage(item, 0, y, width, height);
        y += height;
    });

    const base64 = canvas.toDataURL('image/jpeg', encoderOptions);
    return base64;
}

/**
 * 水平方向拼接图片
 * @param images
 * @returns
 */
function drawImagesHorizontal(images: HTMLImageElement[], height: number) {
    // 拼出来的图片的质量，0-1之间，越大质量越好
    const encoderOptions = 0.5;
    const widths = images.map((item) => (height / item.height) * item.width);
    const canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = widths.reduce((total, current) => total + current);
    const context = canvas.getContext('2d');
    let x = 0;
    images.forEach((item, index) => {
        const width = widths[index];
        context?.drawImage(item, x, 0, width, height);
        x += width;
    });

    const base64 = canvas.toDataURL('image/jpeg', encoderOptions);
    return base64;
}

export {mergeImages};
export default mergeImages;
