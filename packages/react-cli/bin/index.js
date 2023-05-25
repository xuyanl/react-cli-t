#!/usr/bin/env node

// const { program } = require('commander');
// const path = require('path')
// const inquirer = require('inquirer');
// const fs = require('fs')

import { program } from 'commander'
import inquirer from 'inquirer'
import ejs from 'ejs'
import fs from 'fs'
import { fileURLToPath } from 'node:url'
import path, { dirname } from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))
import pkg from '../package.json' assert { type: "json" }

// program.name('my-command').usage('[global options] command')
// program.option('--first').option('-s, --separator [char]', 'ssssss')
program.version(pkg.version, '-v --version', '版本信息')
console.log(pkg.version, 'version');
// console.log(program.version('0.0.1', '-v --version', '版本信息'), '11');

// program
//     .name('connect')
//     .argument('<server>', 'connect to the specified server')
//     .argument('[user]', 'user account for connection', 'guest')
//     .argument('[t]', 'user account for connection', 't')
//     .description('Example program with argument descriptions')
//     .action((server, user, t) => {
//         console.log('server:', server);
//         console.log('user:', user);
//         console.log('t:', t);
//     });

// program
//     .command('clone <source> [destination]')
//     .description('clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log(source, 'clone command called', destination)
//     })

// program.command('start <service>').command('stop [service]')

const questionList = [
    {
        type: 'list',
        name: 'select',
        message: '请选择需要初始化的模版',
        // prefix: '>>',
        // message: '扩展列表',
        choices: [
            {
                name: 'pc',
                value: 'pc',
                description: 'npm is the most popular package manager'
            },
            {
                name: '大屏',
                value: 'screen',
                description: 'yarn is an awesome package manager'
            },
            {
                name: 'h5',
                value: 'h5'
            }
        ]
        // askAnswered: false,
        // filter: function (val) {
        //     return val.toLowerCase();
        // }
    }
    // {
    //     type: 'rawlist',
    //     name: 'rawlist',
    //     message: '有序列表',
    //     choices: ['default(babel, eslint)', 'Manually select feature'],
    //     filter: function (val) {
    //         return val.toLowerCase();
    //     }
    // },
    // {
    //     type: 'list',
    //     name: 'list',
    //     message: '无序列表',
    //     choices: ['default(babel, eslint)', new inquirer.Separator('------'), 'Manually select feature'],
    //     filter: function (val) {
    //         return val.toLowerCase();
    //     }
    // }, {
    //     loop: true,
    //     askAnswered: true,
    //     type: 'checkbox',
    //     name: 'features',
    //     message: '多选框',
    //     choices: [{
    //         name: 'Babel',
    //     }, {
    //         name: 'TypeScript',
    //     }, {
    //         name: 'Progressive Web App (PWA) Support',
    //     }, {
    //         name: 'Router',
    //     }, {
    //         name: 'Vuex',
    //     }, {
    //         name: 'CSS Pre-processors',
    //     }, {
    //         name: 'Linter / Formatter',
    //     }, {
    //         name: 'Unit Testing',
    //     }, {
    //         name: 'E2E Testing',
    //     }],
    //     pageSize: 9,
    //     validate: function (answer) {
    //         if (answer.length < 1) {
    //             return 'You must choose at least one topping.';
    //         }

    //         return true;
    //     }
    // }
]

// inquirer.prompt(questionList).then(res => {
//     console.log(res);
//     getClone()
// }).catch(err => {
//     console.log(err);
// })

program
    .command('create-app')
    .description('create-app')
    .action((dir, destination) => {
        inquirer
            .prompt(questionList)
            .then((res) => {
                const select = res.select
                const data = { h5: false, screen: false, pc: false }
                switch (select) {
                    case 'pc':
                        data.pc = true
                        break
                    case 'h5':
                        data.h5 = true
                        break
                    case 'screen':
                        data.screen = true
                        break
                }
                fs.cp(
                    path.resolve(__dirname, '../template/'),
                    process.cwd(),
                    { recursive: true },
                    async function (err) {
                        const files = ['package.json', 'index.html', 'config/index.js']

                        files.map(item => {
                            const filePath = path.resolve(process.cwd(), item)
                            // console.log(data, 'dddd');
                            // console.log(filePath, 'filePath');
                            ejs.renderFile(
                                filePath,
                                { ...data },
                                function (err, str) {
                                    // console.log(err, str, 'str')

                                    fs.writeFile(filePath, str, function () {
                                        // console.log('编译成功')
                                    })
                                }
                            )
                        })

                    }
                )

                // shell.js

            })
            .catch((err) => {
                console.log(err, 'err')
            })
    })

program.parse()

// const options = program.opts()
// const limit = options.first ? 1 : undefined
// console.log(program.args[0].split(options.separator, limit));
// console.log(program.args, options, process.argv);
// console.log(__dirname)
// console.log(process.cwd())
// console.log(path.resolve(__dirname, '../template'))
