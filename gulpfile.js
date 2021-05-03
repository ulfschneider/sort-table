const { src, dest, series, watch } = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {

    return src('./sotable.js', { allowEmpty: true })
        .pipe(minify({ noSource: true }))
        .pipe(dest('./'));
}

exports.watch = () => {
    watch(['./sotable.js'], minifyjs)
};

exports.default = series([minifyjs]);