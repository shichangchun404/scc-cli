const chalk = require('chalk')

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.blue.bgWhite.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));