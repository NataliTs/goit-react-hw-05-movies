"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(5861),u=e(9439),i=e(7757),o=e.n(i),s=e(7689),p=e(4635),f=e(2791),l=e(168),h=e(6444),d=h.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  gap: 20px;\n\n  margin-top: 12px;\n"]))),v=h.ZP.li(a||(a=(0,l.Z)(["\n  width: calc((100% - 196px) / 5);\n  height: 400px;\n  word-wrap: break-word;\n"]))),m=e(1454),g=e(184),x=function(){var n=(0,s.UO)().movieId,t=(0,f.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,f.useState)(!0),l=(0,u.Z)(i,2),h=l[0],x=l[1];return(0,f.useEffect)((function(){var t=function(){var n=(0,c.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,p.Ku)(t);case 4:e=n.sent,r=e.cast,a(r),console.log(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert(n.t0.message);case 13:return n.prev=13,x(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(t){return n.apply(this,arguments)}}();t(n)}),[n]),(0,g.jsxs)("div",{children:[null!==h&&void 0!==h?h:(0,g.jsx)(m.a,{}),(0,g.jsx)("h2",{children:"Cast"}),r.length?(0,g.jsx)(d,{children:r.map((function(n){return(0,g.jsxs)(v,{children:[n.profile_path?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:n.name}):(0,g.jsx)("img",{src:"https://dummyimage.com/200x300/f2eaf2/34343b.jpg&text=No+image",alt:n.name}),(0,g.jsx)("h3",{children:n.name}),(0,g.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))}):(0,g.jsx)("p",{children:"We don't have any information about the cast yet."})]})}},4635:function(n,t,e){e.d(t,{Df:function(){return s},Jh:function(){return l},Ku:function(){return f},Pg:function(){return p},UN:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",o="5de976d9fa7c36b2117f7a9c7cc0a525",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i).concat("/trending/all/day","?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.70183076.chunk.js.map