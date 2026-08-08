set -e
SRC="/c/CDPro/Polcero/photos/all_polcero_robots.jpg"
OUT="public/media"
# Seamless in/out zoom via sinusoid on output-frame index (no temp concat).
VF="scale=3072:-1,zoompan=z='1+0.10*sin(on*PI/200)':d=200:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':fps=25:s=1280x720"
ffmpeg -y -loop 1 -i "$SRC" -vf "$VF" -t 8 -an -c:v libx264 -profile:v main -crf 30 -preset veryslow -movflags +faststart -pix_fmt yuv420p "$OUT/hero-loop.mp4"
ffmpeg -y -loop 1 -i "$SRC" -vf "$VF" -t 8 -an -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 "$OUT/hero-loop.webm"
ls -la "$OUT"/hero-loop.* | awk '{print $5, $9}'
