module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    hologram: {
      generate: {
        options: {
          config: 'hologram_config.yml'
        }
      }
    },

    sass: {
      dist: {
        files: {
          // Project Scss
          'app/css/styles.css' : 'app/scss/styles.scss',
          // Styleguide Scss
          'docs/sg-css/sg-styles.css' : 'doc_assets/_sg-scss/sg-styles.scss'
        }
      }
    },

    watch: {

      css: {
        files: [
          'app/scss/*.scss',
          'doc_assets/_sg-scss/*.scss'
          ],
        tasks: ['sass']
      },

      hologram: {
        files: [
          'hologram_config.yml',
          'app/scss/*.scss',
          'doc_assets/_sg-scss/*.scss',
          'doc_assets/*.html'
        ],
        tasks: ["hologram"]
      },

      grunt: {
        files: [
        'Gruntfile.js'
        ],
        tasks: ["watch"]
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-hologram');
  grunt.registerTask('default', ['watch']);

};