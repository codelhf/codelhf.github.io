const t=`{"documentCount":35,"nextId":35,"documentIds":{"0":"/zh/guide/git&github/git-github-gitee#git将项目从本地统一推送到github和gitee","1":"/zh/guide/git&github/git-github-gitee#本地配置推送方式","2":"/zh/guide/git&github/git-github-gitee#方式一-多次推送","3":"/zh/guide/git&github/git-github-gitee#方式二-一次推送","4":"/zh/guide/git&github/git-github-gitee#可能会遇到的问题","5":"/zh/guide/git&github/git-github-gitee#当本地有多个ssh-key时","6":"/zh/guide/git&github/github-pages#使用github-pages或githee-pages部署vue项目","7":"/zh/guide/git&github/github-pages#文章目录","8":"/zh/guide/git&github/github-pages#_1-背景","9":"/zh/guide/git&github/github-pages#_1-github-gitee-pages-服务作为一个页面容器-可以说是非常方便了。我们可以在上面免费部署前端项目。","10":"/zh/guide/git&github/github-pages#_2-并且同时获得一个附带-github-io-gitee-io-的网址。","11":"/zh/guide/git&github/github-pages#_3-其他优点就不再赘述-可自行百度。","12":"/zh/guide/git&github/github-pages#_2-github-pages的介绍","13":"/zh/guide/git&github/github-pages#具体可以看这个网址gitee-pages官方介绍","14":"/zh/guide/git&github/github-pages#_3-上传自己的项目到github上。","15":"/zh/guide/git&github/github-pages#点击项目导航栏中的settings-pages","16":"/zh/guide/git&github/github-pages#如果是静态项目-此处不再说啥-直接构建-你的项目中有index-html-主入口-就可以","17":"/zh/guide/git&github/github-pages#_4-如果你的是vue项目-重点讨论","18":"/zh/guide/git&github/github-pages#在项目路径中添加-spa文件","19":"/zh/guide/git&github/github-pages#原理-我不是很清楚-应该是给nginx做一个标识作用吧。","20":"/zh/guide/git&github/github-pages#_5-本地-build","21":"/zh/guide/git&github/github-pages#在构建前-一定要注意修改两个地方","22":"/zh/guide/git&github/github-pages#一、将build-js文件中的console-log全部注释","23":"/zh/guide/git&github/github-pages#二、将config-index-js中的assetspublicpath值改为-或图中的英文指示改为你的项目名称加-如-ltz","24":"/zh/guide/git&github/github-pages#解决js访问不到的问题。","25":"/zh/guide/git&github/github-pages#注意-此处修改的assetspublicpath为build对象中的","26":"/zh/guide/git&github/github-pages#三、打开build-utils-js文件-解决css-字体找不到问题","27":"/zh/guide/git&github/github-pages#在如下位置添加-publicpath","28":"/zh/guide/git&github/github-pages#在本地运行npm-run-build-得到dist","29":"/zh/guide/git&github/github-pages#_7-将build得到的文件-上传到你git仓库中。","30":"/zh/guide/git&github/github-pages#_8-点击项目导航栏中的settings-pages","31":"/zh/guide/git&github/github-pages#_9-开始构建","32":"/zh/guide/git&github/github-pages#选择你的分支-如果只有一个分支-就选master","33":"/zh/guide/git&github/github-pages#选择部署目录-本文中-build后的文件全部都在dist目录下-所以-填入dist。","34":"/zh/guide/git&github/github-pages#如果-你发现-构建后-css-js-img等文件-报了404异常-请看本文第5步-二-三"},"fieldIds":{"title":0,"titles":1,"text":2},"fieldLength":{"0":[1,1,1],"1":[1,1,12],"2":[2,2,51],"3":[2,2,40],"4":[1,1,19],"5":[2,1,67],"6":[3,1,1],"7":[1,3,1],"8":[2,3,1],"9":[8,3,1],"10":[7,3,1],"11":[4,3,1],"12":[3,3,1],"13":[1,6,1],"14":[3,3,1],"15":[3,6,1],"16":[7,6,1],"17":[4,3,1],"18":[2,7,1],"19":[4,8,1],"20":[2,3,1],"21":[2,3,1],"22":[4,5,1],"23":[8,5,1],"24":[2,5,1],"25":[3,3,1],"26":[7,7,1],"27":[3,17,1],"28":[4,14,1],"29":[4,6,1],"30":[4,6,1],"31":[2,6,1],"32":[3,3,1],"33":[6,3,1],"34":[11,3,1]},"averageFieldLength":[3.6,4.428571428571429,6.257142857142858],"storedFields":{"0":{"title":"Git将项目从本地统一推送到GitHub和Gitee","titles":[]},"1":{"title":"本地配置推送方式","titles":["Git将项目从本地统一推送到GitHub和Gitee"]},"2":{"title":"方式一：多次推送","titles":["Git将项目从本地统一推送到GitHub和Gitee","本地配置推送方式"]},"3":{"title":"方式二：一次推送","titles":["Git将项目从本地统一推送到GitHub和Gitee","本地配置推送方式"]},"4":{"title":"可能会遇到的问题","titles":["Git将项目从本地统一推送到GitHub和Gitee"]},"5":{"title":"当本地有多个ssh-key时","titles":["Git将项目从本地统一推送到GitHub和Gitee"]},"6":{"title":"使用Github Pages或Githee Pages部署Vue项目","titles":[]},"7":{"title":"文章目录","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"8":{"title":"1.背景","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"9":{"title":"1.Github（Gitee） Pages 服务作为一个页面容器，可以说是非常方便了。我们可以在上面免费部署前端项目。","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"10":{"title":"2.并且同时获得一个附带.github.io（gitee.io）的网址。","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"11":{"title":"3.其他优点就不再赘述，可自行百度。","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"12":{"title":"2.Github Pages的介绍","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"13":{"title":"具体可以看这个网址","titles":["使用Github Pages或Githee Pages部署Vue项目","2.Github Pages的介绍"]},"14":{"title":"3.上传自己的项目到Github上。","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"15":{"title":"点击项目导航栏中的Settings --&gt; Pages","titles":["使用Github Pages或Githee Pages部署Vue项目","3.上传自己的项目到Github上。","具体可以看这个网址"]},"16":{"title":"如果是静态项目，此处不再说啥，直接构建，你的项目中有index.html(主入口)就可以","titles":["使用Github Pages或Githee Pages部署Vue项目","3.上传自己的项目到Github上。"]},"17":{"title":"4.如果你的是Vue项目(重点讨论)","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"18":{"title":"在项目路径中添加.spa文件","titles":["使用Github Pages或Githee Pages部署Vue项目","4.如果你的是Vue项目(重点讨论)"]},"19":{"title":"原理，我不是很清楚，应该是给Nginx做一个标识作用吧。","titles":["使用Github Pages或Githee Pages部署Vue项目","4.如果你的是Vue项目(重点讨论)","在项目路径中添加.spa文件"]},"20":{"title":"5. 本地\`build","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"21":{"title":"在构建前，一定要注意修改两个地方","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"22":{"title":"一、将build.js文件中的console.log全部注释","titles":["使用Github Pages或Githee Pages部署Vue项目","在构建前，一定要注意修改两个地方"]},"23":{"title":"二、将config/index.js中的assetsPublicPath值改为./或图中的英文指示改为你的项目名称加/如： '/ltz/'","titles":["使用Github Pages或Githee Pages部署Vue项目","在构建前，一定要注意修改两个地方"]},"24":{"title":"解决JS访问不到的问题。","titles":["使用Github Pages或Githee Pages部署Vue项目","在构建前，一定要注意修改两个地方"]},"25":{"title":"注意，此处修改的assetsPublicPath为build对象中的！","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"26":{"title":"三、打开build/utils.js文件（解决CSS/字体找不到问题）","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！","在构建前，一定要注意修改两个地方"]},"27":{"title":"在如下位置添加 publicPath: '../../'","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！","在构建前，一定要注意修改两个地方","三、打开build/utils.js文件（解决CSS/字体找不到问题）","原理，我不是很清楚，应该是给Nginx做一个标识作用吧。"]},"28":{"title":"在本地运行npm run build，得到dist","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！","在构建前，一定要注意修改两个地方","三、打开build/utils.js文件（解决CSS/字体找不到问题）"]},"29":{"title":"7.将build得到的文件，上传到你git仓库中。","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！"]},"30":{"title":"8.点击项目导航栏中的Settings --&gt; Pages","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！"]},"31":{"title":"9.开始构建","titles":["使用Github Pages或Githee Pages部署Vue项目","注意，此处修改的assetsPublicPath为build对象中的！"]},"32":{"title":"选择你的分支，如果只有一个分支，就选master","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"33":{"title":"选择部署目录，本文中，build后的文件全部都在dist目录下，所以，填入dist。","titles":["使用Github Pages或Githee Pages部署Vue项目"]},"34":{"title":"如果，你发现，构建后，css\\\\js\\\\img等文件，报了404异常，请看本文第5步 -&gt; 二\\\\三","titles":["使用Github Pages或Githee Pages部署Vue项目"]}},"dirtCount":0,"index":[["请看本文第5步",{"0":{"34":1}}],["报了404异常",{"0":{"34":1}}],["构建后",{"0":{"34":1}}],["填入dist",{"0":{"33":1}}],["本文中",{"0":{"33":1}}],["本地\`build",{"0":{"20":1}}],["本地配置推送方式",{"0":{"1":1},"1":{"2":1,"3":1}}],["选择部署目录",{"0":{"33":1}}],["选择你的分支",{"0":{"32":1}}],["就选master",{"0":{"32":1}}],["就可以",{"0":{"16":1}}],["开始构建",{"0":{"31":1}}],["9",{"0":{"31":1}}],["8",{"0":{"30":1}}],["上传到你git仓库中",{"0":{"29":1}}],["上传自己的项目到github上",{"0":{"14":1},"1":{"15":1,"16":1}}],["7",{"0":{"29":1}}],["得到dist",{"0":{"28":1}}],["build后的文件全部都在dist目录下",{"0":{"33":1}}],["build",{"0":{"28":1}}],["branch",{"2":{"2":1,"3":1,"5":2}}],["run",{"0":{"28":1}}],["rebase",{"2":{"4":1}}],["rejected",{"2":{"4":1}}],["refs",{"2":{"2":3,"3":2,"5":4}}],["remotes",{"2":{"2":2,"3":1,"5":2}}],["remote",{"2":{"2":6,"3":4,"5":4}}],["字体找不到问题",{"0":{"26":1},"1":{"27":1,"28":1}}],["解决css",{"0":{"26":1},"1":{"27":1,"28":1}}],["解决js访问不到的问题",{"0":{"24":1}}],["三",{"0":{"26":1,"34":1},"1":{"27":1,"28":1}}],["注意",{"0":{"25":1},"1":{"26":1,"27":1,"28":1,"29":1,"30":1,"31":1}}],["ltz",{"0":{"23":1}}],["log全部注释",{"0":{"22":1}}],["或图中的英文指示改为你的项目名称加",{"0":{"23":1}}],["js",{"0":{"34":1}}],["js文件",{"0":{"26":1},"1":{"27":1,"28":1}}],["js文件中的console",{"0":{"22":1}}],["js中的assetspublicpath值改为",{"0":{"23":1}}],["img等文件",{"0":{"34":1}}],["index",{"0":{"23":1}}],["io",{"0":{"10":2}}],["将config",{"0":{"23":1}}],["将build得到的文件",{"0":{"29":1}}],["将build",{"0":{"22":1}}],["二",{"0":{"23":1,"34":1}}],["一",{"0":{"22":1}}],["一定要注意修改两个地方",{"0":{"21":1},"1":{"22":1,"23":1,"24":1,"26":1,"27":1,"28":1}}],["一次推送",{"0":{"3":1}}],["5",{"0":{"20":1}}],["应该是给nginx做一个标识作用吧",{"0":{"19":1},"1":{"27":1}}],["原理",{"0":{"19":1},"1":{"27":1}}],["原本只有一个ssh",{"2":{"5":1}}],["在本地运行npm",{"0":{"28":1}}],["在如下位置添加",{"0":{"27":1}}],["在构建前",{"0":{"21":1},"1":{"22":1,"23":1,"24":1,"26":1,"27":1,"28":1}}],["在项目路径中添加",{"0":{"18":1},"1":{"19":1}}],["在同一个远程仓库下添加另一个远程仓库的地址",{"2":{"1":1}}],["重点讨论",{"0":{"17":1},"1":{"18":1,"19":1}}],["主入口",{"0":{"16":1}}],["直接构建",{"0":{"16":1}}],["此处修改的assetspublicpath为build对象中的",{"0":{"25":1},"1":{"26":1,"27":1,"28":1,"29":1,"30":1,"31":1}}],["此处不再说啥",{"0":{"16":1}}],["此时可以输入",{"2":{"4":1}}],["点击项目导航栏中的settings",{"0":{"15":1,"30":1}}],["具体可以看这个网址",{"0":{"13":1},"1":{"15":1}}],["其他优点就不再赘述",{"0":{"11":1}}],["其余步骤都是一样的啦",{"2":{"5":1}}],["的网址",{"0":{"10":1}}],["并且同时获得一个附带",{"0":{"10":1}}],["我不是很清楚",{"0":{"19":1},"1":{"27":1}}],["我们可以在上面免费部署前端项目",{"0":{"9":1}}],["我这里是两个ssh",{"2":{"5":1}}],["服务作为一个页面容器",{"0":{"9":1}}],["背景",{"0":{"8":1}}],["文章目录",{"0":{"7":1}}],["文件",{"2":{"2":1,"5":2}}],["文件夹下",{"2":{"5":1}}],["文件夹",{"2":{"2":1}}],["使用github",{"0":{"6":1},"1":{"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1}}],["还得修改下配置文件而已~",{"2":{"5":1}}],["这里就是要强调下",{"2":{"5":1}}],["替换成你自己配置里的host地址",{"2":{"5":1}}],["最后将",{"2":{"5":1}}],["当你有两个ssh",{"2":{"5":1}}],["当本地有多个ssh",{"0":{"5":1}}],["你发现",{"0":{"34":1}}],["你的项目中有index",{"0":{"16":1}}],["你的配置文件就需要改成如下",{"2":{"5":1}}],["你的配置文件可能是这样的",{"2":{"5":1}}],["你需要更改两个地方",{"2":{"5":1}}],["它在你的项目目录下的",{"2":{"5":1}}],["需要修改在上面配置过的",{"2":{"5":1}}],["需要对两个仓库分别执行一次push命令",{"2":{"2":1}}],["第二",{"2":{"5":1}}],["第二个key的host配成gitee",{"2":{"5":1}}],["第一",{"2":{"5":1}}],["譬如第一个key的host配成github的",{"2":{"5":1}}],["正常来说是一个ssh",{"2":{"5":1}}],["如",{"0":{"23":1}}],["如下图",{"2":{"5":1}}],["如果",{"0":{"34":1}}],["如果只有一个分支",{"0":{"32":1}}],["如果你的是vue项目",{"0":{"17":1},"1":{"18":1,"19":1}}],["如果是静态项目",{"0":{"16":1}}],["如果有多个ssh",{"2":{"5":1}}],["如果也想配多个ssh",{"2":{"5":1}}],["如果不管用也可以输入",{"2":{"4":1}}],["所以",{"0":{"33":1}}],["所以对应的host也要增加",{"2":{"5":1}}],["所以拿出来跟大家说说哈",{"2":{"4":1}}],["现在多了gitee",{"2":{"5":1}}],["下的",{"2":{"5":1}}],["utils",{"0":{"26":1},"1":{"27":1,"28":1}}],["user",{"2":{"5":5}}],["users",{"2":{"5":1}}],["url",{"2":{"2":2,"3":4,"5":4}}],["目录是",{"2":{"5":1}}],["公钥配置文件",{"2":{"5":1}}],["pages的介绍",{"0":{"12":1},"1":{"13":1}}],["pages",{"0":{"9":1,"15":1,"30":1}}],["pages部署vue项目",{"0":{"6":1},"1":{"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1}}],["pages或githee",{"0":{"6":1},"1":{"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1}}],["project",{"2":{"5":4}}],["p",{"2":{"5":1}}],["poloyy",{"2":{"5":1}}],["publicpath",{"0":{"27":1}}],["pull",{"2":{"4":1}}],["push的时有时候会出现错误",{"2":{"4":1}}],["push",{"2":{"2":2,"3":1,"4":3}}],["css",{"0":{"34":1}}],["c",{"2":{"5":1}}],["cnblogs",{"2":{"5":1}}],["config",{"2":{"2":1,"5":2}}],["com",{"2":{"2":3,"3":5,"5":3}}],["www",{"2":{"5":1}}],["host",{"2":{"5":4}}],["html",{"0":{"16":1},"2":{"5":1}}],["https",{"2":{"5":1}}],["heads",{"2":{"2":3,"3":2,"5":4}}],["key指向一个仓库即可",{"2":{"5":1}}],["key都会被github和gitee共用",{"2":{"5":1}}],["key的话",{"2":{"5":1}}],["key时",{"0":{"5":1},"2":{"5":3}}],["key时的操作",{"2":{"1":1}}],["之后再执行",{"2":{"4":1}}],["f",{"2":{"4":1}}],["first",{"2":{"4":1}}],["fetch",{"2":{"2":2,"3":1,"4":1,"5":2}}],["博主就是配完之后遇到了该问题",{"2":{"4":1}}],["all",{"2":{"3":1}}],["add",{"2":{"2":1,"3":1}}],["gt",{"0":{"15":1,"30":1,"34":1},"2":{"4":1}}],["get",{"2":{"3":1}}],["github",{"0":{"9":1,"10":1,"12":1},"1":{"13":1},"2":{"2":1,"3":2,"5":3}}],["git",{"2":{"2":8,"3":10,"4":5,"5":9}}],["gitee",{"0":{"9":1,"10":1},"2":{"2":7,"3":3,"5":3}}],["git将项目从本地统一推送到github和gitee",{"0":{"0":1},"1":{"1":1,"2":1,"3":1,"4":1,"5":1}}],["spa文件",{"0":{"18":1},"1":{"19":1}}],["ssh",{"2":{"5":1}}],["set",{"2":{"3":1}}],["shell",{"2":{"2":1,"3":1,"5":2}}],["shellgit",{"2":{"2":3,"3":3}}],["通过命令将码云项目地址添加到本地已有的remote下",{"2":{"3":1}}],["无法指定仓库推送",{"2":{"3":1}}],["可自行百度",{"0":{"11":1}}],["可能会遇到的问题",{"0":{"4":1}}],["可保证多个仓库代码的一致性",{"2":{"3":1}}],["可以说是非常方便了",{"0":{"9":1}}],["可以参照这篇文章哦",{"2":{"5":1}}],["可以看到配置的两个仓库",{"2":{"2":1,"3":1}}],["可以直接通过命令将本地项目和gitee项目关联",{"2":{"2":1}}],["执行一次推送就可全部推送2",{"2":{"3":1}}],["执行以下命令",{"2":{"2":1,"3":1}}],["也就是多次推送",{"2":{"2":1}}],["也可以通过修改本地项目的配置文件",{"2":{"2":1,"3":1}}],["推送代码只需执行以下一条命令即可",{"2":{"3":1}}],["推送代码时",{"2":{"2":1}}],["推送不灵活",{"2":{"3":1}}],["推送仓库数量多时",{"2":{"2":1}}],["4",{"0":{"17":1},"1":{"18":1,"19":1},"2":{"2":1,"3":1}}],["3",{"0":{"11":1,"14":1},"1":{"15":1,"16":1},"2":{"2":1,"3":1}}],["matser",{"2":{"2":1}}],["master",{"2":{"2":3,"3":2,"4":3,"5":4}}],["merge",{"2":{"2":1,"3":1,"5":2}}],["+refs",{"2":{"2":2,"3":1,"5":2}}],["=",{"2":{"2":6,"3":5,"5":10}}],["修改remote的名字和url即可",{"2":{"2":1}}],["复制一份remote到下面",{"2":{"2":1}}],["origin",{"2":{"2":6,"3":5,"4":1,"5":6}}],["only一次推送",{"2":{"1":1}}],["quot",{"2":{"2":2}}],["找到",{"2":{"2":1}}],["打开build",{"0":{"26":1},"1":{"27":1,"28":1}}],["打开",{"2":{"2":1}}],["进入到项目的",{"2":{"2":1}}],["首先",{"2":{"2":1}}],["2",{"0":{"10":1,"12":1},"1":{"13":1},"2":{"2":1,"3":1}}],["xxx",{"2":{"2":6,"3":10}}],["时间成本高",{"2":{"2":1}}],["不想推哪个就不推哪个",{"2":{"2":1}}],["想推哪个仓库就推哪个2",{"2":{"2":1}}],["12189140",{"2":{"5":1}}],["1",{"0":{"8":1,"9":1},"2":{"2":2,"3":2}}],["缺点",{"2":{"2":1,"3":1}}],["优点",{"2":{"2":1,"3":1}}],["以下情况均是本地只有单个ssh",{"2":{"1":1}}],["然后再执行",{"2":{"4":1}}],["然后",{"2":{"2":1}}],["然后推送",{"2":{"1":1}}],["然后分别推送",{"2":{"1":1}}],["方式二",{"0":{"3":1},"2":{"1":1}}],["方式一",{"0":{"2":1},"2":{"1":1}}],["配了几个远程仓库就推送几次",{"2":{"1":1}}],["多次推送",{"0":{"2":1},"2":{"1":1}}],["定义不同的远程仓库名称",{"2":{"1":1}}]],"serializationVersion":2}`;export{t as default};
