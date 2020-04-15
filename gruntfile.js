module.exports = function(grunt) {
    const sass = require("node-sass");
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      imagemin: {
        dynamic: {
          files: [
            {
              expand: true,
              cwd: "app/images",
              src: ["**/*.{png,jpg,gif}"],
              dest: "app/images"
            }
          ]
        }
      },
  
      sass: {
        options: {
          implementation: sass
        },
        dist: {
          files: {
            "dist/css/main.css": "app/scss/main.scss"
          }
        }
      },
  
      cssmin: {
        build: {
          files: {
            "dist/css/main.min.css": "dist/css/main.css"
          }
        }
      },

      watch: {
        css: {
          files: ["**/*.scss"],
          tasks: ["sass", "cssmin"]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("imagemin", ["imagemin"]);
    grunt.registerTask("default", ["sass", "cssmin", "watch"]);
  };