(this.webpackJsonpcrowcraft=this.webpackJsonpcrowcraft||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"capitalize",(function(){return m}));var i=n(5),c=n.n(i),r=n(14),l=n.n(r),s=(n(19),n(20),n(7)),o=n(6),u=n(1),m=function(e){return e[0].toUpperCase()+e.slice(1)},j=n(0),d=function(e){var t=e.name,n=e.onChoiceCanceled;return Object(j.jsx)("div",{className:"bg-verdigris pa2 dib",children:Object(j.jsxs)("div",{className:"flex items-center space-between",children:[Object(j.jsx)("div",{children:a.capitalize(t)}),Object(j.jsx)("div",{className:"pl2 bittersweet fw8 pointer",onClick:n,children:"X"})]})})},h=function(e){var t=e.name,n=e.choice,i=e.onStepCanceled;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mb1",children:a.capitalize(t)}),Object(j.jsx)("div",{children:Object(j.jsx)(d,{name:n.name,onChoiceCanceled:i})})]})},w=function(e){var t=e.name;return Object(j.jsx)("div",{className:"bg-verdigris pa2 dib pointer",children:Object(j.jsx)("div",{className:"flex items-center justify-center",children:Object(j.jsx)("div",{children:a.capitalize(t)})})})},f=["a","e","i","o","u"],b=function(e){var t=e.name,n=e.options,a=e.onStepCompleted;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb1",children:["Choose ",f.includes(t[0])?"an":"a"," ",t]}),Object(j.jsx)("div",{className:"flex",children:n.map((function(e){return Object(j.jsx)("div",{className:"mr2",onClick:function(){return a(e)},children:Object(j.jsx)(w,{name:e.name})},e.id)}))})]})},O=function e(t,n,a){Object(u.a)(this,e),this.id=t,this.name=n,this.nextFilterId=a},p=function e(t,n,a){Object(u.a)(this,e),this.id=t,this.name=n,this.optionIds=a},v={armor:new O("armor","armor","armorClass"),weapon:new O("weapon","weapon","weaponClass"),leather:new O("leather","leather","leatherArmor"),mail:new O("mail","mail","mailArmor"),plate:new O("plate","plate","plateArmor"),oneHanded:new O("oneHanded","one handed","oneHandedWeapon"),twoHanded:new O("twoHanded","two handed","twoHandedWeapon"),ranged:new O("ranged","ranged","rangedWeapon"),shield:new O("shield","shield","shieldWeapon"),magical:new O("magical","magical","magicalWeapon"),leatherBoots:new O("leatherBoots","leather boots",null),leatherCap:new O("leatherCap","leather cap",null),leatherGloves:new O("leatherGloves","leather gloves",null),leatherTunic:new O("leatherTunic","leather tunic",null),mailBoots:new O("mailBoots","mail boots",null),mailCoif:new O("mailCoif","mail coif",null),mailGloves:new O("mailGloves","mail gloves",null),mailHauberk:new O("mailHauberk","mail hauberk",null),plateBoots:new O("plateBoots","plate boots",null),plateBreastplate:new O("plateBreastplate","plate breastplate",null),plateGloves:new O("plateGloves","plate gloves",null),plateHelmet:new O("plateHelmet","plate helmet",null),axe:new O("axe","axe",null),dagger:new O("dagger","dagger",null),mace:new O("mace","mace",null),rapier:new O("rapier","rapier",null),shortSword:new O("shortSword","short sword",null),greatAxe:new O("greatAxe","great axe",null),greatMace:new O("greatMace","great mace",null),greatSword:new O("greatSword","great sword",null),longsword:new O("longsword","longsword",null),mysticalThrowingHammer:new O("mysticalThrowingHammer","mystical throwing hammer",null),pistol:new O("pistol","pistol",null),sickle:new O("sickle","sickle",null),smallBuckler:new O("smallBuckler","small buckler",null),mediumShield:new O("mediumShield","medium shield",null),towerShield:new O("towerShield","tower shield",null),frostcaster:new O("frostcaster","frostcaster",null)},g={craftingType:new p("craftingType","crafting type",["armor","weapon"]),armorClass:new p("armorClass","armor class",["leather","mail","plate"]),weaponClass:new p("weaponClass","weapon class",["oneHanded","twoHanded","ranged","shield","magical"]),leatherArmor:new p("leatherArmor","armor",["leatherBoots","leatherCap","leatherGloves","leatherTunic"]),mailArmor:new p("mailArmor","armor",["mailBoots","mailCoif","mailGloves","mailHauberk"]),plateArmor:new p("plateArmor","armor",["plateBoots","plateBreastplate","plateGloves","plateHelmet"]),oneHandedWeapon:new p("oneHandedWeapon","weapon",["axe","dagger","mace","rapier","shortSword","longsword"]),twoHandedWeapon:new p("twoHandedWeapon","weapon",["greatAxe","greatMace","greatSword"]),rangedWeapon:new p("rangedWeapon","weapon",["mysticalThrowingHammer","pistol","sickle"]),shieldWeapon:new p("shieldWeapon","weapon",["smallBuckler","mediumShield","towerShield"]),magicalWeapon:new p("magicalWeapon","weapon",["frostcaster"])},x=n(12),C=n(10),y=n(3),k=n(2),N=n(13),S=n(4),z=function e(t,n){Object(u.a)(this,e),this.quantity=t,this.item=n},M=function e(t,n){Object(u.a)(this,e),this.craftingMaterials=t,this.craftingResult=n},H=function(){function e(t,n,a,i,c,r){Object(u.a)(this,e),this.id=t,this.name=n,this.professions=a,this.rarities=i,this.craftingMaterials=c,this.craftingQuantity=r,this.craftingRank=this.getCraftingRank()}return Object(S.a)(e,[{key:"getCustomizableComponents",value:function(){var e,t=[],n=Object(N.a)(this.craftingMaterials);try{for(n.s();!(e=n.n()).done;){var a=e.value;t=t.concat(a.item.getCustomizableComponents())}}catch(i){n.e(i)}finally{n.f()}return t}},{key:"getCraftingRank",value:function(){return Math.max.apply(Math,Object(s.a)(this.craftingMaterials.map((function(e){return e.item.craftingRank}))))+1}},{key:"getCraftingRundown",value:function(){for(var e=[new M(this.craftingMaterials,new z(1,this))],t=Object(s.a)(this.craftingMaterials),n=this.craftingRank;n>1;){n-=1,t.sort(Q);for(var a={},i=0;t[i].item.craftingRank===n;i++){var c=t[i];void 0===a[c.item.id]?a[c.item.id]=new z(c.quantity,c.item):a[c.item.id].quantity+=c.quantity}t=t.slice(i,t.length);for(var r=function(){var n=o[l],a=Math.ceil(n.quantity/n.item.craftingQuantity),i=n.item.craftingMaterials.map((function(e){return new z(e.quantity*a,e.item)}));e.push(new M(i,new z(a*n.item.craftingQuantity,n.item))),t=t.concat(i)},l=0,o=Object.values(a);l<o.length;l++)r()}e.reverse();var u,m={},j=Object(N.a)(t);try{for(j.s();!(u=j.n()).done;){var d=u.value;void 0===m[d.item.id]?m[d.item.id]=new z(d.quantity,d.item):m[d.item.id].quantity+=d.quantity}}catch(h){j.e(h)}finally{j.f()}return{crafts:e,rawMaterials:Object.values(m)}}}]),e}(),B=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"getCraftingRank",value:function(){return 0}}]),n}(H),R=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"getCustomizableComponents",value:function(){return[this]}},{key:"getCustomizationOptions",value:function(){throw"".concat(this.id," must implement getCustomizationOptions")}},{key:"getCustomizationEffect",value:function(){throw"".concat(this.id," must implement getCustomizationEffect")}},{key:"customize",value:function(e){this.id=e.id,this.name=e.name,this.craftingMaterials=e.craftingMaterials}}]),n}(H),W="grey",E="white",I="green",T="blue",A="purple",q="orange",G="armorsmith",F="leatherworker",P="weaponsmith",Q=function(e,t){return e.item.craftingRank>t.item.craftingRank?-1:e.item.craftingRank<t.item.craftingRank?1:0},D=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ore",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ore",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[W,E,I,T,A,q],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return Object(u.a)(this,n),t.call(this,e,a,i,c,r,l)}return n}(B),J=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"aurelium","aurelium",[],[E,I,T,A,q],[],1)}return n}(D),L=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"copper","copper",[],[E,I,T,A,q],[],1)}return n}(D),U=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"iron","iron",[],[E,I,T,A,q],[],1)}return n}(D),V=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"silver","silver",[],[E,I,T,A,q],[],1)}return n}(D),X=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"tin","tin",[],[E,I,T,A,q],[],1)}return n}(D),K=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"wood","wood",[],[W,E,I,T,A,q],[],1)}return n}(B),Y=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"etherealDust","ethereal dust",[],[E],[],1)}return n}(B),Z=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"coal","coal",[G,P],[E],[new z(3,new K),new z(3,new Y)],5)}return n}(H),$=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"metalScales",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"metal scales",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[new z(16,new U),new z(10,new D),new z(10,new D),new z(12,new Z)];return Object(u.a)(this,n),t.call(this,e,a,[G,P],[E,I,T,A,q],i,1)}return Object(S.a)(n,[{key:"getCustomizationOptions",value:function(){return[new _,new ee,new te,new ne,new ae,new ie,new ce,new re,new le,new se]}}]),n}(R),_=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"steelMetalScales","metal scales (steel)",[new z(16,new U),new z(10,new L),new z(10,new U),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"bleed resistance"}}]),n}($),ee=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"darkBronzeMetalScales","metal scales (dark bronze)",[new z(16,new U),new z(10,new L),new z(10,new X),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"fire resistance"}}]),n}($),te=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"brightSteelMetalScales","metal scales (bright steel)",[new z(16,new U),new z(10,new L),new z(10,new V),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"ice resistance"}}]),n}($),ne=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"aureliumSTeelMetalScales","metal scales (aurelium steel)",[new z(16,new U),new z(10,new L),new z(10,new J),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"electricity resistance"}}]),n}($),ae=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"invarMetalScales","metal scales (invar)",[new z(16,new U),new z(10,new U),new z(10,new X),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"nature resistance"}}]),n}($),ie=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"silveredIronMetalScales","metal scales (silvered iron)",[new z(16,new U),new z(10,new U),new z(10,new V),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"poison resistance"}}]),n}($),ce=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"tigerIronMetalScales","metal scales (tiger iron)",[new z(16,new U),new z(10,new U),new z(10,new J),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"disease resistance"}}]),n}($),re=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"blueSteelMetalScales","metal scales (blue steel)",[new z(16,new U),new z(10,new X),new z(10,new V),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"slashing resistance"}}]),n}($),le=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"forestAureliumMetalScales","metal scales (forest aurelium)",[new z(16,new U),new z(10,new X),new z(10,new J),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"crushing resistance"}}]),n}($),se=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"darkElectrumMetalScales","metal scales (dark electrum)",[new z(16,new U),new z(10,new V),new z(10,new J),new z(12,new Z)])}return Object(S.a)(n,[{key:"getCustomizationEffect",value:function(){return"piercing resistance"}}]),n}($),oe=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"hide","hide",[],[E,I,T,A,q],[],1)}return n}(B),ue=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"meat","meat",[],[E],[],1)}return n}(B),me=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"lacingSinew","lacing sinew",[F],[E],[new z(3,new ue),new z(3,new Y)],5)}return n}(H),je=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,"leatherPadding","leather padding",[F],[E,I,T,A,q],[new z(2,new oe),new z(2,new oe),new z(2,new oe),new z(1,new me)],1)}return n}(H),de=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(u.a)(this,n),t.call(this,n.id,"mail coif",[G,P],[E,I,T,A,q],[new z(1,new $),new z(1,new $),new z(1,new $),new z(1,new je),new z(6,new Y)],1)}return n}(H);de.id="mailCoif";var he=Object(C.a)({},de.id,de),we=Object(x.a)(Object(x.a)({},he),{}),fe=function(e){var t=e.rawMaterials;return Object(j.jsxs)("div",{className:"flex flex-column",children:[Object(j.jsx)("div",{children:"Raw materials:"}),t.map((function(e,t){return Object(j.jsx)(be,{rawMaterial:e},"".concat(e.item.id,".").concat(t))}))]})},be=function(e){var t=e.rawMaterial;return Object(j.jsxs)("div",{className:"nowrap",children:[t.quantity,"x ",a.capitalize(t.item.name)]})},Oe=function(e){var t=e.crafts;return Object(j.jsxs)("div",{className:"flex flex-column",children:[Object(j.jsx)("div",{children:"Crafting steps:"}),t.map((function(e){return Object(j.jsx)(pe,{craft:e},e.craftingResult.item.id)}))]})},pe=function(e){var t=e.craft;return Object(j.jsxs)("div",{className:"flex nowrap",children:[t.craftingMaterials.map((function(e,t){return Object(j.jsxs)("div",{className:"flex",children:[t>0?Object(j.jsx)("div",{className:"mh1",children:"+"}):null,Object(j.jsx)(be,{rawMaterial:e})]},"".concat(e.item.id,".").concat(t))})),Object(j.jsx)("div",{className:"mh1",children:"=>"}),Object(j.jsx)(be,{rawMaterial:t.craftingResult}),Object(j.jsxs)("div",{className:"ml1",children:["(",t.craftingResult.item.professions.map((function(e){return a.capitalize(e)})).join(" or "),")"]})]})},ve=function(e){var t=e.active,n=e.className,a=e.item,i=e.onItemCustomized;return t?Object(j.jsx)("div",{className:n,children:Object(j.jsx)(ge,{item:a,onItemCustomized:i})}):null},ge=function(e){var t=e.item,n=e.onItemCustomized,a=t.getCustomizableComponents(),c=Object(i.useState)(a.map((function(){return!1}))),r=Object(o.a)(c,2),l=r[0],s=r[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"mb2",children:"Choose your stats"}),a.map((function(e,t){return Object(j.jsx)(xe,{component:e,onComponentCustomized:function(){return function(e){l[e]=!0,s(l),l.every((function(e){return e}))&&n()}(t)},componentIndex:t+1},"".concat(e.id,".").concat(t))}))]})},xe=function(e){var t=e.component,n=e.onComponentCustomized,a=e.componentIndex,c=t.getCustomizationOptions(),r=Object(i.useState)(c.map((function(){return!1}))),l=Object(o.a)(r,2),u=l[0],m=l[1];return Object(j.jsxs)("div",{className:"mb3",children:[Object(j.jsxs)("div",{className:"mb1",children:[a,". ",t.name]}),Object(j.jsx)("div",{className:"flex ml3",children:c.map((function(e,a){return Object(j.jsx)("div",{className:"mr2",children:Object(j.jsx)(Ce,{option:e,onClick:function(){return function(e,a){var i=Object(s.a)(u);i[a]=!0,m(i),t.customize(e),n()}(e,a)},isSelected:u[a]})},e.id)}))})]})},Ce=function(e){var t=e.option,n=e.onClick,a=e.isSelected?"bg-mauve-taupe":"bg-verdigris";return Object(j.jsx)("div",{className:"".concat(a," pa2 dib pointer"),onClick:n,children:Object(j.jsx)("div",{className:"flex items-center justify-center",children:t.getCustomizationEffect()})})},ye=function e(t,n){Object(u.a)(this,e),this.name=t.name,this.filter=t,this.choice=n},ke=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(g.craftingType),r=Object(o.a)(c,2),l=r[0],u=r[1],m=Object(i.useState)(null),d=Object(o.a)(m,2),w=d[0],f=d[1],p=Object(i.useState)(null),x=Object(o.a)(p,2),C=x[0],y=x[1],k=Object(i.useState)(null),N=Object(o.a)(k,2),S=N[0],z=N[1],M=Object(i.useState)(null),H=Object(o.a)(M,2),B=H[0],R=H[1],W=function(){y(null),z(null),R(null)},E=function(){var e=w.getCraftingRundown(),t=e.rawMaterials,n=e.crafts;z(t),R(n)};return Object(j.jsxs)("div",{className:"mv3",children:[n.map((function(e,t){return Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(h,{name:e.name,choice:e.choice,onStepCanceled:(i=t,function(){a(n.slice(0,i)),u(n[i].filter),f(null),W()})})},e.filter.id);var i})),l?Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(b,{name:l.name,options:l.optionIds.map((function(e){return v[e]})),onStepCompleted:function(e){a([].concat(Object(s.a)(n),[new ye(l,e)])),u(g[e.nextFilterId]),e.nextFilterId||f(new we[e.id])}})}):null,w&&!C?Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(b,{name:"rarity",options:w.rarities.map((function(e){return new O(e,e,null)})),onStepCompleted:function(e){y(e)}})}):null,C?Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(h,{name:"rarity",choice:C,onStepCanceled:W})}):null,Object(j.jsx)(ve,{active:!!C,className:"mb3",item:w,onItemCustomized:function(){E()}}),S?Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(fe,{rawMaterials:S})}):null,B?Object(j.jsx)("div",{className:"mb3",children:Object(j.jsx)(Oe,{crafts:B})}):null]})},Ne=n.p+"static/media/logo.8e1908b1.png",Se=function(e){var t=e.className;return Object(j.jsxs)("div",{className:t+" flex items-center bg-mauve-taupe",children:[Object(j.jsx)("img",{src:Ne,alt:"Crowcraft logo",className:"h-100"}),Object(j.jsx)("div",{className:"pl3",children:"Crowcraft"})]})},ze=function(e){var t=e.className,n=e.children;return Object(j.jsx)("div",{className:t,children:n})},Me=function(e){var t=e.className;return Object(j.jsxs)("div",{className:t+" flex flex-column items-center justify-center f5 bg-bittersweet light-yellow",children:[Object(j.jsx)("div",{children:"Crowcraft - Made by Guike for Valeria"}),Object(j.jsx)("div",{children:"With the contribution of Bluezinhaaa, Shilana, Upem and BeardslayTTV"})]})},He=function(e){var t=e.children;return Object(j.jsxs)("div",{className:"bg-charcoal peach-puff",children:[Object(j.jsx)(Se,{className:"h3 nmb5 ph7"}),Object(j.jsx)(ze,{className:"pv5 ph7 min-vh-100",children:t}),Object(j.jsx)(Me,{className:"h3 nmt5 ph7"})]})},Be=function(){return Object(j.jsx)(He,{children:Object(j.jsx)(ke,{})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Be,{})}),document.getElementById("root")),Re()}},[[22,1,2]]]);
//# sourceMappingURL=main.75d62527.chunk.js.map