import{o as l,c as a,i as m}from"./map.53d3c8f5.js";function x(f,e){return l(function(s,r){var n=null,p=0,t=!1,o=function(){return t&&!n&&r.complete()};s.subscribe(a(r,function(i){n==null||n.unsubscribe();var v=0,u=p++;m(f(i,u)).subscribe(n=a(r,function(c){return r.next(e?e(i,c,u,v++):c)},function(){n=null,o()}))},function(){t=!0,o()}))})}export{x as s};
//# sourceMappingURL=switchMap.1a8545f2.js.map