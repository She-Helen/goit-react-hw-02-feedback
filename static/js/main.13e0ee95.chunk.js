(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=a(3),u=a(4),i=a(5),s=a(7),d=a(6);function m(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("div",null,a))}function b(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,Object.keys(t).map((function(e){return r.a.createElement("button",{key:e,name:e,onClick:function(e){return a(e)}},e)})))}function g(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",l,"%")):null)}function f(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))}var k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){t.persist(),e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()?Math.round(e.state.good/e.countTotalFeedback()*100):0},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"Please leave feedback"},r.a.createElement(b,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})),r.a.createElement(m,{title:"Statistics"},this.countTotalFeedback()?r.a.createElement(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(f,{message:"No feedback given"})))}}]),a}(r.a.Component);a(13);l.a.render(r.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.13e0ee95.chunk.js.map