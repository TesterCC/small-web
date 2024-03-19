# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## [完整课程] Vue3+Vite4+Pinia+ElementPlus从0-1 web项目搭建 todo

- [在线视频](https://www.bilibili.com/video/BV1Hz4y1j7Mw/?p=7) 0:50
- [讲师笔记](https://gitee.com/zhengqingya/smallboot/tree/master/small-web/doc)

## [课前基础-前端Vue3一小时快速入门学习](https://www.bilibili.com/video/BV1ap4y177eY?p=3) todo

方便快速学习Vue3语法

Vue2将于2023年12月31日停止维护。

### Vue.js API风格

- 选项式，vue2常用，特征： <script> export default
- 组合式，vue3常用，特征：可用setup语法糖，<script setup> import {ref} from 'vue'

P.S.: 5月准备rk而且依旧要支持项目，所以可能这个课程跟进不会那么及时（先把后端gin和mongo的课程学完，然后是看是学这个，还是python的asyncio那本书同时学）

这个项目虽然简单，但是比较符合正式项目构建标准。

比较新，基本主流技术栈都用上了，推荐看下

```
Vue3+Vite4+Pinia+ElementPlus  从0-1 web项目搭建
笔记文档：https://gitee.com/zhengqingya/java-developer-document
项目源码：https://gitee.com/zhengqingya/smallboot
```

技术栈：

```
vu3
vite4
pinia  （类似vuex，但更强大）
vue router
Element-plus

默认用的javascript，不过更推荐用typescript
```

### 创建项目

官方文档：https://cn.vite.js.dev/guide/

```shell
npm create vite@latest small-web -- --template vue --registry=https://registry.npmjs.org/

Scaffolding project in D:\git_workspace\ws_vuejs\small-web...

Done. Now run:

  cd small-web
  npm install
  npm run dev
```

```shell
项目初始化：
cd small-web
npm install --registry=https://registry.npmjs.org/
npm run dev
```

### 代码格式化

各种配置参考作者笔记：https://gitee.com/zhengqingya/java-developer-document/tree/master/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%89%8D%E7%AB%AF/03-%E2%98%86%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E2%98%86/web%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/02-%E3%80%90%E7%AC%AC%E4%BA%8C%E7%89%88%E3%80%91vue3+vite4/small-web/doc

1.vscode安装插件，搜vue.js下载官方的， 搜 Prettier 安装格式优化插件

2.安装prettier

因为众所周知的网络问题，用npm要指定国内源，或者改用cnpm也行。

```shell
cd small-web
npm install --save-dev --save-exact prettier --registry=https://registry.npmjs.org/
npm install eslint --save-dev --registry=https://registry.npmjs.org/
```

3.配置prettier

具体配置看项目源码：`https://gitee.com/zhengqingya/smallboot`

1.设置 格式化配置文件

在线调试配置 ref: prettier.io/playground/

文件名：`.prettierrc.json`

```json
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "singleAttributePerLine": false,
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "proseWrap": "preserve",
  "insertPragma": false,
  "requirePragma": false,
  "useTabs": false,
  "embeddedLanguageFormatting": "auto",
  "tabWidth": 2,
  "printWidth": 200
}
```

2.设置 忽略格式化文件

文件名：`.prettierignore`

```
/dist/*
/node_modules/**
**/*.svg
/public/*
```

3.然后设置vscode settings，勾选Format on Save

多个插件的话，可以单击右键选择Format Document With -> 选择你要使用的格式化插件

可以把默认的配置为prettier

### ESLint安装

http://zh-hans.eslint.org

```
npm install --D eslint prettier eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier --registry=https://registry.npmjs.org/
```

#### 规则配置

规则中文解释 http://eslint.cn/docs/rules/

rules: {
'规则名': '规则值'
// eg:
'no-undef': 'off'
}

#### 规则值

    "off"或者0 => 关闭检测规则
    "warn"或者1 => 打开并把打开的检测规则作为警告（不影响退出代码）
    "error"或者2 => 打开并把检测规则作为一个错误（退出代码触发时为1）

#### .eslintignore 忽略检查

```
node_modules
*.md
.vscode
.idea
dist
public
*.js
*.cjs
```

#### 配置vite项目启动时检查

```
cnpm install -D vite-plugin-eslint
```

or

```
npm install --D vite-plugin-eslint --registry=https://registry.npmjs.org/
or
npm install --D vite-plugin-eslint
```

PS: https://registry.npmjs.org/可能已经过期，镜像如果过期，就换个镜像。

```
npm config list

npm config set registry https://registry.npmjs.org

npm config list
```

vite.config.js

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({ lintOnStart: true, cache: false }), // 项目运行时进行eslint检查
  ],
});
```

#### VScode插件Extensions搜eslint，安装Microsoft插件

四、检验

    tips: 如果vscode中没有效果，可以尝试重启vscode看看。

VScode快捷键

- Alt + F8 查看问题
- Ctrl + . 快速修复
