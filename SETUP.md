# MasterAptitude Video Template — Setup Guide

Follow these steps once on your machine. After that, every new question follows the 5-step workflow in `_template/README.md`.

> **About this folder:** the zip you received unpacks to a folder named `MasterAptitude/` containing `_template/` and this `SETUP.md`. Unzip it **anywhere you like** — Desktop, Documents, home folder, all fine. Keep the folder name `MasterAptitude`; that's the only fixed thing.
>
> **Path convention:** from Step 4 onwards, every command assumes your terminal's current directory is the MasterAptitude folder. You'll open a terminal there in Step 4 and stay in it.

Estimated setup time: **10–15 minutes**.

---

## Step 1 — Install Node.js (v18 or newer)

Needed for HyperFrames CLI.

**macOS (via Homebrew):**
```bash
brew install node
```

**macOS (manual):** Download from https://nodejs.org/en/download

**Linux (Debian/Ubuntu):**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows (via winget — built into Windows 10/11):**
```powershell
winget install OpenJS.NodeJS.LTS
```
Then **close and reopen** PowerShell so `node` is on the PATH.

**Windows (manual):** Download the LTS .msi installer from https://nodejs.org/en/download and run it.

**Verify (any OS):**
```bash
node --version    # should print v18.x or higher
npm --version
```

---

## Step 2 — Install Python 3.10+

Needed for the ElevenLabs transcription script.

**macOS:**
```bash
brew install python@3.11
```

**Linux:**
```bash
sudo apt-get install -y python3 python3-venv python3-pip
```

**Windows (via winget):**
```powershell
winget install Python.Python.3.11
```
Then **close and reopen** PowerShell.

**Windows (manual):** Download from https://www.python.org/downloads/. During install, **tick "Add python.exe to PATH"**.

**Verify:**
```bash
python3 --version    # macOS / Linux — should print 3.10 or higher
python --version     # Windows — should print 3.10 or higher
```

---

## Step 3 — Create an ElevenLabs account + get API key

1. Sign up at https://elevenlabs.io
2. Go to **Profile → API Keys** (top-right avatar menu)
3. Click **Create API Key**, copy it (starts with `sk_...`)

---

## Step 4 — Open a terminal in your MasterAptitude folder + save the API key

### 4A. Open a terminal inside MasterAptitude

Find wherever you unzipped the folder, then open a terminal *inside* it:

- **macOS Finder:** right-click the `MasterAptitude` folder → **Services → New Terminal at Folder**. (If you don't see it, enable it once in System Settings → Keyboard → Keyboard Shortcuts → Services.)
- **Linux file manager:** right-click inside the `MasterAptitude` folder → **Open in Terminal**.
- **Windows File Explorer:** open the `MasterAptitude` folder, click the address bar, type `powershell`, press **Enter**.

Or `cd` manually from any terminal:
```bash
cd /path/to/wherever/you/unzipped/MasterAptitude
```
```powershell
cd C:\path\to\wherever\you\unzipped\MasterAptitude
```

**Verify (any OS):**
```bash
pwd
ls _template SETUP.md
```
```powershell
pwd
dir _template, SETUP.md
```
You should see `_template/` and `SETUP.md` listed. **Keep this terminal open** for the rest of setup.

### 4B. Paste your ElevenLabs key into `.env`

A `.env` file already exists at the MasterAptitude root (next to `SETUP.md`). It ships with an empty `ELEVENLABS_API_KEY=` line — you just need to fill in your key.

> **Heads up:** `.env` is a hidden file (the leading dot). On macOS Finder press `Cmd + Shift + .` to reveal it, or just use the terminal editors below — they don't care.

**macOS / Linux:**
```bash
nano .env
```

**Windows (PowerShell):**
```powershell
notepad .env
```

You'll see a few comment lines (starting with `#`) and one editable line at the bottom:
```
ELEVENLABS_API_KEY=
```
Click right after the `=` and paste your key (starts with `sk_...`). The line should end up looking like:
```
ELEVENLABS_API_KEY=sk_your_actual_key_here
```
Save and close. In nano: `Ctrl+O`, `Enter`, `Ctrl+X`.

**Verify:**
```bash
grep ELEVENLABS_API_KEY .env       # macOS / Linux
```
```powershell
Select-String ELEVENLABS_API_KEY .env    # Windows
```
You should see the line with your key — not an empty `=`.

> **Don't share or commit this file** after you fill it in. The key is tied to your ElevenLabs account.

---

## Step 5 — Create a Python venv for transcription

**macOS / Linux:**
```bash
python3 -m venv ~/aptitude-venv
source ~/aptitude-venv/bin/activate
pip install elevenlabs python-dotenv
deactivate
```

**Verify:**
```bash
source ~/aptitude-venv/bin/activate
python -c "import elevenlabs, dotenv; print('OK')"
deactivate
```

**Windows (PowerShell):**
```powershell
python -m venv $HOME\aptitude-venv
$HOME\aptitude-venv\Scripts\Activate.ps1
pip install elevenlabs python-dotenv
deactivate
```

> **Note:** If PowerShell blocks `Activate.ps1` with an execution-policy error, run this **once** (as the current user, not admin):
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

**Verify:**
```powershell
$HOME\aptitude-venv\Scripts\Activate.ps1
python -c "import elevenlabs, dotenv; print('OK')"
deactivate
```

Note the venv path (`~/aptitude-venv` on mac/Linux, `%USERPROFILE%\aptitude-venv` on Windows) — you'll reference this in Step 3 of the video workflow.

---

## Step 6 — Verify HyperFrames CLI works

No install needed — `npx` fetches it on first run.

```bash
npx hyperframes --help
```

First run will download HyperFrames (~30s). After that it's cached.

---

## Step 7 — Smoke test

Confirm everything's wired up. **Run this from inside the MasterAptitude folder** (the terminal you opened in Step 4 is already there).

**macOS / Linux:**
```bash
npx hyperframes --version
source ~/aptitude-venv/bin/activate
python -c "from dotenv import load_dotenv, find_dotenv; import os; load_dotenv(find_dotenv(usecwd=True)); print('Key loaded:', bool(os.getenv('ELEVENLABS_API_KEY')))"
deactivate
```

**Windows (PowerShell):**
```powershell
npx hyperframes --version
$HOME\aptitude-venv\Scripts\Activate.ps1
python -c "from dotenv import load_dotenv, find_dotenv; import os; load_dotenv(find_dotenv(usecwd=True)); print('Key loaded:', bool(os.getenv('ELEVENLABS_API_KEY')))"
deactivate
```

If both commands print without errors and you see `Key loaded: True`, you're ready.

> The `find_dotenv(usecwd=True)` call walks up from the current directory looking for `.env`. As long as you run Python from inside the MasterAptitude folder (or any subfolder of it), it finds your key automatically — no hardcoded paths.

---

## Step 8 — Build your first video

Open your coding agent (Claude Code, Codex, Cursor, Aider, etc.) inside the MasterAptitude folder and say:

> "Read `_template/README.md` and `_template/design.md`, then build a video for `<Topic>/Beginner/ques1/`. Here are the question + solution screenshots: [attach images]."

The agent will walk through the 5-step pipeline:
1. Generate the voiceover script
2. You manually generate the MP3 in elevenlabs.io
3. The agent transcribes it
4. The agent generates a storyboard
5. The agent builds the HTML composition and renders the MP4

### ElevenLabs voiceover settings (Step 2 of the workflow)

When you paste the script into elevenlabs.io:
- **Voice:** Striver Professional (Voice ID: `arlADLNClXgT4QpDXygV`)
- **Model:** `eleven_multilingual_v2`
- **Stability:** `0.65`
- **Similarity boost:** `0.85`
- **Style:** `0.25`
- **Speed:** `0.95`
- **Use speaker boost:** ON

Save the resulting MP3 as `voiceover.mp3` inside the question folder and tell the agent "go ahead".

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npx hyperframes` hangs or fails | Check Node version (`node -v` must be ≥18). Clear npm cache: `npm cache clean --force`. |
| Transcription script errors with "401 Unauthorized" | The `ELEVENLABS_API_KEY` in the `.env` at the MasterAptitude root is wrong or expired. Regenerate at elevenlabs.io. |
| Preview page is blank at `localhost:3002` | Make sure you're running `npx hyperframes preview` from inside the question folder (the one with `index.html`), not from the MasterAptitude root. |
| Render produces a black video | Check that `voiceover.mp3` exists in the question folder and `data-duration` on the `<audio>` tag matches its real length. |
| `sed: invalid option` on Linux | Use `sed -i` (no `''`) instead of `sed -i ''` — the empty string is macOS-only. |
| Windows: `Activate.ps1 cannot be loaded` | Run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` once, then retry. |
| Windows: `node`, `python`, or `npx` "not recognized" | The installer didn't add it to PATH, or you didn't reopen PowerShell after install. Close every PowerShell window and open a fresh one. |
| Windows: paths with spaces (e.g. `C:\Users\First Last\Desktop\`) | Always quote them: `cd "C:\Users\First Last\Desktop\MasterAptitude"`. Avoid putting the project under OneDrive folders — sync can break the preview server. |

---

That's it. Read `_template/README.md` next for the full workflow.
