module.exports = function (grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            sass: {
                files: "app/scss/*.scss",
                tasks: ['sass']
            }
        },
        // SASS task config
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'bower_components/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    "app/css/styles.css" : "app/scss/layout.scss"
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './app'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
};