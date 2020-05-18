(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5dfa":function(t,e,a){"use strict";var o=a("8a43"),s=a.n(o);s.a},"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR fFf"}},[t.$q.platform.is.desktop?a("q-drawer",{attrs:{"show-if-above":"",side:"left",bordered:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("SudokuControls")],1):t._e(),a("q-page-container",[a("router-view")],1)],1)},s=[],i=a("d08d"),n={components:{SudokuControls:i["a"]},data:function(){return{left:!0}}},r=n,l=a("2877"),c=a("eebe"),d=a.n(c),u=a("4d5a"),f=a("9404"),h=a("09e3"),p=Object(l["a"])(r,o,s,!1,null,null,null);e["default"]=p.exports;d()(p,"components",{QLayout:u["a"],QDrawer:f["a"],QPageContainer:h["a"]})},"8a43":function(t,e,a){},d08d:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-px-md q-pt-md full-height full-width column"},[a("div",{staticClass:"col q-gutter-y-md"},[a("q-btn-toggle",{staticClass:"q-ma-none q-mt-md",attrs:{spread:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Locked",value:!0},{label:"Unlocked",value:!1}]},model:{value:t.isLocked,callback:function(e){t.isLocked=e},expression:"isLocked"}}),a("div",{staticClass:"row q-gutter-x-md"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"red","icon-right":"restore",label:"Reset"},on:{click:t.reset}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"casino",label:"Solve"},on:{click:t.solve}})],1)]),a("q-item",{staticClass:"q-my-none"},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"red-"+t.difficulty,name:"extension"}})],1),a("q-item-section",[a("q-slider",{attrs:{min:1,max:10,step:1,snap:"",label:"",color:"red"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1)],1),a("q-badge",{staticClass:"q-my-none",attrs:{color:"red"}},[t._v("Difficulty: "+t._s(t.difficulty))]),a("q-btn",{staticClass:"full-width q-mt-sm",attrs:{color:"primary","icon-right":"fas fa-random",label:"Generate"},on:{click:t.generate}}),a("q-dialog",{attrs:{value:t.hasError,"transition-show":"scale","transition-hide":"scale"},on:{hide:t.acknowledgeError}},[a("q-card",{staticClass:"bg-red text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Sudoku error")])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-red",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),a("q-dialog",{attrs:{value:t.isWorking,persistent:"","transition-show":"scale","transition-hide":"scale"}},[a("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("div",{staticClass:"loading"},[t._v("Calculating")])])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.workingMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-primary",attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:t.stop}})],1)],1)],1)],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-caption author col-1 desktop-only"},[t._v("\n    Made with ❤️ and Quasar by "),a("a",{attrs:{href:"https://github.com/lubosmato",target:"_blank"}},[t._v("lubosmato")])])}],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),n=a.n(i),r=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d=Object(r["a"])("sudoku"),u=d.mapMutations,f=d.mapState,h=["😄","😃","😀","😊","😉","😍","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👍","👌","👊","✊","✌","👋","✋","👈","🙏","☝","👏","💪"];function p(){return h[Math.floor(Math.random()*h.length)]}var m=["Sudoku is based on an early mathematical analysis concept designed in 1782","the very first Sudoku World Championships were hosted in 2006 in Italy","several celebrities have admitted to being addicted to Sudoku","the Guinness World Record for the fastest time to complete a Sudoku is less than 1 minute and a half","in the year following Sudoku going viral, pencil sales are said to have increased by around 700%","the name “Sudoku” can be broken down into “Su” which means “Number” and “Doku” which means “Single/Only.”","the New York Time crossword editor predicted that the Sudoku mania wouldn’t last; he was wrong","while a Sudoku puzzle can have more than one solution, a well-formed puzzle has just one unique solution","JavaScript is not very fast language?"];function g(){return m[Math.floor(Math.random()*m.length)]}var b={name:"SudokuControls",data:function(){return{isLocked:!1,difficulty:1,workingMessage:""}},computed:c(c({},f(["errorMessage","isWorking"])),{},{hasError:function(){return""!==this.errorMessage}}),watch:{isWorking:function(t){if(t){var e=p(),a=g();this.workingMessage="Did you know that ".concat(a,"? ").concat(e)}},isLocked:function(t){t?this.lockFilled():this.unlockAll()}},methods:c(c({},u(["reset","lockFilled","unlockAll","acknowledgeError"])),{},{solve:function(){this.$store.dispatch("sudoku/solve")},generate:function(){this.$store.dispatch("sudoku/generate",this.difficulty)},stop:function(){this.$store.dispatch("sudoku/stop")}})},v=b,k=(a("5dfa"),a("2877")),w=a("eebe"),y=a.n(w),q=a("6a67"),C=a("9c40"),S=a("66e5"),O=a("4074"),x=a("0016"),_=a("c1d0"),j=a("58a8"),Q=a("24e8"),M=a("f09f"),P=a("a370"),D=a("4b7e"),E=a("7f67"),L=Object(k["a"])(v,o,s,!1,null,"f2925152",null);e["a"]=L.exports;y()(L,"components",{QBtnToggle:q["a"],QBtn:C["a"],QItem:S["a"],QItemSection:O["a"],QIcon:x["a"],QSlider:_["a"],QBadge:j["a"],QDialog:Q["a"],QCard:M["a"],QCardSection:P["a"],QCardActions:D["a"]}),y()(L,"directives",{ClosePopup:E["a"]})}}]);