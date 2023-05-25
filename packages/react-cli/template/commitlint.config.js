
// 官网文档 https://commitlint.js.org/#/

const checkType = (header) => {
    header = `${header}`
    const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs', 'perf']
    const realType = header.split(':')[0]
    return enumType.includes(realType)
}

const checkSubject = (header) => {
    header = `${header}`
    const realSubject = header.split(':')[1]
    if (!realSubject) {
        return false
    }
    return realSubject.length > 0
}

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum-rule': [2, 'never'],
        'subject-enum-rule': [2, 'never']

    },
    prompt: {
        questions: {
            type: {
                description: 'Select the type of change that you\'re committing:',
                enum: {
                    feat: {
                        description: '新功能',
                        title: 'Features',
                        emoji: '✨'
                    },
                    fix: {
                        description: 'bug修复',
                        title: 'Bug Fixes',
                        emoji: '🐛'
                    },
                    docs: {
                        description: '文档修改',
                        title: 'Documentation',
                        emoji: '📚'
                    },
                    style: {
                        description: '代码格式修改, 注意不是 css 修改, 仅仅是对格式进行修改，如逗号、缩进、空格等',
                        title: 'Styles',
                        emoji: '💎'
                    },
                    refactor: {
                        description: '代码重构（既不修复错误也不添加功能的代码更改）',
                        title: 'Code Refactoring',
                        emoji: '📦'
                    },
                    perf: {
                        description: '优化相关，比如提升性能、体验',
                        title: 'Performance Improvements',
                        emoji: '🚀'
                    },
                    test: {
                        description: '测试用例，包括单元测试、集成测试',
                        title: 'Tests',
                        emoji: '🚨'
                    },
                    build: {
                        description: '编译相关的修改，例如发布版本、对项目构建或者依赖的改动',
                        title: 'Builds',
                        emoji: '🛠'
                    },
                    ci: {
                        description: '更改我们的CI配置文件和脚本（例如作用域：Travis、Circle、BrowserStack、SauceLabs）',
                        title: 'Continuous Integrations',
                        emoji: '⚙️'
                    },
                    chore: {
                        description: '其他修改, 比如改变构建流程、或者增加依赖库、工具等',
                        title: 'Chores',
                        emoji: '♻️'
                    },
                    revert: {
                        description: '回滚到上一个版本',
                        title: 'Reverts',
                        emoji: '🗑'
                    }
                }
            }

        }
    },
    plugins: [
        {
            rules: {
                'type-enum-rule': ({ header }) => {
                    return [
                        checkType(header),
                        '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, ' +
                        '可选值有: feat/fix/style/test/chore/ci/revert/docs/refactor/build/perf, 类型后面紧跟英文冒号分隔主题信息'
                    ]
                },
                'subject-enum-rule': ({ header }) => {
                    return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能']
                }
            }
        }
    ]
}
