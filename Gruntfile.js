/*
 * Groundwork Framework
 * Copyright 2015 Fredrick Rogers
 * http://groundwork.fredrickrogers.com
 * MIT License
 */

 module.exports = function(grunt) {
 	// Force us of Unix newlines
 	grunt.util.linefeed = '\n';

 	grunt.initConfig({

 		// Metadata
 		pkg: grunt.file.readJSON('package.json'),
 		banner: '/*\n' +
 				' * Groundwork v<%= pkg.version %> \n' +
 				' * Copyright 2015 \n' +
 				' * Licensed under <%= pkg.license.type %> \n' +
 				' */\n',

 		clean: {
 			dist: 'dist',
 			docs: 'docs/dist'
 		},

 		jshint: {
 			grunt: {
 				src: ['Gruntfile.js']
 			},
 			core: {
 				src: 'js/*.js'
 			},
 			test: {
 				src: 'js/tests/unit/*.js'
 			}
 		},

 		sass: {
 			core: {
 				options: {
 					style: 'expanded',
 					banner: '<%= banner %>'
 				},
 				files: {
 					'sass/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss'
 				}
 			}
 		}
 	});

 	grunt.loadNpmTasks('grunt-contrib-clean');
 	grunt.loadNpmTasks('grunt-contrib-compress');
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-csslint');
 	grunt.loadNpmTasks('grunt-contrib-jade');
 	grunt.loadNpmTasks('grunt-contrib-jshint');
 	grunt.loadNpmTasks('grunt-contrib-qunit');
 	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-watch');

 	grunt.registerTask('sass-compile', ['sass:core']);
 	grunt.registerTask('test-js', ['jshint:core', 'jshint:test', 'jshint:grunt']);
 
 };