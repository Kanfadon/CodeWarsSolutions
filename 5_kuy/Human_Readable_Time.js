function humanReadable(seconds) {
    let s = seconds % 60;
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds / 60 - h * 60);
    return ((h<10 ? "0" : "") + h + ":" + 
            (m<10 ? "0" : "") + m + ":" + 
            (s<10 ? "0" : "") + s);
}