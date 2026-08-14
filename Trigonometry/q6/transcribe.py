import os, json
from dotenv import load_dotenv, find_dotenv
from elevenlabs import ElevenLabs

load_dotenv(find_dotenv(usecwd=True))
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

audio_path = next(
    (p for p in ("voiceover.mp3", "voiceover.wav") if os.path.exists(p)),
    None
)
if audio_path is None:
    raise FileNotFoundError("No voiceover.mp3 or voiceover.wav found in the question folder")

with open(audio_path, "rb") as f:
    result = client.speech_to_text.convert(
        file=f,
        model_id="scribe_v2",
        timestamps_granularity="word"
    )

PAUSE = 0.3
phrases = []
current = []
start_t = None
last_end = 0
for w in result.words:
    if w.type != "word":
        continue
    if start_t is None:
        start_t = w.start
    if last_end and (w.start - last_end) > PAUSE and current:
        phrases.append({"start": start_t, "end": last_end, "text": " ".join(current)})
        current, start_t = [], w.start
    current.append(w.text)
    last_end = w.end
if current:
    phrases.append({"start": start_t, "end": last_end, "text": " ".join(current)})

with open("transcript.json", "w") as f:
    json.dump({
        "duration": phrases[-1]["end"],
        "phrases": phrases,
        "words": [
            {"text": w.text, "start": w.start, "end": w.end, "type": w.type}
            for w in result.words
        ]
    }, f, indent=2)

with open("transcript.txt", "w") as f:
    for p in phrases:
        mm_ss_s = f"{int(p['start']//60):02d}:{p['start']%60:05.2f}"
        mm_ss_e = f"{int(p['end']//60):02d}:{p['end']%60:05.2f}"
        f.write(f"[{mm_ss_s} -> {mm_ss_e}]  {p['text']}\n")

print("done", audio_path, phrases[-1]["end"])
