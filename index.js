
// Module package 3xil: Core, External, File
// ==========================================
// Core
// ==========================================

// setTimeout(function(){
//     console.log("ishga tushdi")
// }, 1000)


// let number = 0;
// setInterval(function(){
//     console.log("hisob", number);
//     number++;
// }, 100)

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt','utf-8');
// console.log(data);

// console.log('**********')

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Ulugbek`);
// const new_data = fs.readFileSync('./input.txt','utf-8');
// console.log(new_data);







// ==========================================
// External
// ==========================================


// const moment = require('moment');
// // const time = moment().format();
// // console.log(time)
// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`)
// }, 5000);


// const inquirer = require("inquirer");
// inquirer
//     .prompt([{type: 'input', name: 'raqam', message: 'Raqamni kiriting'}])
//     .then(answer => {
//         console.log("Men kiritgan raqam qiymati", answer.raqam);
//     })
//     .catch((err) => console.log(err));

// import inquirer from 'inquirer';

// inquirer
//   .prompt([{type: 'input', name: 'raqam', message: 'Raqamni kiriting'}])
//   .then(answer => {
//     console.log("Men kiritgan raqam qiymati", answer.raqam);
//   })
//   .catch((err) => console.log(err));


// const validator = require("validator");
// // const test = validator.isEmail('foo@bar.com');
// const test = validator.isInt("100");
// console.log("test:", test);

// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random: ", random);

// const chalk = require("chalk");
// const log = console.log;

// // log(chalk.blue("Hello ") + random + chalk.red(" !"));
// // log(chalk.blue(`uuid creates ${random}`));
// log(chalk.red(`uuid creates ${random}`));

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("natija: ", natija);
// console.log("******************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("natija: ", natija2);
// console.log("******************");

// const natija3 = calculate.ayirish(80, 20);
// console.log("natija: ", natija3);
// console.log("******************");

// console.log(require("module").wrapper);
// console.log(arguments);


const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("===================")


const myAccount = new Account('Martin', 200000, 9765657577);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// Bugatti Chiron 2.4 million usd
// myAccount.withdrawMoney(2400000);

// Ferrari 400 ming usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
