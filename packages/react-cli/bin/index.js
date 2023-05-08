#! /usr/bin/env node


// console.log(process.argv, 'sdfsdfs');




import inquirer from 'inquirer'
import downloadGit from 'download-git-repo'

import { fileURLToPath } from 'node:url'
import path, { dirname } from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))


const getClone = () => {
    const dir = path.resolve(__dirname, "../../test");
    console.log(dir, 'rere');
    downloadGit('xuyanl/cli/', dir, function (err) {
        if (err) {
            console.log('出错了', err);
        } else {
            console.log('成功');
        }
    })
}
getClone()

const questionList = [
    {
        type: 'expand',
        name: 'expand',
        prefix: '>>>>',
        message: '扩展列表',
        choices: [{
            name: '红色',
            key: 'r',
            value: 'red'
        }, {
            name: '蓝色',
            key: 'b',
            value: 'blue'
        }],
        default: 'r',
        askAnswered: false,
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'rawlist',
        name: 'rawlist',
        message: '有序列表',
        choices: ['default(babel, eslint)', 'Manually select feature'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'list',
        message: '无序列表',
        choices: ['default(babel, eslint)', new inquirer.Separator('------'), 'Manually select feature'],
        filter: function (val) {
            return val.toLowerCase();
        }
    }, {
        loop: true,
        askAnswered: true,
        type: 'checkbox',
        name: 'features',
        message: '多选框',
        choices: [{
            name: 'Babel',
        }, {
            name: 'TypeScript',
        }, {
            name: 'Progressive Web App (PWA) Support',
        }, {
            name: 'Router',
        }, {
            name: 'Vuex',
        }, {
            name: 'CSS Pre-processors',
        }, {
            name: 'Linter / Formatter',
        }, {
            name: 'Unit Testing',
        }, {
            name: 'E2E Testing',
        }],
        pageSize: 9,
        validate: function (answer) {
            if (answer.length < 1) {
                return 'You must choose at least one topping.';
            }

            return true;
        }
    }
]

// inquirer.prompt(questionList).then(res => {
//     console.log(res);
//     getClone()
// }).catch(err => {
//     console.log(err);
// })