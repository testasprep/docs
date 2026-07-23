# TestAS Mastery — Official Documentation Portal

This repository contains the source code for the official documentation site of **TestAS Mastery** — a premier, browser-based exam preparation platform for the TestAS (Test for Academic Studies) exam, engineered to support international students applying to German universities.

The live application is accessible at: **[testasprep.netlify.app](https://testasprep.netlify.app)**
The documentation is accessible at: **[testasprepdocs.vercel.app/](https://testasprepdocs.vercel.app)**

---

## 🚀 Key Modules & Features

### 🧩 1. Core Logic Module (Procedural & Dynamic)
Unlike static PDFs or cyclic question banks, TestAS Mastery uses **dynamic question engines** that generate fresh, backtrack-verified practice puzzles on every load. This builds authentic cognitive problem-solving skills rather than rote memory.
*   **Latin Square Puzzles**: Solved via true randomized generation with backtracking-verified unique solutions. Features two core modes:
    *   *Practice Mode*: Select custom board sizes (4×4 up to 7×7) and difficulty levels to learn at your own pace.
    *   *Quiz Mode*: The authentic exam-style format where you isolate and find a single missing cell.
    *   *Difficulty Configuration*: **Easy, Medium, Hard, Expert**. The selector dynamically scales grid size and clue density constraints.
*   **Figure Sequences**: Visual pattern-recognition puzzles governed by dynamic translation, scaling, and rotation rules.
    *   *Difficulty Configuration*: **Easy, Medium, Hard, Expert, Master**. Controls the complexity and number of interleaved rule transformations.
    *   *Duplicate Suppression*: Built-in logic filters out previously shown patterns in a practice session to maintain challenge variety.
*   **Mathematical & Quantitative Reasoning**: A comprehensive system covering equation systems, quantitative logic relationships, and numerical sequence patterns.
    *   *Difficulty Configuration*: **Easy, Medium, Advanced, Expert, Master** (plus an 'All' difficulty view). Features live per-session accuracy counters.

### 🔬 2. Subject-Specific Modules (No Manual Level Selectors)
Tailored preparation modules matching the official TestAS subject streams. These modules do not feature manual difficulty toggles, but are instead structured into core syllabus topics and conceptual case studies:
*   **Engineering Module**: Organized by key engineering subtests and subjects:
    *   *Vector Mechanics*: Statics, materials science, and vector mechanics problems.
    *   *Thermodynamics*: Temperature systems, thermal expansion, and gas laws.
    *   *Electrical Circuits*: Direct and alternating current networks, electrical loops, and signals.
    *   *Material Science*: Stress, strain, and material properties.
    *   *Interactive Case Studies*: Real-time loading diagrams and schematics testing mechanical calculations and diagram comprehension.
*   **Medicine Module**: Organized by critical medical and scientific subjects:
    *   *Anatomy*: Organ systems, skeletal logic, and cardiovascular structures.
    *   *Physiology*: Respiratory cycles, nervous systems, and endocrine pathways.
    *   *Biology*: Cell biology, genetics, and immunology.
    *   *Biochemistry*: Enzyme reaction kinetics and metabolic pathways.
    *   *Medical Physics*: Fluid dynamics, radiation physics, and electricity.
    *   *Sociology & Psychology*: Medical ethics, research analysis, and sociological study deduction.
    *   *Interactive Case Studies*: Includes oxygen dissociation curves, pregnancy phenotype grids, metabolic pathway charts, and an interactive Sinoatrial (SA) Node simulator.

### ⏱️ 3. Time-Bound Exam Simulator
*   Simulates the authentic timing constraints of the real TestAS exam: **25 minutes per subtest** for the Core Module, and a full **90-minute run** for Subject-Specific modules.
*   Visual countdown timer with an active flashing red **low-time warning** under 2 minutes to train pacing and stress management.
*   Detailed review dashboard logging session history, correct/wrong answers, skipped questions, and comprehensive **speed-per-question metrics**.

### 📅 4. Everyday Task Module
*   A habit-forming module that refreshes daily, serving exactly **30 cognitive tasks** distributed as follows to maintain daily consistency:
    *   *10 Math Questions*: 1 easy, 2 medium, 3 advanced, 2 expert, 2 master.
    *   *10 Figure Sequences*: 1 easy, 2 medium, 3 advanced, 2 expert, 2 master.
    *   *10 Latin Squares*: 1 easy (4×4), 2 medium (5×5), 4 hard (5×5), 3 expert (6×6 or 7×7).
*   Persistent daily streak tracking to keep learners consistently engaged and exam-ready.

### 📊 5. Dashboard & Analytics
*   **Interactive Dashboard**: Real-time progress analytics tracking XP levels (Novice through Grandmaster), daily streak counters, weekly snapshot comparisons, and personal best records.
*   **Cognitive Profile Analytics**: Visualizes performance vectors across six key dimensions: **Figure Reasoning, Math Logic, Verbal Logic, Speed, Accuracy, and Consistency**.

### 🧠 6. AI Tutor & Study Buddy
*   **Per-Question Explanations**: A step-by-step breakdown explaining the logical pathways behind every correct answer.
*   **AI Study Buddy Panel**: A global conversational helper available on every page to answer strategy questions, explain formulas, or teach pattern-recognition techniques.
*   **Premium Infrastructure**: Runs entirely on production-grade, paid enterprise AI model pipelines for high reliability, accurate reasoning, and low response latency.

### 📚 7. Secure Study Library
*   **Encrypted Streaming**: Study materials are streamed dynamically with DRM-style encryption, preventing raw file downloads.
*   **Optimized Mobile UX**: Panning and zoom-locked dragging make it easy to read dense diagrams and text on smaller mobile screens.
*   **In-Document Search**: A debounced search engine highlights keywords instantly across the document.
*   **Trial Limits**: Free accounts can read sample chapters to preview the material, while premium accounts unlock unlimited pages.

### 🌍 8. Global Accessibility & Settings
*   **100+ Languages**: The entire platform is localized with flag-coded options to support students from any linguistic background.
*   **Dual-Theme Interface**: Seamless toggle between sleek Dark Mode and clean Light Mode.
*   **Interactive Audio**: Toggleable sound feedback and audio cues for correct/incorrect answers, button interactions, and victory states.

---

## ⚖️ Legal Disclaimer

*TestAS Mastery is an independent preparation platform. It is not affiliated with, endorsed by, or associated with ITB Consulting GmbH or g.a.s.t. All official TestAS trademarks are the property of their respective owners.*
