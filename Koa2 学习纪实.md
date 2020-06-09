# koa 学习纪实

## 全局安装脚手架

```javascript
cnpm install -g koa-generator
yarn global add koa-generator
```



## 使用脚手架新建Koa2项目

```javascript
koa2 -e koa2-learn
```



## 连接redis所需要的依赖

```javascript
yarn add koa-generic-session koa-redis
```

### redis应用的两种场景

1.结合session，存储信息。

2.直接连接redis，对需要高速读写的数据进行存储。



## 连接mongdb插件

```javascript
yarn add mongoose
```

[mongoose官方文档](https://github.com/Automattic/mongoose)



## koa 与 nuxt框架的结合

```
yarn create nuxt-app <项目名>
```

在集成的服务器端框架之间进行选择koa框架。

### 相关依赖

- koa-router
- axios
- element-ui && iview && antdesign vue && vant
- sass && stylus



### 常见问题 Q&A

- #### nuxt脚手架搭建项目中不能使用es6模块化语法怎么办？

  安装babel

  ```
  yarn add babel-cli babel-core babel-preset-es2015
  ```

  项目根目录下新建.babelrc文件

  ```javascript
  {
    "presets": ["es2015"]
  }
  
  ```

  package.json 文件中 dev start后面加上

  ```
  --exec babel-node
  ```

- #### nuxt 如何配置对 sass、less、stylus等预编译器

  当您需要在页面中注入一些变量和`mixin`而不必每次都导入它们时，这非常有用。

  安装 style-resources：

  ```
  $ yarn add @nuxtjs/style-resources
  ```

  根据需要安装：

  - SASS: `$ yarn add sass-loader node-sass`
  - LESS: `$ yarn add less-loader less`
  - Stylus: `$ yarn add stylus-loader stylus`

  修改 `nuxt.config.js`:

  ```javascript
  export default {
    modules: [
      '@nuxtjs/style-resources'
    ],
    styleResources: {
      scss: './assets/variables.scss',
      // less: './assets/**/*.less'
      // sass: ...
      // stylus: '~/assets/common.styl',
    }
  }
  ```

  