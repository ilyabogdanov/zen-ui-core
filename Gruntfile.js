var grunt = require("grunt");
var package = grunt.file.readJSON("package.json");

module.exports = function() {
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch"]);
    grunt.initConfig({
        package: package,
        sass: {
            dist: {
                files: [{
                    "dist/<%= package.name %>.css": "src/all.scss"
                }]
            }
        },
        watch: {
            dist: {
                files: [
                    "src/**/*.scss",
                    "src/**/*.sass"
                ], tasks: [
                    "sass:dist"
                ]
            }
        }
    });
}