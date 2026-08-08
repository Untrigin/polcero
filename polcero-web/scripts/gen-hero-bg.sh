set -e
SRC="/c/CDPro/Polcero/photos/polcero-robot.mp4"
OUT="public/media"
ffmpeg -y -i "$SRC" -an -c:v libx264 -profile:v main -crf 31 -preset veryslow -movflags +faststart -pix_fmt yuv420p "$OUT/hero-bg.mp4"
ffmpeg -y -i "$SRC" -an -c:v libvpx-vp9 -crf 41 -b:v 0 -row-mt 1 "$OUT/hero-bg.webm"
ffmpeg -y -i "$SRC" -vf "select=eq(n\,12)" -vframes 1 -q:v 3 "$OUT/hero-bg-poster.jpg"
ls -la "$OUT"/hero-bg.* "$OUT"/hero-bg-poster.* | awk '{print $5, $9}'
