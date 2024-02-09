module.exports = function(grunt) {
    //Configurar plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Especificar configurações para os plugins e referenciar diretórios de arquivos.

        less: {
            development: {
                files: {
                    './build/styles/styles.css' : './src/styles/styles.less'
                }
            },

            production: {
                options: {
                    compress: true
                },

                files: {
                    './build/styles/styles.min.css' : './src/styles/styles.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    './build/scripts/main.min.js' : './src/scripts/main.js'
                }
            }
        }
    })

    /*Carregar os plugins.
    grunt.loadNpmTasks('nomeDoPlugin'); */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');        

    /*Criar as tarefas.
    grunt.registerTask('nomeDaTarefa', ['nomeDaTarefa']); */
    grunt.registerTask('default', ['less', 'uglify']);
}