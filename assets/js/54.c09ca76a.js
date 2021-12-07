(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{412:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("property和attribute：")])]),t._v(" "),n("ul",[n("li",[t._v("property：修改对象属性，不会体现到html结构中")]),t._v(" "),n("li",[t._v("attribute：修改html属性，会改变html结构")]),t._v(" "),n("li",[t._v("两者都有可能引起DOM重新渲染")])]),t._v(" "),n("p",[n("strong",[t._v("cookie的缺点：")])]),t._v(" "),n("ul",[n("li",[t._v("存储大小，最大4kb")]),t._v(" "),n("li",[t._v("http请求时需要发送到服务端，增加请求数据量")]),t._v(" "),n("li",[t._v("只能用document.cookie = '...' 来修改")])]),t._v(" "),n("p",[n("strong",[t._v("localStorage：")]),t._v(" 数据会永久存储，除非代码或手动删除")]),t._v(" "),n("p",[n("strong",[t._v("sessionStroage：")]),t._v(" 数据只存在于当前会话，浏览器关闭则清空")]),t._v(" "),n("p",[n("strong",[t._v("DOM操作：")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("innerHTML：")]),t._v(" 新建节点")]),t._v(" "),n("li",[n("strong",[t._v("appendChild：")]),t._v(" 插入/移动节点")]),t._v(" "),n("li",[n("strong",[t._v("parentNode：")]),t._v(" 获取父元素")]),t._v(" "),n("li",[n("strong",[t._v("childNode：")]),t._v(" 获取子元素 列表")]),t._v(" "),n("li",[n("strong",[t._v("removeChild：")]),t._v(" 删除节点")])]),t._v(" "),n("p",[n("strong",[t._v("DOM性能：")])]),t._v(" "),n("ul",[n("li",[t._v("DOM操作非常昂贵，避免频繁的DOM操作")]),t._v(" "),n("li",[t._v("对DOM查询做缓存")]),t._v(" "),n("li",[t._v("将频繁操作改为一次性操作")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个文档片段，此时还没有插入到DOM树中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" frag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行插入")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" li "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  li"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List item'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x\n  frag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 都完成后再插入到DOM树中")]),t._v("\nlistNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("事件：")])]),t._v(" "),n("p",[n("strong",[t._v("event.target：")]),t._v(" 获取触发元素")]),t._v(" "),n("p",[n("strong",[t._v("event.preventDefault:")]),t._v(" 阻止默认行为")]),t._v(" "),n("p",[n("strong",[t._v("event.stopPropagation:")]),t._v(" 组织冒泡")]),t._v(" "),n("p",[n("strong",[t._v("事件代理：")]),t._v(" 因为子元素过多，将事件绑定在父元素上")]),t._v(" "),n("ul",[n("li",[t._v("代码简介")]),t._v(" "),n("li",[t._v("减少浏览器内存占用")]),t._v(" "),n("li",[t._v("不可以滥用")])]),t._v(" "),n("p",[n("strong",[t._v("事件冒泡：")])]),t._v(" "),n("ul",[n("li",[t._v("基于DOM树形结构")]),t._v(" "),n("li",[t._v("事件会顺着触发元素向上冒泡")]),t._v(" "),n("li",[t._v("应用场景：代理")])])])}),[],!1,null,null,null);s.default=e.exports}}]);