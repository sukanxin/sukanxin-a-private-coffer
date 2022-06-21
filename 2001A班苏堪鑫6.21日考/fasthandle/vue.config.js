const { defineConfig } = require('@vue/cli-service')
const bodyParser = require('body-parser')
const Mock = require('mockjs')
const data = Mock.mock({
  'list|20': [
    {
      img: '@image(150x150,@color,@name)',
      'like|100-5000': 1,
      'id|+1': 1,
    },
  ],
})
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, { app }) => {
      app.use(bodyParser.json())
      app.get('/api/list', (req, res) => {
        res.send({
          code: 200,
          msg: 'success',
          data: data.list,
        })
      })
      return middlewares
    },
  },
})
