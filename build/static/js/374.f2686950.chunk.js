"use strict";(self.webpackChunktrishoolapp=self.webpackChunktrishoolapp||[]).push([[374],{20384:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(72791),i=n(59434),s=n(16871),c=n(91625),a=n(62591),o=JSON.parse('["()","Id","Location Name","Location Type","Is Root Parent Entity","Parent Entity","Latitude","Longitude","Contact No.","Contact Email","Is Eligible For Access"]'),d=n(80184);function l(e){var t=e.listEntity;return(0,d.jsx)("div",{children:(0,d.jsxs)(a.Z,{hover:!0,responsive:!0,className:"my-table",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:o.map((function(e,t){return(0,d.jsx)("th",{style:{fontSize:"10px"},children:e},t)}))})}),(0,d.jsx)("tbody",{children:function(){if(t.length>0)return t.map((function(e,t){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"checkbox"})}),(0,d.jsx)("td",{children:e.id}),(0,d.jsx)("td",{children:e.name}),(0,d.jsx)("td",{children:e.type}),(0,d.jsx)("td",{children:"null"}),(0,d.jsx)("td",{children:"-"}),(0,d.jsx)("td",{children:e.latitude}),(0,d.jsx)("td",{children:e.longitude}),(0,d.jsx)("td",{children:e.contactNo}),(0,d.jsx)("td",{children:e.contactEmail}),(0,d.jsx)("td",{children:e.eligibleForAccess?"True":"False"})]},t)}))}()})]})})}var u=n(60671),h=n(61835),x=n(89743),p=n(2677),j=n(3173);function f(){var e=(0,s.s0)(),t=(0,i.v9)((function(e){return e.rEntityGroupList})),n=t.listEntityGroup,a=(t.isLoading,(0,i.v9)((function(e){return e.rLogin})).loginInfo),o=(0,i.I0)();(0,r.useEffect)((function(){a&&"SuperAdmin"===a.user.type?e(u.h.dashboard):o((0,h.aP)())}),[]);return(0,d.jsxs)("div",{className:"div-dashboard",children:[(0,d.jsx)("div",{className:"div-header-entity",children:j.l.map((function(t,n){return(0,d.jsx)(c.Jr,{title:t.name,styles:"btn-header-entity",onClickedButton:function(){t.routeName.length>0&&e(t.routeName)}},n)}))}),(0,d.jsx)("div",{className:"div-top-btn mb-2 mt-2",children:(0,d.jsxs)(x.Z,{children:[(0,d.jsx)(p.Z,{xl:4,lg:4,children:(0,d.jsx)("h4",{className:"headingAll mt-2 mb-0",children:"Entity Group Management"})}),(0,d.jsx)(p.Z,{xl:8,lg:8,className:"text-right",children:(0,d.jsx)(c.Jr,{styles:"btn-create-client",title:"Group Creation",onClickedButton:function(){return e(u.h.entityGroupCreation)}})})]})}),(0,d.jsx)(l,{listEntity:n})]})}},62591:function(e,t,n){var r=n(1413),i=n(45987),s=n(81694),c=n.n(s),a=n(72791),o=n(10162),d=n(80184),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,a=e.striped,u=e.bordered,h=e.borderless,x=e.hover,p=e.size,j=e.variant,f=e.responsive,v=(0,i.Z)(e,l),m=(0,o.vE)(n,"table"),b=c()(s,m,j&&"".concat(m,"-").concat(j),p&&"".concat(m,"-").concat(p),a&&"".concat(m,"-striped"),u&&"".concat(m,"-bordered"),h&&"".concat(m,"-borderless"),x&&"".concat(m,"-hover")),y=(0,d.jsx)("table",(0,r.Z)((0,r.Z)({},v),{},{className:b,ref:t}));if(f){var N="".concat(m,"-responsive");return"string"===typeof f&&(N="".concat(N,"-").concat(f)),(0,d.jsx)("div",{className:N,children:y})}return y}));t.Z=u}}]);
//# sourceMappingURL=374.f2686950.chunk.js.map