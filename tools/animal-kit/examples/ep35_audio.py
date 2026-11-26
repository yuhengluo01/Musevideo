import numpy as np,subprocess,wave
SR=44100;D=29.36;N=int(D*SR);r=np.random.default_rng(7)
raw=subprocess.run(["ffmpeg","-loglevel","error","-i","../bgm/BGM片段_21.9s-51.2s.mp3","-t",str(D),"-f","f32le","-ac","2","-ar","44100","-"],capture_output=True).stdout
bg=np.frombuffer(raw,np.float32).reshape(-1,2)[:N];bgm=np.zeros((N,2));bgm[:len(bg)]=bg
sfx=np.zeros(N)
def tt(L):return np.arange(int(L*SR))/SR
def env(L,a=.004,d=.25):t=tt(L);return np.minimum(t/a,1)*np.exp(-t/d)
def lp(x,k):k=max(1,int(k));return np.convolve(x,np.ones(k)/k,'same')
def noise(L):return r.standard_normal(int(L*SR))
def add(t,x,g=1.0):
  i=int(t*SR);n=min(len(x),N-i)
  if n>0:sfx[i:i+n]+=x[:n]*g
# ---- palette ----
def boom(L=1.2):t=tt(L);f=50+110*np.exp(-t*16);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(L,.002,.32)+.25*noise(L)*env(L,.001,.04)
def thud(L=.35):t=tt(L);f=90+80*np.exp(-t*30);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(L,.001,.09)+.4*lp(noise(L),6)*env(L,.001,.03)
def click(L=.05):return noise(L)*env(L,.0005,.006)
def chime(f,L=.7,g=1):t=tt(L);return g*(np.sin(2*np.pi*f*t)+.35*np.sin(2*np.pi*f*2.01*t)+.15*np.sin(2*np.pi*f*3.02*t))*env(L,.002,.22)
def dingdong():return np.concatenate([chime(1318,.28),chime(1046,.6)])
def heartbeat():t=tt(.18);b=np.sin(2*np.pi*(60+40*np.exp(-t*30))*t)*env(.18,.002,.05);g=np.zeros(int(.12*SR));return np.concatenate([b,g,b*.8])
def whoosh(L=.4,up=True):x=lp(noise(L),18);e=np.sin(np.linspace(0,np.pi,len(x)))**2;return x*e*.8
def riser(L):t=tt(L);f=200*np.exp(np.log(8)*t/L);return (np.sin(2*np.pi*np.cumsum(f)/SR)*.4+lp(noise(L),4)*.5)*(t/L)**2
def glass(L=.9):t=tt(L);x=sum(np.sin(2*np.pi*f*t+r.random()*6) for f in [2600,3400,4300,5200,6100])/5;return (x*env(L,.001,.18)+noise(L)*env(L,.001,.03)*.6)
def arpeggio(base=523,n=8,step=.06):
  out=np.zeros(int((n*step+.8)*SR));sc=[1,1.25,1.5,2,2.5,3,4,5]
  for i in range(n):
    x=chime(base*sc[i%8],.7,.8);s=int(i*step*SR);m=min(len(x),len(out)-s);out[s:s+m]+=x[:m]
  return out
def pad(L=2.5,f=262):t=tt(L);x=sum(np.sin(2*np.pi*f*m*t) for m in [1,1.25,1.5,2])/4;return x*np.minimum(t/.3,1)*np.exp(-t/1.4)
def blip(f=880,L=.12):t=tt(L);fr=f*(1+.5*np.exp(-t*40));return np.sin(2*np.pi*np.cumsum(fr)/SR)*env(L,.002,.05)
def rain(L):return lp(noise(L),3)*.25
# episode-specific (翻旧账)
def drawer(L=.5):t=tt(L);return lp(noise(L),10)*(.5+.5*np.sin(2*np.pi*35*t))*np.sin(np.linspace(0,np.pi,len(t)))*.8
def paperflip(L=.18):return lp(noise(L),2)*env(L,.002,.04)
def flurry(L=1.0):
  out=np.zeros(int(L*SR))
  for i in range(14):
    x=paperflip(.12)*r.uniform(.4,1);s=int(r.uniform(0,L-.15)*SR);out[s:s+len(x)]+=x
  return out
def stamp():return thud(.3)*1.2+np.concatenate([click(.03)*.8,np.zeros(int(.27*SR))])
def boing(L=.6):t=tt(L);f=200+500*(t/L);return np.sin(2*np.pi*np.cumsum(f)/SR)*np.sin(2*np.pi*7*t)*.5*env(L,.005,.4)
def shutter():return np.concatenate([click(.02),np.zeros(int(.04*SR)),click(.03)*.7])
def avalanche(L=1.6):return lp(noise(L),25)*np.exp(-tt(L)*2)*1.2+flurry(L)*.8
def lockclick():return np.concatenate([click(.02)*1.2,np.zeros(int(.05*SR)),thud(.2)*.6])
BAR=2.666626;B=lambda n:(n-1)*BAR
DROP=8.0;MK=[11.343,12.016,12.678];WAVES=[13.351,14.013];LOCK=14.675;JABS=[16.01,16.672];STAMP=17.345;SNAPS=[18.68,19.342];SLAM=20.016;CL=24.0
def dig(L=.4):return lp(noise(L),8)*np.abs(np.sin(2*np.pi*12*tt(L)))*env(L,.01,.15)*1.2
def peek(L=.2):t=tt(L);f=600+800*(t/L);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(L,.005,.08)
def thunder(L=1.4):return lp(noise(L),30)*np.exp(-tt(L)*2.5)*1.6+boom(L)*.5
def snore(L=.8):t=tt(L);return lp(noise(L),20)*(.5+.5*np.sin(2*np.pi*1.2*t))*.6
def roll(L=1.0):t=tt(L);return np.sin(2*np.pi*50*t)*(.5+.5*np.sin(2*np.pi*8*t))*env(L,.05,.6)*.7
def swipe(L=.18):x=lp(noise(L),4);return x*np.sin(np.linspace(0,np.pi,len(x)))*.7
def notif():return np.concatenate([chime(1568,.12,.7),chime(2093,.3,.7)])
def alarm(L=.8):t=tt(L);x=np.sign(np.sin(2*np.pi*1800*t))*(np.sin(2*np.pi*8*t)>0)*.3;return x*np.minimum(t/.01,1)
def yawn(L=.9):t=tt(L);f=300-120*t/L;return np.sin(2*np.pi*np.cumsum(f)/SR)*np.sin(np.linspace(0,np.pi,len(t)))*.4+lp(noise(L),30)*.3
def typing(L=1.0):
  out=np.zeros(int(L*SR))
  for i in range(int(L*14)):
    x=click(.03)*r.uniform(.4,1);s=int(i/14*SR+r.uniform(0,.02)*SR);out[s:s+len(x)]+=x[:max(0,len(out)-s)]
  return out
def clap(L=.9):
  out=np.zeros(int(L*SR))
  for i in range(10):
    x=lp(noise(.08),3)*env(.08,.001,.02);s=int(r.uniform(0,L-.1)*SR);out[s:s+len(x)]+=x
  return out
def pop():t=tt(.15);return np.sin(2*np.pi*(400+900*t/.15)*t)*env(.15,.002,.05)
add(DROP-1.4,riser(1.4),.45);add(DROP,boom(1.4),1)
add(LOCK,boom(1.1),.9)
add(STAMP,boom(1.3),.9);add(STAMP+.05,arpeggio(659,8,.05),.4)
for i,k in enumerate(SNAPS):add(k,thud(.3),.7);add(k,heartbeat(),.4)
add(SLAM-.3,whoosh(.6),.8);add(SLAM,boom(1.6),1);add(SLAM,glass(),.4)
add(B(9),rain(CL-B(9)),.5);add(B(9)+.9,heartbeat(),.4)
add(CL-.55,riser(.55),.4);add(CL,boom(1.4),.9);add(CL,whoosh(.5),.6);add(CL+.08,arpeggio(523,8,.06),.45);add(CL+.1,pad(3),.45);add(CL+1.0,glass(.6),.3)
add(27.45,dingdong(),.4)
add(.25,dingdong(),.5)
for i in range(4):add(7.0+i*.2,stamp(),.6)
add(.6,whoosh(.4),.4);add(2.85,notif(),.35);add(4.45,thud(.3),.6);add(4.45,paperflip(),.5);add(5.95,chime(440,.4),.3);add(6.4,typing(.8),.35)
for i,k in enumerate(MK):add(k,paperflip(.2),.6);add(k,pop(),.35)
add(WAVES[0],chime(440,.6),.3);add(WAVES[1],stamp(),.4);add(LOCK,boing(.5),.35)
for i,k in enumerate(JABS):add(k,chime([784,988][i],.5),.4)
add(SLAM,flurry(1.0),.5);add(CL+.2,paperflip(),.5);add(CL+.6,chime(1046,.8),.4)
s=sfx/(np.abs(sfx).max()+1e-9)*.9
mix=bgm*.8+s[:,None]*.42;mix=np.tanh(mix*1.1);mix/=np.abs(mix).max();mix*=.9
with wave.open("audio.wav","wb") as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype(np.int16).tobytes())
print('ok')
