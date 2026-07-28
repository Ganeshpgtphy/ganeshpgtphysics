/* ==========================================================================
   CBSE Science Teacher AI Studio 2026-27 - Application Logic
   Authoritative CBSE/KVS Prompt Assembly, Data Store & Workspace Controller
   ========================================================================== */

// 1. NCERT 2026-27 Chapter Database (Classes 6-12)
const cbseChapterDatabase = {
    "Class 6": {
        "General Science": [
            "Chapter 1: Components of Food",
            "Chapter 2: Sorting Materials into Groups",
            "Chapter 3: Separation of Substances",
            "Chapter 4: Getting to Know Plants",
            "Chapter 5: Body Movements",
            "Chapter 6: The Living Organisms and Their Surroundings",
            "Chapter 7: Motion and Measurement of Distances",
            "Chapter 8: Light, Shadows and Reflections",
            "Chapter 9: Electricity and Circuits",
            "Chapter 10: Fun with Magnets"
        ]
    },
    "Class 7": {
        "General Science": [
            "Chapter 1: Nutrition in Plants",
            "Chapter 2: Nutrition in Animals",
            "Chapter 3: Heat and Temperature",
            "Chapter 4: Acids, Bases and Salts",
            "Chapter 5: Physical and Chemical Changes",
            "Chapter 6: Respiration in Organisms",
            "Chapter 7: Transportation in Animals and Plants",
            "Chapter 8: Reproduction in Plants",
            "Chapter 9: Motion and Time",
            "Chapter 10: Electric Current and Its Effects",
            "Chapter 11: Light and Optics",
            "Chapter 12: Forests: Our Lifeline"
        ]
    },
    "Class 8": {
        "General Science": [
            "Chapter 1: Crop Production and Management",
            "Chapter 2: Microorganisms: Friend and Foe",
            "Chapter 3: Coal and Petroleum",
            "Chapter 4: Combustion and Flame",
            "Chapter 5: Conservation of Plants and Animals",
            "Chapter 6: Reproduction in Animals",
            "Chapter 7: Reaching the Age of Adolescence",
            "Chapter 8: Force and Pressure",
            "Chapter 9: Friction",
            "Chapter 10: Sound",
            "Chapter 11: Chemical Effects of Electric Current",
            "Chapter 12: Some Natural Phenomena",
            "Chapter 13: Light"
        ]
    },
    "Class 9": {
        "General Science": [
            "Chapter 1: Matter in Our Surroundings",
            "Chapter 2: Is Matter Around Us Pure?",
            "Chapter 3: Atoms and Molecules",
            "Chapter 4: Structure of the Atom",
            "Chapter 5: The Fundamental Unit of Life (Cell)",
            "Chapter 6: Tissues (Plant & Animal)",
            "Chapter 7: Motion and Kinematics",
            "Chapter 8: Force and Laws of Motion",
            "Chapter 9: Gravitation & Fluid Pressure",
            "Chapter 10: Work, Energy and Power",
            "Chapter 11: Sound and Waves",
            "Chapter 12: Improvement in Food Resources"
        ]
    },
    "Class 10": {
        "General Science": [
            "Chapter 1: Chemical Reactions and Equations",
            "Chapter 2: Acids, Bases and Salts",
            "Chapter 3: Metals and Non-metals",
            "Chapter 4: Carbon and its Compounds",
            "Chapter 5: Life Processes",
            "Chapter 6: Control and Coordination",
            "Chapter 7: How do Organisms Reproduce?",
            "Chapter 8: Heredity and Evolution",
            "Chapter 9: Light – Reflection and Refraction",
            "Chapter 10: The Human Eye and Colourful World",
            "Chapter 11: Electricity",
            "Chapter 12: Magnetic Effects of Electric Current",
            "Chapter 13: Our Environment"
        ]
    },
    "Class 11": {
        "Physics": [
            "Chapter 1: Units and Measurements",
            "Chapter 2: Motion in a Straight Line",
            "Chapter 3: Motion in a Plane & Vectors",
            "Chapter 4: Laws of Motion & Friction",
            "Chapter 5: Work, Energy and Power",
            "Chapter 6: System of Particles & Rotational Motion",
            "Chapter 7: Gravitation & Kepler's Laws",
            "Chapter 8: Mechanical Properties of Solids",
            "Chapter 9: Mechanical Properties of Fluids",
            "Chapter 10: Thermal Properties of Matter",
            "Chapter 11: Thermodynamics",
            "Chapter 12: Kinetic Theory of Gases",
            "Chapter 13: Oscillations (SHM)",
            "Chapter 14: Waves & Doppler Effect"
        ],
        "Chemistry": [
            "Chapter 1: Some Basic Concepts of Chemistry",
            "Chapter 2: Structure of Atom",
            "Chapter 3: Classification of Elements & Periodicity",
            "Chapter 4: Chemical Bonding and Molecular Structure",
            "Chapter 5: Thermodynamics",
            "Chapter 6: Equilibrium",
            "Chapter 7: Redox Reactions",
            "Chapter 8: Organic Chemistry: Basic Principles",
            "Chapter 9: Hydrocarbons"
        ],
        "Biology": [
            "Chapter 1: The Living World",
            "Chapter 2: Biological Classification",
            "Chapter 3: Plant Kingdom",
            "Chapter 4: Animal Kingdom",
            "Chapter 5: Cell: Unit of Life",
            "Chapter 6: Biomolecules",
            "Chapter 7: Plant Physiology",
            "Chapter 8: Human Physiology"
        ]
    },
    "Class 12": {
        "Physics": [
            "Chapter 1: Electric Charges and Fields",
            "Chapter 2: Electrostatic Potential and Capacitance",
            "Chapter 3: Current Electricity",
            "Chapter 4: Moving Charges and Magnetism",
            "Chapter 5: Magnetism and Matter",
            "Chapter 6: Electromagnetic Induction",
            "Chapter 7: Alternating Current",
            "Chapter 8: Electromagnetic Waves",
            "Chapter 9: Ray Optics and Optical Instruments",
            "Chapter 10: Wave Optics & Interference",
            "Chapter 11: Dual Nature of Radiation and Matter",
            "Chapter 12: Atoms & Bohr Model",
            "Chapter 13: Nuclei & Nuclear Physics",
            "Chapter 14: Semiconductor Electronics & Logic Gates"
        ],
        "Chemistry": [
            "Chapter 1: Solutions",
            "Chapter 2: Electrochemistry",
            "Chapter 3: Chemical Kinetics",
            "Chapter 4: d- and f-Block Elements",
            "Chapter 5: Coordination Compounds",
            "Chapter 6: Haloalkanes and Haloarenes",
            "Chapter 7: Alcohols, Phenols and Ethers",
            "Chapter 8: Aldehydes, Ketones and Carboxylic Acids",
            "Chapter 9: Amines",
            "Chapter 10: Biomolecules"
        ],
        "Biology": [
            "Chapter 1: Sexual Reproduction in Flowering Plants",
            "Chapter 2: Human Reproduction",
            "Chapter 3: Reproductive Health",
            "Chapter 4: Principles of Inheritance and Variation",
            "Chapter 5: Molecular Basis of Inheritance",
            "Chapter 6: Evolution",
            "Chapter 7: Human Health and Disease",
            "Chapter 8: Microbes in Human Welfare",
            "Chapter 9: Biotechnology: Principles & Processes",
            "Chapter 10: Organisms and Populations",
            "Chapter 11: Ecosystem & Biodiversity"
        ]
    }
};

// 2. Templates Library Engine
const templatesLibrary = [
    {
        id: "worksheet",
        category: "assessment",
        title: "📄 Competency Worksheet Generator",
        subtitle: "NEP 2020 Aligned Differentiated Worksheet",
        tags: ["Competency", "Worksheet", "NCERT 2026-27", "Bloom's"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
        description: "Generate complete, classroom-ready competency-based worksheets with MCQs, Assertion-Reason, Case Studies, and Differentiated Learning Tiers.",
        builder: function(p) {
            return `You are an expert CBSE Master Teacher, NCERT Author, Assessment Specialist, and NEP-2020 Curriculum Designer.

Generate a COMPLETE, TEACHER-READY COMPETENCY WORKSHEET strictly aligned with CBSE Session 2026-27 guidelines.

INPUT PARAMETERS:
• Class Level: ${p.classLevel}
• Subject: ${p.subject}
• Target Chapter / Topic: ${p.chapter}
• Learner Tier Focus: ${p.tier}
• Targeted Total Marks: ${p.marks} Marks

STRUCTURE & CONTENT SECTIONS TO GENERATE:
1. HEADER BLOCK: Worksheet Title, Class, Subject, Chapter, Time, Max Marks, General Instructions.
2. LEARNING OUTCOMES & COMPETENCIES: State 3 clear NCF-SE / NEP 2020 Learning Outcomes mapped to Bloom's Taxonomy.
3. CONCEPT QUICK-CHECK: 5 Crisp True/False or Fill-in-the-Blanks to test foundational memory.
4. MULTIPLE CHOICE QUESTIONS (MCQs): 5 Conceptual MCQs with 4 options each (including 1 distractor based on common misconceptions).
5. ASSERTION-REASON QUESTIONS: 3 Standard CBSE Assertion-Reason questions with options (A, B, C, D).
6. CASE STUDY / SOURCE-BASED QUESTION: 1 Real-world case study scenario (150-200 words) with 4 sub-questions (1 mark each).
7. COMPETENCY & HOTS QUESTIONS: 3 Higher Order Thinking Skill questions requiring analysis, synthesis, or evaluation.
8. EXPERIMENTAL / ACTIVITY SKILLS: 2 Questions based on NCERT activity setup, observations, or laboratory safety.
${p.subject.includes('Physics') || p.classLevel.includes('11') || p.classLevel.includes('12') ? '9. NUMERICAL & DERIVATION SECTION: 3 Step-by-step numerical problems (Basic, Standard, Challenge level) with proper SI units.\n' : ''}
10. VALUES & LIFE SKILLS INTEGRATION: 1 Application question connecting science to daily life/environmental sustainability.
${p.includeAnswerKey ? '11. DETAILED ANSWER KEY & MARKING SCHEME: Provide full step-by-step solutions, key points, and marking distribution for every question.\n' : ''}
${p.includeRubrics ? '12. ASSESSMENT RUBRIC: Analytic 4-level rubric grid (Needs Improvement, Developing, Proficient, Advanced).\n' : ''}

PEDAGOGICAL DIRECTIVES:
${p.includeNEP ? '✔ Strictly integrate NEP-2020 Competency Based Education (CBE).\n' : ''}
${p.includeBloom ? '✔ Tag every question with Bloom\'s Taxonomy Level [Remember/Understand/Apply/Analyze/Evaluate/Create].\n' : ''}
${p.includeNCERT ? '✔ Map questions to exact NCERT 2026-27 textbook concepts.\n' : ''}
✔ Ensure crisp formatting, ready for immediate printing or digital distribution.`;
        }
    },

    {
        id: "qp",
        category: "assessment",
        title: "📝 Blueprint Question Paper Setter",
        subtitle: "Official CBSE Exam Pattern (Sections A to E)",
        tags: ["Blueprint", "Question Paper", "PYQ Pattern", "Internal Choice"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>`,
        description: "Prepare an official CBSE Question Paper complete with detailed Blueprint matrix, Section A to E breakdown, internal choices, and time/marks distribution.",
        builder: function(p) {
            return `You are a Senior CBSE Board Question Paper Setter and Chief Examiner.

Prepare a full-length, official QUESTION PAPER strictly adhering to the CBSE 2026-27 Pattern and NCF-SE Guidelines.

EXAM PARAMETERS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Chapter / Syllabus Covered: ${p.chapter}
• Maximum Marks: ${p.marks} Marks
• Duration: ${p.time} Minutes
• Target Difficulty: ${p.tier}

PART 1: BLUEPRINT MATRIX TABLE
Generate a markdown table mapping:
| Chapter / Unit | VSA / MCQ (1M) | SA-I (2M) | SA-II (3M) | LA (5M) | Case Study (4M) | Total Marks |
Ensure the blueprint total sums exactly to ${p.marks} Marks.

PART 2: QUESTION PAPER CONTENT (SECTIONS A - E)
Follow standard CBSE question paper layout:

• SECTION A (1 Mark Questions):
  - MCQs and Assertion-Reasoning (Option A: Both A and R true & R correct explanation, B: Both true but R not correct explanation, C: A true R false, D: A false R true).
  
• SECTION B (2 Marks Short Answer Questions):
  - 5 Conceptual questions requiring 30-50 words answers. Include internal choice in 2 questions.

• SECTION C (3 Marks Short Answer Questions):
  - 6 Analytical / Derivation / Numerical questions requiring 50-80 words. Include internal choice in 2 questions.

• SECTION D (5 Marks Long Answer Questions):
  - 3 Comprehensive questions with diagram / derivation requirements. Include compulsory internal choice (OR) for all 3 questions.

• SECTION E (4 Marks Case-Based / Integrated Questions):
  - 2 Passage/Diagram/Graph based scenarios with sub-questions (1M + 1M + 2M).

${p.includeAnswerKey ? 'PART 3: OFFICIAL MARKING SCHEME & ANSWER KEY\nProvide value points, key step markings (0.5M distribution), and final answers for every single question.\n' : ''}

RULES:
- NO DIRECT REPETITION of basic textbook definitions; prioritize application and reasoning.
- Language must be formal, unambiguous, and board-exam ready.`;
        }
    },

    {
        id: "google",
        category: "quizzes",
        title: "📋 Google Form & Online Quiz AI",
        subtitle: "Auto-Graded Quiz with Answer Key & Explanations",
        tags: ["Google Form", "Auto-Grading", "MCQs", "Online Quiz"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
        description: "Generate auto-grading Google Form ready quizzes with descriptions, options, correct answer keys, and pedagogical feedback for incorrect choices.",
        builder: function(p) {
            return `Act as a Google Forms AI Quiz Architect and E-Learning Content Designer.

Create an AUTO-GRADED ONLINE QUIZ ready for instant import into Google Forms or Kahoot/Quizizz.

TARGET INFORMATION:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Chapter / Topic: ${p.chapter}
• Number of Questions: 15-20 Questions

QUIZ STRUCTURE:
1. QUIZ TITLE & DESCRIPTION:
   - Engaging Title (e.g. "CBSE ${p.classLevel} ${p.subject} - Mastery Quiz: ${p.chapter}")
   - Student Instructions (Time limit, point values, attempt rules).

2. QUESTION ITEM FORMAT (Repeat for all questions):
   --------------------------------------------------
   Q[No]. [Question Text clearly worded]
   Question Type: Multiple Choice
   Required: Yes
   Points: 1 Point
   Option A: [Choice]
   Option B: [Choice]
   Option C: [Choice]
   Option D: [Choice]
   ✔ Correct Answer: Option [A/B/C/D]
   💡 Answer Feedback / Explanation: [Explain WHY the correct option is right and WHY common distractors are incorrect].
   --------------------------------------------------

QUESTION TYPES TO INCLUDE:
- 5 Recall & Conceptual understanding MCQs
- 5 Application & Numerical MCQs
- 3 Diagram/Image-based reasoning MCQs (Provide description of image to attach in Google Forms)
- 2 HOTS & Real-world scenario MCQs

EXPORT FORMAT: Plain text and markdown structured so a teacher can copy-paste into Google Forms without retyping.`;
        }
    },

    {
        id: "physics",
        category: "physics",
        title: "⚛ Physics XI-XII Master Suite",
        subtitle: "Derivations, HOTS, JEE/NEET & Lesson Plans",
        tags: ["Physics", "Class 11-12", "Derivations", "JEE/NEET"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
        description: "Complete master teaching pack for Senior Secondary Physics: NCERT derivations, concept maps, JEE/NEET challenge numericals, real-world physics applications, and viva questions.",
        builder: function(p) {
            return `You are India's Premier CBSE Physics Author & Senior Educator for Classes XI & XII.

Generate a COMPREHENSIVE CLASSROOM MASTER TEACHING PACK for Class XI/XII Physics.

TOPIC SPECIFICATION:
• Target Class: ${p.classLevel}
• Subject: ${p.subject} (Physics Focus)
• Chapter / Module: ${p.chapter}
• Level: ${p.tier}

PACKAGE COMPONENTS TO GENERATE:
1. LESSON PLAN & CONCEPT MAP:
   - 5-Period teaching schedule outline.
   - Core concepts flow diagram (ASCII text / tree structure).
   - Key formulas with SI units and dimensional formulas.

2. CORE DERIVATIONS & MATHEMATICAL PROOFS:
   - Step-by-step NCERT textbook derivation(s) with clear diagram instructions and assumptions.

3. NUMERICAL PROBLEM BANK (TIERED):
   - Tier 1 (CBSE Board Standard): 3 Numerical problems with full solutions.
   - Tier 2 (Exemplar & Conceptual): 2 Multi-concept problems.
   - Tier 3 (JEE Main / NEET Challenge): 2 High-level competitive questions with short tricks/hints.

4. REAL-WORLD APPLICATIONS & MISCONCEPTIONS:
   - 3 Real-life engineering/natural applications of the concept.
   - 3 Common student misconceptions and how to correct them in class.

5. LAB & VIVA-VOCE ASSISTANT:
   - Relevant NCERT practical connection.
   - 5 Conceptual Viva-Voce questions with ideal answers.

6. EXIT TICKET / QUICK ASSESSMENT:
   - 3-minute wrap-up question for classroom evaluation.`;
        }
    },

    {
        id: "competency",
        category: "assessment",
        title: "🎯 Competency & HOTS Question Bank",
        subtitle: "100% CBSE 2026-27 Competency Aligned",
        tags: ["Competency", "HOTS", "PYQ", "Case Study"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        description: "Generate a rich set of competency-focused questions (Assertion-Reason, Source-Based, Data Analysis, Graphical Interpretation) aligned with the latest CBSE sample papers.",
        builder: function(p) {
            return `Generate a HIGH-YIELD COMPETENCY-BASED QUESTION BANK according to CBSE 2026-27 Sample Paper Specifications.

TARGET SPECS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Chapter: ${p.chapter}

QUESTION VARIETIES REQUIRED:
1. GRAPHICAL & DATA ANALYSIS QUESTIONS (3 Questions):
   - Questions featuring data tables, V-I graphs, ray diagrams, or reaction rate curves requiring quantitative interpretation.

2. CASE-STUDY & SCENARIO-BASED QUESTIONS (2 Passages):
   - Real-world context (e.g. renewable energy, biomedical applications, household circuits) followed by 4 sub-questions.

3. ASSERTION-REASONING BANK (5 Questions):
   - Covering subtle conceptual nuances with strict 4-option board formatting.

4. EXPERIMENTAL & INQUIRY-BASED QUESTIONS (3 Questions):
   - "What happens if..." hypothesis testing questions based on NCERT laboratory experiments.

${p.includeAnswerKey ? 'DETAILED SOLUTIONS:\nProvide complete step-by-step marking schemes with explicit references to NCERT concepts.\n' : ''}`;
        }
    },

    {
        id: "practicals",
        category: "practicals",
        title: "🔬 Practical Lab & Viva Assistant",
        subtitle: "CBSE Science Lab Manual & Viva-Voce Generator",
        tags: ["Lab", "Practicals", "Viva Voce", "Rubrics"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A1 1 0 0 0 5.607 22h12.786a1 1 0 0 0 .886-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="9" y1="11" x2="15" y2="11"/></svg>`,
        description: "Create complete practical manual guides: Aim, Theory, Circuit/Ray Diagrams, Observation Tables, Error Analysis, Safety Instructions, and Viva Voce questions.",
        builder: function(p) {
            return `Act as a CBSE Laboratory Examiner & Science Practical Incharge.

Generate a COMPLETE LABORATORY PRACTICAL GUIDE & VIVA-VOCE PACK.

DETAILS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Experiment / Activity: ${p.chapter}

LAB MANUAL STRUCTURE:
1. EXPERIMENT TITLE & OBJECTIVE (AIM): Clear statement of purpose.
2. APPARATUS & MATERIALS REQUIRED: Itemized list with specifications.
3. UNDERLYING PRINCIPLE & FORMULA USED: Core equations, variable definitions, and unit declarations.
4. CIRCUIT / RAY / EXPERIMENTAL DIAGRAM: Clear textual description and ASCII box layout.
5. STEP-BY-STEP PROCEDURE: Sequential instructions for laboratory execution.
6. TABULAR OBSERVATION RECORD: Markdown table template with columns for Trial No., Measured Values, Calculations, and Calculated Output.
7. SOURCES OF ERROR & PRECAUTIONS: 4 essential safety and measurement precautions.
8. VIVA-VOCE QUESTION BANK (10 Questions):
   - 5 Basic principle questions.
   - 3 Apparatus-handling questions.
   - 2 Error analysis / "What if" questions.
   Include clear model answers for all 10 Viva questions.`;
        }
    },

    {
        id: "feedback",
        category: "feedback",
        title: "📊 Student & Parent Feedback Form",
        subtitle: "Diagnostic Feedback & Teaching Evaluation",
        tags: ["Feedback", "Likert Scale", "Diagnosis", "KVS Standard"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        description: "Generate professional feedback and self-assessment forms for students, parents, and peer teachers with Likert scales and open-ended suggestions.",
        builder: function(p) {
            return `Generate a PROFESSIONAL FEEDBACK & DIAGNOSTIC EVALUATION FORM for Kendriya Vidyalaya / CBSE Science Department.

TARGET DETAILS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Module / Term: ${p.chapter}

FORM SECTIONS:
1. FORM HEADER & PURPOSE STATEMENT: Brief welcoming text explaining confidentiality and feedback goals.
2. STUDENT SELF-ASSESSMENT GRID (5-point Likert Scale: 1-Strongly Disagree to 5-Strongly Agree):
   - Concept Clarity in ${p.chapter}
   - Numerical / Problem-Solving Confidence
   - Laboratory & Practical Work Understanding
   - ICT & Smart Classroom Engagement
   - Home Assignment & Homework Support
3. TEACHING METHODOLOGY EVALUATION (Likert Scale):
   - Pace of Teaching & Explanation Clarity
   - Doubts Resolution & Individual Attention
   - Use of Visual Models / Experiments
4. OPEN-ENDED REFLECTION QUESTIONS:
   - "Which topic in ${p.chapter} was easiest to understand and why?"
   - "Where did you face the maximum difficulty?"
   - "What additional support (remedial class, extra notes, worksheet) would help you?"
5. PARENT SIGN-OFF & SUGGESTION BOX.`;
        }
    },

    {
        id: "rubric",
        category: "assessment",
        title: "📜 Assessment Rubrics Grid",
        subtitle: "Analytic 4-Level Evaluation Criteria",
        tags: ["Rubrics", "Assessment", "NEP 2020", "Evaluation"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
        description: "Create analytic rubric grids for science projects, lab reports, subjective answers, and oral presentations mapped to NEP competency levels.",
        builder: function(p) {
            return `Generate a DETAILED ANALYTIC ASSESSMENT RUBRIC GRID for Science Evaluation.

SPECS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Task / Project Type: ${p.chapter}

RUBRIC TABLE MATRIX:
Generate a markdown table evaluating 4 Criteria across 4 Performance Levels:
| Criteria | Level 1: Beginning (1-2 pts) | Level 2: Developing (3-4 pts) | Level 3: Proficient (5-6 pts) | Level 4: Exemplary (7-8 pts) |

EVALUATION CRITERIA TO COVER:
1. Conceptual Understanding & Scientific Accuracy
2. Problem Solving & Mathematical / Derivation Rigor
3. Experimental / Diagrammatic Presentation & Formatting
4. Critical Thinking & Real-World Application

Include scoring guidelines, total weightage calculation, and qualitative feedback comment prompts for teachers.`;
        }
    },

    {
        id: "lessonplan",
        category: "physics",
        title: "📘 NEP 2020 5E Lesson Plan",
        subtitle: "Engage, Explore, Explain, Elaborate, Evaluate",
        tags: ["Lesson Plan", "NEP 2020", "5E Model", "Pedagogy"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Generate a complete 5E model lesson plan (Engage, Explore, Explain, Elaborate, Evaluate) with learning objectives, teacher actions, student activities, and ICT integration.",
        builder: function(p) {
            return `You are a CBSE Master Pedagogy Specialist and KVS Principal Evaluator.

Create a FULL NEP-2020 COMPLIANT 5E MODEL LESSON PLAN.

PARAMETERS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Topic / Unit: ${p.chapter}
• Duration: 40 Minutes (1 Period)

LESSON PLAN SECTIONS:
1. GENERAL INFORMATION: Class, Subject, Topic, Duration, Teaching Aids / ICT Tools.
2. GLO & SLO (General & Specific Learning Objectives): 3 SMART measurable objectives.
3. 5E PEDAGOGICAL PHASES:
   - ENGAGE (5 mins): Hook activity, real-life question, or demonstration to activate prior knowledge.
   - EXPLORE (10 mins): Hands-on inquiry activity or student investigation task.
   - EXPLAIN (10 mins): Teacher explanation of key concepts, formulas, or diagrams.
   - ELABORATE (10 mins): Higher-order application task or real-world problem solving.
   - EVALUATE (5 mins): Exit ticket assessment or quick quiz.
4. DIFFERENTIATED INSTRUCTION STRATEGY: Support for slow learners and extension tasks for gifted students.
5. HOME ASSIGNMENT: Competency-based homework question.`;
        }
    }
];

// 3. Application State & Storage
let activeCategory = "all";
let selectedTemplateId = "worksheet";
let activeTagFilter = null;
let savedTemplates = [];
try {
    savedTemplates = JSON.parse(localStorage.getItem("cbse_saved_prompts") || "[]");
} catch (e) {
    savedTemplates = [];
}

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    bindEvents();
    populateChapters();
    renderCategoriesCount();
    renderCards();
    updatePromptPreview();
    updateSavedCount();
});

// Theme Initializer
function initTheme() {
    const savedTheme = localStorage.getItem("cbse_studio_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// Bind Event Listeners
function bindEvents() {
    // Theme toggle
    document.getElementById("themeToggleBtn").addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        try { localStorage.setItem("cbse_studio_theme", newTheme); } catch(e){}
    });

    // Class & Subject changes with auto sync
    document.getElementById("paramClass").addEventListener("change", () => {
        populateChapters();
        updatePromptPreview();
    });

    document.getElementById("paramSubject").addEventListener("change", () => {
        populateChapters();
        updatePromptPreview();
    });

    // Form parameter inputs
    const paramInputs = [
        "paramChapterSelect", "paramChapterCustom", "paramTier", "paramMarks", "paramTime",
        "toggleAnswerKey", "toggleNEP", "toggleBloom", "toggleNCERT", "toggleRubrics"
    ];

    paramInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", updatePromptPreview);
            el.addEventListener("change", updatePromptPreview);
        }
    });

    // Textarea direct typing word count listener
    const promptBox = document.getElementById("promptBox");
    if (promptBox) {
        promptBox.addEventListener("input", () => {
            const text = promptBox.value;
            const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
            document.getElementById("wordCountBadge").textContent = `${words} words`;
        });
    }

    // Reset parameters button
    document.getElementById("resetParamsBtn").addEventListener("click", () => {
        document.getElementById("paramClass").value = "Class 10";
        document.getElementById("paramSubject").value = "General Science";
        populateChapters();
        document.getElementById("paramChapterCustom").value = "";
        document.getElementById("paramTier").value = "Balanced (Remedial + Standard + HOTS)";
        document.getElementById("paramMarks").value = "80";
        document.getElementById("paramTime").value = "180";
        document.getElementById("toggleAnswerKey").checked = true;
        document.getElementById("toggleNEP").checked = true;
        document.getElementById("toggleBloom").checked = true;
        document.getElementById("toggleNCERT").checked = true;
        document.getElementById("toggleRubrics").checked = false;
        updatePromptPreview();
    });

    // Category navigation
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category;
            renderCards();
        });
    });

    // Search input & tags
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", (e) => {
        clearSearchBtn.hidden = !e.target.value;
        renderCards();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.hidden = true;
        renderCards();
    });

    document.querySelectorAll(".tag-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            if (activeTagFilter === chip.dataset.tag) {
                activeTagFilter = null;
                chip.classList.remove("active");
            } else {
                document.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
                activeTagFilter = chip.dataset.tag;
                chip.classList.add("active");
            }
            renderCards();
        });
    });

    // Export dropdown toggle
    const exportBtn = document.getElementById("exportBtn");
    const exportMenu = document.getElementById("exportMenu");

    exportBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        exportMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        if (exportMenu) exportMenu.classList.remove("show");
    });

    // Saved templates modal
    document.getElementById("savedTemplatesBtn").addEventListener("click", openSavedModal);
}

// Populate NCERT Chapter Selector dynamically & sync subject
function populateChapters() {
    const classVal = document.getElementById("paramClass").value;
    const subjectSelect = document.getElementById("paramSubject");
    let subjectVal = subjectSelect.value;

    const isSeniorClass = classVal === "Class 11" || classVal === "Class 12";
    if (isSeniorClass && subjectVal === "General Science") {
        subjectVal = "Physics";
        subjectSelect.value = "Physics";
    } else if (!isSeniorClass && (subjectVal === "Physics" || subjectVal === "Chemistry" || subjectVal === "Biology")) {
        subjectVal = "General Science";
        subjectSelect.value = "General Science";
    }

    const chapterSelect = document.getElementById("paramChapterSelect");
    chapterSelect.innerHTML = "";

    let chapters = [];
    if (cbseChapterDatabase[classVal] && cbseChapterDatabase[classVal][subjectVal]) {
        chapters = cbseChapterDatabase[classVal][subjectVal];
    } else if (cbseChapterDatabase[classVal] && cbseChapterDatabase[classVal]["General Science"]) {
        chapters = cbseChapterDatabase[classVal]["General Science"];
    } else {
        chapters = ["Chapter 1: Core Concepts & Principles"];
    }

    chapters.forEach(ch => {
        const opt = document.createElement("option");
        opt.value = ch;
        opt.textContent = ch;
        chapterSelect.appendChild(opt);
    });
}

// Render Categories Count Badges
function renderCategoriesCount() {
    document.getElementById("countAll").textContent = templatesLibrary.length;
    document.getElementById("countAssessment").textContent = templatesLibrary.filter(t => t.category === "assessment").length;
    document.getElementById("countPhysics").textContent = templatesLibrary.filter(t => t.category === "physics").length;
    document.getElementById("countQuizzes").textContent = templatesLibrary.filter(t => t.category === "quizzes").length;
    document.getElementById("countPracticals").textContent = templatesLibrary.filter(t => t.category === "practicals").length;
    document.getElementById("countFeedback").textContent = templatesLibrary.filter(t => t.category === "feedback").length;
}

// Render Cards Grid
function renderCards() {
    const cardsGrid = document.getElementById("cardsGrid");
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    cardsGrid.innerHTML = "";

    const filtered = templatesLibrary.filter(tpl => {
        const matchesCat = (activeCategory === "all") || (tpl.category === activeCategory);
        const matchesTag = !activeTagFilter || tpl.tags.includes(activeTagFilter);
        const matchesSearch = !query || 
            tpl.title.toLowerCase().includes(query) || 
            tpl.subtitle.toLowerCase().includes(query) || 
            tpl.description.toLowerCase().includes(query) ||
            tpl.tags.some(t => t.toLowerCase().includes(query));

        return matchesCat && matchesTag && matchesSearch;
    });

    document.getElementById("libraryCount").textContent = `${filtered.length} available`;

    if (filtered.length === 0) {
        cardsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <p style="font-size: 16px; font-weight: 600;">No prompt generators found matching your filters.</p>
                <p style="font-size: 13px; margin-top: 6px;">Try clearing your search term or selecting 'All Generators'.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(tpl => {
        const card = document.createElement("div");
        card.className = `card ${tpl.id === selectedTemplateId ? 'active-card' : ''}`;
        card.onclick = () => selectTemplate(tpl.id);

        card.innerHTML = `
            <div class="card-icon-title">
                <div class="card-icon">${tpl.icon}</div>
                <div>
                    <h3>${tpl.title}</h3>
                    <div style="font-size:12px; color:var(--accent-cyan); font-weight:600; margin-top:2px;">${tpl.subtitle}</div>
                </div>
            </div>
            <p>${tpl.description}</p>
            <div class="card-tags">
                ${tpl.tags.map(t => `<span class="mini-tag">${t}</span>`).join('')}
            </div>
            <button class="btn btn-outline btn-sm card-footer-btn">
                ${tpl.id === selectedTemplateId ? '✓ Currently Loaded' : 'Assemble Prompt →'}
            </button>
        `;

        cardsGrid.appendChild(card);
    });
}

// Select Template & Scroll to Workspace
function selectTemplate(templateId) {
    selectedTemplateId = templateId;
    renderCards();
    updatePromptPreview();

    // Smooth scroll to editor workspace
    document.getElementById("workspaceCard").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Gather Current Parameters
function getParams() {
    const customChapter = document.getElementById("paramChapterCustom").value.trim();
    const selectedChapter = document.getElementById("paramChapterSelect").value;

    return {
        classLevel: document.getElementById("paramClass").value,
        subject: document.getElementById("paramSubject").value,
        chapter: customChapter ? `${selectedChapter} (${customChapter})` : selectedChapter,
        tier: document.getElementById("paramTier").value,
        marks: document.getElementById("paramMarks").value,
        time: document.getElementById("paramTime").value,
        includeAnswerKey: document.getElementById("toggleAnswerKey").checked,
        includeNEP: document.getElementById("toggleNEP").checked,
        includeBloom: document.getElementById("toggleBloom").checked,
        includeNCERT: document.getElementById("toggleNCERT").checked,
        includeRubrics: document.getElementById("toggleRubrics").checked
    };
}

// Update Live Prompt Textarea
function updatePromptPreview() {
    const tpl = templatesLibrary.find(t => t.id === selectedTemplateId) || templatesLibrary[0];
    const params = getParams();

    const compiledPrompt = tpl.builder(params);

    document.getElementById("activePromptTitle").textContent = tpl.title;
    document.getElementById("activePromptSubtitle").textContent = `Configured for ${params.classLevel} ${params.subject} • ${params.chapter}`;
    document.getElementById("activePromptTag").textContent = tpl.subtitle;
    
    const promptBox = document.getElementById("promptBox");
    promptBox.value = compiledPrompt;

    // Update word count
    const words = compiledPrompt.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById("wordCountBadge").textContent = `${words} words`;
}

// Copy Prompt to Clipboard
function copyPrompt() {
    const promptBox = document.getElementById("promptBox");
    const copyBtn = document.getElementById("copyBtn");
    promptBox.select();

    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(() => { copyBtn.innerHTML = originalHTML; }, 2000);

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(promptBox.value).then(() => {
            showToast("Prompt Copied to Clipboard! Ready for AI.");
        }).catch(() => {
            document.execCommand("copy");
            showToast("Prompt Copied Successfully!");
        });
    } else {
        document.execCommand("copy");
        showToast("Prompt Copied Successfully!");
    }
}

// Show Toast Notification
function showToast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    toast.hidden = false;

    setTimeout(() => {
        toast.hidden = true;
    }, 3000);
}

// Save Prompt to Favorites LocalStorage
function saveToFavorites() {
    const params = getParams();
    const tpl = templatesLibrary.find(t => t.id === selectedTemplateId);
    const content = document.getElementById("promptBox").value;

    const item = {
        id: Date.now(),
        title: `${tpl.title} (${params.classLevel})`,
        subtitle: `${params.subject} - ${params.chapter}`,
        content: content,
        date: new Date().toLocaleDateString('en-IN')
    };

    savedTemplates.unshift(item);
    try {
        localStorage.setItem("cbse_saved_prompts", JSON.stringify(savedTemplates));
    } catch(e){}
    updateSavedCount();
    showToast("Template Saved to Local Presets!");
}

function updateSavedCount() {
    document.getElementById("savedCount").textContent = savedTemplates.length;
}

// Open Saved Templates Modal
function openSavedModal() {
    const modal = document.getElementById("savedModal");
    const list = document.getElementById("savedTemplatesList");
    list.innerHTML = "";

    if (savedTemplates.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding:30px; color:var(--text-secondary);">
                <p>No saved templates yet.</p>
                <p style="font-size:12px; margin-top:4px;">Click 'Save Preset' in the prompt editor workspace to store your custom prompts.</p>
            </div>
        `;
    } else {
        savedTemplates.forEach(item => {
            const div = document.createElement("div");
            div.className = "saved-item";
            div.innerHTML = `
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.subtitle} • <span style="color:var(--text-muted);">${item.date}</span></p>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-primary btn-sm" onclick="loadSavedItem(${item.id})">Load</button>
                    <button class="btn btn-outline btn-sm" onclick="deleteSavedItem(${item.id})">&times;</button>
                </div>
            `;
            list.appendChild(div);
        });
    }

    modal.hidden = false;
}

function closeSavedModal() {
    document.getElementById("savedModal").hidden = true;
}

function loadSavedItem(id) {
    const item = savedTemplates.find(t => t.id === id);
    if (item) {
        document.getElementById("promptBox").value = item.content;
        document.getElementById("activePromptTitle").textContent = item.title;
        document.getElementById("activePromptSubtitle").textContent = item.subtitle;
        
        const words = item.content.trim().split(/\s+/).filter(w => w.length > 0).length;
        document.getElementById("wordCountBadge").textContent = `${words} words`;

        closeSavedModal();
        showToast("Loaded saved template into workspace!");
    }
}

function deleteSavedItem(id) {
    savedTemplates = savedTemplates.filter(t => t.id !== id);
    try {
        localStorage.setItem("cbse_saved_prompts", JSON.stringify(savedTemplates));
    } catch(e){}
    updateSavedCount();
    openSavedModal();
}

function clearAllSaved() {
    if (confirm("Are you sure you want to clear all saved templates?")) {
        savedTemplates = [];
        try {
            localStorage.removeItem("cbse_saved_prompts");
        } catch(e){}
        updateSavedCount();
        openSavedModal();
    }
}

// Export Prompt to Markdown, Text, or Printable View
function exportPrompt(format) {
    const exportMenu = document.getElementById("exportMenu");
    if (exportMenu) exportMenu.classList.remove("show");

    const text = document.getElementById("promptBox").value;
    const params = getParams();
    const filename = `CBSE_${params.classLevel}_${params.subject}_Prompt.${format === 'md' ? 'md' : 'txt'}`;

    if (format === 'print') {
        const printWin = window.open('', '_blank');
        printWin.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${params.classLevel} ${params.subject} Prompt - CBSE 2026-27</title>
                <style>
                    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; line-height: 1.6; color: #111; }
                    h1 { font-size: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 8px; color: #2563eb; }
                    pre { background: #f8fafc; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; white-space: pre-wrap; font-family: monospace; font-size: 13px; }
                </style>
            </head>
            <body>
                <h1>CBSE AI Teacher Studio 2026-27 - Generated Prompt</h1>
                <p><strong>Configured for:</strong> ${params.classLevel} | ${params.subject} | ${params.chapter}</p>
                <pre>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                <script>window.onload = function() { window.print(); }</script>
            </body>
            </html>
        `);
        printWin.document.close();
        return;
    }

    const blob = new Blob([text], { type: format === 'md' ? 'text/markdown' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Exported prompt as ${filename}`);
}
