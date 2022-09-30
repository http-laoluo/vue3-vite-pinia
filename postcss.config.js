
// postcss.config.js
// 用 vite 创建项目，配置 postcss 需要使用 post.config.js，之前使用的 .postcssrc.js 已经被抛弃
// 具体配置可以去 postcss-pxtorem 仓库看看文档https://github.com/cuth/postcss-pxtorem#postcss-pxtorem
// const autoprefixer = require('autoprefixer')
module.exports ={
      "plugins": {
        "postcss-pxtorem": {
          rootValue:({file})=>{
            console.log(file);
                let rootValue
                if (file && file.indexOf('@nutui') > -1) {   
                  rootValue = 16
                } else {
                  rootValue = 37.5
                }
                return rootValue
          }, 
          propList: ['*'],
          selectorBlackList: ['.ignore'],
          minPixelValue: 2,
          // exclude: /node_modules/i
        }

     }
   
}