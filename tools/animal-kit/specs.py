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

SKY=lambda d,c1,c2:"[[0,['#04060c','#0a0e18','#141a28']],[DROP,"+d+"],[B(5),"+c1+"],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,"+c2+"],[B(11)+.6,['#040408','#0c0c14','#16161e']]]"

SPECS += [
dict(py='zuiti', ep=24, name='嘴替', en='THE VOICE', epn='第二十四期', pc='#ff7ab8',
  grad=['#ffffff','#ffd0e8','#ff5aa0'], glowC='rgba(255,120,180,.85)', kwCol='rgba(255,226,240,.92)', slamCol='#ffb0d0',
  kw='敢说真话 · 全场解气 · 替人发声 · 得罪人', words=['委屈','孤立','后怕','压力'],
  sky=SKY("['#180410','#5a1038','#ff5aa0']","['#10060c','#301428','#683058']","['#1a0812','#7a2a4a','#ffc0d8']"),
  M="{lean:.04,hd:0,fax:80,fay:-40,bax:-30,bay:70}", Z="{lean:-.05,hd:.1,fax:110,fay:-110,bax:-40,bay:60,exp:1}", E1='1', E2='1', EMK='1', TEVIL='1', BEXP='0',
  MKA="[{fax:120,fay:-90},{fax:30,fay:-150,bax:-90,bay:-20},{fax:120,fay:-130,lean:.1}]",
  tags=['敢说真话','全场解气','替人发声','得罪人'],
  caps=[('有一种人',[('你想说的',0),('他全说了',1)]),('开会时',[('大家都',0),('沉默',1)]),('他一开口',[('全场',0),('解气',1)]),('评论区里',[('永远',0),('热评第一',1)]),('这就是',[('嘴替',1)]),
        ('不合理的',[('他',0),('敢说',1)]),('憋着的话',[('他',0),('替你说',1)]),
        ('领导',[('脸都',0),('绿了',1)]),('大家',[('偷偷',0),('点赞',1)]),
        ('好的一面',[('真实',0),('敢言',1)]),('大家的',[('情绪',0),('出口',1)]),
        ('坏的一面',[('容易',0),('得罪人',1)]),('冲在前面',[('一个人',0),('扛',1)]),
        ('你替所有人说话',[('谁来',0),('替你说',1)]),('勇敢很好',[('也要',0),('护住自己',1)])],
  cl=['这一次','替自己说'], endCap=('敢说真话的人',[('最',0),('可贵',1)]),
  tx=dict(i1='（深吸一口气）',i2='周末加个班哈~',i3='凭什么？',i4='说得好！',i5='我就直说了！',pv='一针见血',pvi=0,
     lab1=['周末加班？','画大饼？','功劳被抢？'],lab1c='#ff7ab8',mk=['不合理！','饼吃不饱！','这是我做的！'],
     w0=['b','说出了我的心声！'],w1=['t','你什么意思？'],lk='我…说错了吗',lkBig='你敢说出口，他们只敢点赞',
     j0='有话直说！',j1='你好勇啊！',stBig='替沉默的人，发声',
     lab4=['得罪领导','被穿小鞋','孤军奋战'],s0='大家怎么不说话…',s1='你也太冲了吧',slBig='冲在最前面，回头没有人',
     d1='……我替大家说，谁替我说',d2='这一次，为自己说！',e1='我们挺你！',e2='说得对！'),
  prop=STEPBOX+r"""
const LK=[[2.67,'点赞 0',0],[4.45,'点赞 999',0],[6.4,'点赞 1w+',0],[DROP,'热评第一',2],[MK[0],'点赞 3w',0],[MK[1],'点赞 8w',0],[MK[2],'点赞 10w+',2],[B(6),'领导 已读',1],[B(7),'大家的嘴替',2],[B(8),'被约谈',1],[SNAPS[1],'站队 0人',1],[CLIMAX,'为自己发声',2]];
function horn(G,a,t,col){if(a<=.01)return;const h=G.fh,s=G.s;const ang=-.45;ctx.save();ctx.translate(h[0],h[1]);ctx.rotate(ang);
  const P=[[-6*s,-10*s],[40*s,-30*s],[40*s,30*s],[-6*s,10*s],[-6*s,-10*s]];ctx.globalAlpha=a*.85;ctx.fillStyle='#1a0812';ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();
  const tr=P.map(p=>[h[0]+p[0]*Math.cos(ang)-p[1]*Math.sin(ang),h[1]+p[0]*Math.sin(ang)+p[1]*Math.cos(ang)]);glow(tr,1,col,3,a,14,false);
  for(let i=0;i<3;i++){const p=((t*1.6+i/3)%1);const R=(50+p*120)*s*.6;const cx=h[0]+Math.cos(ang)*44*s,cy=h[1]+Math.sin(ang)*44*s;ctx.save();ctx.globalAlpha=a*(1-p);ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(cx,cy,R,ang-.6,ang+.6);ctx.stroke();ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(LK,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ha=endF*((t>=4.45&&t<5.9)||(t>=6.4&&t<7.6)||(t>=MK[0]-.1&&t<B(6))||(t>=STAMP&&t<B(8))||(t>=CLIMAX&&t<B(11))?1:0);horn(G,ha,t,t>=CLIMAX||(t>=STAMP&&t<B(8))?GOLD:PC);
  if(S.b2>0&&t>=WAVES[0]){for(let i=0;i<4;i++){const p=((t*1.1+i/4)%1);ctx.save();ctx.globalAlpha=S.b2*endF*Math.sin(p*Math.PI);ctx.font='900 34px '+SER;ctx.fillStyle='#ff9ad0';ctx.shadowColor='#ff5aa0';ctx.shadowBlur=10;ctx.fillText('赞',880+i*60,GY-300-p*200);ctx.restore();}}}
"""),

dict(py='banwei', ep=25, name='班味', en='WORK MODE', epn='第二十五期', pc='#9ac8b0',
  grad=['#ffffff','#d8f0e4','#7ab89a'], glowC='rgba(150,210,180,.85)', kwCol='rgba(226,244,236,.92)', slamCol='#c0dcd0',
  kw='眼神空洞 · 张口收到 · 靠谱稳定 · 忘了自己', words=['疲惫','麻木','焦虑','空虚'],
  sky=SKY("['#060c0a','#1a302a','#5a8a78']","['#06080a','#141c20','#2c3a40']","['#0c140e','#3a6a50','#c8f0d8']"),
  M="{lean:.12,hd:.3,fax:50,fay:80,bax:30,bay:90}", Z="{lean:.15,hd:.45,fax:40,fay:110,bax:20,bay:110,exp:5,sq:.94}", E1='5', E2='5', EMK='5', TEVIL='0', BEXP='1',
  MKA="[{fax:60,fay:-20},{fax:90,fay:-60,lean:.05},{fax:70,fay:20}]",
  tags=['眼神空洞','张口收到','靠谱稳定','忘了自己'],
  caps=[('有一种人',[('一身',0),('班味',1)]),('周一早上',[('眼神',0),('空洞',1)]),('工牌一挂',[('魂',0),('就没了',1)]),('下了班',[('也',0),('散不掉',1)]),('这就是',[('班味',1)]),
        ('黑眼圈',[('比咖啡',0),('还浓',1)]),('张口闭口',[('全是',0),('收到',1)]),
        ('朋友说',[('你',0),('变了',1)]),('笑容',[('越来越',0),('少',1)]),
        ('好的一面',[('靠谱',0),('稳定',1)]),('打工人',[('撑起',0),('生活',1)]),
        ('坏的一面',[('忘了',0),('自己',1)]),('周末',[('也在',0),('回消息',1)]),
        ('你不是机器',[('你是',0),('你自己',1)]),('下班以后',[('做回',0),('自己',1)])],
  cl=['摘下工牌','去生活'], endCap=('工作是一部分',[('生活',0),('才是全部',1)]),
  tx=dict(i1='（闹钟响了…）',i2='早啊~周一快乐！',i3='收到。',i4='你怎么无精打采的？',i5='好的。收到。',pv='一身班味',pvi=2,
     lab1=['周一早高峰','第三杯咖啡','收到收到'],lab1c='#9ac8b0',mk=['收到。','好的。','马上改。'],
     w0=['b','你好像变了…'],w1=['t','这个今天要哈~'],lk='收到…',lkBig='嘴上说收到，心里已下班',
     j0='交给我，放心',j1='你好靠谱！',stBig='打工人，最靠谱',
     lab4=['没有自我','周末加班','笑不出来'],s0='我…原来是什么样',s1='你多久没笑了？',slBig='班味太重，忘了自己',
     d1='……我以前，是什么样的',d2='下班！做回自己！',e1='一起去玩！',e2='这才像你！'),
  prop=STEPBOX+r"""
const TM=[[2.67,'周一 07:30',0],[4.45,'咖啡 ×1',0],[6.4,'咖啡 ×2',0],[DROP,'咖啡 ×3',1],[MK[0],'收到 ×12',1],[MK[1],'收到 ×36',1],[MK[2],'收到 ×99',1],[B(6),'笑容 -80%',1],[B(7),'零失误 100天',2],[B(8),'周六 回消息',1],[SNAPS[1],'自我 已离线',1],[CLIMAX,'18:00 下班！',2]];
function badge(G,a,col,off){if(a<=.01)return;const n=G.nk,s=G.s;const cx=n[0]+8*s+(off?off[0]:0),cy=n[1]+95*s+(off?off[1]:0);
  if(!off)glow([[n[0]-14*s,n[1]+6*s],[cx,cy-22*s],[n[0]+22*s,n[1]+6*s]],1,col,2,a,6,false);
  ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#0c1410';ctx.fillRect(cx-22*s,cy-22*s,44*s,34*s);ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.shadowColor=col;ctx.shadowBlur=10;ctx.strokeRect(cx-22*s,cy-22*s,44*s,34*s);ctx.font='800 '+Math.round(12*s)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText('工牌',cx,cy+2*s);ctx.restore();}
function fumes(G,a,t){if(a<=.01)return;for(let i=0;i<5;i++){const p=((t*.45+i/5)%1);const x=G.hc[0]-120+i*60+Math.sin(p*7+i)*24,y=G.hc[1]-40-p*260;ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI)*.8;ctx.strokeStyle='#8a9a94';ctx.lineWidth=4;ctx.shadowColor='#8a9a94';ctx.shadowBlur=14;ctx.beginPath();for(let k=0;k<=12;k++){const yy=y+k*6,xx=x+Math.sin(k*.9+t*3+i)*10;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();ctx.restore();}
  if(a>.3){ctx.save();ctx.globalAlpha=a*.7*(.6+.4*Math.sin(t*3));ctx.font='900 40px '+SER;ctx.textAlign='center';ctx.fillStyle='#b0c0b8';ctx.shadowColor='#6a7a74';ctx.shadowBlur=12;ctx.fillText('班味',G.hc[0]+150,G.hc[1]-200+Math.sin(t*2)*10);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(TM,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const fa=endF*(t>=4.45&&t<B(7)||t>=B(8)&&t<CLIMAX?1:0)*(t<5?seg(t,4.45,5):1);fumes(G,fa,t);
  if(t<CLIMAX)badge(G,endF*seg(t,2.67,3.0),t>=B(7)&&t<B(8)?GOLD:PC);
  else{const p=seg(t,CLIMAX,CLIMAX+1.2);badge(G,endF*(1-p),GOLD,[p*420,-Math.sin(p*Math.PI)*260-p*80]);}}
"""),

dict(py='dazi', ep=26, name='搭子', en='BUDDY', epn='第二十六期', pc='#6ae0e8',
  grad=['#ffffff','#d0f8fa','#40c8d8'], glowC='rgba(110,224,232,.85)', kwCol='rgba(220,250,252,.92)', slamCol='#a8e8f0',
  kw='万物皆可搭 · 边界拉满 · 轻松不累 · 难以交心', words=['孤单','疏离','空虚','沉默'],
  sky=SKY("['#04101a','#0c3a4a','#40c8d8']","['#040c10','#0c2430','#1c5060']","['#06141a','#1a5a6a','#b0f0f8']"),
  M="{lean:-.02,hd:0,fax:100,fay:-20,bax:-40,bay:70}", Z="{lean:-.12,hd:.1,fax:90,fay:20,bax:-90,bay:20,exp:4,flx:30}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='0',
  MKA="[{fax:110,fay:-60},{fax:40,fay:-150,bax:-40,bay:-150},{fax:130,fay:-130,lean:.1}]",
  tags=['万物皆可搭','边界拉满','轻松不累','难以交心'],
  caps=[('有一种人',[('吃饭',0),('有搭子',1)]),('健身',[('有',0),('搭子',1)]),('旅游',[('也有',0),('搭子',1)]),('不深交',[('不',0),('打扰',1)]),('这就是',[('搭子',1)]),
        ('拼单',[('秒',0),('成团',1)]),('一句走吗',[('立刻',0),('出发',1)]),
        ('私事',[('一概',0),('不问',1)]),('边界感',[('拉',0),('满',1)]),
        ('好的一面',[('轻松',0),('不累',1)]),('想去哪儿',[('都',0),('有人陪',1)]),
        ('坏的一面',[('搭子',0),('很多',1)]),('知心的',[('没有',0),('一个',1)]),
        ('热闹散场',[('还是',0),('一个人',1)]),('搭子再多',[('也要',0),('有个知己',1)])],
  cl=['把搭子','变成朋友'], endCap=('陪伴',[('不在多',0),('在真心',1)]),
  tx=dict(i1='今天吃啥？',i2='健身走起！',i3='饭搭子集合~',i4='奶茶拼单吗？',i5='走！',pv='一拍即合',pvi=2,
     lab1=['饭搭子','健身搭子','旅游搭子'],lab1c='#6ae0e8',mk=['拼个单！','一起练！','说走就走！'],
     w0=['b','你家里最近还好吗？'],w1=['t','聊聊心事呗？'],lk='呃…这个就不聊了',lkBig='只搭伴，不交心',
     j0='想去就去！',j1='跟你玩好轻松~',stBig='轻松陪伴，刚刚好',
     lab4=['不交心','难倾诉','散场孤单'],s0='（突然好想找人说说话）',s1='有事可以找我啊',slBig='搭子很多，知己很少',
     d1='……难过的时候，我能找谁',d2='其实，我想跟你说…',e1='我在呢！',e2='好朋友！'),
  prop=STEPBOX+r"""
const DZ=[[2.67,'搭子 0',0],[2.85,'健身搭子 +1',0],[4.45,'饭搭子 +1',0],[5.95,'奶茶搭子 +1',0],[DROP,'搭子 ×8',2],[MK[0],'饭搭子 ✓',0],[MK[1],'健身搭子 ✓',0],[MK[2],'旅游搭子 ✓',0],[B(6),'话题：仅限吃喝',1],[B(7),'周末 满档',2],[B(8),'深夜 0人可聊',1],[SNAPS[1],'通讯录 300人',1],[CLIMAX,'知己 +1',2]];
function link(a,x0,y0,x1,y1,col,t){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.setLineDash([14,12]);ctx.lineDashOffset=-t*60;ctx.beginPath();ctx.moveTo(x0,y0);ctx.quadraticCurveTo((x0+x1)/2,Math.min(y0,y1)-90,x1,y1);ctx.stroke();ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(DZ,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const la=endF*(win(t,2.85,4.1,.15,.2)+win(t,5.95,7.4,.15,.2)+win(t,B(7)+.1,B(8)-.15,.15,.2));const tx=t<4.2?1060:860;link(la,G.fh[0],G.fh[1],tx,GY-200,PC,t);
  if(t>=CLIMAX+.8){const a=endF*seg(t,CLIMAX+.8,CLIMAX+1.2);link(a,G.fh[0],G.fh[1],860,GY-200,GOLD,t);heartF((G.fh[0]+860)/2,Math.min(G.fh[1],GY-200)-60,1.3,'#ffcf6a',a);}
  if(S.b2>0&&t>=WAVES[0]&&t<B(7)){const a=S.b2*endF;const x=RX+130,y=GY-200;glow([[x,y-220],[x,y+190]],1,'#ff7a8a',4,a,16,false);ctx.save();ctx.globalAlpha=a;ctx.font='900 30px '+SER;ctx.fillStyle='#ff9aa8';ctx.textAlign='center';ctx.fillText('边',x,y-240);ctx.fillText('界',x,y-205);ctx.restore();}}
"""),

dict(py='fafeng', ep=27, name='发疯文学', en='UNHINGED MODE', epn='第二十七期', pc='#ff8ae0',
  grad=['#ffffff','#ffd8f4','#e060ff'], glowC='rgba(240,120,230,.85)', kwCol='rgba(255,228,248,.92)', slamCol='#f0b8ff',
  kw='原地爆炸 · 越疯越火 · 情绪不憋 · 没人当真', words=['委屈','崩溃','压抑','孤单'],
  sky=SKY("['#14041a','#4a1058','#e060ff']","['#10061a','#2c1040','#6a3090']","['#160a1a','#6a2a7a','#ffc8f4']"),
  M="{lean:0,hd:0,fax:60,fay:40,bax:-50,bay:50}", Z="{lean:-.08,hd:.1,fax:120,fay:-140,bax:-120,bay:-140,exp:4}", E1='0', E2='4', EMK='4', TEVIL='0', BEXP='0',
  MKA="[{fax:120,fay:-140,bax:-120,bay:-140},{fax:20,fay:-170,bax:-20,bay:-170,lean:-.1},{fax:130,fay:-60,bax:-130,bay:-60,flx:60,blx:-60}]",
  tags=['原地爆炸','越疯越火','情绪不憋','没人当真'],
  caps=[('有一种人',[('表面',0),('岁月静好',1)]),('一开口',[('全是',0),('感叹号',1)]),('不发疯',[('就',0),('发霉',1)]),('情绪',[('全写在',0),('文字里',1)]),('这就是',[('发疯文学',1)]),
        ('被催进度',[('当场',0),('发疯',1)]),('外卖超时',[('原地',0),('裂开',1)]),
        ('同事们',[('笑',0),('疯了',1)]),('一条动态',[('点赞',0),('过百',1)]),
        ('好的一面',[('情绪',0),('不憋着',1)]),('发完疯',[('继续',0),('上班',1)]),
        ('坏的一面',[('真难过',0),('没人信',1)]),('都当你',[('在',0),('开玩笑',1)]),
        ('笑着发疯',[('其实',0),('很累',1)]),('偶尔',[('认真',0),('说一次',1)])],
  cl=['好好说出','我的感受'], endCap=('情绪',[('值得',0),('被看见',1)]),
  tx=dict(i1='（微笑）',i2='这个今天能改完吗？',i3='啊啊啊啊啊！！！',i4='你…还好吗？',i5='我没事！我好得很！！',pv='一触即发',pvi=2,
     lab1=['又改方案','外卖超时','手机没电'],lab1c='#ff8ae0',mk=['我真的会谢！','我直接裂开！','我原地爆炸！'],
     w0=['b','哈哈哈好有趣！'],w1=['t','这孩子又疯了哈哈'],lk='（其实是真的崩溃）',lkBig='越是真崩溃，越像在搞笑',
     j0='发完疯，接着干！',j1='你好会排解~',stBig='情绪不憋着，就是本事',
     lab4=['没人当真','笑着难过','越发越累'],s0='我是认真的…',s1='又在发疯呢哈哈',slBig='真难过的时候，没人相信',
     d1='……我是真的不开心',d2='我今天，有点难过',e1='抱抱你！',e2='我听你说！'),
  prop=STEPBOX+r"""
const SN=[[2.67,'理智 100%',0],[2.85,'理智 70%',0],[4.45,'理智 3%',1],[5.95,'理智 40%',0],[6.4,'理智 0%',1],[DROP,'发疯模式 ON',1],[MK[0],'感叹号 ×99',1],[B(6),'朋友圈 爆了',0],[B(7),'情绪 已释放',2],[B(8),'真心话 0人信',1],[SNAPS[1],'“哈哈哈” ×50',1],[CLIMAX,'被认真听见',2]];
function bangs(G,a,t){if(a<=.01)return;const r=rng(13);for(let i=0;i<7;i++){const an=-2.6+i*.55+Math.sin(t*5+i)*.08,R=150+r()*70+Math.sin(t*9+i*2)*12;const x=G.hc[0]+Math.cos(an)*R,y=G.hc[1]+Math.sin(an)*R*.8;const sz=40+r()*30;
  ctx.save();ctx.globalAlpha=a*(.7+.3*Math.sin(t*12+i));ctx.translate(x,y);ctx.rotate(an+Math.PI/2);ctx.font='900 '+Math.round(sz)+'px '+SER;ctx.textAlign='center';ctx.fillStyle=['#fff',PC,'#ffd06a'][i%3];ctx.shadowColor=PC;ctx.shadowBlur=16;ctx.fillText(i%3==1?'？':'！',0,0);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(SN,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ba=endF*Math.min(1,win(t,4.45,5.9,.1,.2)+win(t,6.4,7.0,.08,.15)+win(t,DROP,WAVES[0],.08,.2)+win(t,LOCK,B(7),.1,.2));bangs(G,ba,t);
  if(t>=4.45&&t<5.9||t>=DROP&&t<DROP+.8)shards(t,t<5.9?4.45:DROP,G.hc[0],G.hc[1],endF,33,PC,18,700);}
"""),

dict(py='songchi', ep=28, name='松弛感', en='EASYGOING', epn='第二十八期', pc='#b8e878',
  grad=['#ffffff','#e8f8d0','#98d850'], glowC='rgba(184,232,120,.85)', kwCol='rgba(240,252,226,.92)', slamCol='#d0f0a8',
  kw='天塌不慌 · 稳如泰山 · 情绪稳定 · 被说佛系', words=['质疑','催促','比较','焦虑'],
  sky=SKY("['#0a1404','#2a4a14','#98d850']","['#080c06','#1a2814','#3a5a2a']","['#0e1408','#4a7a2a','#e0f8c0']"),
  M="{lean:-.06,hd:-.05,fax:60,fay:-10,bax:-40,bay:70}", Z="{lean:-.12,hd:-.1,fax:-30,fay:-150,bax:-70,bay:-150,exp:0}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='1', ECL='1',
  MKA="[{fax:60,fay:-10},{fax:100,fay:-60,lean:-.1},{fax:-30,fay:-150,bax:-70,bay:-150,lean:-.12}]",
  tags=['天塌不慌','稳如泰山','情绪稳定','被说佛系'],
  caps=[('有一种人',[('天塌了',0),('也不慌',1)]),('航班延误',[('他在',0),('喝茶',1)]),('方案被毙',[('他说',0),('再改呗',1)]),('别人焦虑',[('他在',0),('享受',1)]),('这就是',[('松弛感',1)]),
        ('不内耗',[('不',0),('攀比',1)]),('慢慢来',[('反而',0),('更快',1)]),
        ('大家',[('急得',0),('跳脚',1)]),('他',[('稳如',0),('泰山',1)]),
        ('好的一面',[('情绪',0),('稳定',1)]),('关键时刻',[('最',0),('靠得住',1)]),
        ('坏的一面',[('被说',0),('不上进',1)]),('被当成',[('没心',0),('没肺',1)]),
        ('松弛不是躺平',[('是',0),('想明白了',1)]),('该冲的时候',[('一点',0),('不含糊',1)])],
  cl=['松而不散','从容向前'], endCap=('慢下来',[('也能',0),('到达',1)]),
  tx=dict(i1='（伸个懒腰）',i2='完了完了要迟到了！',i3='不急，来得及~',i4='方案被毙了怎么办！',i5='再改呗~',pv='气定神闲',pvi=0,
     lab1=['航班延误','方案被毙','堵车两小时'],lab1c='#b8e878',mk=['喝杯茶~','再改呗~','听首歌~'],
     w0=['b','你怎么一点都不急！'],w1=['t','明天就要交了！'],lk='急也没用呀~',lkBig='你急你的，我稳我的',
     j0='我来，别慌',j1='有你在好安心~',stBig='情绪稳定，就是实力',
     lab4=['不上进','太佛系','没心没肺'],s0='我…是不是太慢了',s1='你怎么一点不着急？',slBig='松弛，被当成了躺平',
     d1='……慢一点，就错了吗',d2='松弛，但不松懈！',e1='好从容！',e2='佩服佩服！'),
  prop=STEPBOX+r"""
const HR=[[2.67,'心率 62',0],[2.85,'别人 心率 140',1],[4.45,'我 心率 62',0],[5.95,'别人 心率 160',1],[6.4,'我 心率 62',0],[DROP,'心率 62',2],[MK[0],'航班延误 3h',1],[MK[1],'方案 第5版',1],[MK[2],'堵车 2h',1],[B(6),'全组 心率 150',1],[B(7),'危机 已解除',2],[B(8),'考评：太佛系',1],[SNAPS[1],'被催 第9次',1],[CLIMAX,'松弛 且有力',2]];
function cup(G,a,t){if(a<=.01)return;const h=G.fh,s=G.s;const x=h[0]+6*s,y=h[1]-6*s;const P=[[x-16*s,y-24*s],[x-12*s,y+6*s],[x+12*s,y+6*s],[x+16*s,y-24*s]];ctx.save();ctx.globalAlpha=a*.8;ctx.fillStyle='#0e1408';ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();glow(P,1,PC,2.6,a,12,false);glow(circ(x+20*s,y-10*s,7*s,9*s,14),1,PC,2.2,a,8,false);
  for(let i=0;i<3;i++){const p=((t*.6+i/3)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI)*.8;ctx.strokeStyle='#e8f8d0';ctx.lineWidth=2.6;ctx.shadowColor=PC;ctx.shadowBlur=10;ctx.beginPath();for(let k=0;k<=8;k++){const yy=y-30*s-p*70-k*5,xx=x-8*s+i*8*s+Math.sin(k*.9+t*3+i)*6;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();ctx.restore();}}
function rush(a,t){if(a<=.01)return;for(let i=0;i<5;i++){const p=((t*1.2+i/5)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI);ctx.font='900 '+(36+i*4)+'px '+SER;ctx.fillStyle='#ff8a7a';ctx.shadowColor='#ff5a4a';ctx.shadowBlur=10;ctx.textAlign='center';ctx.fillText('急',900+Math.sin(i*2.1)*140,GY-260-p*240);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(HR,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ca=endF*((t>=2.67&&t<4.2)||(t>=4.45&&t<5.9)||(t>=DROP+1&&t<B(6))||(t>=B(7)+.15&&t<STAMP)||(t>=CLIMAX+1.5)?1:0);if(po.fay>-40&&po.fay<40)cup(G,ca,t);
  const ra=endF*Math.min(1,win(t,2.85,4.1,.15,.2)+win(t,5.95,6.4,.1,.1)+win(t,WAVES[0],B(7),.15,.2));rush(ra,t);}
"""),
]
