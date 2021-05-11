const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: '请输入你的姓名',
    default: '',
    // 对输入值校验
    validate(val){
      if (val === ''){
        return '姓名不能为空'
      }
      return true
    },
    // 对输入或选择的数据进行过滤
    filter(val){
      return val.toLowerCase();
    }
  },
  // 提出选择，用户选择 Y or N
  {
    type: 'confirm',
    name: 'useEs6',
    message: '是否启用ES6支持',
    default: true
  },
  // 单选
  {
    type: 'list',
    name: 'project',
    message: '请选择前端框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 0
  },
  // 可用选项：type, name, message, choices[, filter, validate, default] choices 为一个对象数组，对象中 checked 属性 为 true 的表示默认选中项
  {
    type: 'checkbox',
    name: 'tools',
    message: '开发工具',
    choices: [
      {
        name: '使用ESLint',
        value: 'eslint',
        checked: true
      },
      {
        name: '使用mocha单元测试',
        value: 'mocha'
      },
      {
        name: '使用e2e测试',
        value: 'e2e'
      }
    ]
  }
]).then(answers => {
  console.log(answers)
})

