(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(10),s=n(8),u=n(18),l=n(19),h=(n(16),n(1)),p=n(2),b=n(4),d=n(3),O=n(5),f=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",{className:"tc"}," ",t," "),a.a.createElement("p",{className:"tc"}," ",r," ")))}}]),t}(r.Component),m=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.robots.map((function(e){return a.a.createElement(f,{key:e.id,id:e.id,name:e.name,email:e.email})}));return a.a.createElement("div",null," ",e," ")}}]),t}(r.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"searchBox",className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robot",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",value:this.props.searchField,onChange:this.props.changeInput}))}}]),t}(r.Component),E=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},this.props.children)}}]),t}(r.Component),y=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(d.a)(t).call(this))).state={hasError:!1},e}return Object(O.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),g=(r.Component,function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"}," Robofriends"))}}]),t}(r.Component)),v=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.reduce((function(e,n){return""!==t&&-1===n.name.toLowerCase().indexOf(t.toLowerCase())||e.push(n),e}),[]);return o?a.a.createElement("h1",{className:"tc"},"LOADING"):a.a.createElement("div",{className:"tc"},a.a.createElement(g,null),a.a.createElement(j,{changeInput:n.bind(this),searchField:t}),a.a.createElement(E,null,a.a.createElement(y,null,a.a.createElement(m,{robots:c}))))}}]),t}(r.Component)),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(v);n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(20);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={searchField:""},k={isPending:!1,robots:[],error:""},_=Object(u.createLogger)(),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return w({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return w({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return w({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return w({},e,{error:t.payload,isPending:!1});default:return e}}}),D=Object(s.d)(N,Object(s.a)(l.a,_));c.a.render(a.a.createElement(i.a,{store:D},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7b9d31c1.chunk.js.map