import FormData from "form-data";

type formatUploadedImageType = {
    uri: string;
    height: number;
    width: number;
};

export default function formatUploadedImage(
    name: string,
    image: formatUploadedImageType,
) {
    let filename: string | any = image.uri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image/jpeg`;
    const source = {
        name: filename,
        uri: image.uri,
        type: type,
        height: image.height,
        width: image.width,
    };
    console.log("source", source);
    let formData = new FormData();
    formData.append(name, source);
    return formData;
}
