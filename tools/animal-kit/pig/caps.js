// ---------- captions ----------
function roundRect(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function hiFill(){const g=ctx.createLinearGradient(-240,0,240,0);g.addColorStop(0,VIO);g.addColorStop(.5,CRIM);g.addColorStop(1,GOLD);return g;}
function caption(t,t0,t1,lines,tag){if(window.NOCAP)return;if(t<t0-.01||t>t1)return;const a=win(t,t0,t1,.08,.28);ctx.save();ctx.textBaseline='alphabetic';
  if(tag){const ta=seg(t,t0,t0+.2)*a;ctx.globalAlpha=ta;ctx.font='500 28px '+SER;const w=ctx.measureText(tag[1]).width,bw=48,x0=TX-(bw+12+w)/2,y=330;
    ctx.fillStyle=tag[2]||CRIM;roundRect(x0,y-31,bw,40,6);ctx.fill();ctx.fillStyle='#0c0818';ctx.font='700 24px '+SER;ctx.textAlign='center';ctx.fillText(tag[0],x0+bw/2,y-4);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='500 28px '+SER;ctx.fillText(tag[1],x0+bw+12,y-2);}
  let ci=0;const total=lines.reduce((s,l)=>s+l.reduce((q,g)=>q+[...g[0]].length,0),0);
  lines.forEach((ln,li)=>{const size=66,y=430+li*(size+26);ctx.font=`900 ${size}px ${SER}`;ctx.textAlign='left';const ch=[];ln.forEach(g=>[...g[0]].forEach(c=>ch.push([c,g[1]])));const ws=ch.map(c=>ctx.measureText(c[0]).width+3);let x=TX-ws.reduce((s,w)=>s+w,0)/2;
    ch.forEach((c,k)=>{const st=t0+ci/Math.max(total,1)*.42,p=seg(t,st,st+.1);ci++;if(p>0){const sc=1+(1-eOut(p))*1.2;ctx.globalAlpha=a*Math.min(1,p*2);
      if(c[1]){ctx.fillStyle=k%2?CRIM:MAG;ctx.shadowColor='rgba(255,60,110,.8)';ctx.shadowBlur=24;}else{ctx.fillStyle=WHITE;ctx.shadowColor='rgba(170,120,255,.35)';ctx.shadowBlur=12;}
      ctx.save();ctx.translate(x+ws[k]/2,y-size*.35);ctx.scale(sc,sc);ctx.fillText(c[0],-ws[k]/2,size*.35);ctx.restore();}x+=ws[k];});});ctx.restore();}
const OFF=document.createElement('canvas');OFF.width=W;OFF.height=H;const octx=OFF.getContext('2d');const OFF2=document.createElement('canvas');OFF2.width=W;OFF2.height=H;const o2=OFF2.getContext('2d');
function chroma(d){if(d<.5)return;octx.globalCompositeOperation='copy';octx.drawImage(cv,0,0);octx.globalCompositeOperation='multiply';octx.fillStyle='#ff0000';octx.fillRect(0,0,W,H);o2.globalCompositeOperation='copy';o2.drawImage(cv,0,0);o2.globalCompositeOperation='multiply';o2.fillStyle='#00ffff';o2.fillRect(0,0,W,H);
  ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalCompositeOperation='source-over';ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.globalCompositeOperation='lighter';ctx.drawImage(OFF,-d,0);ctx.drawImage(OFF2,d,0);ctx.restore();}
function invertFrame(){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalCompositeOperation='difference';ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.restore();}
