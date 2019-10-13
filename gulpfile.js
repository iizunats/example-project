let {series, watch, dest} = require("gulp"),
	browserify = require("browserify"),
	source = require('vinyl-source-stream'),
	tsify = require("tsify"),
	glob = require('glob'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer');


// Build JS
function scripts () {
	return browserify({
		basedir: '.',
		debug: true,
		entries: glob.sync('iizuna/main.ts'),
		cache: {},
		packageCache: {}
	}).plugin(tsify, {
		target: 'ES5',
		experimentalDecorators: true,
		lib: ['es2018', 'dom']
	})
	  .bundle()
	  .pipe(source('build.js'))
	  .pipe(buffer())
	  .pipe(uglify())
	  .pipe(dest("public/fileadmin/build"));
}

// Default gulp task
function defaultTask (cb) {
	watch('iizuna/**/*.ts', series(scripts));
	cb();
}

exports.scripts = scripts;
exports.default = series(defaultTask);