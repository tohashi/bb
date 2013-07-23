module.exports = (grunt) ->
  grunt.initConfig

    connect:
      livereload:
        options:
          port: 3000
          base: './'
          keepalive: true

    regarde:
      files: '*'
      tasks: ['livereload']

  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-contrib-livereload'

  grunt.registerTask 'server', ['livereload-start', 'connect', 'regarde']
