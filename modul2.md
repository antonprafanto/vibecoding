# 🚀 Module 2: Prompting & AI Collaboration - VibeCoding Bootcamp

## 📋 Ringkasan Modul
Setelah setup foundation di Module 1, sekarang waktunya menguasai **seni berkomunikasi dengan AI** untuk development! Module ini akan mengajari kamu cara "ngobrol" dengan AI secara profesional untuk bikin aplikasi web dan SaaS. Kamu akan belajar menulis Product Requirements Document (PRD) dengan AI, teknik prompt engineering yang powerful, dan cara bikin workflow AI yang bisa dipakai berulang-ulang.

## 🎯 Learning Objectives
- [ ] **Menulis PRD (Product Requirements Document)** yang jelas dengan bantuan AI
- [ ] **Menguasai prompt engineering fundamentals** untuk coding tasks
- [ ] **Membuat structured prompts** untuk UI design, API development, dan system architecture  
- [ ] **Membangun modular prompt chains** yang reusable untuk berbagai project
- [ ] **Menggunakan system prompting** dan Model Context Protocol (MCP) untuk workflow yang konsisten
- [ ] **Berkomunikasi efektif** dengan AI untuk development mulai dari ide sampai deployment

---

## 📚 Materi Pembelajaran

### 🔥 **Bagian 1: Product Requirements Document (PRD) dengan AI**

#### 💡 Konsep Dasar: Mengapa PRD Penting di Era AI?

**Tradisional PRD vs AI-First PRD:**
```
❌ PRD Lama: Dokumen panjang yang nggak dibaca developer
✅ AI-First PRD: Conversation starter untuk collaborative building

❌ Detail sampai pixel: "Button harus 32px dengan border-radius 8px"  
✅ Intent-focused: "User perlu cara mudah untuk konfirmasi action penting"

❌ Technical jargon: "Implement REST API with JWT authentication"
✅ User-centric: "User bisa login sekali dan tetap login sampai logout manual"
```

**🎯 Filosofi AI-First PRD:**
> "PRD bukan blueprint yang kaku - tapi conversation starter yang evolving bersama AI!"

#### 🛠️ Template PRD Siap Pakai untuk Pemula

```markdown
# 📱 [Nama Aplikasi] - AI-First PRD

## 🎯 Problem Statement
**Siapa yang mengalami masalah:** [Target user specific]
**Masalah apa:** [Pain point yang jelas dan measurable]  
**Kenapa masalah ini penting:** [Impact kalau nggak diselesaikan]
**Contoh konkret:** [Real scenario yang relatable]

## 💡 Solution Overview  
**Core solution:** [1 kalimat yang explain value prop]
**Key features (max 3):** [Feature utama yang solve problem]
**Success metrics:** [Gimana kita tau berhasil]

## 👤 User Journey
**Happy path:** [Step by step ideal user experience]
**Edge cases:** [What if scenarios yang penting]

## 🔧 Technical Considerations
**Platform:** [Web/Mobile/Desktop]
**Core tech requirements:** [Database, auth, APIs, dll]
**Performance expectations:** [Load time, user capacity]
**Security needs:** [Data protection, privacy]

## 🚫 Out of Scope (V1)
[Hal yang nggak dikerjain di versi pertama]

## 📊 Success Criteria
[Metrics yang bisa diukur dalam 30 hari]
```

#### 💻 Prompt AI untuk Generate PRD

**🔥 Prompt #1: PRD Generator untuk Pemula**
```
Saya seorang pemula yang mau bikin aplikasi [describe your idea]. Saya nggak punya pengalaman teknis tapi punya ide yang solve real problem.

Tolong buatkan PRD (Product Requirements Document) yang:
1. User-friendly dan mudah dipahami pemula
2. Fokus pada masalah user, bukan teknis
3. Realistic untuk dikerjakan solo developer dalam 2-4 minggu
4. Include user journey yang detail
5. Specific enough untuk mulai development tapi flexible untuk iterate

Format pakai template yang mudah diikuti. Anggap saya akan pakai PRD ini untuk ngobrol dengan AI coding assistant.

Idea saya: [jelaskan ide kamu dalam 2-3 kalimat]
Target user: [siapa yang akan pakai]
Main problem: [masalah apa yang mau diselesaikan]
```

**🔥 Prompt #2: PRD Validator & Improver**
```
Saya sudah punya draft PRD untuk aplikasi saya. Tolong review dan improve dengan mindset:

1. Apakah masalah yang mau diselesaikan benar-benar ada dan urgent?
2. Apakah solution yang diusulkan realistic untuk pemula?
3. Apakah user journey masuk akal dan simple?
4. Apa yang kurang jelas atau bisa bikin confused saat development?
5. Suggest improvement yang specific dan actionable

PRD saya:
[paste PRD draft kamu di sini]

Berikan feedback dalam format: What's good, What needs improvement, Specific suggestions.
```

#### ⚡ Pro Tips: PRD yang AI-Friendly

> **💡 Tips #1:** Pakai "User Story Format" - "As a [user type], I want [goal] so that [benefit]"

> **💡 Tips #2:** Include "AI Context" - jelaskan ke AI apa role kamu (beginner/expert) dan goal project (learning/business)

> **💡 Tips #3:** Bikin PRD "Living Document" - update based on AI suggestions dan user feedback

---

### 🎯 **Bagian 2: Prompt Engineering Fundamentals untuk Coding**

#### 💡 Konsep Dasar: Dari Conversation ke Code

**Mindset Shift yang Penting:**
```
❌ "AI, bikin website untuk toko online"
✅ "AI, bantu saya bikin landing page untuk toko kaos custom dengan fitur showcase produk, form order sederhana, dan WhatsApp integration"

❌ "Fix this bug"  
✅ "Saya punya error [paste error message]. Ini terjadi saat [explain context]. Code saya: [paste relevant code]. Tolong explain kenapa error ini terjadi dan berikan solution step-by-step"
```

#### 🛠️ Framework CLEAR untuk Prompt Engineering

**C - Context (Kasih tau situasinya)**
- Skill level kamu (beginner/intermediate/advanced)
- Tech stack yang dipakai
- Apa yang mau dicapai
- Constraint atau limitation

**L - Logic (Jelaskan alur berpikirnya)**  
- Step-by-step approach yang kamu mau
- Priority atau urutan pengerjaan
- Decision criteria

**E - Examples (Berikan contoh konkret)**
- Input/output yang diharapkan
- Similar case yang pernah berhasil
- Reference atau inspiration

**A - Action (Specific task yang diminta)**
- Verb yang clear (analyze, create, refactor, debug)
- Deliverable yang specific
- Format output yang diinginkan

**R - Review (Minta validasi dan feedback)**
- Ask AI to explain the approach
- Request pros/cons of solution
- Get alternative suggestions

#### 💻 5 Template Prompt Siap Pakai untuk Development

**🔥 Prompt #3: Feature Development**
```
**Context:** Saya pemula yang sedang bikin [type of app]. Tech stack: [your stack]. Skill level: basic [language].

**Logic:** Saya mau implement fitur [feature name] dengan approach:
1. Understand requirements
2. Design simple solution  
3. Code step by step
4. Test and iterate

**Examples:** Fitur ini seperti [reference/inspiration]. User flow: [describe user journey].

**Action:** 
1. Break down fitur ini jadi subtasks yang small dan manageable
2. Prioritize subtasks dari most important ke least
3. Untuk subtask #1, buatkan code dengan banyak comments
4. Explain setiap part dan kenapa dibutuhkan

**Review:** Setelah kasih solution, tolong explain:
- Apakah approach ini optimal untuk pemula?
- Potential issues yang mungkin muncul
- Next steps untuk testing dan improvement

Fitur yang mau diimplement: [describe your feature]
```

**🔥 Prompt #4: Code Review & Debugging**
```
**Context:** Saya [skill level] developer yang stuck dengan code. Expected behavior: [what should happen]. Actual behavior: [what actually happens].

**Logic:** Help saya debug dengan approach:
1. Identify root cause
2. Explain why it happens  
3. Provide step-by-step fix
4. Prevent similar issues

**Examples:** 
Error message: [paste exact error]
Relevant code: [paste code block]
What I tried: [previous attempts]

**Action:**
1. Analyze error message dan explain dalam bahasa sederhana
2. Point out specific line/section yang bermasalah
3. Provide corrected code dengan highlight changes
4. Explain reasoning behind each change

**Review:** 
- Apakah ada cara yang lebih elegant?
- Best practices untuk avoid similar bugs
- Testing strategy untuk verify fix
```

**🔥 Prompt #5: Architecture & Planning**
```
**Context:** Saya mau bikin [app description] sebagai [solo developer/team project]. Target: [timeline] dengan budget [range].

**Logic:** Need help dengan:
1. Choose appropriate tech stack
2. Plan development phases
3. Identify potential challenges
4. Create realistic timeline

**Examples:** 
Similar apps: [reference apps]
Must-have features: [list]
Nice-to-have features: [list]
Technical constraints: [any limitations]

**Action:**
1. Recommend tech stack dengan reasoning (considering my skill level)
2. Break project into weekly milestones
3. Identify dependencies dan potential blockers
4. Suggest MVP scope yang realistic

**Review:**
- Risk assessment dan mitigation strategies
- Alternative approaches dengan pros/cons
- Learning resources untuk skills yang dibutuhkan
```

#### ⚡ Pro Tips: Effective Prompt Engineering

> **💡 Tips #4:** "Rubber Duck" with AI - explain your problem step by step seperti ngomong ke bebek

> **💡 Tips #5:** Use "Progressive Disclosure" - start general, gradually add specifics based on AI response

> **💡 Tips #6:** Always ask "Why" - minta AI explain reasoning di balik every suggestion

---

### 🌐 **Bagian 3: Structured Prompts untuk UI, API, dan System Flow**

#### 💡 Konsep Dasar: Component-Based Prompting

**Think in Components, Not Pages:**
```
❌ "Bikin halaman login yang keren"
✅ "Bikin login component dengan email/password input, remember me checkbox, forgot password link, dan error handling untuk invalid credentials"

❌ "Buatkan API untuk user management"  
✅ "Design RESTful API endpoints untuk user registration, authentication, profile update, dengan proper HTTP status codes dan error responses"
```

#### 🛠️ Template untuk UI Development

**🎨 UI Component Prompt Structure:**
```
**Component:** [Component name dan purpose]
**Context:** [Where it's used dan interaction dengan other components]  
**Requirements:**
- Visual: [Layout, styling, responsive behavior]
- Functional: [User interactions, state management]
- Data: [What data it needs dan dari mana]
- Validation: [Input validation dan error handling]

**User Experience:**
- Happy path: [Normal user flow]
- Edge cases: [Error states, loading states]
- Accessibility: [Screen reader, keyboard navigation]

**Technical Specs:**
- Framework: [React/Vue/Vanilla JS]
- Styling: [CSS/Tailwind/styled-components]
- State: [Local state/global state/props]

**Output Format:** [Code + explanation + usage example]
```

**🔥 Prompt #6: UI Component Generator**
```
Saya butuh component [component name] untuk aplikasi [app context].

**Component:** [describe component]
**Context:** Akan dipakai di [page/section] dan interact dengan [other components]

**Requirements:**
Visual:
- Layout: [describe layout - flex/grid/custom]
- Style: [modern/minimal/colorful] dengan color scheme [colors]
- Responsive: [mobile-first/desktop-first behavior]

Functional:
- User bisa [list all user actions]
- Component state: [what changes when user interact]
- Data flow: [props in, events out]

Validation:
- Input rules: [required fields, format validation]
- Error handling: [inline errors, toast notifications]

**User Experience:**
- Happy path: User [describe normal flow]
- Loading state: Show [loading indicator/skeleton]
- Error state: Display [error message/retry button]

**Technical Specs:**
- Framework: [your choice]
- Styling: Tailwind CSS dengan responsive design
- State: [useState/useReducer/context]

**Output:** 
1. Complete functional component dengan PropTypes
2. CSS/Tailwind classes dengan responsive breakpoints  
3. Usage example dengan sample data
4. Accessibility considerations
```

#### 🛠️ Template untuk API Development

**⚙️ API Endpoint Prompt Structure:**
```
**Endpoint:** [HTTP method + URL pattern]
**Purpose:** [What business logic it handles]
**Authentication:** [Required auth level]

**Request:**
- Headers: [required headers]
- Parameters: [URL params, query params]  
- Body: [request payload structure]
- Validation: [input validation rules]

**Response:**
- Success: [HTTP status + response structure]
- Errors: [possible error codes + error format]
- Data format: [JSON structure dengan examples]

**Business Logic:**
- Processing steps: [what happens internally]
- Database operations: [CRUD operations needed]
- External services: [third-party API calls]

**Security & Performance:**
- Rate limiting: [requests per time period]
- Data sanitization: [input cleaning rules]
- Caching strategy: [what to cache dan how long]
```

**🔥 Prompt #7: API Design Assistant**
```
Saya butuh API endpoint untuk [describe functionality] di aplikasi [app context].

**Endpoint:** [HTTP method] /api/[resource]/[action]
**Purpose:** [explain what business value this provides]
**Authentication:** [none/basic/JWT/OAuth level required]

**Request:**
Headers: [Content-Type, Authorization, custom headers]
Parameters: 
- Path: [id, slug, etc]
- Query: [filtering, pagination, sorting]
Body: [JSON structure for POST/PUT requests]

Validation rules:
- Required fields: [list fields]
- Format validation: [email, phone, date formats]
- Business rules: [custom validation logic]

**Response:**
Success scenarios:
- 200: [successful retrieval/update]
- 201: [successful creation]  
- 204: [successful deletion]

Error scenarios:
- 400: [bad request examples]
- 401: [unauthorized access]
- 404: [resource not found]
- 422: [validation errors]
- 500: [server errors]

**Business Logic:**
1. [step 1 of processing]
2. [step 2 of processing]
3. [etc...]

Database operations: [what tables/collections involved]
External APIs: [third-party services needed]

**Security & Performance:**
- Rate limit: [requests per minute/hour]
- Input sanitization: [XSS prevention, SQL injection]
- Response caching: [cache duration dan invalidation]

**Output:**
1. Complete API specification (OpenAPI/Swagger format)
2. Implementation code dengan error handling
3. Test cases untuk happy path dan edge cases
4. Documentation dengan usage examples
```

#### ⚡ Pro Tips: System Design dengan AI

> **💡 Tips #7:** Start dengan "Data Flow Diagram" - minta AI gambar flow data dari user action sampai response

> **💡 Tips #8:** Use "Layered Approach" - UI layer, business logic layer, data layer - design satu per satu

> **💡 Tips #9:** Always consider "Error Boundaries" - apa yang terjadi kalau something goes wrong

---

## 🧪 Hands-on Practice

### 🔨 **Guided Practice 1: Warm-up dengan AI Prompting (20 menit)**

**🎯 Goal:** Latihan basic prompting sebelum project besar. Bikin confidence dulu!

#### 📝 Exercise 1.1: Setup AI Assistant (5 menit)
1. **Buka ChatGPT atau Claude** di browser baru
2. **Copy-paste prompt setup ini persis:**
```
Hai! Saya seorang pemula yang sedang belajar prompt engineering untuk coding. 

Tolong jadi mentor coding yang sabar dan supportive. Kalau saya bertanya:
1. Explain dalam bahasa yang mudah dipahami
2. Kasih contoh konkret  
3. Step-by-step instructions
4. Tanya saya kalau ada yang kurang jelas

Siap membantu saya belajar?
```
3. **Tunggu response AI** dan pastikan tone-nya supportive
4. ✅ **Check:** AI respond dengan ramah dan ready to help

#### 📝 Exercise 1.2: Test Basic Prompting (15 menit)

**Round 1: Concept Explanation (5 menit)**
```
Saya bingung apa bedanya frontend dan backend dalam web development. 

Tolong jelaskan:
1. Apa itu frontend dan backend dengan analogi yang mudah dipahami
2. Contoh teknologi untuk masing-masing
3. Gimana mereka kerja sama untuk bikin website

Pakai bahasa yang simple ya, saya masih awam banget.
```

**✅ Expected Output:** AI kasih penjelasan dengan analogi (misal: frontend = tampak depan toko, backend = gudang di belakang)

**Round 2: Simple Code Request (5 menit)**
```
Saya mau bikin HTML button yang kalau diklik, text nya berubah dari "Click Me" jadi "Clicked!"

Requirements:
- Pakai HTML dan JavaScript
- Code yang simple untuk pemula
- Explain setiap baris code
- Kasih tau cara test di browser

Bikin yang paling basic dulu ya.
```

**✅ Expected Output:** Working HTML dengan inline JavaScript + penjelasan detail

**Round 3: Code Improvement (5 menit)**
```
Code button yang tadi sudah jalan! Sekarang saya mau improve:

1. Kalau diklik lagi, text kembali ke "Click Me" (toggle function)
2. Tambahin CSS yang bikin button kelihatan lebih menarik
3. Explain perubahan yang dibuat

Keep it simple untuk pemula ya!
```

**✅ Expected Output:** Improved code dengan toggle function + basic CSS

---

### 🔨 **Main Project: Personal Task Manager dengan AI Collaboration (90 menit)**

**🎯 Goal:** Build complete task manager app step-by-step dengan AI guidance. **Realistic timeline untuk awam!**

**📋 What You'll Build:**
- ✅ Task creation form
- ✅ Task list dengan priority colors  
- ✅ Mark complete/incomplete functionality
- ✅ Delete tasks
- ✅ Filter by status (all/completed/pending)
- ✅ Data persist di localStorage

**⏰ Realistic Time Breakdown:**
- 20 menit: PRD creation dan planning
- 25 menit: Basic HTML structure  
- 30 menit: JavaScript functionality step-by-step
- 10 menit: CSS styling untuk make it pretty
- 5 menit: Testing dan final polish

#### 📝 Step 1: PRD Creation dan Planning (20 menit)

**Sub-step 1.1: Generate PRD (10 menit)**

**Copy prompt ini ke AI:**
```
Saya seorang pemula yang mau bikin aplikasi task manager personal. 

Context:
- Saya freelancer yang sering lupa task dan deadline
- Mau something simple yang bisa dipakai sehari-hari  
- Nggak butuh fitur fancy, just basic task management
- Will be used on laptop dan phone

Tolong buatkan PRD (Product Requirements Document) yang include:
1. Problem statement yang jelas
2. Core features (maksimal 5 features untuk v1)
3. User journey dari buka app sampai selesai manage tasks
4. Success criteria yang realistis

Bikin yang simple tapi comprehensive. Anggap saya akan pakai PRD ini untuk development dengan AI assistance.
```

**✅ Expected Output:** PRD lengkap yang fokus pada essential features

**Sub-step 1.2: Technical Planning (10 menit)**

**Copy prompt ini ke AI:**
```
Based on PRD yang tadi, sekarang help me plan technical implementation.

Context:
- Saya pemula dengan basic HTML/CSS/JavaScript
- Mau bikin single page application (no framework dulu)
- Data disimpan di localStorage browser
- Must work di mobile dan desktop

Tolong breakdown jadi:
1. File structure (file apa aja yang dibutuhkan)
2. HTML elements yang perlu dibuat
3. CSS classes untuk styling
4. JavaScript functions yang dibutuhkan
5. Data structure untuk store tasks

Bikin planning yang step-by-step dan easy to follow.
```

**✅ Expected Output:** Complete technical breakdown dengan file structure

#### 🏗️ Step 2: Build HTML Structure (25 menit)

**Sub-step 2.1: Create Basic HTML (15 menit)**

**Copy prompt ini ke AI:**
```
Sekarang saya mau mulai coding HTML structure untuk task manager.

Based on planning tadi, tolong generate:

1. Complete HTML file dengan semantic structure
2. Form untuk add new task (input field + submit button)
3. Area untuk display task list  
4. Filter buttons (All, Pending, Completed)
5. Basic meta tags dan mobile viewport

Requirements:
- Clean, semantic HTML5
- Include proper IDs dan classes untuk styling nanti
- Mobile-friendly structure
- Comments di code untuk explain setiap section

Bikin yang organized dan mudah dipahami pemula.
```

**✅ Expected Output:** Complete HTML file dengan proper structure

**Sub-step 2.2: Test HTML Structure (10 menit)**

1. **Create file baru:** `task-manager.html`
2. **Copy-paste HTML** yang dikasih AI
3. **Buka file di browser** untuk lihat structure
4. **Screenshot hasil** untuk dokumentasi
5. ✅ **Check:** HTML render properly tanpa error

#### 💻 Step 3: Add JavaScript Functionality (30 menit)

**Sub-step 3.1: Basic Task Operations (15 menit)**

**Copy prompt ini ke AI:**
```
Sekarang saya mau add JavaScript functionality untuk task manager.

Phase 1 - Basic operations:
1. Add new task function
2. Display tasks in list
3. Mark task as complete/incomplete
4. Delete task function

Requirements:
- Vanilla JavaScript (no libraries)
- Task object structure: {id, text, completed, priority, createdAt}
- Store di array dan localStorage
- Update UI setelah every operation
- Detailed comments untuk explain logic

Bikin code yang modular dengan separate functions. Start dengan yang paling basic dulu.

HTML structure saya: [paste HTML structure yang udah dibuat]
```

**✅ Expected Output:** JavaScript dengan core CRUD operations

**Sub-step 3.2: LocalStorage Integration (15 menit)**

**Copy prompt ini ke AI:**
```
Perfect! Basic operations udah jalan. Sekarang saya mau add localStorage untuk persist data.

Need help dengan:
1. Save tasks to localStorage setiap ada perubahan
2. Load tasks dari localStorage saat page load
3. Handle empty localStorage (first time user)
4. Error handling kalau localStorage nggak available

Requirements:
- Functions: saveToStorage(), loadFromStorage()
- JSON stringify/parse untuk convert data
- Try-catch error handling
- Initialize app dengan data yang persisted

Improve code yang udah ada dengan localStorage functionality.

Current JavaScript code: [paste current JS code]
```

**✅ Expected Output:** Complete localStorage integration

#### 🎨 Step 4: CSS Styling (10 menit)

**Copy prompt ini ke AI:**
```
Sekarang saya mau bikin task manager kelihatan bagus dengan CSS.

Requirements:
- Clean, modern design
- Mobile-responsive (mobile-first approach)
- Color coding untuk task priorities
- Hover effects untuk interactivity
- Completed tasks dengan strikethrough style
- Nice spacing dan typography

Target style:
- Minimalist tapi engaging
- Easy to use di mobile
- Professional look
- Accessible (good contrast)

Tolong generate CSS yang comprehensive dan organized.

Current HTML structure: [paste HTML with classes]
```

**✅ Expected Output:** Complete CSS dengan responsive design

#### ✅ Step 5: Testing & Polish (5 menit)

**Manual Testing Checklist:**
- [ ] **Add task:** Ketik task baru, klik Add → task muncul di list
- [ ] **Mark complete:** Klik checkbox → task ada strikethrough
- [ ] **Delete task:** Klik delete button → task hilang dari list  
- [ ] **Filter functionality:** Klik All/Pending/Completed → filter working
- [ ] **LocalStorage:** Refresh page → tasks masih ada
- [ ] **Mobile responsive:** Buka di phone → layout proper
- [ ] **Error handling:** Add empty task → proper error message

**Quick Fixes dengan AI:**
```
Saya test task manager dan found these issues:
[list any bugs or improvements needed]

Tolong provide quick fixes untuk issues ini. Keep solutions simple dan focused.
```

### ✅ **Final Deliverables:**
- [ ] **task-manager.html** - Complete working task manager
- [ ] **Screenshots** - App working di desktop dan mobile
- [ ] **Learning journal** - What you learned dari each step
- [ ] **Improvement ideas** - List features untuk next version

### 🎯 **Success Metrics:**
- ✅ App working completely tanpa bugs
- ✅ Data persist setelah browser refresh  
- ✅ Responsive di mobile dan desktop
- ✅ You understand setiap piece of code yang digenerate
- ✅ You feel confident untuk improve app sendiri

### 🚀 **Bonus Challenges (Optional):**
- [ ] **Add priorities:** High/Medium/Low dengan color coding
- [ ] **Due dates:** Add date picker untuk deadlines
- [ ] **Search function:** Filter tasks by text search
- [ ] **Export data:** Download tasks sebagai JSON file
- [ ] **Dark mode:** Toggle light/dark theme

**Kalau stuck di bonus challenges:**
```
Saya mau implement [feature name] di task manager saya.

Current app status: [describe what's working]
Feature goal: [what you want to add]
My current skill level: [beginner/learning]

Tolong guide step-by-step untuk add feature ini tanpa break existing functionality.
```

---

## 🤔 Troubleshooting Common Issues

| ❌ Problem | ✅ Solution | 🛠️ Prevention |
|------------|-------------|---------------|
| **AI gives generic/vague responses** | Add more specific context, examples, dan constraints dalam prompt | Always include: your skill level, tech stack, specific goals, dan success criteria |
| **Code works in isolation tapi nggak terintegrasi** | Ask AI untuk integration testing dan component communication | Design component interfaces dulu sebelum implement details |
| **AI suggests overly complex solutions** | Explicitly mention "keep it simple" dan "beginner-friendly approach" | Include constraint: "solution should be understandable by someone learning to code" |
| **Inconsistent coding style across AI sessions** | Create "style guide prompt" yang consistent untuk semua sessions | Save successful prompts sebagai templates untuk reuse |
| **Getting stuck dalam prompt engineering** | Break down complex requests jadi smaller, focused prompts | Use progressive disclosure - start broad, add specifics gradually |
| **AI hallucinates atau give outdated info** | Always verify suggestions dengan official docs atau testing | Cross-reference AI suggestions dengan 2-3 reliable sources |

### 🆘 When to Ask for Human Help

**Red Flags yang indicate butuh human intervention:**
- AI consistently gives conflicting advice
- Security-related implementations (authentication, payment processing)
- Performance issues yang complex
- Infrastructure dan deployment challenges
- Business logic yang very domain-specific

**Where to Get Help:**
- Stack Overflow untuk technical issues
- GitHub Discussions untuk project-specific help
- Discord communities (Buildspace, Developer DAO)
- Reddit r/webdev, r/learningprogramming

---

## 📖 Referensi & Resources

### 🔧 **AI Tools & Platforms yang Recommended:**

**Primary AI Assistants:**
- 🤖 **ChatGPT Plus** ($20/month) - Best for PRD creation dan general development consultation
- 🧠 **Claude Pro** ($20/month) - Superior untuk code analysis dan complex reasoning  
- 💻 **GitHub Copilot** ($10/month) - Best in-editor code completion dan suggestions

**Specialized Development Tools:**
- 📝 **Cursor** (Free tier available) - AI-native code editor dengan excellent context awareness
- 🌐 **Lovable** (lovable.dev) - Generate full-stack apps dari natural language prompts
- 🔄 **Replit Agent** (replit.com) - Complete development environment dengan AI assistance

### 📚 **Learning Resources:**

**Prompt Engineering:**
- 📖 [Learn Prompting Guide](https://learnprompting.org) - Comprehensive prompt engineering course
- 🎥 [Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/) - DeepLearning.AI course  
- 📝 [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Official best practices

**AI Development Communities:**
- 💬 [Buildspace Discord](https://buildspace.so) - Active community untuk AI builders
- 🐦 [AI Twitter](https://twitter.com/search?q=%23BuildInPublic%20AI) - Latest trends dan updates  
- 📱 [Indie Hackers AI](https://www.indiehackers.com/group/ai) - Business-focused AI discussions

### 🔗 **Reference Documentation:**

**APIs & Integration:**
- 🔑 [OpenAI API Docs](https://platform.openai.com/docs) - For custom AI integrations
- 🔐 [Anthropic Claude API](https://docs.anthropic.com) - Claude integration guide
- 🌐 [Model Context Protocol](https://modelcontextprotocol.io) - MCP specification dan examples

**Development Frameworks:**
- ⚛️ [React Docs](https://react.dev) - If using React for frontend
- 🟢 [Node.js Guides](https://nodejs.org/en/docs/) - Backend development dengan JavaScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs) - For rapid UI styling

### 📊 **Templates & Boilerplates:**

**PRD Templates:**
- 📋 [AI-First PRD Template](https://gist.github.com/examples) - Downloadable template
- 🎯 [Lean Canvas for AI Products](https://canvanizer.com/new/lean-canvas) - Business model canvas
- 📈 [User Story Mapping](https://miro.com/templates/user-story-map/) - Visual user journey planning

**Code Starters:**
- 🚀 [Next.js AI Starter](https://vercel.com/templates/next.js) - Full-stack AI app template
- 📱 [React Component Library](https://github.com/storybookjs/storybook) - Reusable component examples
- 🔧 [API Boilerplate](https://github.com/hagopj13/node-express-boilerplate) - Express.js starter dengan best practices

---

📌 **Next:** [Module 3: Building the Product - From Prompt to Production 🏗️](module3-building-product.md)

---

*💡 **Key Takeaway:** Prompt engineering adalah skill yang bisa dipelajari dan improved over time. Start with clear structure, iterate based on results, dan always validate AI suggestions dengan testing dan research. Remember: AI is your co-pilot, bukan autopilot!*
