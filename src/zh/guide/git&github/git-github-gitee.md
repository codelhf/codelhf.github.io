# Git同时推送到Github和Gitee
博主是根据自己的情况写这篇博文的，每个人遇到的情况和需求可能不一样哈，所以初始的步骤也不一定一致，但是同时推送到Github和Gitee的步骤都会是一致滴！

## Gitee拉取Github仓库
直接在Gitee中创建一个项目，然后再最后一行导入Github项目就阔以啦！
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261625034.png)
去到你的Github仓库复制https链接，直接粘贴就阔以啦
![](https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261630321.png)
到此为止，在Gitee就已经创建好仓库啦

## 本地配置推送方式
- 方式一：定义不同的远程仓库名称，然后分别推送 多次推送，配了几个远程仓库就推送几次
- 方式二：在同一个远程仓库下添加另一个远程仓库的地址，然后推送 only一次推送 

**以下情况均是本地只有单个ssh-key时的操作！！**
### 方式一：多次推送
| 优点 | 缺点 |
| --- | --- |
| 1. 想推哪个仓库就推哪个<br>2. 不想推哪个就不推哪个 | 推送仓库数量多时，时间成本高 |

- **1.可以直接通过命令将本地项目和gitee项目关联**
```shell
git remote add gitee 码云项目地址 
```
- **2.也可以通过修改本地项目的配置文件**

1. 首先，进入到项目的 .git 文件夹，打开 config 文件
2. 然后，找到 [remote "origin"] ，复制一份remote到下面，修改remote的名字和url即可
```shell
[remote "origin"]
  url = github项目地址
  fetch = +refs/heads/*:refs/remotes/origin/*
[remote "gitee"]
  url = 码云项目地址
  fetch = +refs/heads/*:refs/remotes/gitee/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
```
- **3.执行以下命令，可以看到配置的两个仓库**
```shell
git remote 
```
- **4.推送代码时，需要对两个仓库分别执行一次push命令，也就是多次推送**
```shell
git push origin matser 
git push gitee master
```

### 方式二：一次推送
- **1.通过命令将码云项目地址添加到本地已有的remote下**
```shell
git remote set-url --add origin 码云项目地址 
```
- **2.也可以通过修改本地项目的配置文件**
```shell
[remote "origin"]
  url = github项目地址
  url = 码云项目地址
  fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
```
- **3.推送代码只需执行以下一条命令即可**
```shell
git push
```

## 可能会遇到的问题
博主就是配完之后遇到了该问题，所以拿出来跟大家说说哈

git push的时有时候会出现错误 [rejected] master -> master (fetch first)

此时可以输入： git push -f
然后再执行：git push

如果不管用也可以输入： git pull --rebase origin master
之后再执行 git push 即可。

## 当本地有多个ssh-key时
如果也想配多个ssh-key的话，可以参照这篇文章哦：[https://www.cnblogs.com/poloyy/p/12189140.html](https://www.cnblogs.com/poloyy/p/12189140.html)
**你需要更改两个地方**

**第一：公钥配置文件，目录是： C:\Users\user\.ssh 下的 config 文件**
现在多了gitee，所以对应的Host也要增加，如下图
![](/imgs/git-config.png)
我这里是两个ssh-key都会被Github和Gitee共用，正常来说是一个ssh-key指向一个仓库即可，譬如第一个key的Host配成Github的，第二个Key的Host配成Gitee
![](/imgs/git-host.png)

**第二：需要修改在上面配置过的 config 文件，它在你的项目目录下的 .git 文件夹下**
原本只有一个ssh-key时，你的配置文件可能是这样的
```shell
[remote "origin"]
  url = git@github.com:user/project.git
  url = git@gitee.com:user/project.git
  fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
```

当你有两个ssh-key时，你的配置文件就需要改成如下
```shell
[remote "origin"]
  url = git@{Github_HOST}:user/project.git
  url = git@{Gitee_HOST}:user/project.git
  fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
  remote = origin
  merge = refs/heads/master
```

最后将 Github_HOST 、 Gitee_HOST 替换成你自己配置里的Host地址
其余步骤都是一样的啦！这里就是要强调下，如果有多个ssh-key时，还得修改下配置文件而已~
