(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports={navigationItem:"Pagination_navigationItem__HAtQl",navigationActiveItem:"Pagination_navigationActiveItem__203Hb"}},32:function(t,e,a){t.exports=a(62)},60:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=a(2),u=a(4),l=a(24),s=a(25),p=a(26),v=a(30),m=a(27),d=a(31),f=a(29),g=a(3),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:185;return"https://image.tmdb.org/t/p/w".concat(t)},b=function(t){return t?Object(f.a)(t.results.map(function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:185;return Object(g.a)({},t,{backdrop_path:"".concat(h(e)).concat(t.backdrop_path),poster_path:"".concat(h(e)).concat(t.poster_path)})}(t)})):null},_=a(9),E=a.n(_),O=function(t){var e=t.movies.map(function(t){return o.a.createElement("li",{key:t.id,className:E.a.movie_item},o.a.createElement("span",{className:E.a.movie_title},t.title),o.a.createElement("img",{src:t.poster_path,alt:"poster"}))});return o.a.createElement("div",null,o.a.createElement("ul",{className:E.a.movies_list},e))},j=a(15),T=a.n(j),w="FETCH_TOP_RATED_DATA",k="FETCH_LATEST_DATA",y=function(t,e){var a="".concat("http://api.themoviedb.org/3").concat(t,"?api_key=").concat("5874acfd11651a28c55771624f7021f4","&language=en-US");return e&&Object.keys(e).forEach(function(t){return a+="&".concat(t,"=").concat(e[t])}),a},M=function(t){return function(e){return T.a.get(y("/movie/top_rated",{page:t})).then(function(t){var a;e((a=t.data,{type:w,data:a}))}).catch(function(t){throw t})}},A=Object(i.b)(null,{getLatestMovies:function(t){return function(e){return T.a.get(y("/movie/latest",{page:t})).then(function(t){var a;e((a=t.data,{type:k,data:a}))}).catch(function(t){throw t})}},getTopMovies:M})(function(t){var e=t.getLatestMovies,a=t.getTopMovies;return o.a.createElement("div",{className:"header"},"Header",o.a.createElement("button",{onClick:function(){return e(1)}},"Latest"),o.a.createElement("button",{onClick:function(){return a(1)}},"Top rated"))}),I=function(){return o.a.createElement("div",{className:"footer"},"Footer")},N=a(8),C=a(28),L=a.n(C),P=a(10),H=a.n(P),S=Object(i.b)(null,{getTopMovies:M})(function(t){var e=t.page,a=t.totalPages,n=t.getTopMovies,r=function(t,e){var a=[];if(t<5){for(var n=1;n<=7;n++)a.push(n);a.push("...",e-1,e)}else if(t>=5&&t<8){for(var o=1;o<=t;o++)a.push(o);a.push(t+1,t+2,t+3,"...",e-1,e)}else if(t<e-3&&t>e-8){a.push(1,2,"..."),a.push(t-3,t-2,t-1);for(var r=t;r<=e;r++)a.push(r)}else if(t>e-8){a.push(1,2,"...");for(var c=e-6;c<=e;c++)a.push(c)}else a.push(1,2,"...",t-3,t-2,t-1,t,t+1,t+2,t+3,"...",e-1,e);return a}(e,a).map(function(t,a){var r=L()(H.a.navigationItem,Object(N.a)({},H.a.navigationActiveItem,t===e));return o.a.createElement("li",{key:a,className:r,onClick:function(){return n(t)}},t)});return o.a.createElement("div",{className:H.a.pagination},o.a.createElement("ul",null,r))}),D=(a(60),a(61),function(t){function e(){return Object(s.a)(this,e),Object(v.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.props.getTopMovies(1)}},{key:"render",value:function(){var t=this.props.data;console.log(t);var e=b(t);return o.a.createElement("div",null,o.a.createElement(A,null),e?o.a.createElement(O,{movies:e}):null,e?o.a.createElement(S,{page:t.page,totalPages:t.total_pages}):null,o.a.createElement(I,null))}}]),e}(n.Component)),R=Object(i.b)(function(t){return console.log(t.data),{data:t.data.data[t.data.activeSortType]}},{getTopMovies:M})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x={activeSortType:"topRated",data:{latest:{},topRated:{}}};var F=Object(u.c)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(console.log(t),e.type){case w:return console.log(e.data),Object(g.a)({},t,{data:Object(g.a)({},t.data,{topRated:e.data})});case k:return Object(g.a)({},t,{data:Object(g.a)({},t.data,{latest:e.data})});default:return Object(g.a)({},t)}}}),B=Object(u.d)(F,Object(u.a)(l.a)),J=document.getElementById("root");c.a.render(o.a.createElement(i.a,{store:B},o.a.createElement(R,null)),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports={movie_item:"MovieList_movie_item__3VMvS",movie_title:"MovieList_movie_title__2t6YP"}}},[[32,1,2]]]);
//# sourceMappingURL=main.5641f389.chunk.js.map