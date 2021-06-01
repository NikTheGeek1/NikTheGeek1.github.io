const fileNameChanger = (fileName: string): string => {
    const dashSplit = fileName.split("/");
    const res = dashSplit[dashSplit.length - 1].replace("_static_media_", "").replace(/[^.]*(.txt)/, '');
    return res.slice(0, res.length-1);
};

export default fileNameChanger;