/* custom written function to determine if string is ASCII or UTF-8 */
util.hasWideChar = function(str) {
    for( var i = 0; i < str.length; i++ ){
        if ( str.charCodeAt(i) >>> 8 ) return true;
    }
    return false;
};
