module.exports = function (grunt) {
    grunt.initConfig({
        responsiveImages: {
            dev: {
                options: {
                    sizes: [{
                        width: 320,
                        height: 240,
                        name: 'small'
                    }, {
                        width: 640,
                        name: 'medium'
                    }, {
                        width: 800,
                        name: 'large'
                    }, {
                        width: 800,
                        name: 'extra-large',
                        suffix: '_x2',
                        quality: 0.6
                    }]
                },
                files: [{
                    expand: true,
                    src: ['img/**/*.{ jpg, gif, png }'],
                    cwd: '/',
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTasks('default', ['responsiveImages']);
}