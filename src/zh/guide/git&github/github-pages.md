# 使用Github Pages或Githee Pages部署Vue项目
#### 文章目录

### 1.背景
> ### 1.Github（Gitee） Pages 服务作为一个页面容器，可以说是非常方便了。我们可以在上面`免费`部署前端项目。
> ### 2.并且同时获得一个附带`.github.io（gitee.io）`的网址。
> ### 3.其他优点就不再赘述，可自行百度。

### 2.Github Pages的介绍
#### 具体可以看这个网址[Gitee Pages官方介绍](https://pages.github.com/)

### 3.上传自己的项目到Github上。
##### 点击项目导航栏中的`Settings --> Pages`
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261633285.png)

#### 如果是静态项目，此处不再说啥，直接构建，你的项目中有`index.html(主入口)`就可以

### 4.如果你的是Vue项目(重点讨论)
#### 在项目路径中添加`.spa`文件
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261641125.png)
##### 原理，我不是很清楚，应该是给Nginx做一个`标识`作用吧。

### 5. 本地`build
### `在构建前，一定要注意修改两个地方`

#### 一、将`build.js`文件中的`console.log`全部注释
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261647571.png)

#### 二、将`config/index.js`中的`assetsPublicPath`值改为`./`或图中的英文指示改为你的项目名称加/`如： '/ltz/'`
#### 解决`JS访问不到`的问题。
## 注意，此处修改的`assetsPublicPath`为`build`对象中的！
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261648702.png)

#### 三、打开`build/utils.js`文件（解决`CSS/字体找不到`问题）
###### 在如下位置添加 `publicPath: '../../'`
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261649272.png)
##### 在本地运行`npm run build`，得到`dist`
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261650092.png)

### 7.将`build`得到的文件，上传到你`git`仓库中。

### 8.点击项目导航栏中的`Settings --> Pages`

### 9.开始构建
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261633285.png)
## 选择你的分支，如果只有一个分支，就选`master`
## 选择部署目录，本文中，`build`后的文件全部都在`dist`目录下，所以，填入`dist`。
## 如果，你发现，构建后，`css\js\img`等文件，报了`404`异常，请看本文`第5步 -> 二\三`
