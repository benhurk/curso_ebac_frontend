//Puxar os pacotes instalados para o script. --> const nomeDoPacote = require('nomeDoPacote');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

/* Como funciona a estrutura do código:

1- Criamos funções que executarão os pacotes que queremos, essas funções são chamadas de "tarefas":

function nomeQualquerDaFunção() {
    return gulp.src('./pasta/arquivos')     <-- Primeiro informamos os arquivos que queremos aplicar o script.
        .pipe(pacote())                     <-- Agora chamamos o pacote que usaremos passando o nome da constante onde fizemos o 'require()' dele.
        .pipe(gulp.dest('./pasta'));        <-- Por fim passamos um diretório para onde os arquivos irão após o script ser aplicado neles.
}


2- Podemos criar uma função que vai ser usada para executar todas as tarefas que queremos, basicamente é uma tarefa que contem várias tarefas:

function funçãoPrincipal() {                                                                      | 1- Usamos o gulp.watch para informar a tarefa que queremos e executa-la automaticamente quando alterações forem feitas.
    gulp.watch('./pasta/arquivos', gulp.series(nomeQualquerDaFunção));                            | 2- Passamos o mesmo diretório que especificamos no 'gulp.src' nas funções das tarefas.
}                                                                                                 | 3- Passamos 'gulp.series()' ou 'gulp.parallel()' com o nome das funções.


3- Executamos:

-Usando 'exports.default' (roda o script como um todo usando o comando 'npm run gulp'):
exports.default = funçãoPrincipal;             <-- passando a função que executa todas as nossas tarefas.
exports.default = series(função, função);      <-- usando 'series()' ou 'parallel()' e informando as funções uma por uma.

-Usando 'exports.nomeDaTarefa' (roda apenas uma função específica usando o comando 'npm run gulp nomeDaTarefa):
exports.nomeDaTarefa: nomeQualquerDaFunção;    <-- informamos apenas a função específica que queremos executar.
*/

function compileSASS() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/styles'));
}

function minifyJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function imageMin() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function Default() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compileSASS));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(minifyJs));
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(imageMin));
}

exports.default = Default;