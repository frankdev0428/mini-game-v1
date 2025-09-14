# 🎮 STEM Fighting Game  

An educational + fun browser game built with **Phaser 3**, created for the hackathon.  
Players must avoid obstacles, complete all required courses, and reach the graduation goal 🎓.  

---

## 🚀 Features
- 🧍 **Player Movement** – smooth 4-directional controls.  
- ❄️ **Course Obstacles** – moving ice cubes represent classes (Math, Science, History, English, PE).  
- 📦 **Hazards** – crates that reduce health when touched.  
- ❤️ **Life System** – player starts with 5 hearts; lose all = Game Over.  
- 🎯 **Goal** – reach the escape door after completing all classes to graduate.  
- 🎉 **Win Scene** – shows a congratulatory message, trophy, and list of completed courses.  
- 💀 **Game Over Scene** – displays failed courses and retry option.  

---

## 🛠️ Tech Stack
- [Phaser 3](https://phaser.io/phaser3) – game engine  
- JavaScript (ES6 modules)  
- HTML5 + CSS  
- Node.js (for local development)  

---

## 📂 Project Structure
mini-game/
├── assets/ # Sprites, images, tilemaps
├── src/
│ ├── StartScene.js # Start menu
│ ├── FightScene.js # Main gameplay
│ ├── WinScene.js # Winning screen
│ ├── GameOverScene.js # Game over screen
│ └── main.js # Game config / entry point
├── index.html
├── package.json
└── .gitignore

yaml
Copy code

---

## 🎮 How to Play
1. Use **Arrow Keys** ⬅️⬆️➡️⬇️ to move your character.  
2. Avoid crates 📦 (they remove lives).  
3. Touch ice cubes ❄️ to pass each class.  
4. Once all classes are passed ✅, reach the **top-right escape door** 🚪.  
5. Win by graduating 🎓 or lose if you run out of lives 💀.  

---

## 🏗️ Setup & Run
Clone the repo:
```bash
git clone https://github.com/frankdev0428/mini-game-v1.git
cd hackathonProject
Install dependencies:

bash
Copy code
npm install
Run local dev server:

bash
Copy code
npm run dev
Open in your browser:

arduino
Copy code
http://localhost:5173
📸 Screenshots
(Add game screenshots here)

🙌 Credits
Developed by Frank Dev (Hoang Le)

Built with Phaser 3

Hackathon project 2025 🚀
