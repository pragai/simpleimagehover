module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("simpleimagehover.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.simpleimagehover.js"],
				dest: "dist/jquery.simpleimagehover.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.simpleimagehover.js"],
				dest: "dist/jquery.simpleimagehover.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["concat", "uglify"]);

};
