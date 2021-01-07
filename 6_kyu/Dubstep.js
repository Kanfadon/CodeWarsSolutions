function songDecoder(song) {
    let result = "";
    song.split("WUB").forEach(function(item) {
    if (item != "") result += item + " ";
    });
    return result.trim();
}