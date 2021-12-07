(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{381:function(e,t,r){"use strict";r.r(t);var n=r(44),v=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),r("p",[r("strong",[e._v("Generator：")])]),e._v(" "),r("ul",[r("li",[e._v("语法上：Generator函数是一个状态机，封装了多个内部状态。执行Generator函数会返回一个遍历器对象，返回的遍历器对象可以依次遍历Generator函数内部的每一个状态")]),e._v(" "),r("li",[e._v("形式上：Generator函数是一个普通函数，function关键字与函数名之间有一个*，函数内部使用yield表达式定义不同的内部状态")])]),e._v(" "),r("p",[e._v("调用Generator函数之后，该函数并不执行，返回的也不是函数运行结果而是志向内部状态的指针对象。")]),e._v(" "),r("p",[e._v("下一步必须调用遍历器对象的next方法，是的指针移向下一个状态。即：每次调用next方法内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止")]),e._v(" "),r("p",[r("strong",[e._v("yield表达式是暂停执行的标记，next方法可以恢复执行")])]),e._v(" "),r("p",[r("strong",[e._v("遍历器对象的next方法的运行逻辑：")])]),e._v(" "),r("ul",[r("li",[e._v("遇到yield表达式就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值作为返回的对象的value属性值")]),e._v(" "),r("li",[e._v("下一次调用next方法时在继续往下执行，直到遇到下一个yield表达式")]),e._v(" "),r("li",[e._v("如果没有遇到新的yield表达式就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值作为返回的对象的value属性值")]),e._v(" "),r("li",[e._v("如果该函数没有return语句则返回的对象的value属性值为undefined")])]),e._v(" "),r("p",[e._v("注：yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为js提供了手动的“惰性求值”的语法功能")]),e._v(" "),r("p",[r("strong",[e._v("yield表达式与return语句的区别&相似处：")])]),e._v(" "),r("p",[r("strong",[e._v("相似：")])]),e._v(" "),r("ul",[r("li",[e._v("都能返回紧跟在语句后面的那个表达式的值")])]),e._v(" "),r("p",[r("strong",[e._v("区别：")])]),e._v(" "),r("ul",[r("li",[e._v("每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行")]),e._v(" "),r("li",[e._v("return语句不具备为止记忆的功能")]),e._v(" "),r("li",[e._v("一个函数中只能执行一次return语句（只有一个返回值），但是可以执行多次yield表达式（可以有多个返回值）")])])])}),[],!1,null,null,null);t.default=v.exports}}]);