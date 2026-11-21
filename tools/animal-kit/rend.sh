set -e
rm -rf parts && python3 render.py && ls parts/s*.mp4 | grep -v tmp | sed "s/.*/file '&'/" > list.txt && ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt -c copy v.mp4 && ffmpeg -y -loglevel error -i v.mp4 -i audio.wav -c:v copy -c:a aac -b:a 192k -shortest OUT.mp4
ffprobe -v error -show_entries format=duration,size -of csv=p=0 OUT.mp4
