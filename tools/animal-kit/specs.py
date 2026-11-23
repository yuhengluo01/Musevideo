STEPBOX = r"""
function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}
"""

SPECS = [
dict(py='yidubuhui', date_id='yidubuhui', ep=19, name='已读不回', en='READ, NO REPLY', epn='第十九期', pc='#8affc8',
  grad=['#ffffff','#d0ffe8','#6ae8b0'], glowC='rgba(120,255,190,.85)', kwCol='rgba(220,255,236,.92)', slamCol='#a8f0d0',
  kw='秒读不回 · 脑内已回 · 有边界感 · 误会多', words=['愧疚','逃避','疲惫','焦虑'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04120c','#10402a','#40c090']],[B(5),['#040c0a','#0c2820','#205848']],[B(6),['#140808','#401418','#a04050']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#0a1a10','#208050','#ffd890']],[CLIMAX+1.4,['#061410','#1a5a40','#a0f0c8']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.28,fax:70,fay:20,bax:40,bay:60}", Z="{hd:.35,fax:70,fay:20,bax:40,bay:60,exp:5,lean:.05}", phone=True, E1='5', E2='0', EMK='5',
  tags=['秒读不回','脑内已回','有边界感','误会多'],
  caps=[('有一种人',[('消息',0),('秒读',1)]),('但就是',[('不回',1)]),('打了一行字',[('又',0),('删掉',1)]),('想着待会回',[('结果',0),('忘了',1)]),('这就是',[('已读不回',1)]),
        ('消息一条条',[('挤进',0),('手机',1)]),('每一条',[('都',0),('已读',1)]),
        ('对方',[('越想越',0),('慌',1)]),('你却',[('在脑子里',0),('回过了',1)]),
        ('好的一面',[('不被',0),('消息绑架',1)]),('自己的节奏',[('自己',0),('掌握',1)]),
        ('坏的一面',[('误会',0),('越积越多',1)]),('朋友',[('慢慢',0),('走散',1)]),
        ('你不是不在乎',[('是',0),('太累了',1)]),('一句收到',[('也是',0),('温柔',1)])],
  cl=['想回就回','别有负担'], endCap=('回复不用完美',[('真诚',0),('就够了',1)]),
  tx=dict(i1='叮~',i2='在吗？',i3='（已读）',i4='周末去玩吗？',i5='待会再回…',pv='石沉大海',pvi=3,
     lab1=['在吗？','周末有空吗','收到请回复'],lab1c='#8affc8',mk=['（已读）','（已读）','（已读…）'],
     w0=['b','你是不是生气了？'],w1=['t','怎么不回消息？'],lk='我回了啊…在脑子里',lkBig='回复在脑子里，发送在梦里',
     j0='免打扰，真香~',j1='你好有边界感~',stBig='我的时间，我做主',
     lab4=['误会','冷场','朋友变少'],s0='我…我忘了',s1='你是不是不想理我？',slBig='不回的消息，越积越重',
     d1='……其实我只是累了',d2='我来回一下！',e1='收到~',e2='秒回！'),
  prop=STEPBOX+r"""
const CNT=[[2.67,'未回复 0',0],[2.85,'未回复 1',0],[5.95,'未回复 2',0],[6.6,'未回复 5',0],[DROP,'未回复 9',1],[MK[0],'未回复 10',1],[MK[1],'未回复 11',1],[MK[2],'未回复 12',1],[WAVES[0],'未回复 18',1],[LOCK,'未回复 23',1],[B(7),'免打扰中',2],[B(8),'未回复 47',1],[SNAPS[0],'未回复 68',1],[SNAPS[1],'未回复 99+',1],[CLIMAX,'已全部回复',2]];
function propFront(S,G,po){const{t,endF}=S;stepBox(CNT,220,GY-470,t,endF*seg(t,2.6,2.85),[PC,'#ff7a8a',GOLD],48);
  if(t>=CLIMAX){const dt=t-CLIMAX;for(let i=0;i<4;i++){const p=seg(dt,.1+i*.12,.5+i*.12);if(p<=0)continue;const x=lerp(G.fh[0],1120,eOut(p)),y=lerp(G.fh[1]-40,GY-760+i*70,eOut(p));ctx.save();ctx.globalAlpha=endF*(1-seg(dt,2.2,2.6));ctx.translate(x,y);ctx.scale(p,p);ctx.fillStyle='#0c2018';ctx.beginPath();ctx.roundRect(-70,-26,140,52,18);ctx.fill();ctx.strokeStyle=PC;ctx.lineWidth=2.4;ctx.shadowColor=PC;ctx.shadowBlur=12;ctx.stroke();ctx.font='800 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(['收到！','好的~','马上来','爱你们'][i],0,10);ctx.restore();}}}
"""),

dict(py='neihao', ep=20, name='精神内耗', en='OVERTHINKING', epn='第二十期', pc='#c4a8ff',
  grad=['#ffffff','#e4d8ff','#a888ff'], glowC='rgba(180,150,255,.85)', kwCol='rgba(236,228,255,.92)', slamCol='#c8b8ff',
  kw='过度脑补 · 身累心更累 · 心思细腻 · 自我怀疑', words=['焦虑','怀疑','失眠','后悔'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0c0618','#2a1850','#8060d0']],[B(5),['#08060e','#1c1430','#403068']],[B(6),['#100810','#301428','#803060']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#120a1a','#5a3a90','#ffd890']],[CLIMAX+1.4,['#0c0818','#3a2a6a','#d0c0ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.12,fax:36,fay:-22,bax:34,bay:50}", Z="{hd:.4,lean:.08,fax:10,fay:-60,bax:-10,bay:-62,exp:2}", E1='4', E2='2', EMK='4', TEVIL='0', BEXP='4',
  tags=['过度脑补','身累心更累','心思细腻','自我怀疑'],
  caps=[('有一种人',[('一句话',0),('想三天',1)]),('别人随口',[('你却',0),('当真',1)]),('躺在床上',[('脑子',0),('停不下来',1)]),('什么都没做',[('却',0),('累坏了',1)]),('这就是',[('精神内耗',1)]),
        ('一个眼神',[('脑补',0),('一场大戏',1)]),('一句回复',[('反复',0),('琢磨',1)]),
        ('越想',[('越',0),('焦虑',1)]),('身体躺平',[('脑子',0),('加班',1)]),
        ('好的一面',[('心思',0),('细腻',1)]),('考虑问题',[('特别',0),('周全',1)]),
        ('坏的一面',[('想太多',0),('做太少',1)]),('自己',[('跟自己',0),('打架',1)]),
        ('别人早就忘了',[('只有你',0),('还在想',1)]),('放过自己',[('才能',0),('往前走',1)])],
  cl=['别想了','去做吧'], endCap=('你已经',[('做得',0),('很好了',1)]),
  tx=dict(i1='嗯…',i2='这方案…再看看',i3='他是不是不满意？',i4='早点休息哦~',i5='她是不是在暗示我？',pv='思前想后',pvi=2,
     lab1=['他为什么皱眉？','是不是说错话了','完了完了'],lab1c='#c4a8ff',mk=['是不是…','会不会…','完了…'],
     w0=['b','你脸色好差…'],w1=['t','刚才那事别在意~'],lk='我好累…可我啥也没干',lkBig='什么都没做，却累坏了',
     j0='这里我也想到了~',j1='你想得好周到！',stBig='心细如发，想得周全',
     lab4=['失眠','拖延','自我怀疑'],s0='我是不是不行…',s1='想那么多干嘛？',slBig='想太多，做太少',
     d1='……我是不是哪里不够好',d2='想不如做，干就完了！',e1='加油！',e2='其实挺好的！'),
  prop=r"""
const TR=[[0,0],[2.9,0],[3.4,40],[4.45,70],[5.95,95],[DROP,120],[MK[0],125],[MK[1],130],[MK[2],135],[WAVES[0],140],[LOCK,150],[B(7),60],[STAMP,0],[B(8),90],[SNAPS[0],115],[SNAPS[1],130],[SLAM,145],[B(9),130],[CLIMAX,140]];
function trAt(t){let i=0;while(i<TR.length-1&&TR[i+1][0]<=t)i++;const a=TR[i],b=TR[Math.min(i+1,TR.length-1)];if(a===b)return a[1];const p=eOut(seg(t,b[0]-.3,b[0]));return lerp(a[1],b[1],p);}
function tangle(x,y,R,a,t,col){if(a<=.01||R<4)return;const r=rng(7);const pts=[];for(let i=0;i<120;i++){const an=i*2.39+Math.sin(t*2.5+i*.7)*.35;const rr=R*(.25+.75*r());pts.push([x+Math.cos(an)*rr,y+Math.sin(an)*rr*.82]);}
  ctx.save();ctx.globalAlpha=a*.55;ctx.fillStyle='#0c0818';ctx.beginPath();ctx.ellipse(x,y,R*1.05,R*.9,0,0,TAU);ctx.fill();ctx.restore();glow(Q(pts[0],pts[1],pts[2],2).concat(pts),1,col,2.2,a,12,false);
  if(R>50){ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(R*.55)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=16;ctx.fillText('？',x+Math.sin(t*6)*4,y+R*.2);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;const R=trAt(t);const x=G.hc[0]-310,y=G.hc[1]-90;const col=t>=B(7)&&t<B(8)?GOLD:PC;
  if(R>4&&t<CLIMAX){[0,1,2].forEach(i=>{const f=(i+1)/4;dot(lerp(G.hc[0]-40,x+R*.6,f),lerp(G.hc[1]-50,y+R*.5,f),4+i*3,col,endF*.9);});tangle(x,y,R,endF,t,col);}
  if(t>=CLIMAX&&t<CLIMAX+1.4){shards(t,CLIMAX,x,y,endF,77,PC,26,900);}
  if(t>=CLIMAX+.2){const p=eOut(seg(t,CLIMAX+.2,CLIMAX+.7));glow([[x-160,y],[x-160+320*p,y]],1,GOLD,4,endF*(1-seg(t,B(11)-.2,B(11)+.3)),18,false);ctx.save();ctx.globalAlpha=endF*p*(1-seg(t,B(11)-.2,B(11)+.3));ctx.font='900 44px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=GOLD;ctx.shadowBlur=14;ctx.fillText('理清了！',x,y-30);ctx.restore();}}
"""),

dict(py='xianyanbao', ep=21, name='显眼包', en='SHOW-OFF', epn='第二十一期', pc='#ffb070',
  grad=['#ffffff','#ffe0c0','#ff9a50'], glowC='rgba(255,170,100,.85)', kwCol='rgba(255,238,220,.92)', slamCol='#ffc8a0',
  kw='永远C位 · 用力过猛 · 气氛担当 · 不被当真', words=['尴尬','孤单','疲惫','面具'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#180c04','#5a2a10','#ff9a50']],[B(5),['#140a10','#3a1a3a','#c05080']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{lean:-.04,fax:110,fay:-120,bax:-100,bay:-40}", Z="{hd:.3,lean:.05,fax:20,fay:-110,bax:-20,bay:-112,exp:4}", E1='0', E2='0', EMK='0', TEVIL='1', BEXP='4',
  MKA="[{fax:110,fay:-140,bax:-30,bay:120,lean:.08},{fax:30,fay:120,bax:-110,bay:-140,lean:-.08},{fax:110,fay:-140,bax:-110,bay:-140,flx:60,blx:-60}]",
  tags=['永远C位','用力过猛','气氛担当','不被当真'],
  caps=[('有一种人',[('走到哪',0),('都亮',1)]),('年会',[('永远',0),('C位',1)]),('群聊里',[('表情包',0),('刷屏',1)]),('合照里',[('永远',0),('最抢镜',1)]),('这就是',[('显眼包',1)]),
        ('别人不敢做的',[('他',0),('先上',1)]),('全场',[('笑成',0),('一片',1)]),
        ('偶尔',[('用力',0),('过猛',1)]),('场面',[('一度',0),('尴尬',1)]),
        ('好的一面',[('气氛组',0),('担当',1)]),('有他在',[('从不',0),('冷场',1)]),
        ('坏的一面',[('不被',0),('当真',1)]),('笑着笑着',[('自己',0),('累了',1)]),
        ('你逗大家开心',[('谁来',0),('逗你',1)]),('不用表演',[('也',0),('值得被喜欢',1)])],
  cl=['做自己','就很亮'], endCap=('快乐的你',[('最',0),('可爱',1)]),
  tx=dict(i1='看我！',i2='谁来表演个节目？',i3='我来我来！',i4='哈哈哈哈哈',i5='再来一个！',pv='万众瞩目',pvi=0,
     lab1=['年会C位','群里刷屏','合照抢镜'],lab1c='#ffb070',mk=['看我！','哈哈哈！','耶~'],
     w0=['b','好…好尴尬…'],w1=['t','注意场合！'],lk='啊这…',lkBig='尴尬的不是我，是你们',
     j0='气氛交给我！',j1='有你好开心！',stBig='有你在，就不冷场',
     lab4=['被说幼稚','不被当真','背后吐槽'],s0='我…是认真的',s1='能不能正经点？',slBig='笑着笑着，没人当真',
     d1='……只有搞笑，才有人看我吗',d2='做自己，就很亮！',e1='你最闪亮！',e2='哈哈好样的！'),
  prop=r"""
function spot(x,a){if(a<=.01)return;ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createLinearGradient(0,-300,0,GY);g.addColorStop(0,`rgba(255,220,170,${.02*a})`);g.addColorStop(1,`rgba(255,200,140,${.22*a})`);ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x-50,-300);ctx.lineTo(x+50,-300);ctx.lineTo(x+260,GY);ctx.lineTo(x-260,GY);ctx.closePath();ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a*.5;ctx.fillStyle='rgba(255,210,150,.5)';ctx.beginPath();ctx.ellipse(x,GY+6,270,30,0,0,TAU);ctx.fill();ctx.restore();}
function shades(G,a){if(a<=.01)return;const h=G.hc,s=G.s,f=G.f;ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#08080c';ctx.strokeStyle=PC;ctx.lineWidth=3;ctx.shadowColor=PC;ctx.shadowBlur=10;[[.38,0],[-.06,0]].forEach(([dx])=>{ctx.beginPath();ctx.roundRect(h[0]+f*36*s*dx-15*s,h[1]-12*s,30*s,17*s,6*s);ctx.fill();ctx.stroke();});ctx.beginPath();ctx.moveTo(h[0]+f*36*s*.06,h[1]-6*s);ctx.lineTo(h[0]+f*36*s*.26,h[1]-6*s);ctx.stroke();ctx.restore();}
function note(x,y,a,col){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.ellipse(x,y,13,10,-.4,0,TAU);ctx.fill();ctx.fillRect(x+10,y-48,4,48);ctx.beginPath();ctx.moveTo(x+14,y-48);ctx.quadraticCurveTo(x+34,y-36,x+30,y-18);ctx.lineTo(x+26,y-22);ctx.quadraticCurveTo(x+28,y-34,x+14,y-38);ctx.fill();ctx.restore();}
function propBack(S){const{t,endF}=S;const on=(t>=2.67&&t<WAVES[0])||(t>=B(7)-.1&&t<B(8))||t>=CLIMAX;const a=endF*(on?1:0)*(t<3?seg(t,2.67,3):1);spot(RX,a);}
function propFront(S,G,po){const{t,endF}=S;const sa=endF*((t>=4.45&&t<WAVES[0])||(t>=B(7)&&t<B(8))||t>=CLIMAX+.1?1:0);shades(G,sa);
  const na=endF*((t>=DROP&&t<WAVES[0])||(t>=B(7)&&t<B(8))||t>=CLIMAX?1:0);if(na>0)for(let i=0;i<4;i++){const p=((t*.7+i/4)%1);note(G.hc[0]-220+i*130+Math.sin(p*6+i)*20,G.hc[1]-60-p*240,na*Math.sin(p*Math.PI),[PC,GOLD,'#ff9ad0',CB][i]);}}
"""),

dict(py='shekong', ep=22, name='社恐', en='SOCIAL ANXIETY', epn='第二十二期', pc='#7ad8ff',
  grad=['#ffffff','#d0f0ff','#6ac0ff'], glowC='rgba(120,210,255,.85)', kwCol='rgba(220,244,255,.92)', slamCol='#a8d8ff',
  kw='能躲就躲 · 人多就慌 · 慢热真诚 · 错过机会', words=['紧张','尴尬','退缩','孤单'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04081a','#10284a','#4a90d0']],[B(5),['#04060e','#0c1428','#203858']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#0a0a1a','#30306a','#ffd890']],[CLIMAX+1.4,['#06101a','#204060','#a0d8ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.3,fax:70,fay:20,bax:40,bay:60}", Z="{hd:.5,lean:.1,sq:.82,fax:30,fay:60,bax:20,bay:66,exp:2,flx:40,blx:-10}", phone=True, E1='5', E2='4', EMK='5', BEXP='0',
  tags=['能躲就躲','人多就慌','慢热真诚','错过机会'],
  caps=[('有一种人',[('电梯里',0),('只想隐身',1)]),('能发消息',[('绝不',0),('打电话',1)]),('外卖',[('永远',0),('放门口',1)]),('说一句话',[('心里',0),('彩排十遍',1)]),('这就是',[('社恐',1)]),
        ('偶遇同事',[('假装',0),('看手机',1)]),('能躲',[('就',0),('躲',1)]),
        ('一被点名',[('大脑',0),('空白',1)]),('人一多',[('就想',0),('消失',1)]),
        ('好的一面',[('慢热',0),('但真诚',1)]),('一对一',[('超能',0),('聊',1)]),
        ('坏的一面',[('错过',0),('很多机会',1)]),('被误会',[('太',0),('高冷',1)]),
        ('你不是不爱说话',[('只是',0),('需要时间',1)]),('慢一点',[('也',0),('没关系',1)])],
  cl=['勇敢一次','打个招呼'], endCap=('慢热的人',[('也有',0),('光',1)]),
  tx=dict(i1='（别看见我）',i2='嗨！早啊！',i3='（假装看手机）',i4='一起吃饭吗？',i5='我…我吃过了',pv='能躲就躲',pvi=2,
     lab1=['电梯偶遇','来电话了','外卖到了'],lab1c='#7ad8ff',mk=['（屏住呼吸）','能发消息吗…','放门口就好！'],
     w0=['b','大家一起唱歌吧~'],w1=['t','来，自我介绍一下！'],lk='（我想消失…）',lkBig='人多的地方，我会消失',
     j0='其实…我很能聊',j1='跟你聊天好舒服~',stBig='慢热，但真诚',
     lab4=['错过机会','被说高冷','不敢开口'],s0='我…我…',s1='你怎么不说话？',slBig='不是高冷，是不敢',d1='……我也想被看见',d2='你好！我是——',e1='你好呀！',e2='欢迎欢迎！'),
  prop=STEPBOX+r"""
const RH=[[4.45,'心里彩排 第1遍',0],[5.3,'心里彩排 第4遍',0],[6.4,'心里彩排 第7遍',0],[7.0,'心里彩排 第10遍',1]];
function shellA(t){return (win(t,2.8,4.15,.15,.2)+win(t,5.9,7.3,.15,.2)+win(t,WAVES[0]-.1,B(7),.15,.2)+win(t,B(8)+.2,CLIMAX-.6,.2,.2))}
function propFront(S,G,po){const{t,endF}=S;const a=Math.min(1,shellA(t))*endF;const cx=RX,cy=GY-330;
  if(a>.01){ctx.save();ctx.globalAlpha=a*.18;ctx.fillStyle=PC;ctx.beginPath();ctx.ellipse(cx,cy,230+Math.sin(t*3)*6,360,0,0,TAU);ctx.fill();ctx.restore();glow(circ(cx,cy,230+Math.sin(t*3)*6,360,80),1,PC,2.6,a*.9,16,false);
    for(let i=0;i<5;i++){const an=-1.2+i*.25;dot(cx+Math.cos(an)*200,cy+Math.sin(an)*320,3,'#fff',a*.6);}}
  if(t>=CLIMAX&&t<CLIMAX+1.4){shards(t,CLIMAX,cx,cy-120,endF,91,PC,30,1100);}
  stepBox(RH,220,GY-470,t,endF*win(t,4.4,DROP,.1,.05),[PC,'#ff7a8a',GOLD],44);
  if(t>=CLIMAX+.1&&t<B(11))stepBox([[CLIMAX+.1,'说出口了！',2]],220,GY-470,t,endF*(1-seg(t,B(11)-.3,B(11))),[PC,'#ff7a8a',GOLD],48);}
"""),

dict(py='juanwang', ep=23, name='卷王', en='OVERACHIEVER', epn='第二十三期', pc='#ff9a6a',
  grad=['#ffffff','#ffd8c0','#ff7a4a'], glowC='rgba(255,140,90,.85)', kwCol='rgba(255,232,220,.92)', slamCol='#ffb8a0',
  kw='永远加班 · 全组陪跑 · 能力飞涨 · 身体透支', words=['焦虑','疲惫','透支','比较'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#180804','#5a1a10','#ff7a4a']],[B(5),['#0c0806','#281810','#583020']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#1a0c08','#7a3a1a','#ffc0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{lean:.1,hd:.15,fax:95,fay:45,bax:75,bay:48}", Z="{lean:.06,hd:.1,fax:110,fay:-60,bax:-40,bay:60,exp:1}", E1='1', E2='0', EMK='1', TEVIL='0', BEXP='2',
  tags=['永远加班','全组陪跑','能力飞涨','身体透支'],
  caps=[('有一种人',[('永远',0),('最后下班',1)]),('周末',[('还在',0),('考证',1)]),('别人摸鱼',[('他在',0),('冲刺',1)]),('一刻不停',[('生怕',0),('落后',1)]),('这就是',[('卷王',1)]),
        ('加班',[('到',0),('深夜',1)]),('学习',[('停不',0),('下来',1)]),
        ('他一卷',[('全组',0),('陪跑',1)]),('同事们',[('叫苦',0),('连天',1)]),
        ('好的一面',[('能力',0),('飞涨',1)]),('越努力',[('越',0),('幸运',1)]),
        ('坏的一面',[('没有',0),('生活',1)]),('身体',[('先',0),('透支',1)]),
        ('你停下来',[('世界也',0),('不会塌',1)]),('努力很好',[('休息',0),('也是',1)])],
  cl=['今天','准时下班'], endCap=('人生不是赛跑',[('是',0),('旅行',1)]),
  tx=dict(i1='再干一会儿！',i2='下班啦~明天见',i3='我再学一小时！',i4='你还不走啊？',i5='你们先走！',pv='争分夺秒',pvi=0,
     lab1=['加班到深夜','周末考证','早到一小时'],lab1c='#ff9a6a',mk=['再干一会！','学到就是赚到！','我先到了！'],
     w0=['b','你卷得我们好累…'],w1=['t','大家向他学习！'],lk='我还能再卷！',lkBig='你一卷，全组陪跑',
     j0='考过了！',j1='你好厉害！',stBig='越努力，越幸运',
     lab4=['没有生活','身体透支','永远焦虑'],s0='停下就落后…',s1='歇会儿吧兄弟',slBig='卷赢了别人，输给了自己',
     d1='……停下来，我就会落后吗',d2='今天，准时下班！',e1='一起吃饭！',e2='下班快乐！'),
  prop=STEPBOX+r"""
const TM=[[2.67,'18:00 下班',0],[4.45,'21:00',0],[6.4,'23:30',0],[DROP,'01:00',1],[MK[0],'02:00',1],[MK[1],'周六 08:00',1],[MK[2],'周一 06:30',1],[B(6),'全组加班',1],[B(7),'绩效 A+',2],[B(8),'体检 异常',1],[SNAPS[1],'连续加班 30天',1],[CLIMAX,'18:00 准时下班',2]];
function desk(a,t){if(a<=.01)return;const x0=RX+70,x1=RX+330,y=GY-300;glow([[x0,y],[x1,y]],1,PC,3,a,12,false);glow([[x0+20,y],[x0+20,GY]],1,PC,2.4,a,8,false);glow([[x1-20,y],[x1-20,GY]],1,PC,2.4,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#0c1018';ctx.save();ctx.translate(x0+150,y);ctx.rotate(-.25);ctx.fillRect(-70,-110,140,100);ctx.strokeStyle=CB;ctx.lineWidth=2.6;ctx.shadowColor=CB;ctx.shadowBlur=12;ctx.strokeRect(-70,-110,140,100);ctx.globalAlpha=a*.35;ctx.fillStyle=CB;ctx.fillRect(-60,-100,120,80);ctx.restore();
  ctx.strokeStyle=CB;ctx.lineWidth=3;ctx.shadowColor=CB;ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(x0+40,y-4);ctx.lineTo(x0+180,y-4);ctx.stroke();
  for(let i=0;i<4;i++){ctx.fillStyle=['#ff9a6a','#ffd06a','#8affc8','#c4a8ff'][i];ctx.fillRect(x1-90,y-16-i*18,70,15);}ctx.restore();}
function crown(x,y,a,s){if(a<=.01)return;const p=[[-40,0],[-48,-46],[-20,-20],[0,-56],[20,-20],[48,-46],[40,0],[-40,0]].map(q=>[x+q[0]*s,y+q[1]*s]);ctx.save();ctx.globalAlpha=a*.6;ctx.fillStyle=GOLD;trace(p);ctx.fill();ctx.restore();glow(p,1,GOLD,3,a,18,false);}
function propBack(S){const{t,endF}=S;const a=endF*((t>=2.67&&t<WAVES[0]+.2)||(t>=B(7)&&t<STAMP)||(t>=B(8)&&t<SLAM)||(t>=CLIMAX-.35&&t<CLIMAX)?1:0)*(t<3?seg(t,2.67,3):1);desk(a,t);}
function propFront(S,G,po){const{t,endF}=S;stepBox(TM,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  if(t>=STAMP&&t<B(8))crown(G.hc[0],G.hc[1]-62*1.45+10,endF*(1-seg(t,B(8)-.3,B(8))),eBack(seg(t,STAMP,STAMP+.25)));
  if(S.b2>0&&t>=WAVES[0]){for(let i=0;i<3;i++){const p=((t*1.3+i/3)%1);ctx.save();ctx.globalAlpha=S.b2*endF*Math.sin(p*Math.PI);ctx.font='900 '+(30+i*6)+'px '+SER;ctx.fillStyle='#ff9a6a';ctx.shadowColor='#ff7a4a';ctx.shadowBlur=10;ctx.fillText('卷',G.hc[0]+90+i*40,G.hc[1]-40-p*120);ctx.restore();}}}
"""),
]
