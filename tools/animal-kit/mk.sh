# usage: bash ../mk.sh  (inside ep dir) -> builds scene.js, main.js, contact sheet
set -e
cat ep.js ../common_tail.js > scene.js && bash build.sh
python3 snap.py ${1:-$(python3 -c "print(','.join(str(round(.3+i*0.6,2)) for i in range(48)))")}
python3 - <<'P'
from PIL import Image
import glob
fs=sorted(glob.glob('snaps/*.jpg'));W,H=480,270
s=Image.new('RGB',(W*8,H*((len(fs)+7)//8)))
for i,f in enumerate(fs):
  s.paste(Image.open(f).resize((W,H)),((i%8)*W,(i//8)*H))
s.save('sheet.jpg',quality=80)
P
