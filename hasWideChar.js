/* custom written function to determine if string is composed of only ASCII characters */
util.hasWideChar = function(str) {
    for( var i = 0; i < str.length; i++ ){
        if ( str.charCodeAt(i) >>> 8 ) return true;
    }
    return false;
};
