(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3YDly",card:"Cards_card__1Bbxi",Infected:"Cards_Infected__3PDa8",Recovered:"Cards_Recovered__1UpMA",Deaths:"Cards_Deaths__pijhE"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(5),u=a.n(s),i=a(10),l=a(71),d=a(72),p=a(81),f=a(80),m=a(224),v=a(30),h=a.n(v),b=a(228),y=a(225),E=a(226),C=a(73),_=a.n(C),g=function(e){var t=e.caseType,a=e.lastUpdate,n=e.name,c=e.desc,o=e.classNames;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{item:!0,component:b.a,xs:12,md:3,className:o},r.a.createElement(y.a,null,r.a.createElement(E.a,{color:"textSecondary",variant:"body1"},n),r.a.createElement(E.a,{variant:"h5",gutterBottom:!0},r.a.createElement(_.a,{start:0,end:t.value,separator:",",duration:2.5})),r.a.createElement(E.a,{color:"textSecondary",variant:"subtitle2"},new Date(a).toDateString()),r.a.createElement(E.a,{variant:"subtitle2"},c))))},x=a(13),O=a.n(x),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:O.a.container},r.a.createElement(m.a,{container:!0,justify:"center",spacing:3},r.a.createElement(g,{classNames:h()(O.a.card,O.a.Infected),name:"Infected",caseType:a,lastUpdate:o,desc:"Number of active cases of COVID-19"}),r.a.createElement(g,{classNames:h()(O.a.card,O.a.Recovered),name:"Recovered",caseType:n,lastUpdate:o,desc:"Number of recoveries from COVID-19"}),r.a.createElement(g,{classNames:h()(O.a.card,O.a.Deaths),name:"Deaths",caseType:c,lastUpdate:o,desc:"Number of deaths caused by COVID-19"}))):"Loading..."},w=a(29),k=a(42),D=a(31),N=a.n(D),I="https://covid19.mathdro.id/api",U=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,l={confirmed:c,recovered:o,deaths:s,lastUpdate:i},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=a(78),V=a.n(T),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=p.length?r.a.createElement(k.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(255, 0, 0, 0.5)",backgroundColor:"rgba(255, 0, 0, 0.2)",fill:!0}]}}):null,v=a?r.a.createElement(k.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:V.a.container},s?v:m)},B=a(229),P=a(227),J=a(79),L=a.n(J),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(B.a,{className:L.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},z=a(43),F=a.n(z),G=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:F.a.container},r.a.createElement("h1",{className:F.a.title},"COVID-19"),r.a.createElement(j,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(G,null),document.getElementById("root"))},43:function(e,t,a){e.exports={container:"App_container__rEz8E",title:"App_title__3KC7T"}},78:function(e,t,a){e.exports={container:"Chart_container__18Wpx"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3CiZi"}},83:function(e,t,a){e.exports=a(206)}},[[83,1,2]]]);
//# sourceMappingURL=main.aeea3611.chunk.js.map