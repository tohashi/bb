module.exports = (grunt) ->
    grunt.initConfig

      connect:
        server:
          options:
            port: 3000
            base: './'
            keepalive: true

    grunt.loadNpmTasks('grunt-contrib-connect')

    grunt.registerTask('server', ['connect'])
