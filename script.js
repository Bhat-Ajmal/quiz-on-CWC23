const chalk = require("chalk")
score=0;
var readlinesync=require('readline-sync');
var friendsName=readlinesync.question('what is your name? ');
console.log(chalk.bold.green('Welcome '+ friendsName + ' to Ajmal\'s quiz on #WC23 with FRIENDS!'));
var want=readlinesync.question(chalk.bold.red('\n what do you want to do? \n Press e to exit, other key to continue: '));