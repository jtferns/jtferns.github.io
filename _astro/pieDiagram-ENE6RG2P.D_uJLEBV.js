import{p as at}from"./chunk-JWPE2WC7.DG-BB8aR.js";import{G as b,bh as _,h as rt,a3 as nt,b4 as it,a4 as ot,b5 as st,a8 as lt,b7 as ct,b as g,aG as B,a6 as ut,t as dt,b3 as gt,aQ as ht,F as pt,u as ft,T as mt}from"./mermaid.BKL3_Mwh.js";import{p as vt}from"./cynefin-VYW2F7L2.BYefbr8H.js";import{d as Z}from"./arc.CVbh4VGe.js";import{o as xt}from"./ordinal.BYWQX77i.js";function St(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function yt(t){return t}function wt(){var t=yt,n=St,y=null,T=b(0),l=b(_),h=b(0);function i(e){var r,s=(e=rt(e)).length,p,w,$=0,f=new Array(s),o=new Array(s),D=+T.apply(this,arguments),E=Math.min(_,Math.max(-_,l.apply(this,arguments)-D)),k,F=Math.min(Math.abs(E)/s,h.apply(this,arguments)),u=F*(E<0?-1:1),A;for(r=0;r<s;++r)(A=o[f[r]=r]=+t(e[r],r,e))>0&&($+=A);for(n!=null?f.sort(function(M,m){return n(o[M],o[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=$?(E-s*u)/$:0;r<s;++r,D=k)p=f[r],A=o[p],k=D+(A>0?A*w:0)+u,o[p]={data:e[p],index:r,value:A,startAngle:D,endAngle:k,padAngle:F};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:b(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(T=typeof e=="function"?e:b(+e),i):T},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:b(+e),i):l},i.padAngle=function(e){return arguments.length?(h=typeof e=="function"?e:b(+e),i):h},i}var At=mt.pie,I={sections:new Map,showData:!1},W=I.sections,V=I.showData,Ct=structuredClone(At),$t=g(()=>structuredClone(Ct),"getConfig"),Dt=g(()=>{W=new Map,V=I.showData,ft()},"clear"),bt=g(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);W.has(t)||(W.set(t,n),B.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Tt=g(()=>W,"getSections"),kt=g(t=>{V=t},"setShowData"),zt=g(()=>V,"getShowData"),q={getConfig:$t,clear:Dt,setDiagramTitle:ct,getDiagramTitle:lt,setAccTitle:st,getAccTitle:ot,setAccDescription:it,getAccDescription:nt,addSection:bt,getSections:Tt,setShowData:kt,getShowData:zt},Et=g((t,n)=>{at(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Mt={parse:g(async t=>{const n=await vt("pie",t);B.debug(n),Et(n,q)},"parse")},Rt=g(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Ft=Rt,Gt=g(t=>{const n=[...t.values()].reduce((l,h)=>l+h,0),y=[...t.entries()].map(([l,h])=>({label:l,value:h})).filter(l=>l.value/n*100>=1);return wt().value(l=>l.value).sort(null)(y)},"createPieArcs"),Lt=g((t,n,y,T)=>{B.debug(`rendering pie chart
`+t);const l=T.db,h=ut(),i=dt(l.getConfig(),h.pie),e=40,r=18,s=4,p=450,w=p,$=gt(n),f=$.append("g");f.attr("transform","translate("+w/2+","+p/2+")");const{themeVariables:o}=h;let[D]=ht(o.pieOuterStrokeWidth);D??=2;const E=i.legendPosition,k=i.textPosition,F=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,p)/2-e,A=Z().innerRadius(F*u).outerRadius(u),M=Z().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+D/2).attr("class","pieOuterCircle");const G=l.getSections(),J=Gt(G),K=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let H=0;G.forEach(a=>{H+=a});const U=J.filter(a=>(a.data.value/H*100).toFixed(0)!=="0"),N=xt(K).domain([...G.keys()]);m.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",a=>N(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(U).enter().append("text").text(a=>(a.data.value/H*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const Y=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...G.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>N(a.label)).style("stroke",a=>N(a.label)),C.append("text").attr("x",r+s).attr("y",r-s).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const z=Math.max(...C.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0));let L=p,O=w+e;const d=r+s,P=R.length*d;switch(E){case"center":C.attr("transform",(a,c)=>{const v=d*R.length/2,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"top":L+=P,C.attr("transform",(a,c)=>{const v=u,x=-z/2-(r+s),S=c*d-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${P+d})`);break;case"bottom":L+=P,C.attr("transform",(a,c)=>{const v=-u-d,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"left":O+=r+s+z,C.attr("transform",(a,c)=>{const v=d*R.length/2,x=-u-(r+s),S=c*d-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${z+r+s}, 0)`);break;default:O+=r+s+z,C.attr("transform",(a,c)=>{const v=d*R.length/2,x=12*r,S=c*d-v;return"translate("+x+","+S+")"});break}const j=Y.node()?.getBoundingClientRect().width??0,tt=w/2-j/2,et=w/2+j/2,Q=Math.min(0,tt),X=Math.max(O,et)-Q;$.attr("viewBox",`${Q} 0 ${X} ${L}`),pt($,L,X,i.useMaxWidth)},"draw"),Wt={draw:Lt},It={parser:Mt,db:q,renderer:Wt,styles:Ft};export{It as diagram};
