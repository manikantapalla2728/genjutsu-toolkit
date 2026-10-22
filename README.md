# GENJUTSU — Viral AI Character Swap Toolkit & Sources

A high-performance, mobile-first companion resource page built for **[@skill_circuit](https://instagram.com/skill_circuit)**. 

This page serves as the direct link sent via Instagram automated direct messages whenever followers comment **"GENJUTSU"** on your viral 3-Character Genjutsu Video Reel.

---

## 🎯 What This Kit Contains

1. **GENJUTSU AI Tools**:
   - **Skill Circuit Genjutsu (Higgsfield AI)**: Dedicated motion transfer model for multi-character swaps.
   - **Pollo AI (Recast Tool)**: Alternative motion transfer and character replacement tool.
2. **Downloadable Reference Video (`<<<video_1>>>`)**:
   - The exact 20.17-second high-definition choreography clip (`Genjutsu_reference_video.mp4`) ready for in-browser playback and 1-click download.
3. **Character Position Mapping (`<<<image_1>>>`, `<<<image_2>>>`, `<<<image_3>>>`)**:
   - **Middle Character (`<<<image_1>>>`)**: Girl in center with sunglasses (Primary hero slot).
   - **Right Character (`<<<image_2>>>`)**: Girl on screen-right.
   - **Left Character (`<<<image_3>>>`)**: Girl on screen-left in green jacket.
4. **Interactive Prompt Kit (1-Click Copy)**:
   - **Original Prompt**:
     ```text
     In the reference <<<video_1>>> Instead of 1st girl charecter who in the middle replace the <<<image_1>>> ,instead of 2nd girl who in the right side charecter replace the <<<image_2>>> , instead of 3rd girl left side charecter replace the <<<image_3>>>
     ```
   - **Enhanced Prompt**:
     ```text
     In reference video <<<video_1>>>, replace the middle girl with <<<image_1>>>, replace the girl on the right with <<<image_2>>>, and replace the girl on the left with <<<image_3>>>. Maintain seamless motion transfer, realistic lighting, and exact camera angles.
     ```
5. **Step-by-Step Creation Walkthrough**:
   - Clear instructions from downloading the video to rendering the final Reel.

---

## 📁 Repository Structure

```
d:/new content/
├── index.html                   # Mobile-first semantic single-page web app
├── styles.css                   # Obsidian/Lime viral creator design system
├── script.js                    # 1-click copy engine, interactive slots & toast feedback
├── README.md                    # Setup, GitHub Pages deployment & Instagram automation
├── .gitignore                   # Clean git ignore configuration
└── assets/
    ├── images/
    │   ├── reference_poster.jpg # Video poster thumbnail
    │   ├── higgsfield_genjutsu.jpg # Screenshot of Genjutsu tool
    │   └── logo.png             # Brand mark
    └── videos/
        └── reference_video.mp4  # 20-second reference video for character swap
```

---

## 🚀 Free Deployment to GitHub Pages

You can host this entire site for free using GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log in to [github.com/new](https://github.com/new).
2. Repository name: `genjutsu-toolkit` (or `sources`).
3. Set visibility to **Public** and click **Create repository**.

### Step 2: Push the Files
Open PowerShell in `d:\new content` and run:

```bash
git add .
git commit -m "feat: update to Skill Circuit Genjutsu toolkit with comment keyword GENJUTSU"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/genjutsu-toolkit.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub &rarr; **Settings** &rarr; **Pages** (in left sidebar).
2. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**.

Your live site will be ready at:
```text
https://<YOUR_GITHUB_USERNAME>.github.io/genjutsu-toolkit/
```

---

## 🤖 Instagram Comment-to-DM Automation Setup

Whenever someone comments on your Reel requesting the tools or prompt, send them this website automatically.

### ManyChat Setup
1. Open [ManyChat](https://manychat.com) and connect your `@skill_circuit` Instagram account.
2. Go to **Automation** &rarr; **New Flow**.
3. Choose Trigger: **"User comments on your Post or Reel"**.
4. Select your viral **Genjutsu** Reel.
5. Set keyword: **`GENJUTSU`** (plus optional aliases: `PROMPT`, `SWAP`, `TOOLS`).
6. Set the Automated DM message:
   ```text
   Hey! 🔥 Thanks for your comment!

   Here are all the sources to make the viral character swap video:
   👉 https://<YOUR_GITHUB_USERNAME>.github.io/genjutsu-toolkit/

   Inside you will find:
   ✅ The 20s reference video (1-click download)
   ✅ 1-click copy of the exact Skill Circuit Genjutsu prompt
   ✅ Direct links to Higgsfield AI & Pollo AI
   ✅ Interactive upload guide for all 3 character slots

   Tag @skill_circuit when you post your video so we can repost it! 🚀
   ```
7. Click **Publish**.

---

## 📱 Mobile-First Features

- **Obsidian / Creator Lime Aesthetic**: Sleek dark mode tuned for mobile screens.
- **Floating Action Bar**: Quick "Copy Prompt" and "Get Video" buttons always accessible at the bottom of mobile phones.
- **Zero Heavy Dependencies**: Pure HTML5, CSS3, and Vanilla JS. Loads in milliseconds even on mobile cellular connections.
- **Offline / Local Compatible**: Uses relative paths (`./assets/...`) so you can test it offline by simply double-clicking `index.html`.
