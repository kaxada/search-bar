(this.webpackJsonpautocomplete=this.webpackJsonpautocomplete||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),i=n(5),o=n.n(i),a=n(3),c=n.n(a),h=n(6),u=n(4);function l(t){this.letter=t,this.prevLetter=null,this.nextLetters={},this.isComplete=!1,this.getWord=function(){var t=this,e=[];for(;t.prevLetter;)e.unshift(t.letter),t=t.prevLetter;return e.join("")}}var f=function(){function t(e,n){for(var r in e.isComplete&&n.unshift(e.getWord()),e.nextLetters)t(e.nextLetters[r],n)}this.root=new l(null),this.insert=function(t){for(var e=this.root,n=0;n<t.length;n++){var r=t[n];e.nextLetters[r]||(e.nextLetters[r]=new l(r),e.nextLetters[r].prevLetter=e),e=e.nextLetters[r],n===t.length-1&&(e.isComplete=!0)}},this.contains=function(t){for(var e=this.root,n=0;n<t.length;n++){var r=t[n],s=e.nextLetters[r];if(!s)return!1;e=s}return e.isComplete},this.find=function(e){for(var n=this.root,r=[],s=0;s<e.length;s++){var i=e[s],o=n.nextLetters[i];if(!o)return r;n=o}return t(n,r),r}},p=(n(12),n(0)),v=["hello","helium","world","car","carpet","test","this","that","those","working","is"];var d=function(){var t=Object(r.useState)(""),e=Object(u.a)(t,2),n=e[0],s=e[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),a=o[0],l=o[1],d=new f;return Object(h.a)(c.a.mark((function t(){var e,n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=v,n=0;n<e.length;n++)r=e[n],d.insert(r);case 2:case"end":return t.stop()}}),t)})))(),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("input",{type:"text",name:"search-bar",id:"search-bar",placeholder:"Search...",value:n,onChange:function(t){var e=t.target.value;s(e);var n=e.split(" "),r=n[n.length-1].toLowerCase(),i=d.find(r).sort((function(t,e){return t.length-e.length})),o=i[0];if(0!==i.length&&""!==e&&" "!==e[e.length-1]){if(null!=o){var a=o.slice(r.length);l(e+a)}}else l(e)},onKeyDown:function(t){39===t.keyCode&&s(a)}}),Object(p.jsx)("input",{type:"text",name:"search-bar",id:"search-bar2",value:a})]})};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.51aa2ed9.chunk.js.map