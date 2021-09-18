type formatUploadedImageType = {
    uri: string;
    height: number;
    width: number;
};

export default function formatUploadedImage(image: formatUploadedImageType) {
    let filename: string | any = image.uri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    const source = {
        fileName: filename,
        uri: image.uri,
        type: type,
        height: image.height,
        width: image.width,
    };
    let formData = new FormData();
    formData.append("storeLogo", source);
    console.log("formData", formData);
    console.log("image", image);
    return formData;
}
