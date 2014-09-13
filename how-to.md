# How to set up Grunt and Hologram quickly

## Configure Hologram

1. `cd` to where you want Hologram
2. `gem install hologram`
3. or add `gem "hologram"` to your `Gemfile` and run `bundle install`
4. run `hologram init`

## Configure Grunt

1. `cd` to where you want grunt in your directory
2. Type `node -v` into your terminal.
3. If a version number is returned, you already have Node installed, so you can jump to step 5.
4. If you get an error, go to the [Node website](http://nodejs.org/) and download the latest version.
5. run `npm install`
6. install grunt with `npm install grunt --save-dev`
7. install grunt hologram with `npm install grunt-hologram --save-dev`
8. install grunt watch with `npm install grunt-contrib-watch --save-dev`
9. create a `gruntfile.js`

Here's an example:

```module.exports = function(grunt) {

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

};```