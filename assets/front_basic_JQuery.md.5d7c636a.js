import{_ as s,c as o,o as l,U as e}from"./chunks/framework.8a9b1808.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front/basic/JQuery.md","filePath":"front/basic/JQuery.md"}'),a={name:"front/basic/JQuery.md"},n=e(`<h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><ul><li>JQ1.x 支持低版本IE IE678</li><li>JQ2.x 不支持低版本IE 稳定</li><li>JQ3.x 不支持低版本IE 最新版</li></ul><h2 id="jq获取dom节点" tabindex="-1">JQ获取DOM节点 <a class="header-anchor" href="#jq获取dom节点" aria-label="Permalink to &quot;JQ获取DOM节点&quot;">​</a></h2><p><code>$(&#39;selector&#39;)</code> return JQObject;</p><h3 id="jq选择器" tabindex="-1">JQ选择器 <a class="header-anchor" href="#jq选择器" aria-label="Permalink to &quot;JQ选择器&quot;">​</a></h3><ol><li><p><code>$(&quot;tagName&quot;)</code>：根据 标签名 选择所有该标签的元素</p></li><li><p><code>$(&quot;#id&quot;)</code>：根据 id 选择元素；id应该是唯一的，如果id重复，则只会选择第一个。</p></li><li><p><code>$(&quot;.className&quot;)</code>：根据 class 选择元素</p></li><li><p><code>$(&quot;selector1 selector2&quot;)</code>：选择 selector1下的selector2元素 。</p></li><li><p><code>$(selector:first)</code> 满足选择器条件的第一个元素</p></li><li><p><code>$(selector:last)</code> 满足选择器条件的最后一个元素</p></li><li><p><code>$(selector:odd)</code> 满足选择器条件的奇数元素；基0</p></li><li><p><code>$(selector:even)</code> 满足选择器条件的偶数元素；基0</p></li><li><p><code>$(selector:hidden)</code> 满足选择器条件的不可见的元素</p></li><li><p><code>$(selector:visible)</code> 满足选择器条件的可见的元素</p><blockquote><p>注； <code>div:visible</code> 和<code>div :visible</code>(有空格)是不同的意思，<code>div:visible</code> 表示选中可见的div；<code>div :visible</code>(有空格) 表示选中div下可见的元素</p></blockquote></li><li><p>在监听函数中使用<code>$(this)</code>，即表示触发该事件的组件。</p></li></ol><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:center;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[attribute]</code> <code>[attribute=value]</code> <code>[attribute!=value]</code> <code>[attribute^=value]</code> <code>[attribute$=value]</code> <code>[attribute*=value]</code></td><td style="text-align:center;">属性</td></tr><tr><td style="text-align:left;"><code>:input</code> <code>:button</code> <code>:radio</code> <code>:checkbox</code> <code>:text</code> <code>:file</code> <code>:submit</code> <code>:image</code></td><td style="text-align:center;">表单对象</td></tr><tr><td style="text-align:left;"><code>:enabled</code> <code>:disabled</code> <code>:checked</code> <code>:selected</code></td><td style="text-align:center;">表单对象属性</td></tr></tbody></table><h4 id="jq筛选器" tabindex="-1">JQ筛选器 <a class="header-anchor" href="#jq筛选器" aria-label="Permalink to &quot;JQ筛选器&quot;">​</a></h4><p>筛选器是在选择器基础上，做进一步选择；</p><ul><li><code>first()</code> 第1个元素</li><li><code>last()</code> 最后一个元素</li><li><code>eq/gt/lt(index)</code> 找到对象序号第index/大于/小于index的对象，注: index基0</li><li><code>parent()</code> 选取最近的一个父元素</li><li><code>parents()</code> 选取所有的祖先元素</li><li><code>children()</code>: 筛选出儿子元素 (紧挨着的子元素)</li><li><code>find(selector)</code>: 筛选出后代元素；注: find() 必须使用参数 selector</li><li><code>siblings()</code>: 同级(同胞)元素</li></ul><h2 id="jq填充节点内容" tabindex="-1">JQ填充节点内容 <a class="header-anchor" href="#jq填充节点内容" aria-label="Permalink to &quot;JQ填充节点内容&quot;">​</a></h2><p><code>html()</code>：设置每一个匹配元素的html内容 或 获取集合中第一个匹配元素的HTML内容（保留标签）。--&gt; innerHTML</p><p><code>text()</code>：得到匹配元素集合中每个元素的文本内容结合，包括他们的后代（不读取标签），或设置匹配元素集合中每个元素的文本内容为指定的文本内容。--&gt; innerText</p><p><code>val()</code>：获取匹配的元素集合中第一个元素的当前值或设置匹配的元素集合中每个元素的值。主要用于获取表单元素的值，比如 <code>input</code>, <code>select</code> 和 <code>textarea</code> --&gt; textContent</p><h2 id="jq操作css样式" tabindex="-1">JQ操作CSS样式 <a class="header-anchor" href="#jq操作css样式" aria-label="Permalink to &quot;JQ操作CSS样式&quot;">​</a></h2><ol><li><code>addClass()</code> 增加一个样式中的class</li><li><code>removeClass()</code> 删除一个样式中的class</li><li>通过<code>toggleClass()</code> 切换一个样式中的class</li><li>通过css函数 直接设置样式 <ol><li>设置JQ对象的CSS样式：<code>css(property,values) / css({p1:v1,p2:v2})</code>；如果有多个元素，则全部设置对应样式</li><li>获取JQ对象的CSS样式：<code>css(&#39;property&#39;) return 样式值</code>；如果有多个元素，获取样式时只获取第一个元素的样式值</li></ol></li></ol><h2 id="jq与dom对象的转化" tabindex="-1">JQ与DOM对象的转化 <a class="header-anchor" href="#jq与dom对象的转化" aria-label="Permalink to &quot;JQ与DOM对象的转化&quot;">​</a></h2><p>JQ对象通过下标<code>[0]</code>取出的就是DOM对象；将DOM对象直接放在$()方法里，返回的是JQ对象。</p><h2 id="jq操作dom特性和属性" tabindex="-1">JQ操作DOM特性和属性 <a class="header-anchor" href="#jq操作dom特性和属性" aria-label="Permalink to &quot;JQ操作DOM特性和属性&quot;">​</a></h2><h3 id="介绍与比较" tabindex="-1">介绍与比较 <a class="header-anchor" href="#介绍与比较" aria-label="Permalink to &quot;介绍与比较&quot;">​</a></h3><p>在 HTML 中，标签可能拥有特性（attributes）。当浏览器解析 HTML 文本，并根据标签创建 DOM 对象时，浏览器会辨别 <strong>标准的</strong> 特性并以此创建 DOM 属性。非 <strong>标准的</strong> 特性则不会生成DOM属性，也就意味着区别。</p><ul><li>特性（attribute）— 写在 HTML 中的内容。</li><li>属性（property）— DOM 对象中的内容。</li></ul><p>简略的对比：</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">属性</th><th style="text-align:left;">特性</th></tr></thead><tbody><tr><td style="text-align:left;">类型</td><td style="text-align:left;">任何值，标准的属性具有规范中描述的类型</td><td style="text-align:left;">字符串</td></tr><tr><td style="text-align:left;">名字</td><td style="text-align:left;">名字（name）是大小写敏感的</td><td style="text-align:left;">名字（name）是大小写不敏感的</td></tr></tbody></table><p>如果一个特性不是标准的，那么就没有相对应的 DOM 属性。我们有什么方法来访问这些特性吗？操作特性的方法：</p><ul><li><code>elem.hasAttribute(name)</code> — 检查是否存在这个特性。</li><li><code>elem.getAttribute(name)</code> — 获取这个特性值。</li><li><code>elem.setAttribute(name, value)</code> — 设置这个特性值。</li><li><code>elem.removeAttribute(name)</code> — 移除这个特性。</li><li><code>elem.attributes</code> — 所有特性的集合，属于内建 Attr 类的对象的集合，具有 name 和 value 属性。</li></ul><p>在大多数情况下，最好使用 DOM 属性。仅当 DOM 属性无法满足开发需求，并且我们真的需要特性时，才使用特性</p><p>在于自定义属性和选中属性的处理也有不同。选中属性指的是 <code>checked</code>, <code>selected</code></p><ol><li>对于自定义属性 <code>attr</code>能够获取，<code>prop</code>不能获取</li><li>对于选中属性<code>attr</code>只能获取初始值， 无论是否变化，<code>prop</code> 能够访问变化后的值，并且以<code>true|false</code>的布尔型返回。</li></ol><h3 id="特性和属性之间的同步" tabindex="-1">特性和属性之间的同步 <a class="header-anchor" href="#特性和属性之间的同步" aria-label="Permalink to &quot;特性和属性之间的同步&quot;">​</a></h3><p>当一个标准的特性被改变，对应的属性也会自动更新，（除了几个特例）反之亦然。</p><p>特性 =&gt; 属性 属性 =&gt; 特性</p><p>特例： <code>input.value</code> 只能从特性同步到属性，反过来则不行</p><h3 id="设置-修改-删除" tabindex="-1">设置 修改 删除 <a class="header-anchor" href="#设置-修改-删除" aria-label="Permalink to &quot;设置 修改 删除&quot;">​</a></h3><ul><li><code>attr()</code>、<code>attr(attr,value)</code></li><li><code>attr({attr1:value1,attr2:value2})</code></li><li><code>removeAttr(attr)</code></li></ul><h2 id="jqdom操作" tabindex="-1">JQDOM操作 <a class="header-anchor" href="#jqdom操作" aria-label="Permalink to &quot;JQDOM操作&quot;">​</a></h2><p>三步：<code>$(&#39;body&#39;).append($(&#39;标签&#39;).css(&#39;&#39;,&#39;&#39;));</code></p><h3 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h3><p><code>.append/.appendTo()</code>(JQ对象/DOM元素/HTML字符串/元素数组)；添加到父级元素的最后面</p><p><code>.prepend/.prependTo</code>(JQ对象/DOM元素/HTML字符串/元素数组)；添加到父元素的最前面</p><p><code>after</code>(JQ对象/DOM元素/HTML字符串/元素数组)； 被选元素之后插入</p><p><code>before</code>(JQ对象/DOM元素/HTML字符串/元素数组)； 被选元素之前插入</p><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h3><p><code>.remove()</code> 不保留事件</p><p><code>.detach()</code>保存所有jQuery数据和被移走的元素相关联 保留事件</p><blockquote><p>两个方法都会返回删除的对象</p></blockquote><h3 id="克隆" tabindex="-1">克隆 <a class="header-anchor" href="#克隆" aria-label="Permalink to &quot;克隆&quot;">​</a></h3><p><code>clone(boolean)</code>;</p><blockquote><p>参数决定是否克隆事件；方法返回值是克隆好的jq对象</p></blockquote><h3 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h3><ul><li><p><code>parent([expr])</code> 取得一个包含着所有匹配元素的唯一父元素的元素集合。</p></li><li><p><code>parents([expr])</code>取得一个包含着所有匹配元素的祖先元素的元素集合（不包含根元素）。可以通过一个可选的表达式进行筛选。</p></li><li><p><code>parentsUntil([expr|element] [,filter])</code> 查找当前元素的所有的父辈元素，直到遇到匹配的那个元素为止。</p></li><li><p><code>children([expr])</code> 取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合。</p></li><li><p><code>find(expr|obj|ele)</code> 搜索所有与指定表达式匹配的元素。这个函数是找出正在处理的元素的后代元素的好方法。</p></li><li><p><code>prev([expr])</code></p></li><li><p><code>next()</code></p></li><li><p><code>prevAll()</code></p></li><li><p><code>nextAll([expr])</code> 查找当前元素之后所有的同辈元素。可以用表达式过滤</p></li><li><p><code>prevUntil([exp|ele] [,filter])</code> 查找当前元素之前所有的同辈元素，直到遇到匹配的那个元素为止。filter过滤匹配到的选择器。</p></li><li><p><code>nextUntil([exp|ele] [,fil])</code> 查找当前元素之后所有的同辈元素，直到遇到匹配的那个元素为止。</p></li><li><p><code>siblings([expr])</code>取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合。可以用可选的表达式进行筛选。</p><blockquote><p>如果没有选择器匹配到，或者没有提供参数，那么跟在后面的所有同辈元素都会被选中。这就跟用没有提供参数的 <code>.nextAll()</code>效果一样。</p></blockquote></li></ul><h3 id="尺寸和位置" tabindex="-1">尺寸和位置 <a class="header-anchor" href="#尺寸和位置" aria-label="Permalink to &quot;尺寸和位置&quot;">​</a></h3><p><code>width()</code>, <code>height()</code> 块盒元素原本宽高或行盒元素内容高度（不含padding等）</p><p><code>innerWidth()</code>, <code>innerHeight()</code> 前面基础 + padding</p><p><code>outerWidth(false)</code>,<code>outerHeight(false)</code> 前面基础 + border; 若FALSE改为TRUE，计算margin</p><p><code>offset()</code> 返回或设置匹配元素相对于<strong>文档</strong>的偏移（位置）对象，对象包含两个整型属性：top 和 left</p><p><code>position()</code> 返回匹配元素相对于父元素的位置（偏移）。其对象包含两个整型属性：top 和 left；</p><blockquote><p>返回元素margin距离离他最近的，设置了非static定位的祖先元素的位置，但是该元素自身的margin不参与运算</p></blockquote><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><p><code>$.each( function(index, Element) )</code> 遍历一个jQuery对象，为每个匹配元素执行一个函数。</p><p><code>$.unique( array )</code> 删除数组中重复元素。只处理删除DOM元素数组，而不能处理字符串或者数字数组。</p><pre><code>&gt; 执行\`unique\`之前，要先调用\`sort\`对数组的内容进行排序。
</code></pre><p><code>$.inArray( value, array [, fromIndex ] )</code> 在数组中查找指定值并返回它的索引（如果没有找到，则返回-1）。</p><h2 id="jq动画" tabindex="-1">JQ动画 <a class="header-anchor" href="#jq动画" aria-label="Permalink to &quot;JQ动画&quot;">​</a></h2><ol><li><p><code>$(*selector*).hide(*speed,callback*);</code></p></li><li><p><code>$(*selector*).show(*speed,callback*);</code></p></li><li><p><code>$(*selector*).toggle(*speed,callback*);</code></p></li><li><p><code>$(*selector*).fadeIn(*speed,callback*);</code></p></li><li><p><code>$(*selector*).fadeOut(*speed,callback*);</code></p></li><li><p><code>$(*selector*).fadeToggle(*speed,callback*);</code></p></li><li><p><code>$(*selector*).fadeTo(*speed,callback*);</code></p></li><li><p><code>$(*selector*).slideDown(*speed,callback*);</code></p></li><li><p><code>$(*selector*).slideUp(*speed,callback*);</code></p></li><li><p><code>$(*selector*).slideToggle(*speed,callback*);</code></p><blockquote><p>注： 可选的 speed 参数规定隐藏/显示的速度，可以取以下值：&quot;slow&quot;、&quot;fast&quot; 或毫秒 可选的 callback 参数是隐藏或显示完成后所执行的函数名称。</p></blockquote></li><li><p>animate( properties [, duration ] [, easing ] [, complete ] ) easing选项 jQuery自身提供&quot;linear&quot; 和 &quot;swing&quot;</p><blockquote><p>注： 默认情况下，html中的元素都是固定，并且无法改变的位置的。 为了使用animate()自定义动画效果，需要通过css把元素的position设置为relative、absolute或者fixed。只有数字能而字符值不能实现动画，使用 += 或 -= 创建相对动画*/</p></blockquote></li></ol><h2 id="jq事件" tabindex="-1">JQ事件 <a class="header-anchor" href="#jq事件" aria-label="Permalink to &quot;JQ事件&quot;">​</a></h2><ul><li><code>$(&#39;selector&#39;).event(func(){});</code></li><li><code>$(&#39;selector&#39;).on(&#39;event&#39;)</code> on方式有多种形式的事件绑定法子</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 方法1</span></span>
<span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#div1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">css</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">background</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">randomColor</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//方法2</span></span>
<span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#div1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click mouseover mousemove</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">css</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">background</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">randomColor</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//方法3</span></span>
<span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#div1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">mouseover</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">animate</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+=10</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">mouseleave</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">animate</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+=10</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">css</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">background</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">randomColor</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="自定义事件" tabindex="-1">自定义事件 <a class="header-anchor" href="#自定义事件" aria-label="Permalink to &quot;自定义事件&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#div1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myEvent123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myEvent123事件触发了!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> timer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">计时器触发!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.9</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//触发myEvent123事件</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 触发自定义事件 trigger(&quot;触发的自定义事件的名字&quot;);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">$</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#div1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trigger</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myEvent123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="文档加载事件" tabindex="-1">文档加载事件 <a class="header-anchor" href="#文档加载事件" aria-label="Permalink to &quot;文档加载事件&quot;">​</a></h3><ol><li><code>window.onload</code></li><li><code>window.ready</code></li></ol><p><code>script</code> 标签书写位置：</p><ul><li>第三方文件写在head</li><li>自定义脚本 <ul><li>如没有获取DOM元素的代码，建议写在head</li><li>如有，写在body最下面，或者添加onload事件，</li></ul></li></ul><p>当DOM载入就绪可以查询及操纵时绑定一个要执行的函数。</p><p>这是事件模块中最重要的一个函数，因为它可以极大地提高web应用程序的响应速度。简单地说，这个方法纯粹是对向<code>window.load</code>事件注册事件的替代方法。通过使用这个方法，可以在DOM载入就绪能够读取并操纵时立即调用你所绑定的函数，而99.99%的JavaScript函数都需要在那一刻执行。有一个参数－－<code>对jQuery函数的引用</code>－－会传递到这个ready事件处理函数中。可以给这个参数任意起一个名字，并因此可以不再担心命名冲突而放心地使用<code>$</code>别名。请确保在 <code>&lt;body&gt;</code> 元素的onload事件中没有注册函数，否则不会触发<code>+$(document).ready()</code>事件。可以在同一个页面中无限次地使用<code>$(document).ready()</code>事件。其中注册的函数会按照（代码中的）先后顺序依次执行。</p>`,76),p=[n];function t(c,r,d,i,F,y){return l(),o("div",null,p)}const u=s(a,[["render",t]]);export{A as __pageData,u as default};
