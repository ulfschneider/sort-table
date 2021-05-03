const { src, dest, watch } = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {

    return src('./sotable.js', { allowEmpty: true })
        .pipe(minify({ noSource: true }))
        .pipe(dest('./'));
}

exports.default = function() {
    minifyjs();
    watch('sotable.js', minifyjs)
};