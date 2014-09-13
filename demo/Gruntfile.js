
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
          'css/*' : 'scss/*'
          // Styleguide Scss
        }
      }
    },

    watch: {

      css: {
        files: [
          'scss/*.scss'
          ],
        tasks: ['sass']
      },

      hologram: {
        files: [
          'scss/*',
          'doc_assets/*'
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