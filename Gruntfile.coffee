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

    hogan:
      publish:
        files:
          "templates/compiled.js": ['templates/*.html']
        options:
          namespace: 'T'
          amdWrapper: true
          defaultName: (filename) ->
            filename.split('/').pop().split('.').shift()

    watch:
      templates:
        files: './templates/*.html'
        tasks: ['hogan']

  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-contrib-livereload'
  grunt.loadNpmTasks 'grunt-contrib-hogan'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'compile', ['hogan']
  grunt.registerTask 'server', ['livereload-start', 'connect', 'regarde']
