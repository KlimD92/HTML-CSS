const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))
let uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const svgSprite = require('gulp-svg-sprite')
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
	return del(['build', 'dev'])
}

const fonts = () => {
	return src('src/fonts/**')
		.pipe(dest('build/fonts'))
		.pipe(dest('dev/fonts'))
		.pipe(browserSync.stream())
}

const libsJs = () => {
	return src('src/script/libs/**')
		.pipe(dest('build/script/libs'))
		.pipe(dest('dev/script/libs'))
		.pipe(browserSync.stream())
}

const libsCss = () => {
	return src('src/style/libs/**')
		.pipe(dest('build/style/libs'))
		.pipe(dest('dev/style/libs'))
		.pipe(browserSync.stream())
}

const stylesBuild = () => {
	return src('src/style/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(autoprefixes({
			cascade: false
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(dest('build/style'))
}

const stylesDev = () => {
	return src('src/style/**/*.scss')
		// .pipe(dest('dev/style'))
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		// .pipe(concat('style.css'))
		.pipe(sourcemaps.write())
		.pipe(dest('dev/style'))
		.pipe(browserSync.stream())
}

const htmlMinify = () => {
	return src('src/**/*.html')
		.pipe(htmlMin({
			collapseWhitespace: true,
		}))
		// .pipe(dest('dev'))
		// .pipe(browserSync.stream())
		.pipe(dest('build'))
}

const htmlDev = () => {
	return src('src/**/*.html')
	.pipe(dest('dev'))
	.pipe(browserSync.stream())
}

const phpLibs = () => {
	return src('src/php/**/*.php')
	.pipe(dest('dev/php'))
	.pipe(dest('build/php'))
}

const phpFiles = () => {
	return src('src/*.php')
	.pipe(dest('dev'))
	.pipe(dest('build'))
}

const scriptsBuild = () => {
	return src([
		'src/script/components/**/*.js',
		'src/script/*.js'
	])
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('script.js'))
	.pipe(uglify({
		toplevel: true
	}).on('error', notify.onError))
	.pipe(dest('build/script'))
}

const scriptsDev = () => {
	return src([
		'src/script/components/**/*.js',
		'src/script/*.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('script.js'))
	.pipe(sourcemaps.write())
	.pipe(dest('dev/script'))
	.pipe(browserSync.stream())
}

const svgSprites = () => {
	return src('src/img/svg/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(dest('build/img/svg'))
		.pipe(dest('dev/img/svg'))
}

const imgMin = () => {
	return src([
				'src/img/**/*.jpg',
				'src/img/**/*.png',
				'src/img/*.svg',
				'src/img/**/*.jpeg',
			])
			.pipe(imagemin())
			.pipe(dest('build/img'))
			.pipe(dest('dev/img'))
}

const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: 'dev'
		}
	})
}

watch('src/**/*.html', htmlDev)
watch('src/style/**/*.scss', stylesDev)
watch('src/script/**/*.js', scriptsDev)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/script/libs/**', libsJs)
watch('src/css/libs/**', libsCss)

exports.stylesBuild = stylesBuild
exports.stylesDev = stylesDev
exports.scriptsBuild = scriptsBuild
exports.scriptsDev = scriptsDev
exports.htmlMinify = htmlMinify
exports.default = series(clean, fonts, libsCss, libsJs, htmlDev, phpLibs, phpFiles, htmlMinify, stylesBuild, stylesDev, scriptsBuild, scriptsDev, imgMin, svgSprites, watchFiles)