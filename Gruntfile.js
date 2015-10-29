module.exports = function(grunt) {
	
	// Load plugins
	require('load-grunt-tasks')(grunt);
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: {
					'dist/angular-switcher.js': ['src/angular-switcher.js'],
					'dist/angular-switcher.css': ['src/angular-switcher.css']
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! angular-switcher - v<%= pkg.version %> - https://github.com/indrimuska/angular-switcher - (c) 2015 Indri Muska - MIT */\n'
			},
			main: {
				files: {
					'dist/angular-switcher.min.js': ['dist/angular-switcher.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			main: {
				files: {
					'dist/angular-switcher.min.css': ['dist/angular-switcher.css']
				}
			}
		},
		'sync-json': {
			options: {
				include: ['name', 'description', 'version']
			},
			bower: {
				files: {
					"bower.json": "package.json"
				}
			}
		}
	});
	
	// Default tasks.
	grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'sync-json']);
	
};