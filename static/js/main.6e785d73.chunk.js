(this.webpackJsonpvk_mini_app_1=this.webpackJsonpvk_mini_app_1||[]).push([[0],{135:function(t,n,e){"use strict";e.r(n);var s=e(2),i=e.n(s),r=e(12),o=e.n(r),h=e(4),u=e.n(h),c=e(8),a=e(9),b=e(3),l=e(11),d=e(10),j=(e(136),e(133),e(0)),O=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(t){var s;return Object(c.a)(this,e),(s=n.call(this,t)).numbers={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1},s.state={lightOn:!1,isUsed:!1},s.seon=s.seon.bind(Object(b.a)(s)),s.turnOnLight=s.turnOnLight.bind(Object(b.a)(s)),s}return Object(a.a)(e,[{key:"seon",value:function(t){return this.state.lightOn||(this.setState(),this.numbers[t]=!this.numbers[t]),this.state.lightOn}},{key:"turnOnLight",value:function(){var t=this;alert(this.state.isUsed),this.setState((function(t){return{lightOn:!t.lightOn,isUsed:!t.isUsed}})),setTimeout((function(){alert(t.state.isUsed);var n=0;setInterval((function(){t.state.isUsed&&(t.numbers[n.toString()]?u.a.send("VKWebAppFlashSetLevel",{level:1}):u.a.send("VKWebAppFlashSetLevel",{level:0}),n=(n+1)%8)}),1e3)}),1e3)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[0],id:"0",children:this.numbers[0]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[1],id:"1",children:this.numbers[1]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[2],id:"2",children:this.numbers[2]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[3],id:"3",children:this.numbers[3]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[4],id:"4",children:this.numbers[4]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[5],id:"5",children:this.numbers[5]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[6],id:"6",children:this.numbers[6]?"on":"off"}),Object(j.jsx)(f,{setlighton:this.seon,turnon:this.numbers[7],id:"7",children:this.numbers[7]?"on":"off"}),Object(j.jsx)("button",{onClick:this.turnOnLight,children:this.state.lightOn?"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0444\u043e\u043d\u0430\u0440\u0438\u043a":"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0444\u043e\u043d\u0430\u0440\u0438\u043a"})]})}}]),e}(i.a.Component),f=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(t){var s;return Object(c.a)(this,e),(s=n.call(this,t)).state={turnon:t.turnon},s.setlhton=s.setlhton.bind(Object(b.a)(s)),s}return Object(a.a)(e,[{key:"setlhton",value:function(){this.props.setlighton(this.props.id)||this.setState((function(t){return{turnon:!t.turnon}}))}},{key:"render",value:function(){return Object(j.jsxs)("button",{onClick:this.setlhton,children:[parseInt(this.props.id)+parseInt(1)+")",+this.state.turnon?"on":"off"]})}}]),e}(i.a.Component),m=O;u.a.send("VKWebAppInit"),o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.6e785d73.chunk.js.map