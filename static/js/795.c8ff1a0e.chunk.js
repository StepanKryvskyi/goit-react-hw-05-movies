"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{1795:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(5861),a=e(9439),c=e(4687),i=e.n(c),u=e(4476),o=e(2791),s=e(4672),f=e(2840),p=e(184);function l(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,o.useState)(!1),A=(0,a.Z)(l,2),d=A[0],x=A[1],b=(0,o.useState)(!1),h=(0,a.Z)(b,2),m=h[0],v=h[1];return(0,o.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,u.Df)();case 4:t=n.sent,e=t.results,c(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.tk,{children:"Trending today"}),d&&(0,p.jsx)(f.Bc,{children:"Oops! Something went wrong! Please try reloading this page!"}),m&&(0,p.jsx)(f.zW,{children:"Loading..."}),e.length>0&&(0,p.jsx)(s.O,{films:e})]})}},4476:function(n,t,e){e.d(t,{Df:function(){return o},Oy:function(){return l},cX:function(){return p},dB:function(){return f},z1:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),i=e(340),u="e5c132753fe80fb676e07deb21136763";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4672:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,c,i,u,o=e(7689),s=e(168),f=e(5867),p=e(1087),l=f.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 14px;\n"]))),A=f.ZP.li(a||(a=(0,s.Z)(["\n  margin: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  max-width: 300px;\n  max-height: 500px;\n"]))),d=(0,f.ZP)(p.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n  color: #333;\n  display: block;\n  text-align: center;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),x=f.ZP.img(i||(i=(0,s.Z)(["\n  width: 300px;\n  height: 400px;\n"]))),b=f.ZP.p(u||(u=(0,s.Z)(["\n  margin: 15px;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 300px;\n"]))),h=e(6834),m=e(184),v=function(n){var t=n.films,e=(0,o.TH)();return(0,m.jsx)(l,{children:t.map((function(n){return(0,m.jsx)(A,{children:(0,m.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,m.jsx)(x,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):h,alt:n.title}),(0,m.jsx)(b,{children:n.title})]})},n.id)}))})}},6834:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADFCAMAAACsN9QzAAAAMFBMVEXQ0NDw8PDX19fU1NTn5+fl5eXt7e3q6urY2Nju7u7Ozs7e3t7g4ODy8vLi4uLb29uNTQONAAAFDElEQVR4nO2d6YKqMAyFpaxeRN//ba+MIordkqbQmJyfQ1vznbZhaWFOJ9Gqjw7gYCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bCm/bKXw12a4jeN4M4xNxIc+XJqummad++uNMKRdheT/V7d3+OqpuwXNQBvXXkLyj131qalqaQPbSSj+up2qL00dxzSAirmx4N8N6A11dPmF4b9a8WcD+I0ARMSjnX5Wy84AeMCmc3T/LHbnQTi/LffxzYHgeM3ZjX83YMwRZEaB+S+e7p9T4L8cUeYTmL/38lcTswkADbf247ObAFD+IcR/zRJmNkH5xxB/wysBQPn96Y9fAlR+mKSP/2D+a3+bX/r577R98LPlZ/YMAMzvuvl/quM1/OH8g7/7LzmCzCgwv/XZ39r9zC7/Eff/N08GYNf9mOdfVzd+w637Uc8/7Y9/59HPLPmfcPy1/RnA1LF7+odd/7CNgOnMcQkMN2HvJ4GtAyxXP/Drv0P/AV91zK57F+ET9q3pz3/L33f4nt15b1HS/ofb5dq21+vIceI/xe6ETSzlly3lly3lly3lly3lly3lly3lly3lly3lL1H7PU4skr/d72WSAvnnFeZpr5305fE/Ftj3MqA8/uf+gqnZ5deK439tr5h2yQGl8bdvq2p7GFAW/+fC8h7bKYri3+4t2iEJFsX/ta0gfw4oid+ysyy7AeXwWzeVZM8BxfC79hVmzgGl8Nt7P/8IKIXfiZ85BxTC3zrpZ2U0oAh+9+DPPgVK4Pdvqc5rQAn8gd5/GJDptwvgD/b+nwGZcsDh/HUTQZ9vChzNH0p9uQ04mD8eP5MBB/MD8PMkwWP5o1LfmwH0SfBIfsjgX0YAdby07ZkroD04fgYDSJszPSC+2BNfXgMoW5vfC4qPD9H7GQwgbKx+fBgpLj7M4H+K1AC6tpbvQkV1UAI+7Qgga8q8XoqLiC8Fn9YAqpZMD4kvCZ/UAKKG6g6ycJOIT2kATTv15ptw3vjSBj+xASTNmK8XYj3xUeDTGUDRiukB8dHgkxlA0IgN3x0fET6VAeltbOf+S7b4qHqfzIDkJtyfw7R8DpUSn8aA1Ba+U58nPlp8EgMSG7DPfUd81PgUBqTVd3wJwhEfOT6BAUnVnanPFh9971MYkFLb+yXgbXx58JMNSKjsn/uv+B5ngVz4qQbg68bhL/EFEsVhBqCrhuf+e3zZej/VAGxNU8UTTX3G3v/7AbwByIqxg38n4Q3A1fNd9R0itAGoaoX1/iysAZha9bmw3p+FNABRKeay5wDhDIDXGUqb+4tQBoCrFDj3F2H+/wq0Rh34/u2hQowAYIUiU98q+AiAlR/KTH2rwCMAVLzY1LcKagCkdKEnvk8BpwBkv0rZc38RzID4spA7vkMFMiC6aPGpbxXEgNiSjPBBBkQWZJH6VsUbEFeOzdxfFG1AVDFWg/+h2M8xx/AzxI8eARGFWOLHGhAuY3hc9nwryoBgEXapb1VMDgjxDyXf74cUYUCAnzV+zBTwH2ea+lYFDfAeNkeHn66QAb6jA9fM/65ADvDwM5/7i/wGuPl/BD8wBZyH/P/nmJV8BriO/EDqW+WZAg7+nxn8D7kNsPOzP+9v5TTAyv9z+O4cYPsr41setxwGWPkH84MaovklSfllS/llS/llS/llS/llS/llS/llS/llq/4Pyu5AznGi3bUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=795.c8ff1a0e.chunk.js.map