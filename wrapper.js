// custom written wrapper
// automatically sets encoding to ASCII or UTF-8
window.forge_sha256 = function(str) {
    var md = forge.md.sha256.create();
    md.update(
        str,
        util.hasWideChar(str)?'utf8':undefined);
    return md.digest().toHex();
};
