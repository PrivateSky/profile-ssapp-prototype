System.register(["./p-3369a689.system.js","./p-d7fc1715.system.js","./p-fa4e7901.system.js"],(function(t){"use strict";var e,r,a,n,i;return{setters:[function(t){e=t.g},function(t){r=t.b;a=t.c},function(t){n=t.a;i=t.c}],execute:function(){t({B:h,_:u});function u(t,e){if(e.hasAttribute(r)){var n=e.getAttribute(r).trim();return typeof t.getChainValue(n)!=="undefined"}if(e.hasAttribute(a)){var i=e.getAttribute(a).split("|");if(i.length!==2){return false}var n=i[0].trim(),u=i[1].trim();return u===t.getChainValue(n)}return true}function l(t){var e=this;Object.keys(t).forEach((function(r){e[r]=t[r]}))}function o(t,e,r,a){var i=this;var u=Array.from(a.attributes).filter((function(t){return t.name.startsWith(r)}));u.forEach((function(u){var l=u.name.split(r)[1];var o=n(l);var s=t?t+"."+u.value:u.value;var c=e.getChainValue(s);a.setAttribute(l,c);i[o]=e.getChainValue(s)}))}function s(t,e,r,a){var i=this;var u=Array.from(a.attributes).filter((function(t){return t.value.startsWith(r)}));u.forEach((function(u){var l=u.value.split(r)[1];var o=t?t+"."+l:l;var s=n(u.name);if(e.hasExpression(o)){i[s]=e.evaluateExpression(o);e.onChangeExpressionChain(o,(function(){i[s]=e.evaluateExpression(o)}))}else{var c=e.getChainValue(o);a.setAttribute(u.name,c);i[s]=c;e.onChange(o,(function(){i[s]=e.getChainValue(o)}))}}))}function c(t,e){try{var r=this;if(r.rootModel){var a=t;if(r.parentChain){a=r.parentChain+"."+t}r.rootModel.setChainValue(a,e);return true}return false}catch(n){console.error(n)}return false}function f(t,r,a){if(t||!r){return a()}var n=this;var i=e(n);if(!u(r,i)){i.setAttribute("data-hide","hide");return a()}i.removeAttribute("data-hide");var l,c,f;if(i.getAttribute("data-view-model")!==null&&i.tagName.toLowerCase()==="psk-for-each"){l=i.getAttribute("data-view-model");f=l;n.__assignProperties.call(n,{rootModel:r,parentChain:f});return a()}l=i.getAttribute("view-model");f=l;if(l===null){c=i.getAttribute("name")!==null&&!i.getAttribute("name").startsWith("@")?i.getAttribute("name"):null;if(c===null&&i.getAttribute("label")!==null&&!i.getAttribute("label").startsWith("@")){c=i.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()}f=c}if(!l&&!c){s.call(n,f,r,"@",i,a);o.call(n,f,r,"view-model-",i,a);return a()}function h(t,e){n[t]=r.getChainValue(e);r.onChange(e,(function(){n[t]=r.getChainValue(e)}))}function v(){var t=f+".value";var e=r.getChainValue(f);if(!e||r.getChainValue(t)){return a()}h("value",t)}n.__assignProperties.call(n,{rootModel:r,parentChain:f});if(l){var g=r.getChainValue(f);if(!g){return a()}Object.keys(g).forEach((function(t){var e=f+"."+t;h(t,e)}));v();return a()}return a()}function h(){return function(t){var r=t.componentWillLoad,a=t.render;t.render=function(){var t=e(this);var r=t.className;if(t.getAttribute("data-hide")==="hide"){t.className=r+" hidden"}else{t.className=r.replace(" hidden","")}return a&&a.call(this)};t.componentWillLoad=function(){var t=this;var a=e(t);t["changeModel"]=c;t["__assignProperties"]=l;function n(e){function r(r,a){f.apply(t,[r,a,e])}i("getModelEvent",{bubbles:true,composed:true,cancellable:true,detail:{callback:r}},true,a)}if(!a.isConnected){return r&&r.call(t)}var u=a.getAttributeNames();var o=u.filter((function(t){return t.toLowerCase()==="data-view-model"||t.toLowerCase().includes("view-model")||a.getAttribute(t).toLowerCase().startsWith("@")}));if(o.length===0){return r&&r.call(t)}return new Promise((function(e){var a=function(){e(r&&r.call(t))};n(a)}))}}}}}}));