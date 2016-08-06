var gulp = require("gulp");
babel = require("gulp-babel");

gulp.task("default", () => {
        return gulp
        // .src(["./src/scripts/application.js", "./src/scripts/utility.js"])
        .src("./src/scripts/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./public/scripts"));
});