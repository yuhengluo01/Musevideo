// ===== 当代人图鉴 · 报复性熬夜 =====
const PC='#9ad8ff',SCR='#bfe8ff';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const PH=o=>PP({hd:.28,fax:70,fay:20,bax:40,bay:60,exp:0,...o});
const ZB=o=>PP({lean:.14,hd:.2,fax:120,fay:20,bax:110,bay:30,exp:5,walk:0,...o});
const KP=[[0,PP({exp:5,lean:.08,hd:.15})],[2.67,PP({exp:5,lean:.08,hd:.15})],[2.9,PP({exp:2,lean:.1,hd:.2})],[4.2,PP({exp:2,lean:.1})],[4.45,PH({exp:4,hd:0}),'snap'],[4.8,PH({exp:3})],[5.8,PH({exp:3})],[5.95,PH({exp:0,lean:-.05}),'snap'],[7.6,PH({exp:0})],
 [DROP,PH({exp:4,hd:0,sq:1.04}),'snap'],[DROP+1,PH({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,PH({exp:0})],[k,PH({exp:4,hd:.05,sq:1.03,lean:(i-1)*.05}),'snap'],[k+.35,PH({exp:0})]));
KP.push([B(6)-.1,PH({exp:5})],[WAVES[0],PP({exp:4,sq:1.05,fax:60,fay:-150,bax:-60,bay:-150,oy:-20}),'snap'],[WAVES[0]+.4,ZB({})],[WAVES[1],ZB({lean:.2,walk:.5}),'snap'],[LOCK-.15,ZB({lean:.22})],[LOCK,ZB({exp:4,lean:.05,sq:.94}),'snap'],[LOCK+.5,ZB({lean:.2,hd:.4})],[B(7)-.1,ZB({lean:.2})],[B(7)+.15,PH({exp:3})]);
JABS.forEach((k,i)=>KP.push([k,PH({exp:3,lean:i?.05:-.05,sq:1.03}),'snap'],[k+.4,PH({exp:3})]));
KP.push([STAMP,PP({exp:3,sq:1.06,fax:60,fay:-150,bax:-60,bay:-150}),'snap'],[STAMP+.6,PH({exp:3})],[B(8),PH({exp:5})]);
SNAPS.forEach((k,i)=>KP.push([k-.1,PH({exp:4,sq:.96-i*.04})],[k,PH({exp:2,lean:.12+i*.08,hd:.4,sq:.92-i*.05}),'snap'],[k+.35,PH({exp:2,lean:.12+i*.08,hd:.4,sq:.9-i*.05})]));
KP.push([SLAM-.2,PH({exp:2,lean:.3,sq:.86})],[SLAM,PP({exp:4,lean:.1,hd:.5,sq:.8,fax:20,fay:140,bax:-20,bay:140}),'snap'],[SLAM+.5,PP({exp:2,hd:.5,sq:.82,fax:20,fay:140,bax:-20,bay:140})],[CLIMAX-.7,PP({exp:2,hd:.45,sq:.84,fax:20,fay:140,bax:-20,bay:140})],[CLIMAX-.35,PH({exp:5,hd:.1,sq:.9})],[CLIMAX-.15,PH({exp:1,sq:.86})],
 [CLIMAX,PP({exp:3,sq:1.1,fax:60,fay:-160,bax:-60,bay:-160,flx:40,blx:-40}),'snap'],[CLIMAX+.7,PP({exp:0,sq:1.04,fax:60,fay:-150,bax:-60,bay:-150,flx:30,blx:-30})],[CLIMAX+1.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})],[27.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})]);
KP.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1100,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.6,TPp({})],[4.0,TPp({a:0})],
 [B(6)-.1,TPp({a:0})],[WAVES[1]-.3,TPp({a:0})],[WAVES[1],TPp({a:1,evil:1,fhx:100,fhy:-220}),'snap'],[LOCK,TPp({evil:1})],[B(7)-.3,TPp({evil:1})],[B(7)-.1,TPp({a:0})],
 [CLIMAX+.3,TPp({a:0})],[CLIMAX+.8,TPp({a:1,mouth:1,fhx:80,fhy:-200})],[27.5,TPp({a:1,mouth:1,fhx:80,fhy:-200})]];
const BPp=o=>Object.assign({x:880,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[5.7,BPp({a:0})],[5.95,BPp({a:1,exp:1,fhx:70,fhy:-120})],[7.2,BPp({a:1})],[7.5,BPp({a:0})],
 [B(7)-.3,BPp({a:0})],[B(7)-.05,BPp({a:1,exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0,x:860})],[CLIMAX+.8,BPp({a:1,x:860,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:860,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:960,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function clockTxt(t){if(t<4.45)return['18:00',0];if(t<5.95)return['23:00',0];if(t<7.0)return['00:30',0];if(t<B(5))return['01:00',0];if(t<B(6)-.1){let s='01:00';const L=['01:30','02:00','02:47'];MK.forEach((k,i)=>{if(t>=k)s=L[i];});return[s,0];}
  if(t<B(7)){if(t<WAVES[0])return['04:12',0];if(t<LOCK)return['07:00',1];return['09:05',1];}if(t<B(8))return['00:00',0];if(t<B(9)){let s='02:00';SNAPS.forEach((k,i)=>{if(t>=k)s=['03:00','04:00'][i];});if(t>=SLAM)s='05:00';return[s,1];}if(t<CLIMAX)return['05:30',1];return['22:30',2];}
function clockBig(x,y,a,t){if(a<=.01)return;const[s,m]=clockTxt(t);const col=m==1?'#ff7a8a':m==2?GOLD:PC;const sh=m==1&&t>=WAVES[0]&&t<WAVES[0]+.6?Math.sin(t*80)*6:0;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-120+sh,y-60,240,110,22);ctx.fill();ctx.restore();
  glow(cat(Q([x-120+sh,y-38],[x-120+sh,y-60],[x-98+sh,y-60],4),[[x+98+sh,y-60]],Q([x+98+sh,y-60],[x+120+sh,y-60],[x+120+sh,y-38],4),[[x+120+sh,y+28]],Q([x+120+sh,y+28],[x+120+sh,y+50],[x+98+sh,y+50],4),[[x-98+sh,y+50]],Q([x-98+sh,y+50],[x-120+sh,y+50],[x-120+sh,y+28],4),[[x-120+sh,y-38]]),1,col,2.4,a,12,false);
  ctx.save();ctx.globalAlpha=a;ctx.font='900 64px "Courier New",monospace';ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=18;ctx.fillText(s,x+sh,y+18);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,210,255,${.35*a})`);g.addColorStop(1,'rgba(150,210,255,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const EP={series:'当代人图鉴',slogan:'每种状态，都是一种活法',name:'报复性熬夜',en:'REVENGE BEDTIME',epn:'第十八期',acc:PC,grad:['#ffffff','#cfeaff','#8ab8ff'],glowC:'rgba(140,200,255,.85)',kwCol:'rgba(215,235,255,.92)',kw:'刷手机 · 起不来 · 享受独处 · 身体垮',slamCol:'#9ac8ff',
  words:['空虚','失眠','焦虑','疲惫'],
  cams:[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]],
  sky:[[0,['#100c14','#40243a','#c07060']],[4.4,['#04060c','#0a0e18','#141a28']],[DROP,['#04081a','#10204a','#4a80d0']],[B(5),['#04060e','#0c1428','#203858']],[B(6),['#181018','#503040','#ffb080']],[B(7),['#060818','#202048','#7060a0']],[B(8),['#06060a','#121218','#28262e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#0a0a1a','#30306a','#ffd890']],[CLIMAX+1.4,['#06061a','#202050','#8080c0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['白天',0],['累成狗',1]]],[[['到了深夜',0]],[['突然',0],['精神',1]]],[[['明明很困',0]],[['就是',0],['不睡',1]]],[[['刷着手机',0]],[['直到',0],['天亮',1]]],[[['这就是',0]],[['报复性熬夜',1]]],
   [[['再刷',0]],[['最后一个',1]]],[[['一抬头',0]],[['凌晨',0],['三点',1]]],
   [[['闹钟一响',0]],[['魂飞',0],['魄散',1]]],[[['白天上班',0]],[['像个',0],['僵尸',1]]],
   [[['好的一面',0]],[['享受',0],['独处',1]]],[[['夜里',0]],[['才是',0],['自己的',1]]],
   [[['坏的一面',0]],[['身体',0],['垮了',1]]],[[['越熬',0]],[['越',0],['空虚',1]]],
   [[['你不是不困',0]],[['是',0],['舍不得睡',1]]],[[['白天的你',0]],[['也值得',0],['被善待',1]]]],
  tags:[['01','熬夜刷手机',PC],['02','起不来',RED],['03','享受独处',GOLD],['04','身体垮','#a0a8b8']],
  cl:['今天的自己','早点睡'],endCap:[[['把夜晚',0]],[['还给',0],['睡眠',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const po=kfS(KP,T),to=kfO(KT,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const live=t>=2.67;clockBig(210,GY-500,endF*seg(t,2.6,2.9),t);
  if(t>=CLIMAX){const a=endF*seg(t,CLIMAX+.3,CLIMAX+.8);ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#fff4c0';ctx.shadowColor='#fff0a0';ctx.shadowBlur=40;ctx.beginPath();ctx.arc(980,GY-720,50,Math.PI*.35,Math.PI*1.65,false);ctx.arc(1004,GY-738,44,Math.PI*1.55,Math.PI*.45,true);ctx.closePath();ctx.fill();ctx.restore();zzz(1050,GY-760,a,t);}
  const TG=tiger(to.x,GY,1.3,-1,to,to.a*endF,1)||{hx:to.x,hy:GY-300};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const pprog=t<2.67?seg(t,.4,2.5):1;po.a=endF;const col=t>=CLIMAX?mixc(PC,GOLD,seg(t,CLIMAX,CLIMAX+.3)):PC;
  const G=drawStick(po,t,col,pprog)||{hc:[RX,GY-560],fh:[RX+60,GY-300],nk:[RX,GY-500]};FOC=[G.nk[0],G.nk[1]+40];
  const phA=endF*((t>=4.45&&t<B(6)-.1)||(t>=B(7)&&t<STAMP)||(t>=B(8)&&t<SLAM)||(t>=CLIMAX-.6&&t<CLIMAX)?1:0);if(phA>0&&po.fay>0&&po.fay<60){screenGlow(G,phA);phone(G,phA);}
  if(t>=CLIMAX&&t<CLIMAX+1.2){const dt=t-CLIMAX;const px=G.fh[0]+dt*700,py=G.fh[1]-dt*500+dt*dt*900;ctx.save();ctx.translate(px,py);ctx.rotate(dt*12);ctx.globalAlpha=endF*(1-seg(dt,.8,1.2));ctx.fillStyle='#0c1420';ctx.fillRect(-18,-34,36,68);ctx.strokeStyle=CB;ctx.lineWidth=3;ctx.strokeRect(-18,-34,36,68);ctx.restore();}
  if(b2>0&&t>=WAVES[0]&&t<WAVES[0]+.8){const dt=t-WAVES[0];for(let i=0;i<3;i++)glow(Q([380+i*24,GY-550],[400+i*24,GY-500],[380+i*24,GY-450],6),1,'#ff7a8a',3,b2*endF*(1-dt/.8)*(Math.sin(t*40)>0?1:.4),10,false);}
  const bx=G.hc[0]+60,by=G.hc[1]-110,tbx=TG.hx-30,tby=TG.hy-120,kbx=BG.hx-40,kby=BG.hy-110,obx=OG.hx-60,oby=OG.top-40;
  if(t<DROP){bubble(bx,by,'好累…',win(t,1.5,2.6,.1,.2),1,PC,-1);
    bubble(tbx,tby,'今晚把这个改完',win(t,2.85,3.9,.06,.1),eBack(seg(t,2.85,3.0)),TC,1);
    bubble(bx,by-40,'终于是我的时间了！',win(t,4.45,5.8,.06,.15),eBack(seg(t,4.45,4.6)),GOLD,-1);
    bubble(kbx,kby,'还不睡？',win(t,5.95,6.4,.04,.05),eBack(seg(t,5.95,6.1)),BUN,1);
    bubble(bx,by-40,'再刷一个！',win(t,6.4,7.0,.05,.1),eBack(seg(t,6.4,6.55)),PC,-1);
    proverb(t,'夜不能寐',RX-80,GY-780,0,PC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['短视频','追剧','购物车'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6)-.1;if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1000,830,eOut(p)),GY-700+i*80,lab[i],a*(1-seg(t,e-.2,e)),eBack(p),PC,(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by-40,['最后一个！','再看一集！','睡前逛逛~'][i],a,eBack(seg(t,k,k+.2)),PC,-1);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<WAVES[1])bubble(bx,by-40,'啊——迟到了！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),'#ff9a9a',-1);
    if(t>=WAVES[1]&&t<B(7))bubble(tbx,tby,'又迟到？',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),RED,1);
    if(t>=LOCK&&t<B(7))bubble(bx,by-40,'zzZ…',a,eBack(seg(t,LOCK,LOCK+.2)),'#9ab8ff',-1);
    bigText(t,LOCK,B(7),RX+420,GY-800,'熬的不是夜，是命',RED,56);}
  if(b3>0){const a=b3*endF;if(t>=JABS[1]&&t<STAMP)bubble(kbx,kby,'深夜好安静~',a,eBack(seg(t,JABS[1],JABS[1]+.2)),BUN,1);
    if(t>=B(7)&&t<STAMP)bubble(bx,by-40,'没人打扰真好~',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+420,GY-800,'夜里，才是我自己的',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['黑眼圈','掉头发','心慌'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*230+80,GY-740-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[1]&&t<SLAM)bubble(obx,oby-40,'你脸色好差…',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    if(t>=SNAPS[0]&&t<SLAM)bubble(bx,by-40,'睡不着…',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),'#9ab8ff',-1);
    bigText(t,SLAM,SLAM+1.8,RX+420,GY-800,'越熬越空，越空越熬','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-40,'……为什么就是不想睡',a*seg(t,B(9)+.9,B(9)+1.2),.9,PC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-40,'放下手机，晚安！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(kbx,kby,'晚安~',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(tbx,tby,'明天见！',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
function zzz(x,y,a,t){if(a<=.01)return;for(let i=0;i<3;i++){const p=((t*.8+i/3)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI);ctx.font='900 '+(26+i*8)+'px '+SER;ctx.fillStyle='#bfe0ff';ctx.shadowColor='#8ac8ff';ctx.shadowBlur=10;ctx.fillText('z',x+p*60+i*10,y-p*90);ctx.restore();}}
