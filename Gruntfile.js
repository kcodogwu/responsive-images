module.exports = function (grunt) {
    grunt.initConfig({
        responsiveImages: {
            dev: {
                options: {
                    sizes: [{
                        name: 'small',
                        width: '30%',
                        suffix: '-small',
                        quality: 20
                    }, {
                        name: 'large',
                        width: '50%',
                        suffix: '-large',
                        quality: 40
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/',
                    dist: 'img/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTasks('default', ['responsiveImages']);
};