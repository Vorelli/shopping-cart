(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),i=n(18),a=n.n(i),r=(n(24),n(25),n(13)),o=n(2),u=n(1),j=function(){return Object(u.jsx)("div",{className:"home",children:"Home Page"})},d=n(8),b=n(11),l=(n(27),n(28),function(t){return Object(u.jsx)("div",{className:"displayCard",children:t.elements})}),m=void 0,h=function(t){var e=Object(c.useState)(0),n=Object(b.a)(e,2),s=n[0],i=n[1],a=Object(c.useRef)(),r=t.item.items.map((function(t){return Object(u.jsx)("div",{className:"itemDiv",children:Object(u.jsx)("span",{className:"item",children:t.name},t.name)},t.name)}));return r.push(Object(u.jsxs)("div",{className:"quantity",children:[Object(u.jsx)("button",{type:"button",onClick:function(){i((function(t){return t-1}))}.bind(m),children:"-"}),Object(u.jsx)("input",{ref:a,className:"quantityInput",onChange:function(t){parseInt(t.target.value)&&i(t.target.value)},value:s}),Object(u.jsx)("button",{type:"button",onClick:function(){i((function(t){return t+1}))}.bind(m),children:"+"})]},t.item.items[0].name+"quantity")),r.push(Object(u.jsx)("button",{type:"button",onClick:function(){var e=new Array(parseInt(a.current.value));e.fill(t.item.newDisplayAsset&&t.item.newDisplayAsset.id||t.item.items[0].name),t.onAddToCart(e)},children:"Add to Cart"},t.item.items[0].name+"button")),Object(u.jsx)(l,{elements:r})},p=(n(29),function(t){return Object(u.jsxs)("div",{className:"shoppingCart",children:["\ud83d\uded2",Object(u.jsx)("div",{className:"shoppingQuantity",children:t.cartItems.length})]})}),f=(n(30),function(t){return Object(u.jsxs)("div",{className:"shop",children:[t.items.map((function(e,n){return Object(u.jsx)(h,{item:e,onAddToCart:t.onAddToCart},e.newDisplayAsset&&e.newDisplayAsset.id||n)})),Object(u.jsx)(p,{cartItems:t.cartItems})]})}),O=function(){var t=Object(c.useState)([]),e=Object(b.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)([]),a=Object(b.a)(i,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){fetch("https://fortnite-api.com/v2/shop/br?language=en",{mode:"cors"}).then((function(t){return t.json()})).then((function(t){return s(t.data.daily.entries)}))}),[]),Object(u.jsx)(f,{items:n,cartItems:r,onAddToCart:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(t){case"add":o((function(t){return e.constructor===[].constructor?[].concat(Object(d.a)(t),Object(d.a)(e)):[].concat(Object(d.a)(t),[e])}));break;case"remove":o((function(t){return[].concat(Object(d.a)(t.slice(0,e)),Object(d.a)(t.slice(e+n)))}));break;case"delete":o([])}}.bind(undefined,"add")})};var x=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(r.b,{to:"/",children:"Home"}),Object(u.jsx)(r.b,{to:"/shop",children:"Shop"}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(o.a,{path:"/shop",component:O})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.e6964de2.chunk.js.map