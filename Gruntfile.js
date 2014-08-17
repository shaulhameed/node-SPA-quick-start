//Grunt Configuration for Build Process

'use strict';

module.exports = function(grunt){
	grunt.initConfig({
	    concat: {
			dist: {
			  src: ['app/*.js', 'app/**/*.js'],
			  dest: 'public/scripts/app.js',
			},
		},
		connect: { 
	      dist: {
	        options: {
	          port: 6000,
	          hostname: 'localhost',
	          base: 'public',
	          livereload: true
	        }
	      }
	    },
	    less:{
			development: {
				options: {
					livereload: true
				},
				files:[
					{
						expand: true, 
						cwd: 'vendor/bootstrap/less',
						src: ['bootstrap.less'],
						dest: 'public/css',
						ext: '.css'
					},
					{
						expand: true, 
						cwd: 'app/styles',
						src: ['*.less'],
						dest: 'public/css',
						ext: '.css'
					},
					{
						expand: true, 
						cwd: 'vendor/fontawesome/less',
						src: ['font-awesome.less'],
						dest: 'public/css',
						ext: '.css'
					}

				]			
			}
		},
		copy:{
			main: {
				files: [
					{
						cwd: 'vendor/angular/',
						src: 'angular.js',
						dest: 'public/scripts/',
						expand: true
					},
					{

						cwd: 'vendor/angular-route/',
						src: 'angular-route.js',
						dest: 'public/scripts/',
						expand: true
					},
					{
						cwd: 'vendor/fontawesome/fonts',
						src: '*',
						dest: 'public/fonts',
						expand: true
					}
				]
			}
		},
		jade:{
			html:{
				files:[{
						expand: true,
						cwd: 'app/views/',
						dest: 'public/views',
						src: '*.jade',
						ext: '.html'
					},
					{
						expand: true,
						cwd: 'app',
						dest: 'public',
						src: '*.jade',
						ext: '.html'
					}
					],
				options:{
					client: false,
					livereload: true,
					pretty: true
				}
			}	
		},	
		open:{
			dev:{
				path: "http://localhost:3000",
				app: "Google Chrome"
			}
		},
		ngdocs:{
			all: ['public/app.js']
		},
		watch:{
			js:{
				files: ['app/.*js', 'app/**/*.js'],
				tasks: ['concat', 'ngdocs'],
				options: {
					livereload:true
				}
			},
			jade: {
				files: ['app/*.jade', 'app/views/**/*.jade', 'app/**/*.jade'],
				tasks: ['jade'],
				options:{
					livereload: true
				}
			},
			less:{
				files: ['app/styles/*.less'],
				tasks: ['less'],
				options:{
					livereload:true
				}
			},
			ngdocs: {
				files: ['public/app.js'],
				tasks: ['ngdocs']
			}
		},
	});

	//Loads all Grunt task
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-livereload");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask('default', ['jade','less','copy','concat', 'connect:dist','ngdocs', 'open', 'watch']);

}