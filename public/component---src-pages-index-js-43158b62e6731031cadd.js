(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+QRC":function(M,N,j){"use strict";j("pIFo");var e=j("E9nw"),D={"text/plain":"Text","text/html":"Url",default:"Text"};M.exports=function(M,N){var j,I,g,u,t,i,n=!1;N||(N={}),j=N.debug||!1;try{if(g=e(),u=document.createRange(),t=document.getSelection(),(i=document.createElement("span")).textContent=M,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(e){if(e.stopPropagation(),N.format)if(e.preventDefault(),void 0===e.clipboardData){j&&console.warn("unable to use e.clipboardData"),j&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var I=D[N.format]||D.default;window.clipboardData.setData(I,M)}else e.clipboardData.clearData(),e.clipboardData.setData(N.format,M);N.onCopy&&(e.preventDefault(),N.onCopy(e.clipboardData))})),document.body.appendChild(i),u.selectNodeContents(i),t.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");n=!0}catch(T){j&&console.error("unable to copy using execCommand: ",T),j&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(N.format||"text",M),N.onCopy&&N.onCopy(window.clipboardData),n=!0}catch(T){j&&console.error("unable to copy using clipboardData: ",T),j&&console.error("falling back to prompt"),I=function(M){var N=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return M.replace(/#{\s*key\s*}/g,N)}("message"in N?N.message:"Copy to clipboard: #{key}, Enter"),window.prompt(I,M)}}finally{t&&("function"==typeof t.removeRange?t.removeRange(u):t.removeAllRanges()),i&&document.body.removeChild(i),g()}return n}},E9nw:function(M,N,j){j("8+KV"),M.exports=function(){var M=document.getSelection();if(!M.rangeCount)return function(){};for(var N=document.activeElement,j=[],e=0;e<M.rangeCount;e++)j.push(M.getRangeAt(e));switch(N.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":N.blur();break;default:N=null}return M.removeAllRanges(),function(){"Caret"===M.type&&M.removeAllRanges(),M.rangeCount||j.forEach((function(N){M.addRange(N)})),N&&N.focus()}}},P5Jw:function(M,N,j){"use strict";var e=j("rHrb").CopyToClipboard;e.CopyToClipboard=e,M.exports=e},RXBc:function(M,N,j){"use strict";j.r(N);var e=j("q1tI"),D=j.n(e),I=j("Bl7J"),g=j("vrFN"),u=j("IP2g"),t={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},i=j("D4Zw"),n=j("P5Jw"),T=j("vOnD"),o=j("TYdL"),c=j.n(o),r=j("cfi6"),y=j.n(r);function A(){var M=z(["\n  text-transform: none;\n"]);return A=function(){return M},M}function a(){var M=z([""]);return a=function(){return M},M}function z(M,N){return N||(N=M.slice(0)),M.raw=N,M}var O=Object(T.default)(i.Flex)(a());O.defaultProps={background:"#242424",flexDirection:["column","row"],justifyContent:"center",py:[2,3,4,5]};var L=Object(T.default)(i.Button)(A());L.defaultProps={bg:"black.dark",bgActiveColor:"black.light",bgHoverColor:"black",border:"1px solid white",color:"white",fontFamily:"monospace",lg:!0,outline:!0};var l=function(){var M=Object(e.useState)(!1),N=M[0],j=M[1];return D.a.createElement(O,null,D.a.createElement(i.Box,{maxWidth:[187.12,"100%",187.12],mx:["auto",2,3,4],p:[null,3,0]},D.a.createElement(c.a,null)),D.a.createElement(i.Flex,{alignItems:["center","flex-start"],flexDirection:"column",justifyContent:"center",maxWidth:500,mx:["auto",2,3,4]},D.a.createElement(i.Box,{maxWidth:136,my:[1,2,3]},D.a.createElement(y.a,null)),D.a.createElement(i.Paragraph,{color:"white",lead:!0,mx:[3,0]},"The responsive react UI framework built upon styled components, styled system, and open source components."),D.a.createElement(n.CopyToClipboard,{onCopy:function(){return j(!0),void setTimeout((function(){return j(!1)}),3e3)},text:"npm i grape-ui-react"},D.a.createElement(L,null,D.a.createElement(i.Flex,{flexDirection:"column"},D.a.createElement(i.Text,{fontFamily:"monospace"},D.a.createElement(i.Text,{color:"pink",fontFamily:"monospace"},"npm i")," grape-ui-react"),D.a.createElement(i.Text,{fontFamily:"monospace",sm:!0},D.a.createElement(u.FontAwesomeIcon,{icon:t}),N?" copied!":" copy to clipboard"))))))},E=j("Wbzz"),x=j("MGXT");function Q(){var M=function(M,N){N||(N=M.slice(0));return M.raw=N,M}([""]);return Q=function(){return M},M}var C=Object(T.default)(i.Box)(Q());C.defaultProps={boxSizing:"border-box",maxWidth:480,mb:[2,0],mx:"auto",width:1};var S=function(){return D.a.createElement(i.Box,{py:[2,3,4,5]},D.a.createElement(i.Flex,{alignItems:"flex-start",flexDirection:["column","row"],maxWidth:960,mx:"auto",style:{boxSizing:"border-box"},width:[.95,null,null,1]},D.a.createElement(C,null,D.a.createElement(i.Header.h2,null,"Installation"),D.a.createElement(i.Paragraph,null,"Install grape-ui-react via npm"),D.a.createElement(i.CodeBlock,{codeString:"npm i grape-ui-react",language:"bash",my:"initial",mb:4}),D.a.createElement(i.Header.h2,null,"Usage"),D.a.createElement(i.CodeBlock,{codeString:"\nimport React from 'react';\nimport { Paragraph } from 'grape-ui-react';\n\nconst App = () => {\n  return (\n    <div className=\"App\">\n      <Paragraph>\n        grape-ui is Groovy\n      </Paragraph>\n    </div>\n  )\n};\n\nexport default App;\n",my:"initial",mb:4}),D.a.createElement(E.Link,{to:x.a.docsPage},D.a.createElement(i.Button,{color:"brandPrimary",width:1},"Learn More")))))};N.default=function(){return D.a.createElement(I.a,null,D.a.createElement(g.a,{title:"grape-ui: react framework built on the best out there",useTitleTemplate:!1}),D.a.createElement(l,null),D.a.createElement(S,null))}},TYdL:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg4IiBoZWlnaHQ9IjI1MyIgdmlld0JveD0iMCAwIDE4OCAyNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8Zz4NCjxwYXRoIGQ9Ik0xMzYuNjcxIDEyOS43NUMxNjQuMTg5IDEyOS43NSAxODYuNDk2IDEwNy40NDIgMTg2LjQ5NiA3OS45MjQ4QzE4Ni40OTYgNTIuNDA3MiAxNjQuMTg5IDMwLjA5OTggMTM2LjY3MSAzMC4wOTk4QzEwOS4xNTMgMzAuMDk5OCA4Ni44NDYyIDUyLjQwNzIgODYuODQ2MiA3OS45MjQ4Qzg2Ljg0NjIgMTA3LjQ0MiAxMDkuMTUzIDEyOS43NSAxMzYuNjcxIDEyOS43NVoiIGZpbGw9IiM4NDBCNTUiLz4NCjxwYXRoIGQ9Ik0xMzYuNjkzIDEwNC45MjhDMTUwLjQ1MiAxMDQuOTI4IDE2MS42MDYgOTMuNzc0MSAxNjEuNjA2IDgwLjAxNTJDMTYxLjYwNiA2Ni4yNTY5IDE1MC40NTIgNTUuMTAyOSAxMzYuNjkzIDU1LjEwMjlDMTIyLjkzNCA1NS4xMDI5IDExMS43ODEgNjYuMjU2OSAxMTEuNzgxIDgwLjAxNTJDMTExLjc4MSA5My43NzQxIDEyMi45MzQgMTA0LjkyOCAxMzYuNjkzIDEwNC45MjhaIiBmaWxsPSIjQ0IyN0E4Ii8+DQo8cGF0aCBkPSJNMTM2LjY3MSAxOTEuMjAxQzE2NC4xODkgMTkxLjIwMSAxODYuNDk2IDE2OC44OTMgMTg2LjQ5NiAxNDEuMzc2QzE4Ni40OTYgMTEzLjg1OCAxNjQuMTg5IDkxLjU1MDggMTM2LjY3MSA5MS41NTA4QzEwOS4xNTMgOTEuNTUwOCA4Ni44NDYyIDExMy44NTggODYuODQ2MiAxNDEuMzc2Qzg2Ljg0NjIgMTY4Ljg5MyAxMDkuMTUzIDE5MS4yMDEgMTM2LjY3MSAxOTEuMjAxWiIgZmlsbD0iIzg0MEI1NSIvPg0KPHBhdGggZD0iTTEzNi42OTMgMTY2LjM3OEMxNTAuNDUyIDE2Ni4zNzggMTYxLjYwNiAxNTUuMjI1IDE2MS42MDYgMTQxLjQ2NkMxNjEuNjA2IDEyNy43MDcgMTUwLjQ1MiAxMTYuNTU0IDEzNi42OTMgMTE2LjU1NEMxMjIuOTM0IDExNi41NTQgMTExLjc4MSAxMjcuNzA3IDExMS43ODEgMTQxLjQ2NkMxMTEuNzgxIDE1NS4yMjUgMTIyLjkzNCAxNjYuMzc4IDEzNi42OTMgMTY2LjM3OFoiIGZpbGw9IiNDQjI3QTgiLz4NCjxwYXRoIGQ9Ik03Mi4xNDE3IDAuODk5NzY3QzY5LjU3NTEgMS45MzY3IDY3LjgxNDYgNC4wODExMiA2Ny4xMjM3IDYuNTA5NjZDNjIuNjQgNi4wNTIzMiA1Ny45NzQ4IDYuNjIzNjUgNTMuNDU3OCA4LjQ0ODYyQzM4Ljg4MDIgMTQuMzM4NCAzMS44NDQyIDMwLjkxNDEgMzcuNzMzOSA0NS40OTE4QzQzLjYyMzcgNjAuMDY5NSA2MC4xOTkyIDY3LjEwNTQgNzQuNzc2OCA2MS4yMTU1Qzc4LjU3NTcgNTkuNjgwOSA4MS45Mzk0IDU3LjM2NjggODQuNjQzOCA1NC42MDIxQzg2LjA4MjEgNjAuMjMwNiA4My4xMjE0IDY2LjIwMzUgNzcuNTc4MSA2OC40NDM1QzczLjI2NiA3MC4xODU3IDcxLjE4NjEgNzUuMDg2MiA3Mi45Mjc4IDc5LjM5NzdDNzQuNjcgODMuNzA5MyA3OS41NzA1IDg1Ljc4OTcgODMuODgyNiA4NC4wNDc1Qzk4LjQ2MDMgNzguMTU3NyAxMDUuNDk2IDYxLjU4MiA5OS42MDYyIDQ3LjAwNDVMODIuOTMyNiA1LjczNTI3QzgxLjE5MDQgMS40MjM1NSA3Ni4yODk5IC0wLjY1NjY2NCA3MS45Nzc4IDEuMDg1MzhMNzIuMTQxNyAwLjg5OTc2N1pNNjguNDUyOSA0NS44NTgyQzYyLjQ5ODkgNDguMjYzOSA1NS42ODI4IDQ1LjI4NTcgNTMuMjc3IDM5LjMzMTVDNTAuODcxNCAzMy4zNzcyIDUzLjc0NjkgMjYuNjAyNyA1OS43MDA5IDI0LjE5NzFDNjUuNjU1NiAyMS43OTE0IDcyLjQzMDEgMjQuNjY2OSA3NC44MzU1IDMwLjYyMTJDNzcuMjQxIDM2LjU3NTUgNzQuNDA3IDQzLjQ1MjYgNjguNDUyOSA0NS44NTgyWiIgZmlsbD0iIzI3Q0I0QSIvPg0KPHBhdGggZD0iTTUwLjMwOCAxNjYuMjg4Qzc3LjgyNTcgMTY2LjI4OCAxMDAuMTMzIDE0My45OCAxMDAuMTMzIDExNi40NjNDMTAwLjEzMyA4OC45NDU1IDc3LjgyNTcgNjYuNjM4MyA1MC4zMDggNjYuNjM4M0MyMi43OTA1IDY2LjYzODMgMC40ODMxMjQgODguOTQ1NSAwLjQ4MzEyNCAxMTYuNDYzQzAuNDgzMTI0IDE0My45OCAyMi43OTA1IDE2Ni4yODggNTAuMzA4IDE2Ni4yODhaIiBmaWxsPSIjQ0IyN0E4Ii8+DQo8cGF0aCBkPSJNNTAuMzMwNCAxNDEuNDY2QzY0LjA4OTIgMTQxLjQ2NiA3NS4yNDI4IDEzMC4zMTIgNzUuMjQyOCAxMTYuNTU0Qzc1LjI0MjggMTAyLjc5NSA2NC4wODkyIDkxLjY0MTEgNTAuMzMwNCA5MS42NDExQzM2LjU3MTYgOTEuNjQxMSAyNS40MTc5IDEwMi43OTUgMjUuNDE3OSAxMTYuNTU0QzI1LjQxNzkgMTMwLjMxMiAzNi41NzE2IDE0MS40NjYgNTAuMzMwNCAxNDEuNDY2WiIgZmlsbD0iIzg0MEI1NSIvPg0KPHBhdGggZD0iTTk0LjA0MzEgMjA5LjQ3QzEyMS41NjEgMjA5LjQ3IDE0My44NjggMTg3LjE2MiAxNDMuODY4IDE1OS42NDVDMTQzLjg2OCAxMzIuMTI3IDEyMS41NjEgMTA5LjgyIDk0LjA0MzEgMTA5LjgyQzY2LjUyNTMgMTA5LjgyIDQ0LjIxODIgMTMyLjEyNyA0NC4yMTgyIDE1OS42NDVDNDQuMjE4MiAxODcuMTYyIDY2LjUyNTMgMjA5LjQ3IDk0LjA0MzEgMjA5LjQ3WiIgZmlsbD0iI0NCMjdBOCIvPg0KPHBhdGggZD0iTTk0LjA2NTQgMTg0LjY0N0MxMDcuODI0IDE4NC42NDcgMTE4Ljk3OCAxNzMuNDk0IDExOC45NzggMTU5LjczNUMxMTguOTc4IDE0NS45NzcgMTA3LjgyNCAxMzQuODIzIDk0LjA2NTQgMTM0LjgyM0M4MC4zMDY1IDEzNC44MjMgNjkuMTUzIDE0NS45NzcgNjkuMTUzIDE1OS43MzVDNjkuMTUzIDE3My40OTQgODAuMzA2NSAxODQuNjQ3IDk0LjA2NTQgMTg0LjY0N1oiIGZpbGw9IiM4NDBCNTUiLz4NCjxwYXRoIGQ9Ik0xMzcuMjI1IDI1Mi42NTFDMTY0Ljc0MiAyNTIuNjUxIDE4Ny4wNSAyMzAuMzQ0IDE4Ny4wNSAyMDIuODI2QzE4Ny4wNSAxNzUuMzA5IDE2NC43NDIgMTUzLjAwMiAxMzcuMjI1IDE1My4wMDJDMTA5LjcwNyAxNTMuMDAyIDg3LjM5OTggMTc1LjMwOSA4Ny4zOTk4IDIwMi44MjZDODcuMzk5OCAyMzAuMzQ0IDEwOS43MDcgMjUyLjY1MSAxMzcuMjI1IDI1Mi42NTFaIiBmaWxsPSIjQ0IyN0E4Ii8+DQo8cGF0aCBkPSJNMTM3LjI0NyAyMjcuODI5QzE1MS4wMDYgMjI3LjgyOSAxNjIuMTU5IDIxNi42NzYgMTYyLjE1OSAyMDIuOTE3QzE2Mi4xNTkgMTg5LjE1OCAxNTEuMDA2IDE3OC4wMDQgMTM3LjI0NyAxNzguMDA0QzEyMy40ODggMTc4LjAwNCAxMTIuMzM1IDE4OS4xNTggMTEyLjMzNSAyMDIuOTE3QzExMi4zMzUgMjE2LjY3NiAxMjMuNDg4IDIyNy44MjkgMTM3LjI0NyAyMjcuODI5WiIgZmlsbD0iIzg0MEI1NSIvPg0KPHBhdGggZD0iTTY0LjM3ODIgNjMuMzk0MkM3OS44NzkzIDYzLjM5NDIgOTIuNTAxNiA1MC43NzIgOTIuNTAxNiAzNS4yNzA5QzkyLjUwMTYgMTkuNzY5OCA3OS44NzkzIDcuMTQ3NDkgNjQuMzc4MiA3LjE0NzQ5QzQ4Ljg3NzMgNy4xNDc0OSAzNi4yNTUgMTkuNzY5OCAzNi4yNTUgMzUuMjcwOUMzNi4yNTUgNTAuNzcyIDQ4Ljg3NzMgNjMuMzk0MiA2NC4zNzgyIDYzLjM5NDJaTTY0LjM3ODIgMjMuNjQ1MUM3MC44MDAxIDIzLjY0NTEgNzYuMDA0IDI4Ljg0OSA3Ni4wMDQgMzUuMjcwOUM3Ni4wMDQgNDEuNjkyOCA3MC44MDAxIDQ2Ljg5NjcgNjQuMzc4MiA0Ni44OTY3QzU3Ljk1NjMgNDYuODk2NyA1Mi43NTI2IDQxLjY5MjggNTIuNzUyNiAzNS4yNzA5QzUyLjc1MjYgMjguODQ5IDU3Ljk1NjMgMjMuNjQ1MSA2NC4zNzgyIDIzLjY0NTFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+DQo8bWFzayBpZD0ibWFzazAiICBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2NCIgeT0iMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjU1Ij4NCjxwYXRoIGQ9Ik02NC42MzUzIDAuMTk2ODM4TDgwLjk2NjkgMC4xOTY4NDRMOTUuMzYwNyAzNy4yODg3TDg1LjExODkgNTQuNzI3NUw3NS40MzA3IDM1LjYyOEw2NC42MzUzIDAuMTk2ODM4WiIgZmlsbD0iI0M0QzRDNCIvPg0KPC9tYXNrPg0KPGcgbWFzaz0idXJsKCNtYXNrMCkiPg0KPHBhdGggZD0iTTEwMS43MTMgNzUuMTgzM0MxMDUuOTIyIDczLjQ4MjYgMTA3Ljk0MSA2OC43MjYgMTA2LjI0IDY0LjUxNjlMODIuMzQ5OSA1LjM4NDk4QzgwLjY0OTIgMS4xNzU5NCA3NS44OTI2IC0wLjg0MzA4NiA3MS42ODM1IDAuODU3NDc4QzY3LjQ3NDQgMi41NTgwNSA2NS40NTU0IDcuMzE0NTUgNjcuMTU2IDExLjUyMzZMOTEuMDQ3MSA3MC42NTU5QzkyLjc0NzggNzQuODY0NCA5Ny41MDM5IDc2Ljg4MzUgMTAxLjcxMyA3NS4xODMzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPg0KPC9nPg0KPC9nPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NC40ODg5IiB5MT0iLTIxLjg2MTciIHgyPSI2NC40ODg5IiB5Mj0iOTMuMjg5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzI3Q0I0QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjdDOTQ5Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNzAuMTM1IiB5MT0iLTQuMDEwMDMiIHgyPSI4NC44NDIyIiB5Mj0iNDIuMjcxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzQ3REM2NyIvPg0KPHN0b3Agb2Zmc2V0PSIwLjU1MjA4MyIgc3RvcC1jb2xvcj0iIzI3Q0I0QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KPHJlY3Qgd2lkdGg9IjE4Ny4xMiIgaGVpZ2h0PSIyNTMiIGZpbGw9IndoaXRlIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo="},cfi6:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjM5IiB2aWV3Qm94PSIwIDAgMTMzIDM5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTE3LjggOS41NkMxNi44IDkuNTYgMTUuOTIgMTAuMDQgMTUuMzYgMTAuNzZDMTMuOTIgMTAgMTIuMjggOS41NiAxMC41MiA5LjU2QzQuODQgOS41NiAwLjI0IDE0LjE2IDAuMjQgMTkuODRDMC4yNCAyNS41MiA0Ljg0IDMwLjEyIDEwLjUyIDMwLjEyQzEyIDMwLjEyIDEzLjQ0IDI5LjggMTQuNzIgMjkuMjRDMTQuNDQgMzEuMzIgMTIuNjQgMzIuOTIgMTAuNDggMzIuOTJDOC44IDMyLjkyIDcuNDQgMzQuMjggNy40NCAzNS45NkM3LjQ0IDM3LjY0IDguOCAzOSAxMC40OCAzOUMxNi4xNiAzOSAyMC43NiAzNC40IDIwLjc2IDI4LjcyTDIwLjc2IDEyLjY0QzIwLjc2IDEwLjk2IDE5LjQgOS42IDE3LjcyIDkuNkwxNy44IDkuNTZaTTEwLjQ4IDI0LjEyQzguMTYgMjQuMTIgNi4yOCAyMi4yIDYuMjggMTkuODhDNi4yOCAxNy41NiA4LjE2IDE1LjY4IDEwLjQ4IDE1LjY4QzEyLjggMTUuNjggMTQuNjggMTcuNTYgMTQuNjggMTkuODhDMTQuNjggMjIuMiAxMi44IDI0LjEyIDEwLjQ4IDI0LjEyWk0zMy4zNjY5IDkuNTZDMzEuNjQ2OSA5LjU2IDMwLjAwNjkgMTAgMjguNTY2OSAxMC43NkMyOC4wMDY5IDEwLjA0IDI3LjEyNjkgOS41NiAyNi4xNjY5IDkuNTZDMjQuNTI2OSA5LjU2IDIzLjIwNjkgMTAuODggMjMuMjA2OSAxMi41MkwyMy4yMDY5IDI2Ljg4QzIzLjIwNjkgMjguNTIgMjQuNTI2OSAyOS44NCAyNi4xNjY5IDI5Ljg0QzI3LjgwNjkgMjkuODQgMjkuMTI2OSAyOC41MiAyOS4xMjY5IDI2Ljg4TDI5LjEyNjkgMTkuNjhDMjkuMTI2OSAxNy4zNiAzMS4wMDY5IDE1LjQ4IDMzLjMyNjkgMTUuNDhDMzQuOTY2OSAxNS40OCAzNi4yODY5IDE0LjE2IDM2LjI4NjkgMTIuNTJDMzYuMjg2OSAxMC44OCAzNC45NjY5IDkuNTYgMzMuMzI2OSA5LjU2TDMzLjM2NjkgOS41NlpNNTMuNzk2NiA5LjcyQzUyLjgzNjYgOS43MiA1MS45NTY2IDEwLjIgNTEuMzk2NiAxMC45MkM0OS45NTY2IDEwLjE2IDQ4LjMxNjYgOS43MiA0Ni41OTY2IDkuNzJDNDAuOTk2NiA5LjcyIDM2LjQzNjYgMTQuMjggMzYuNDM2NiAxOS44OEMzNi40MzY2IDI1LjQ4IDQwLjk5NjYgMzAuMDQgNDYuNTk2NiAzMC4wNEM0OC4zMTY2IDMwLjA0IDQ5Ljk1NjYgMjkuNiA1MS4zOTY2IDI4Ljg0QzUxLjk1NjYgMjkuNTYgNTIuODM2NiAzMC4wNCA1My43OTY2IDMwLjA0QzU1LjQzNjYgMzAuMDQgNTYuNzU2NiAyOC43MiA1Ni43NTY2IDI3LjA4TDU2Ljc1NjYgMTIuNzZDNTYuNzU2NiAxMS4xMiA1NS40MzY2IDkuOCA1My43OTY2IDkuOEw1My43OTY2IDkuNzJaTTQ2LjYzNjYgMjQuMTJDNDQuMzE2NiAyNC4xMiA0Mi40MzY2IDIyLjI0IDQyLjQzNjYgMTkuOTJDNDIuNDM2NiAxNy42IDQ0LjMxNjYgMTUuNzIgNDYuNjM2NiAxNS43MkM0OC45NTY2IDE1LjcyIDUwLjgzNjYgMTcuNiA1MC44MzY2IDE5LjkyQzUwLjgzNjYgMjIuMjQgNDguOTU2NiAyNC4xMiA0Ni42MzY2IDI0LjEyWk02OS44MTE5IDkuNTZDNjguMDUxOSA5LjU2IDY2LjQxMTkgMTAgNjQuOTcxOSAxMC43NkM2NC40MTE5IDEwLjA0IDYzLjUzMTkgOS41NiA2Mi41MzE5IDkuNTZDNjAuODUxOSA5LjU2IDU5LjQ5MTkgMTAuOTIgNTkuNDkxOSAxMi42TDU5LjQ5MTkgMzUuOTJDNTkuNDkxOSAzNy42IDYwLjg1MTkgMzguOTYgNjIuNTMxOSAzOC45NkM2NC4yMTE5IDM4Ljk2IDY1LjU3MTkgMzcuNiA2NS41NzE5IDM1LjkyTDY1LjU3MTkgMjkuMkM2Ni44NTE5IDI5LjggNjguMjkxOSAzMC4xMiA2OS44MTE5IDMwLjEyQzc1LjQ5MTkgMzAuMTIgODAuMDkxOSAyNS41MiA4MC4wOTE5IDE5Ljg0QzgwLjA5MTkgMTQuMTYgNzUuNDkxOSA5LjU2IDY5LjgxMTkgOS41NlpNNjkuODExOSAyNC4wOEM2Ny40OTE5IDI0LjA4IDY1LjYxMTkgMjIuMTYgNjUuNjExOSAxOS44NEM2NS42MTE5IDE3LjUyIDY3LjQ5MTkgMTUuNjQgNjkuODExOSAxNS42NEM3Mi4xMzE5IDE1LjY0IDc0LjAxMTkgMTcuNTIgNzQuMDExOSAxOS44NEM3NC4wMTE5IDIyLjE2IDcyLjEzMTkgMjQuMDggNjkuODExOSAyNC4wOFpNOTIuMDYyNSAzMEM5My43MDI1IDMwIDk1LjAyMjUgMjguNjggOTUuMDIyNSAyNy4wNEM5NS4wMjI1IDI1LjQgOTMuNzAyNSAyNC4wOCA5Mi4wNjI1IDI0LjA4QzkwLjkwMjUgMjQuMDggODkuODYyNSAyMy42IDg5LjEwMjUgMjIuODRMOTkuMTgyNSAyMi44NEM5OS45ODI1IDIyLjg0IDEwMC43NDMgMjIuNTIgMTAxLjMwMyAyMS45NkMxMDEuODYzIDIxLjQgMTAyLjE4MyAyMC42NCAxMDIuMTgzIDE5Ljg0QzEwMi4xODMgMTQuMjQgOTcuNjIyNSA5LjY4IDkyLjAyMjUgOS42OEM4Ni40MjI1IDkuNjggODEuODYyNSAxNC4yNCA4MS44NjI1IDE5Ljg0QzgxLjg2MjUgMjUuNDQgODYuNDIyNSAzMCA5Mi4wMjI1IDMwTDkyLjA2MjUgMzBaTTg5LjEwMjUgMTYuODhDODkuODYyNSAxNi4xMiA5MC45MDI1IDE1LjY0IDkyLjA2MjUgMTUuNjRDOTMuMjIyNSAxNS42NCA5NC4yNjI1IDE2LjEyIDk1LjAyMjUgMTYuODhMODkuMTAyNSAxNi44OFpNMTE0LjQ0OCAzMEMxMTkuODQ4IDMwIDEyNC4yNDggMjUuNiAxMjQuMjQ4IDIwLjJMMTI0LjI0OCAxMi41MkMxMjQuMjQ4IDEwLjkyIDEyMi45NjggOS42NCAxMjEuMzY4IDkuNjRDMTE5Ljc2OCA5LjY0IDExOC40ODggMTAuOTIgMTE4LjQ4OCAxMi41MkwxMTguNDg4IDIwLjJDMTE4LjQ4OCAyMi40NCAxMTYuNjg4IDI0LjI0IDExNC40NDggMjQuMjRDMTEyLjIwOCAyNC4yNCAxMTAuNDA4IDIyLjQ0IDExMC40MDggMjAuMkwxMTAuNDA4IDEyLjUyQzExMC40MDggMTAuOTIgMTA5LjEyOCA5LjY0IDEwNy41MjggOS42NEMxMDUuOTI4IDkuNjQgMTA0LjY0OCAxMC45MiAxMDQuNjQ4IDEyLjUyTDEwNC42NDggMjAuMkMxMDQuNjQ4IDI1LjYgMTA5LjA0OCAzMCAxMTQuNDQ4IDMwWk0xMjkuNzk4IDYuOTJDMTMwLjU5OCA2LjkyIDEzMS4zNTggNi42IDEzMS45MTggNi4wNEMxMzIuNDc4IDUuNDggMTMyLjc5OCA0LjcyIDEzMi43OTggMy45MkMxMzIuNzk4IDMuMTIgMTMyLjQ3OCAyLjM2IDEzMS45MTggMS44QzEzMC43OTggMC42Nzk5OTcgMTI4Ljc5OCAwLjY3OTk5NyAxMjcuNjc4IDEuOEMxMjcuMTE4IDIuMzYgMTI2Ljc5OCAzLjEyIDEyNi43OTggMy45MkMxMjYuNzk4IDQuNzIgMTI3LjExOCA1LjQ4IDEyNy42NzggNi4wNEMxMjguMjM4IDYuNiAxMjguOTk4IDYuOTIgMTI5Ljc5OCA2LjkyWk0xMjkuNzk4IDMwQzEzMS40MzggMzAgMTMyLjc1OCAyOC42OCAxMzIuNzU4IDI3LjA0TDEzMi43NTggMTIuNjhDMTMyLjc1OCAxMS4wNCAxMzEuNDM4IDkuNzIgMTI5Ljc5OCA5LjcyQzEyOC4xNTggOS43MiAxMjYuODM4IDExLjA0IDEyNi44MzggMTIuNjhMMTI2LjgzOCAyNy4wNEMxMjYuODM4IDI4LjY4IDEyOC4xNTggMzAgMTI5Ljc5OCAzMFoiIGZpbGw9IiNmZmZmZmYiLz4NCjwvc3ZnPg0K"},rHrb:function(M,N,j){"use strict";j("hHhE"),j("/SS/"),j("V+eJ"),j("WLL4"),j("jm62"),j("8+KV"),j("0l/t"),j("rGqo"),j("yt8O"),j("Btvt"),j("RW0V"),j("rE2o"),j("ioFf"),j("HAE/"),Object.defineProperty(N,"__esModule",{value:!0}),N.CopyToClipboard=void 0;var e=I(j("q1tI")),D=I(j("+QRC"));function I(M){return M&&M.__esModule?M:{default:M}}function g(M){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(M){return typeof M}:function(M){return M&&"function"==typeof Symbol&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M})(M)}function u(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);N&&(e=e.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,e)}return j}function t(M,N){if(null==M)return{};var j,e,D=function(M,N){if(null==M)return{};var j,e,D={},I=Object.keys(M);for(e=0;e<I.length;e++)j=I[e],N.indexOf(j)>=0||(D[j]=M[j]);return D}(M,N);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(e=0;e<I.length;e++)j=I[e],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(D[j]=M[j])}return D}function i(M,N){if(!(M instanceof N))throw new TypeError("Cannot call a class as a function")}function n(M,N){for(var j=0;j<N.length;j++){var e=N[j];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(M,e.key,e)}}function T(M,N){return!N||"object"!==g(N)&&"function"!=typeof N?c(M):N}function o(M){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)})(M)}function c(M){if(void 0===M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function r(M,N){return(r=Object.setPrototypeOf||function(M,N){return M.__proto__=N,M})(M,N)}function y(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}var A=function(M){function N(){var M,j;i(this,N);for(var I=arguments.length,g=new Array(I),u=0;u<I;u++)g[u]=arguments[u];return y(c(j=T(this,(M=o(N)).call.apply(M,[this].concat(g)))),"onClick",(function(M){var N=j.props,I=N.text,g=N.onCopy,u=N.children,t=N.options,i=e.default.Children.only(u),n=(0,D.default)(I,t);g&&g(I,n),i&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(M)})),j}var j,I,g;return function(M,N){if("function"!=typeof N&&null!==N)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(N&&N.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),N&&r(M,N)}(N,M),j=N,(I=[{key:"render",value:function(){var M=this.props,N=(M.text,M.onCopy,M.options,M.children),j=t(M,["text","onCopy","options","children"]),D=e.default.Children.only(N);return e.default.cloneElement(D,function(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?u(j,!0).forEach((function(N){y(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):u(j).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}({},j,{onClick:this.onClick}))}}])&&n(j.prototype,I),g&&n(j,g),N}(e.default.PureComponent);N.CopyToClipboard=A,y(A,"defaultProps",{onCopy:void 0,options:void 0})}}]);
//# sourceMappingURL=component---src-pages-index-js-43158b62e6731031cadd.js.map