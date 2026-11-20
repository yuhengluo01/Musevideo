// "知识探索者" personal IP end card. Call boyCard(ctx, t, t0, opts) in screen space after everything else.
// Needs global helpers: Q, cat, circ, partial, trace, glow, dot, seg, eOut, eInOut, eBack, lerp, rng, SER
(function(){
const LINE='#ffffff', WARM='#ffd98a', BLUSH='#ff9ab0';
const NAME='知识探索者';
function boyCard(ctx,t,t0,o={}){
  const dur=o.dur||1.9; if(t<t0||t>t0+dur+.01)return;
  const accent=o.accent||WARM; const cx=o.x||820, cy=o.y||560;
  const fadeOut=1-seg(t,t0+dur-.25,t0+dur);
  ctx.save();ctx.fillStyle=`rgba(0,0,0,${.7*seg(t,t0,t0+.25)*fadeOut})`;ctx.fillRect(0,0,1920,1080);ctx.restore();
  const a=fadeOut; const S=o.scale||1.15; ctx.save(); ctx.translate(cx+250,cy); ctx.scale(S,S); ctx.translate(-(cx+250),-cy);
  // ---- mascot: explorer with magnifier, pops with squash & stretch ----
  const pop=seg(t,t0+.05,t0+.5); const sc=pop<1?eBack(pop):1; const squash=1+.12*Math.sin(seg(t,t0+.5,t0+.9)*Math.PI*2)*(1-seg(t,t0+.5,t0+.9));
  const draw=seg(t,t0,t0+.55);
  ctx.save();ctx.translate(cx,cy+60);ctx.scale(sc*squash,sc/squash);ctx.translate(0,-60);
  const hx=0,hy=-30;
  glow(circ(hx,hy,52,50,48),draw,LINE,3,a,14);
  // explorer hat brim + crown
  const hp=seg(t,t0+.2,t0+.5);
  glow(Q([-72,-58],[0,-82],[72,-58],14),hp,accent,3,a,12,false);
  glow(cat(Q([-40,-66],[-42,-104],[0,-108]),Q([0,-108],[42,-104],[40,-66])),hp,accent,3,a,12,false);
  glow(Q([-38,-80],[0,-90],[38,-80],8),hp,accent,1.8,a,6,false);
  // eyes (wink)
  const wink=seg(t,t0+1.0,t0+1.08)*(1-seg(t,t0+1.18,t0+1.26));
  const ea=a*seg(t,t0+.45,t0+.55);
  dot(hx-18,hy-4,3.2,LINE,ea);
  if(wink<.5)dot(hx+18,hy-4,3.2,LINE,ea);else glow(Q([hx+11,hy-4],[hx+18,hy+1],[hx+25,hy-4],6),1,LINE,2.4,ea,6,false);
  glow(Q([hx-14,hy+14],[hx,hy+26],[hx+14,hy+14],8),seg(t,t0+.45,t0+.6),LINE,2.4,a,8,false);
  dot(hx-32,hy+10,5,BLUSH,ea*.55);dot(hx+32,hy+10,5,BLUSH,ea*.55);
  // body + scarf
  const bd=seg(t,t0+.15,t0+.6);
  glow(cat(Q([-40,12],[-66,30],[-62,110]),[[62,110]],Q([62,110],[66,30],[40,12])),bd,LINE,2.6,a,10);
  glow(Q([-30,18],[0,34],[30,18],8),bd,accent,2.4,a,8,false);glow(Q([14,28],[24,52],[16,72],6),bd,accent,2,a,6,false);
  // arm raising magnifier (bobs)
  const bob=Math.sin((t-t0)*7)*6*seg(t,t0+.6,t0+.8);
  const sh=[52,40], el=[88,14], hd=[100,-22+bob];
  glow(Q(sh,el,hd,10),seg(t,t0+.5,t0+.7),LINE,2.6,a,10,false);
  const mg=seg(t,t0+.55,t0+.8),mc=[124,-56+bob];
  glow([hd,[mc[0]-14,mc[1]+16]],mg,LINE,3.4,a,8,false);glow(circ(mc[0],mc[1],22,22,28),mg,accent,3,a,14);
  if(mg>=1){const sp=Math.max(0,Math.sin((t-t0)*6));glow([[mc[0]-10,mc[1]-8],[mc[0]-2,mc[1]-14]],1,'#fff',2,a*(.4+.6*sp),8,false);}
  glow(Q([-52,40],[-80,70],[-58,100],8),seg(t,t0+.5,t0+.7),LINE,2.6,a,10,false);
  ctx.restore();
  // ---- name: each character wipes in with a glowing pen tip, then pops ----
  const size=104, gap=10, ox=cx+170, oy=cy+18;
  ctx.save();ctx.font=`900 ${size}px ${SER}`;ctx.textBaseline='alphabetic';ctx.textAlign='left';
  const chars=[...NAME];const ws=chars.map(c=>ctx.measureText(c).width);
  const st0=t0+.35, per=.12;let x=ox;
  chars.forEach((c,i)=>{const p=eOut(seg(t,st0+i*per,st0+i*per+.24));if(p>0){const w=ws[i];
      const popS=1+.18*Math.sin(seg(t,st0+i*per+.2,st0+i*per+.45)*Math.PI);
      ctx.save();ctx.translate(x+w/2,oy-size*.36);ctx.scale(popS,popS);ctx.translate(-(x+w/2),-(oy-size*.36));
      ctx.beginPath();ctx.rect(x-12,oy-size-20,(w+24)*p,size+50);ctx.clip();
      ctx.globalAlpha=a;ctx.lineWidth=2.4;ctx.strokeStyle=i>=2?accent:LINE;ctx.shadowColor=i>=2?accent:LINE;ctx.shadowBlur=20;ctx.strokeText(c,x,oy);
      const fa=seg(t,st0+i*per+.15,st0+i*per+.4);ctx.globalAlpha=a*fa;ctx.fillStyle=i>=2?accent:'#f6f2ff';ctx.shadowBlur=26;ctx.fillText(c,x,oy);ctx.restore();
      if(p<1){const px=x-12+(w+24)*p;dot(px,oy-size*.4+Math.sin(p*9)*size*.3,6,'#fff',a);dot(px,oy-size*.4+Math.sin(p*9)*size*.3,14,accent,a*.35);}}
    x+=ws[i]+gap;});
  ctx.restore();
  const tw=x-gap-ox;
  // underline swoosh + star
  const ul=Q([ox-10,oy+38],[ox+tw*.45,oy+20],[ox+tw+20,oy+32],20);const up=eOut(seg(t,st0+5*per+.1,st0+5*per+.35));
  glow(ul,up,accent,3,a,16);
  if(up>=1){const sp=seg(t,st0+5*per+.35,st0+5*per+.7);const e=ul[ul.length-1];star(ctx,e[0]+18,e[1]-16,13*eBack(sp),a,accent,t);}
  // subtitle
  const ta=seg(t,t0+1.1,t0+1.4)*a;
  if(ta>0){ctx.save();ctx.globalAlpha=ta;ctx.font='600 30px '+SER;ctx.fillStyle='#f4efe6';ctx.textAlign='left';ctx.letterSpacing='4px';
    ctx.fillText(o.sub||'@知识探索者 · MBTI 人格图鉴',ox,oy+96);ctx.letterSpacing='0px';ctx.restore();}
  const r=rng(42);for(let i=0;i<16;i++){const sx=cx-120+r()*(tw+340),sy=cy-160+r()*300,ph=r();const tw2=Math.max(0,Math.sin((t-t0)*5+ph*6));dot(sx,sy,1.6+r()*1.5,i%3?LINE:accent,a*tw2*seg(t,t0+.6,t0+1)*.8);}
  ctx.restore();
}
function star(ctx,x,y,R,a,col,t){if(R<=0)return;const pts=[];for(let i=0;i<=10;i++){const an=-Math.PI/2+i*Math.PI/5+t*.8,r=i%2?R*.42:R;pts.push([x+Math.cos(an)*r,y+Math.sin(an)*r]);}glow(pts,1,col,2.2,a,12,false);dot(x,y,3,'#fff',a);}
window.boyCard=boyCard;
})();
