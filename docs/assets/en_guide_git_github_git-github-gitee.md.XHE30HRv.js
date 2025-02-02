import{_ as i,c as a,o as t,ag as h}from"./chunks/framework.OyX4nPA_.js";const d=JSON.parse('{"title":"Git将项目从本地统一推送到GitHub和Gitee","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/git&github/git-github-gitee.md","filePath":"en/guide/git&github/git-github-gitee.md","lastUpdated":1716714989000}'),e={name:"en/guide/git&github/git-github-gitee.md"};function n(l,s,p,k,r,g){return t(),a("div",null,s[0]||(s[0]=[h(`<h1 id="git将项目从本地统一推送到github和gitee" tabindex="-1">Git将项目从本地统一推送到GitHub和Gitee <a class="header-anchor" href="#git将项目从本地统一推送到github和gitee" aria-label="Permalink to &quot;Git将项目从本地统一推送到GitHub和Gitee&quot;">​</a></h1><h2 id="本地配置推送方式" tabindex="-1">本地配置推送方式 <a class="header-anchor" href="#本地配置推送方式" aria-label="Permalink to &quot;本地配置推送方式&quot;">​</a></h2><ul><li>方式一：定义不同的远程仓库名称，然后分别推送 多次推送，配了几个远程仓库就推送几次</li><li>方式二：在同一个远程仓库下添加另一个远程仓库的地址，然后推送 only一次推送</li></ul><p><strong>以下情况均是本地只有单个ssh-key时的操作！！</strong></p><h3 id="方式一-多次推送" tabindex="-1">方式一：多次推送 <a class="header-anchor" href="#方式一-多次推送" aria-label="Permalink to &quot;方式一：多次推送&quot;">​</a></h3><table tabindex="0"><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1. 想推哪个仓库就推哪个<br>2. 不想推哪个就不推哪个</td><td>推送仓库数量多时，时间成本高</td></tr></tbody></table><ul><li><strong>1.可以直接通过命令将本地项目和gitee项目关联</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:xxx/xxx.git</span></span></code></pre></div><ul><li><strong>2.也可以通过修改本地项目的配置文件</strong></li></ul><ol><li>首先，进入到项目的 .git 文件夹，打开 config 文件</li><li>然后，找到 [remote &quot;origin&quot;] ，复制一份remote到下面，修改remote的名字和url即可</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/origin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gitee&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/gitee/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[branch </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refs/heads/master</span></span></code></pre></div><ul><li><strong>3.执行以下命令，可以看到配置的两个仓库</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitee</span></span></code></pre></div><ul><li><strong>4.推送代码时，需要对两个仓库分别执行一次push命令，也就是多次推送</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span></code></pre></div><h3 id="方式二-一次推送" tabindex="-1">方式二：一次推送 <a class="header-anchor" href="#方式二-一次推送" aria-label="Permalink to &quot;方式二：一次推送&quot;">​</a></h3><table tabindex="0"><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1. 执行一次推送就可全部推送<br>2. 可保证多个仓库代码的一致性</td><td>推送不灵活，无法指定仓库推送</td></tr></tbody></table><ul><li><strong>1.通过命令将码云项目地址添加到本地已有的remote下</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:xxx/xxx.git</span></span></code></pre></div><ul><li><strong>2.也可以通过修改本地项目的配置文件</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/origin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[branch </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refs/heads/master</span></span></code></pre></div><ul><li><strong>3.执行以下命令，可以看到配置的两个仓库</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get-url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git@github.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git@gitee.com:xxx/xxx.git</span></span></code></pre></div><ul><li><strong>4.推送代码只需执行以下一条命令即可</strong></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><h2 id="可能会遇到的问题" tabindex="-1">可能会遇到的问题 <a class="header-anchor" href="#可能会遇到的问题" aria-label="Permalink to &quot;可能会遇到的问题&quot;">​</a></h2><p>博主就是配完之后遇到了该问题，所以拿出来跟大家说说哈</p><p>git push的时有时候会出现错误 [rejected] master -&gt; master (fetch first)</p><p>此时可以输入：git push -f</p><p>然后再执行：git push</p><p>如果不管用也可以输入：git pull --rebase origin master</p><p>之后再执行 git push</p><h2 id="当本地有多个ssh-key时" tabindex="-1">当本地有多个ssh-key时 <a class="header-anchor" href="#当本地有多个ssh-key时" aria-label="Permalink to &quot;当本地有多个ssh-key时&quot;">​</a></h2><p>如果也想配多个ssh-key的话，可以参照这篇文章哦：<a href="https://www.cnblogs.com/poloyy/p/12189140.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/poloyy/p/12189140.html</a><strong>你需要更改两个地方</strong></p><p><strong>第一：公钥配置文件，目录是： C:\\Users\\user.ssh 下的 config 文件</strong> 现在多了gitee，所以对应的Host也要增加，如下图 <img src="https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261701299.png" alt=""> 我这里是两个ssh-key都会被Github和Gitee共用，正常来说是一个ssh-key指向一个仓库即可，譬如第一个key的Host配成Github的，第二个Key的Host配成Gitee <img src="https://cdn.jsdelivr.net/gh/codelhf/codelhf.github.io@main/src/public/images/202405261702100.png" alt=""></p><p><strong>第二：需要修改在上面配置过的 config 文件，它在你的项目目录下的 .git 文件夹下</strong> 原本只有一个ssh-key时，你的配置文件可能是这样的</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:user/project.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:user/project.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/origin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[branch </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refs/heads/master</span></span></code></pre></div><p>当你有两个ssh-key时，你的配置文件就需要改成如下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@{Github_HOST}:user/project.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@{Gitee_HOST}:user/project.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/origin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[branch </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refs/heads/master</span></span></code></pre></div><p>最后将 Github_HOST 、 Gitee_HOST 替换成你自己配置里的Host地址 其余步骤都是一样的啦！这里就是要强调下，如果有多个ssh-key时，还得修改下配置文件而已~</p>`,40)]))}const o=i(e,[["render",n]]);export{d as __pageData,o as default};
