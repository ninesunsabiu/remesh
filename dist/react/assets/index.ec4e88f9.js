var J=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var $=(e,t,o)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&$(e,o,t[o]);if(D)for(var o of D(t))ee.call(t,o)&&$(e,o,t[o]);return e},L=(e,t)=>X(e,Y(t));import{r as h,j as T,a as d,c as te}from"./jsx-runtime.cbb87597.js";import{l as E,t as b,u as oe,N as k,H as ne,R as se,a as B}from"./localforage.dae84f5a.js";import{R as q,m as H,u as F,d as Q,B as de,e as ae,f as le,g as re}from"./remesh-logger.7aafe251.js";import{f as ce}from"./from.2d9119b3.js";import{m as me}from"./merge.520e78a2.js";import"./mergeAll.0f775926.js";const ie=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)}),A="todo-mvc-data",N=()=>E.getItem(A).then(e=>e!=null?e:[]),ue=q.extern({name:"TodoRepoExtern",default:{async getTodoList(){return N()},async addTodo(e){let t=await N();await E.setItem(A,t.concat(e))},async removeTodoByIds(e){let t=await N();await E.setItem(A,t.filter(o=>!e.includes(o.id)))},async updateTodo(e){let t=await N();await E.setItem(A,t.map(o=>o.id===e.id?p(p({},o),e):o))},async toggleCompletedByIds(e,t){let o=await N();await E.setItem(A,o.map(r=>e.includes(r.id)?L(p({},r),{completed:t}):r))}}}),j=q.domain({name:"TodoDomain",impl:e=>{const t=e.getExtern(ue),o=e.state({name:"TodoList",default:[]}),r=e.query({name:"TodoListQuery",impl({get:s},n){const m=s(o());return n==="active"?m.filter(a=>!a.completed):n==="completed"?m.filter(a=>a.completed):m}}),u=e.query({name:"HasCompletedQuery",impl({get:s}){return s(r("completed")).length>0}}),g=e.query({name:"ActiveTodoCountQuery",impl({get:s}){return s(r("active")).length}}),x=e.query({name:"AllCompletedQuery",impl({get:s}){return s(g())===0&&s(r()).length>0}}),C=e.event({name:"addTodoEvent"}),w=e.command({name:"setTodoList",impl(s,n){return o().new(n)}}),v=e.event({name:"AddTodoFailedEvent"}),R=e.command({name:"addTodo",impl({get:s},n){if(n.trim()==="")return[v("Cannot be empty, please enter the TODO name")];const m=s(o()),a={id:ie(),name:n,completed:!1};return[o().new([a,...m]),C(a)]}}),f=e.event({name:"removeTodoEvent"}),i=e.command({name:"removeTodo",impl({get:s},n){const a=s(o()).filter(l=>l.id!==n);return[o().new(a),f([n])]}}),S=e.event({name:"TodoUpdatedEvent"}),U=e.command({name:"updateTodo",impl({get:s},n){const m=s(o());if(n.name&&n.name.trim()==="")return i(n.id);const a=m.map(c=>c.id===n.id?L(p(p({},c),n),{id:c.id}):c),l=a.find(c=>c.id===n.id);return l?[o().new(a),S(l)]:null}}),I=e.event({name:"TodoCompletedChangedEvent"}),V=e.command({name:"toggleTodoCompleted",impl({get:s},n){const a=s(o()).map(y=>y.id===n?L(p({},y),{completed:!y.completed}):y),l=a.find(y=>y.id===n);if(!l)return null;const c={ids:[n],completed:l==null?void 0:l.completed};return[o().new(a),I(c)]}}),W=e.command({name:"toggleAllTodoCompleted",impl({get:s},n){const m=s(o());if(m.length===0)return null;const a=m.map(l=>L(p({},l),{completed:n}));return[o().new(a),I({ids:a.map(l=>l.id),completed:n})]}}),_=e.command({name:"clearCompleted",impl({get:s}){const n=s(o()),m=n.filter(l=>!l.completed),a=n.filter(l=>l.completed).map(l=>l.id);return[o().new(m),f(a)]}}),z=e.command$({name:"fromRepoToState",impl(){return ce(t.getTodoList()).pipe(H(s=>w(s)))}}),G=e.command$({name:"fromStateToRepo",impl:({fromEvent:s})=>{const n=s(C).pipe(b(c=>t.addTodo(c))),m=s(f).pipe(b(c=>t.removeTodoByIds(c))),a=s(S).pipe(b(c=>t.updateTodo(c))),l=s(I).pipe(b(c=>t.toggleCompletedByIds(c.ids,c.completed)));return me(n,m,a,l).pipe(H(()=>null))}});return e.ignite(()=>z()),e.ignite(()=>G()),{query:{TodoListQuery:r,ActiveTodoCountQuery:g,HasCompletedQuery:u,AllCompletedQuery:x},command:{addTodo:R,removeTodo:i,toggleTodoCompleted:V,toggleAllTodoCompleted:W,updateTodo:U,clearCompleted:_},event:{AddTodoFailedEvent:v}}}});function M(e){const[t,o]=h.exports.useState(e),r=h.exports.useCallback(u=>{o(u.target.value)},[]);return[t,r,o]}function O(e,t){const o=h.exports.useRef(t),r=h.exports.useCallback(u=>{u.key.toLocaleLowerCase()===e.toLocaleLowerCase()&&(u.preventDefault(),o.current(u))},[e]);return h.exports.useEffect(()=>{o.current=t}),r}function pe({todo:e}){const t=F(j()),[o,r]=h.exports.useState(!1),u=h.exports.useRef(null),[g,x]=M(e.name),C=O("Enter",()=>{t.command.updateTodo(L(p({},e),{name:g})),r(!1)}),w=()=>{r(!0)},v=()=>{t.command.toggleTodoCompleted(e.id)},R=()=>{t.command.removeTodo(e.id)};return h.exports.useEffect(()=>{var f;o&&((f=u.current)==null||f.focus())},[o]),T("li",{onDoubleClick:w,className:`${o?"editing":""} ${e.completed?"completed":""}`,children:[T("div",{className:"view",children:[d("input",{type:"checkbox",className:"toggle",checked:e.completed,onChange:v}),d("label",{children:e.name}),d("button",{className:"destroy",onClick:R})]}),o&&d("input",{ref:u,className:"edit",value:g,onChange:x,onKeyPress:C,onBlur:()=>{r(!1)}})]})}const P=()=>{const{filter:e}=oe(),t=F(j()),o=Q(t.query.TodoListQuery(e)),r=Q(t.query.ActiveTodoCountQuery()),u=Q(t.query.HasCompletedQuery()),g=Q(t.query.AllCompletedQuery()),[x,C,w]=M(""),v=O("Enter",()=>{t.command.addTodo(x),w("")}),R=()=>{t.command.toggleAllTodoCompleted(!g)},f=()=>{t.command.clearCompleted()};return de(t.event.AddTodoFailedEvent,i=>{alert(i)}),console.log("render list"),T("div",{className:"todoapp",children:[T("header",{className:"header",children:[d("h1",{children:"todos"}),d("input",{className:"new-todo",placeholder:"What needs to be done?",value:x,onChange:C,onKeyDown:v})]}),T("section",{className:"main",children:[d("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:g,onChange:R}),d("label",{htmlFor:"toggle-all"}),d("ul",{className:"todo-list",children:o.map(i=>d(pe,{todo:i},i.id))})]}),T("footer",{className:"footer",children:[T("span",{className:"todo-count",children:[d("strong",{children:r})," items left"]}),T("ul",{className:"filters",children:[d("li",{children:d(k,{to:"/",className:i=>i.isActive?"selected":"",children:"All"})}),d("li",{children:d(k,{to:"/active",className:i=>i.isActive?"selected":"",children:"Active"})}),d("li",{children:d(k,{to:"/completed",className:i=>i.isActive?"selected":"",children:"Completed"})})]}),u&&d("button",{className:"clear-completed",onClick:f,children:"Clear completed"})]})]})},K=document.getElementById("root");if(K){const e=te(K),t=q.store({inspectors:[ae(),le({include:["command","query","event","domain","command$","state"]})]});e.render(d(h.exports.StrictMode,{children:d(re,{store:t,children:d(ne,{basename:"/",children:T(se,{children:[d(B,{path:"/",element:d(P,{})}),d(B,{path:"/:filter",element:d(P,{})})]})})})}))}
//# sourceMappingURL=index.ec4e88f9.js.map
