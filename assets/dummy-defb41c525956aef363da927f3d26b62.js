define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/ember-tether",["exports","ember-tether/components/ember-tether"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/example-component/component",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({classNames:["example-component"],didInsertElement:function(){var e=this;t["default"].run.schedule("afterRender",function(){e.isDestroying||e.isDestroyed||e.sendAction("registerComponentTarget",e)})}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";var a=t["default"].computed,n=t["default"].get,r=t["default"].set,i=t["default"].observer,l=t["default"].run;e["default"]=t["default"].Controller.extend({exampleTarget:1,exampleTargetSelector:a("exampleTarget",function(){return"#tether-target-"+n(this,"exampleTarget")}),attachmentConfigurations:[{targetAttachment:"top left",attachment:"top right"},{targetAttachment:"middle left",attachment:"top right"},{targetAttachment:"bottom left",attachment:"top right"},{targetAttachment:"bottom left",attachment:"top center"},{targetAttachment:"bottom middle",attachment:"top center"},{targetAttachment:"bottom right",attachment:"top center"},{targetAttachment:"bottom right",attachment:"top left"},{targetAttachment:"middle right",attachment:"top left"},{targetAttachment:"top right",attachment:"top left"},{targetAttachment:"top right",attachment:"bottom left"},{targetAttachment:"top center",attachment:"bottom left"},{targetAttachment:"top left",attachment:"bottom left"}],attachmentConfigurationIndex:0,exampleTargetAttachment:a("attachmentConfigurationIndex",function(){var e=n(this,"attachmentConfigurationIndex"),t=n(this,"attachmentConfigurations")[e];return t.targetAttachment}),exampleAttachment:a("attachmentConfigurationIndex",function(){var e=n(this,"attachmentConfigurationIndex"),t=n(this,"attachmentConfigurations")[e];return t.attachment}),exampleOffset:null,exampleConstraintsOn:a("exampleConstraints",function(){return n(this,"exampleConstraints")?"on":"off"}),exampleConstraints:null,isShowingTargetWithin:!0,computedTargetWithin:a("isShowingTargetWithin",function(){return n(this,"isShowingTargetWithin")?"#tether-target-2 .within":void 0}),exampleTargetWithin:"#tether-target-2 .within",computedTargetWithinDidChange:i("isShowingTargetWithin",function(){var e=this;l.next(function(){r(e,"exampleTargetWithin",n(e,"computedTargetWithin"))})}),actions:{registerComponentTarget:function(e){this.set("exampleTargetComponent",e)},switchTether:function(){var e=n(this,"exampleTarget"),t=7===e?1:e+1;r(this,"exampleTarget",t)},rotateTether:function(){var e=n(this,"attachmentConfigurations").length,t=n(this,"attachmentConfigurationIndex"),a=t===e-1?0:t+1;r(this,"attachmentConfigurationIndex",a)},toggleOffset:function(){t["default"].isNone(n(this,"exampleOffset"))?r(this,"exampleOffset","0 -20px"):r(this,"exampleOffset",null)},toggleConstraints:function(){t["default"].isNone(n(this,"exampleConstraints"))?r(this,"exampleConstraints",[{to:"scrollParent",attachment:"together",pin:!0}]):r(this,"exampleConstraints",null)},toggleTargetWithin:function(){this.toggleProperty("isShowingTargetWithin")}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var l=n(i.toString());a["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:44,column:4},end:{line:46,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","within"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:54,column:2},end:{line:62,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    A tethered thing\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:64,column:2},end:{line:72,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    Another tethered thing\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:74,column:2},end:{line:83,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    A third tethered thing\n    Target in DOM: ");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","highlight");var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Toggle Target");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[1]),0,0),r[1]=e.createElementMorph(n),r},statements:[["content","isShowingTargetWithin"],["element","action",["toggleTargetWithin"],[]]],locals:[],templates:[]}}(),r=function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:85,column:2},end:{line:92,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    Component\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:94,column:6}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var n=e.createTextNode("Ember Tether");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n  Ember Tether is throwing an 80s party, in honor of what was arguably\n  tetherball's greatest decade. Scroll, observe the orange things\n  relentlessly clinging to the green things, and above all\n  enjoy the hypercolor.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("Switch Tether");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  Switch the target for 'A tethered thing'.\n  Target is square ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("Rotate Tether");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  Rotate 'Another tethered thing' around square 3.\n  attachment: ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  targetAttachment: ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("Toggle Offset");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  Add spacing between 'A tethered thing' and its target square.\n  Offset is ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("Toggle Constraints");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  Trap 'Another tethered thing' within the box. Scroll to see it pin.\n  Constraints are ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","demo");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("Toggle Target");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  Remove target from DOM. Watch 'A third tethered thing' behave sensibly.\n  Target in DOM: ");e.appendChild(a,n);var n=e.createElement("span");e.setAttribute(n,"class","highlight");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","scroll-box");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-1"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("\n    1\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-2"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("\n    2\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-3"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("3");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-4"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("4");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-5"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("5");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-6"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("6");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tether-target-7"),e.setAttribute(n,"class","tether-target");var r=e.createTextNode("7");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[4]),r=e.childAt(n,[1]),i=e.childAt(t,[6]),l=e.childAt(i,[1]),d=e.childAt(t,[8]),o=e.childAt(d,[1]),c=e.childAt(t,[10]),p=e.childAt(c,[1]),h=e.childAt(t,[12]),m=e.childAt(h,[1]),s=e.childAt(t,[14]),u=new Array(17);return u[0]=e.createElementMorph(r),u[1]=e.createMorphAt(e.childAt(n,[3]),0,0),u[2]=e.createElementMorph(l),u[3]=e.createMorphAt(e.childAt(i,[3]),0,0),u[4]=e.createMorphAt(e.childAt(i,[5]),0,0),u[5]=e.createElementMorph(o),u[6]=e.createMorphAt(e.childAt(d,[3]),0,0),u[7]=e.createElementMorph(p),u[8]=e.createMorphAt(e.childAt(c,[3]),0,0),u[9]=e.createElementMorph(m),u[10]=e.createMorphAt(e.childAt(h,[3]),0,0),u[11]=e.createMorphAt(e.childAt(s,[1]),1,1),u[12]=e.createMorphAt(e.childAt(s,[3]),1,1),u[13]=e.createMorphAt(s,15,15),u[14]=e.createMorphAt(s,17,17),u[15]=e.createMorphAt(s,19,19),u[16]=e.createMorphAt(s,21,21),u},statements:[["element","action",["switchTether"],[]],["content","exampleTarget"],["element","action",["rotateTether"],[]],["content","exampleAttachment"],["content","exampleTargetAttachment"],["element","action",["toggleOffset"],[]],["inline","if",[["get","exampleOffset"],["get","exampleOffset"],"null"],[]],["element","action",["toggleConstraints"],[]],["content","exampleConstraintsOn"],["element","action",["toggleTargetWithin"],[]],["content","isShowingTargetWithin"],["inline","example-component",[],["registerComponentTarget","registerComponentTarget"]],["block","if",[["get","isShowingTargetWithin"]],[],0,null],["block","ember-tether",[],["target",["subexpr","@mut",[["get","exampleTargetSelector"]],[]],"targetAttachment","top right","attachment","top left","class","tethered-thing","offset",["subexpr","@mut",[["get","exampleOffset"]],[]]],1,null],["block","ember-tether",[],["target","#tether-target-3","targetAttachment",["subexpr","@mut",[["get","exampleTargetAttachment"]],[]],"attachment",["subexpr","@mut",[["get","exampleAttachment"]],[]],"class","another-tethered-thing","constraints",["subexpr","@mut",[["get","exampleConstraints"]],[]]],2,null],["block","ember-tether",[],["target",["subexpr","@mut",[["get","exampleTargetWithin"]],[]],"targetAttachment","top right","attachment","top left","class","third-tethered-thing"],3,null],["block","ember-tether",[],["target",["subexpr","@mut",[["get","exampleTargetComponent"]],[]],"targetAttachment","top right","attachment","top left","class","component-tether"],4,null]],locals:[],templates:[e,t,a,n,r]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-tether",version:"v0.2.0"});