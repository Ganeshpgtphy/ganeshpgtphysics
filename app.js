/* ==========================================================================
   CBSE Question Paper Setter & Worksheets Generator 2026-27 - Application Logic
   Authoritative CBSE/KVS Prompt & Direct Question Paper Assembly Engine (All Subjects)
   ========================================================================== */

// 1. NCERT 2026-27 & CBSE Chapter Database for ALL Subjects (Classes 6-12)
const cbseChapterDatabase = {
    "Class 6": {
        "Mathematics": [
            "Chapter 1: Patterns in Mathematics",
            "Chapter 2: Lines and Angles",
            "Chapter 3: Number Play",
            "Chapter 4: Data Handling and Presentation",
            "Chapter 5: Prime Time",
            "Chapter 6: Perimeter and Area",
            "Chapter 7: Fractions",
            "Chapter 8: Playing with Constructions",
            "Chapter 9: Symmetry",
            "Chapter 10: The Other Side of Zero (Integers)"
        ],
        "General Science": [
            "Chapter 1: The Wonderful World of Science",
            "Chapter 2: Diversity in the Living World",
            "Chapter 3: Mindful Eating: A Path to a Healthy Body",
            "Chapter 4: Exploring Magnets",
            "Chapter 5: Measurement of Length and Motion",
            "Chapter 6: Materials Around Us",
            "Chapter 7: Temperature and Its Measurement",
            "Chapter 8: Water in Our Life",
            "Chapter 9: Methods of Separation in Everyday Life",
            "Chapter 10: Living Creatures: Exploring Their Characteristics",
            "Chapter 11: Nature's Treasures",
            "Chapter 12: Beyond Earth"
        ],
        "Social Science": [
            "Chapter 1: Locating Places on the Earth",
            "Chapter 2: Oceans and Continents",
            "Chapter 3: Landforms and Life",
            "Chapter 4: Timeline and Sources of History",
            "Chapter 5: India, That Is Bharat",
            "Chapter 6: The Beginnings of Indian Civilisation",
            "Chapter 7: India's Cultural Roots",
            "Chapter 8: Governance and Democracy",
            "Chapter 9: Economic Activities Around Us"
        ],
        "English": [
            "Unit 1: Fables and Folk Tales",
            "Unit 2: Friendship and Empathy",
            "Unit 3: Nature and Environment",
            "Unit 4: Sports and Courage",
            "Unit 5: Grammar, Reading & Writing Skills"
        ],
        "Hindi": [
            "पाठ 1: वह चिड़िया जो (वसंत)",
            "पाठ 2: बचपन",
            "पाठ 3: नादान दोस्त",
            "पाठ 4: चाँद से थोड़ी सी गप्पें",
            "पाठ 5: व्यावहारिक व्याकरण एवं रचनात्मक लेखन"
        ],
        "Computer Science / IT / AI": [
            "Unit 1: Computer Fundamentals & Digital Devices",
            "Unit 2: Algorithmic Thinking & Block Coding",
            "Unit 3: Cyber Safety & Digital Literacy",
            "Unit 4: Introduction to Artificial Intelligence (AI)"
        ]
    },
    "Class 7": {
        "Mathematics": [
            "Chapter 1: Integers",
            "Chapter 2: Fractions and Decimals",
            "Chapter 3: Data Handling",
            "Chapter 4: Simple Equations",
            "Chapter 5: Lines and Angles",
            "Chapter 6: The Triangle and Its Properties",
            "Chapter 7: Comparing Quantities",
            "Chapter 8: Rational Numbers",
            "Chapter 9: Perimeter and Area",
            "Chapter 10: Algebraic Expressions",
            "Chapter 11: Exponents and Powers",
            "Chapter 12: Symmetry & Visualising Solid Shapes"
        ],
        "General Science": [
            "Chapter 1: Nutrition in Plants",
            "Chapter 2: Nutrition in Animals",
            "Chapter 3: Heat",
            "Chapter 4: Acids, Bases and Salts",
            "Chapter 5: Physical and Chemical Changes",
            "Chapter 6: Respiration in Organisms",
            "Chapter 7: Transportation in Animals and Plants",
            "Chapter 8: Reproduction in Plants",
            "Chapter 9: Motion and Time",
            "Chapter 10: Electric Current and Its Effects",
            "Chapter 11: Light",
            "Chapter 12: Forests: Our Lifeline",
            "Chapter 13: Wastewater Story"
        ],
        "Social Science": [
            "Chapter 1: Tracing Changes Through a Thousand Years",
            "Chapter 2: New Kings and Kingdoms",
            "Chapter 3: Delhi: 12th to 15th Century",
            "Chapter 4: The Mughals (16th to 17th Century)",
            "Chapter 5: Environment & Inside Our Earth",
            "Chapter 6: Our Changing Earth & Atmosphere",
            "Chapter 7: Water & Human Environment",
            "Chapter 8: On Equality & Role of Government in Health",
            "Chapter 9: How the State Government Works",
            "Chapter 10: Markets Around Us & A Shirt in the Market"
        ],
        "English": [
            "Unit 1: Three Questions & The Squirrel",
            "Unit 2: A Gift of Chappals & Rebel",
            "Unit 3: Gopal and the Hilsa Fish",
            "Unit 4: The Ashes That Made Trees Bloom",
            "Unit 5: Grammar, Reading & Writing Skills"
        ],
        "Hindi": [
            "पाठ 1: हम पंछी उन्मुक्त गगन के",
            "पाठ 2: दादी माँ",
            "पाठ 3: हिमालय की बेटियाँ",
            "पाठ 4: कठपुतली",
            "पाठ 5: भाषा, व्याकरण एवं रचनात्मक लेखन"
        ],
        "Computer Science / IT / AI": [
            "Unit 1: Hardware Architecture & Operating Systems",
            "Unit 2: Advanced Block Coding & Python Intro",
            "Unit 3: Cyber Ethics & Privacy",
            "Unit 4: AI Applications & Smart Assistant Systems"
        ]
    },
    "Class 8": {
        "Mathematics": [
            "Chapter 1: Rational Numbers",
            "Chapter 2: Linear Equations in One Variable",
            "Chapter 3: Understanding Quadrilaterals",
            "Chapter 4: Data Handling",
            "Chapter 5: Square and Square Roots",
            "Chapter 6: Cube and Cube Roots",
            "Chapter 7: Comparing Quantities",
            "Chapter 8: Algebraic Expressions and Identities",
            "Chapter 9: Mensuration",
            "Chapter 10: Exponents and Powers",
            "Chapter 11: Direct and Inverse Proportions",
            "Chapter 12: Factorisation",
            "Chapter 13: Introduction to Graphs"
        ],
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
        ],
        "Social Science": [
            "Chapter 1: How, When and Where",
            "Chapter 2: From Trade to Territory",
            "Chapter 3: Ruling the Countryside",
            "Chapter 4: Tribals, Dikus and the Vision of a Golden Age",
            "Chapter 5: When People Rebel 1857 and After",
            "Chapter 6: Resources & Land, Soil, Water",
            "Chapter 7: Agriculture & Industries",
            "Chapter 8: Human Resources",
            "Chapter 9: The Indian Constitution & Secularism",
            "Chapter 10: Judiciary & Public Facilities"
        ],
        "English": [
            "Unit 1: The Best Christmas Present in the World",
            "Unit 2: The Tsunami & Geography Lesson",
            "Unit 3: Glimpses of the Past & Macavity",
            "Unit 4: Bepin Choudhury’s Lapse of Memory",
            "Unit 5: Grammar, Reading & Writing Skills"
        ],
        "Hindi": [
            "पाठ 1: ध्वनि",
            "पाठ 2: लाख की चूड़ियाँ",
            "पाठ 3: बस की यात्रा",
            "पाठ 4: दीवानों की हस्ती",
            "पाठ 5: संधि, समास, अलंकार एवं पत्र/निबंध लेखन"
        ],
        "Computer Science / IT / AI": [
            "Unit 1: Computer Networks & Internet Protocol",
            "Unit 2: Web Design with HTML & CSS Basics",
            "Unit 3: Python Fundamentals (Loops & Conditions)",
            "Unit 4: Data Science & AI Ethics"
        ]
    },
    "Class 9": {
        "Mathematics": [
            "Chapter 1: Number Systems",
            "Chapter 2: Polynomials",
            "Chapter 3: Coordinate Geometry",
            "Chapter 4: Linear Equations in Two Variables",
            "Chapter 5: Introduction to Euclid's Geometry",
            "Chapter 6: Lines and Angles",
            "Chapter 7: Triangles",
            "Chapter 8: Quadrilaterals",
            "Chapter 9: Circles",
            "Chapter 10: Heron's Formula",
            "Chapter 11: Surface Areas and Volumes",
            "Chapter 12: Statistics"
        ],
        "General Science": [
            "Chapter 1: Matter in Our Surroundings",
            "Chapter 2: Is Matter Around Us Pure?",
            "Chapter 3: Atoms and Molecules",
            "Chapter 4: Structure of the Atom",
            "Chapter 5: The Fundamental Unit of Life",
            "Chapter 6: Tissues",
            "Chapter 7: Motion",
            "Chapter 8: Force and Laws of Motion",
            "Chapter 9: Gravitation",
            "Chapter 10: Work and Energy",
            "Chapter 11: Sound",
            "Chapter 12: Improvement in Food Resources"
        ],
        "Social Science": [
            "Chapter 1: The French Revolution (History)",
            "Chapter 2: Socialism in Europe & Russian Revolution (History)",
            "Chapter 3: Nazism and the Rise of Hitler (History)",
            "Chapter 4: India - Size and Location (Geography)",
            "Chapter 5: Physical Features of India (Geography)",
            "Chapter 6: Drainage & Climate (Geography)",
            "Chapter 7: Natural Vegetation & Wildlife (Geography)",
            "Chapter 8: What is Democracy? Why Democracy? (Pol. Sci.)",
            "Chapter 9: Constitutional Design (Pol. Sci.)",
            "Chapter 10: Electoral Politics & Working of Institutions (Pol. Sci.)",
            "Chapter 11: Democratic Rights (Pol. Sci.)",
            "Chapter 12: People as Resource & Poverty as a Challenge (Economics)",
            "Chapter 13: Food Security in India (Economics)"
        ],
        "English": [
            "Unit 1: The Fun They Had & The Road Not Taken",
            "Unit 2: The Sound of Music & Wind",
            "Unit 3: The Little Girl & Rain on the Roof",
            "Unit 4: A Truly Beautiful Mind & Lake Isle of Innisfree",
            "Unit 5: Reading Comprehension, Grammar & Analytical Paragraph"
        ],
        "Hindi": [
            "पाठ 1: दो बैलों की कथा (क्षितिज)",
            "पाठ 2: ल्हासा की ओर",
            "पाठ 3: उपभोक्तावाद की संस्कृति",
            "पाठ 4: साँवले सपनों की याद",
            "पाठ 5: उपसर्ग, प्रत्यय, समास, वाक्य भेद एवं पत्र/संवाद लेखन"
        ],
        "Computer Science / IT / AI": [
            "Unit 1: Employability Skills (Communication, ICT)",
            "Unit 2: IT-ITeS Industry & Word Processing (Advanced)",
            "Unit 3: Electronic Spreadsheet & Digital Presentation",
            "Unit 4: Python Programming & Computer Vision (AI 417)"
        ]
    },
    "Class 10": {
        "Mathematics": [
            "Chapter 1: Real Numbers",
            "Chapter 2: Polynomials",
            "Chapter 3: Pair of Linear Equations in Two Variables",
            "Chapter 4: Quadratic Equations",
            "Chapter 5: Arithmetic Progressions",
            "Chapter 6: Triangles",
            "Chapter 7: Coordinate Geometry",
            "Chapter 8: Introduction to Trigonometry",
            "Chapter 9: Some Applications of Trigonometry",
            "Chapter 10: Circles",
            "Chapter 11: Areas Related to Circles",
            "Chapter 12: Surface Areas and Volumes",
            "Chapter 13: Statistics",
            "Chapter 14: Probability"
        ],
        "General Science": [
            "Chapter 1: Chemical Reactions and Equations",
            "Chapter 2: Acids, Bases and Salts",
            "Chapter 3: Metals and Non-metals",
            "Chapter 4: Carbon and Its Compounds",
            "Chapter 5: Life Processes",
            "Chapter 6: Control and Coordination",
            "Chapter 7: How Do Organisms Reproduce?",
            "Chapter 8: Heredity and Evolution",
            "Chapter 9: Light – Reflection and Refraction",
            "Chapter 10: The Human Eye and Colourful World",
            "Chapter 11: Electricity",
            "Chapter 12: Magnetic Effects of Electric Current",
            "Chapter 13: Our Environment"
        ],
        "Social Science": [
            "Chapter 1: The Rise of Nationalism in Europe (History)",
            "Chapter 2: Nationalism in India (History)",
            "Chapter 3: The Making of a Global World & Print Culture (History)",
            "Chapter 4: Resources and Development & Forest/Water Resources (Geography)",
            "Chapter 5: Agriculture, Minerals & Energy Resources (Geography)",
            "Chapter 6: Manufacturing Industries & Lifelines of National Economy (Geography)",
            "Chapter 7: Power Sharing & Federalism (Pol. Sci.)",
            "Chapter 8: Gender, Religion and Caste & Political Parties (Pol. Sci.)",
            "Chapter 9: Outcomes of Democracy (Pol. Sci.)",
            "Chapter 10: Development & Sectors of the Indian Economy (Economics)",
            "Chapter 11: Money and Credit & Globalisation (Economics)"
        ],
        "English": [
            "Unit 1: A Letter to God & Dust of Snow",
            "Unit 2: Nelson Mandela: Long Walk to Freedom & A Tiger in the Zoo",
            "Unit 3: Two Stories about Flying & How to Tell Wild Animals",
            "Unit 4: From the Diary of Anne Frank & Amanda",
            "Unit 5: Reading Skills, Formal Letter Writing & Analytical Paragraph"
        ],
        "Hindi": [
            "पाठ 1: पद (सूरदास) / क्षितिज",
            "पाठ 2: राम-लक्ष्मण-परशुराम संवाद",
            "पाठ 3: नेताजी का चश्मा",
            "पाठ 4: बालगोबिन भगत",
            "पाठ 5: रचना के आधार पर वाक्य रूपांतरण, पद परिचय, अलंकार एवं विज्ञापन/ईमेल"
        ],
        "Computer Science / IT / AI": [
            "Unit 1: Advanced Communication & ICT Skills",
            "Unit 2: Digital Documentation & Electronic Spreadsheet",
            "Unit 3: Database Management System (DBMS & SQL)",
            "Unit 4: Artificial Intelligence Project Cycle & Data Science (AI 417)"
        ]
    },
    "Class 11": {
        "Mathematics": [
            "Chapter 1: Sets",
            "Chapter 2: Relations and Functions",
            "Chapter 3: Trigonometric Functions",
            "Chapter 4: Complex Numbers and Quadratic Equations",
            "Chapter 5: Linear Inequalities",
            "Chapter 6: Permutations and Combinations",
            "Chapter 7: Binomial Theorem",
            "Chapter 8: Sequences and Series",
            "Chapter 9: Straight Lines",
            "Chapter 10: Conic Sections",
            "Chapter 11: Introduction to Three Dimensional Geometry",
            "Chapter 12: Limits and Derivatives",
            "Chapter 13: Statistics",
            "Chapter 14: Probability"
        ],
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
            "Chapter 5: Chemical Thermodynamics",
            "Chapter 6: Equilibrium",
            "Chapter 7: Redox Reactions",
            "Chapter 8: Organic Chemistry: Basic Principles & Techniques",
            "Chapter 9: Hydrocarbons"
        ],
        "Biology": [
            "Chapter 1: The Living World",
            "Chapter 2: Biological Classification",
            "Chapter 3: Plant Kingdom",
            "Chapter 4: Animal Kingdom",
            "Chapter 5: Morphology of Flowering Plants",
            "Chapter 6: Anatomy of Flowering Plants",
            "Chapter 7: Structural Organisation in Animals",
            "Chapter 8: Cell: The Unit of Life",
            "Chapter 9: Biomolecules",
            "Chapter 10: Cell Cycle and Cell Division",
            "Chapter 11: Photosynthesis in Higher Plants",
            "Chapter 12: Respiration in Plants",
            "Chapter 13: Plant Growth and Development",
            "Chapter 14: Breathing and Exchange of Gases",
            "Chapter 15: Body Fluids and Circulation",
            "Chapter 16: Excretory Products and Their Elimination",
            "Chapter 17: Locomotion and Movement",
            "Chapter 18: Neural Control and Coordination",
            "Chapter 19: Chemical Coordination and Integration"
        ],
        "Computer Science / IP": [
            "Unit 1: Computer Systems and Organisation",
            "Unit 2: Computational Thinking and Python Programming",
            "Unit 3: Data Handling using Python Libraries (Pandas / NumPy)",
            "Unit 4: Database Concepts & Structured Query Language (SQL)",
            "Unit 5: Cyber Safety, Society, Law and Ethics"
        ],
        "English Core": [
            "Unit 1: The Portrait of a Lady & A Photograph",
            "Unit 2: We're Not Afraid to Die & Discovering Tut",
            "Unit 3: The Laburnum Top & The Voice of the Rain",
            "Unit 4: Childhood & Father to Son",
            "Unit 5: Note Making, Summarising, Poster Design & Speech Writing"
        ],
        "Accountancy": [
            "Chapter 1: Introduction to Accounting & Basic Terms",
            "Chapter 2: Theory Base of Accounting & Accounting Standards",
            "Chapter 3: Recording of Transactions (Journal, Ledger, Cash Book)",
            "Chapter 4: Bank Reconciliation Statement (BRS)",
            "Chapter 5: Trial Balance and Rectification of Errors",
            "Chapter 6: Depreciation, Provisions and Reserves",
            "Chapter 7: Financial Statements of Sole Proprietorship"
        ],
        "Business Studies": [
            "Chapter 1: Business, Trade and Commerce",
            "Chapter 2: Forms of Business Organisations",
            "Chapter 3: Private, Public and Global Enterprises",
            "Chapter 4: Business Services",
            "Chapter 5: Emerging Modes of Business",
            "Chapter 6: Social Responsibilities of Business & Ethics",
            "Chapter 7: Sources of Business Finance",
            "Chapter 8: Small Business and Enterprises",
            "Chapter 9: Internal Trade",
            "Chapter 10: International Business"
        ],
        "Economics": [
            "Unit 1: Introduction to Microeconomics & Consumer Equilibrium",
            "Unit 2: Producer Behaviour, Cost & Supply",
            "Unit 3: Forms of Market and Price Determination",
            "Unit 4: Statistics for Economics (Collection & Presentation)",
            "Unit 5: Measures of Central Tendency & Dispersion",
            "Unit 6: Correlation & Index Numbers"
        ]
    },
    "Class 12": {
        "Mathematics": [
            "Chapter 1: Relations and Functions",
            "Chapter 2: Inverse Trigonometric Functions",
            "Chapter 3: Matrices",
            "Chapter 4: Determinants",
            "Chapter 5: Continuity and Differentiability",
            "Chapter 6: Application of Derivatives",
            "Chapter 7: Integrals",
            "Chapter 8: Application of Integrals",
            "Chapter 9: Differential Equations",
            "Chapter 10: Vector Algebra",
            "Chapter 11: Three Dimensional Geometry",
            "Chapter 12: Linear Programming",
            "Chapter 13: Probability"
        ],
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
            "Chapter 10: Biotechnology and Its Applications",
            "Chapter 11: Organisms and Populations",
            "Chapter 12: Ecosystem & Biodiversity Conservation"
        ],
        "Computer Science / IP": [
            "Unit 1: Computational Thinking and Python Programming-2",
            "Unit 2: Computer Networks & Internet Protocols",
            "Unit 3: Database Management & SQL Queries (Joins, Functions, Group By)",
            "Unit 4: Python-MySQL Database Connectivity",
            "Unit 5: Data Visualization with Matplotlib (IP 065)"
        ],
        "English Core": [
            "Unit 1: The Last Lesson & My Mother at Sixty-Six",
            "Unit 2: Lost Spring & Keeping Quiet",
            "Unit 3: Deep Water & A Thing of Beauty",
            "Unit 4: The Rattrap & A Roadside Stand",
            "Unit 5: Indigo & Poets and Pancakes",
            "Unit 6: Formal Notice, Invitation, Letter to Editor & Job Application"
        ],
        "Accountancy": [
            "Chapter 1: Accounting for Partnership Firms - Fundamentals",
            "Chapter 2: Goodwill: Nature and Valuation",
            "Chapter 3: Reconstitution of Partnership (Admission, Retirement, Death)",
            "Chapter 4: Dissolution of Partnership Firm",
            "Chapter 5: Accounting for Share Capital",
            "Chapter 6: Issue and Redemption of Debentures",
            "Chapter 7: Financial Statements of a Company & Analysis",
            "Chapter 8: Accounting Ratios & Cash Flow Statement"
        ],
        "Business Studies": [
            "Chapter 1: Nature and Significance of Management",
            "Chapter 2: Principles of Management",
            "Chapter 3: Business Environment",
            "Chapter 4: Planning",
            "Chapter 5: Organising",
            "Chapter 6: Staffing",
            "Chapter 7: Directing",
            "Chapter 8: Controlling",
            "Chapter 9: Financial Management",
            "Chapter 10: Financial Markets",
            "Chapter 11: Marketing Management",
            "Chapter 12: Consumer Protection"
        ],
        "Economics": [
            "Unit 1: National Income Accounting and Related Aggregates",
            "Unit 2: Money and Banking",
            "Unit 3: Determination of Income and Employment",
            "Unit 4: Government Budget and the Economy",
            "Unit 5: Balance of Payments & Foreign Exchange Rate",
            "Unit 6: Development Experience of India (1947-90) & Economic Reforms (1991)",
            "Unit 7: Current Challenges Facing Indian Economy",
            "Unit 8: Development Experience of India - Comparison with Neighbours"
        ]
    }
};

// Subject mapping by Class tier
const subjectOptionsByClass = {
    "junior": ["General Science", "Mathematics", "Social Science", "English", "Hindi", "Computer Science / IT / AI"],
    "senior": ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science / IP", "English Core", "Accountancy", "Business Studies", "Economics"]
};

// Helper: Universal Subject-Adaptive Question Paper Generator
function buildSubjectQuestionPaper(p) {
    const totalM = parseFloat(p.marks) || 80;
    const subj = p.subject;

    // Header & Blueprint
    let paper = `KENDRIYA VIDYALAYA SANGATHAN / CBSE BOARD EXAMINATION 2026-27
OFFICIAL COMPETENCY-BASED QUESTION PAPER

Subject: ${p.subject} | Class: ${p.classLevel}
Syllabus / Chapter Focus: ${p.chapter}
Maximum Marks: ${totalM} Marks | Time Allowed: ${p.time} Minutes
Target Learner Tier: ${p.tier}

================================================================================
GENERAL INSTRUCTIONS:
1. This question paper consists of compulsory questions divided into 5 Sections: A, B, C, D, and E.
2. Section A contains Objective Type Questions (MCQs and Assertion-Reason questions) of 1 mark each.
3. Section B contains Short Answer (SA-I) questions of 2 marks each (30-50 words).
4. Section C contains Short Answer (SA-II) questions of 3 marks each (50-80 words).
5. Section D contains Long Answer (LA) questions of 5 marks each with compulsory internal choices.
6. Section E contains Case-Based / Data-Integrated units of assessment of 4 marks each with sub-parts.
${subj.includes('Math') ? '7. Use of calculators is strictly prohibited. Geometric figures must be drawn neatly where required.\n' : '7. Use of calculators is NOT permitted. Logarithmic tables may be provided on request.\n'}${p.includeBloom ? '8. Bloom\'s Taxonomy Levels are tagged for each question [R: Remember, U: Understand, Ap: Apply, An: Analyze, Ev: Evaluate, C: Create].\n' : ''}${p.includeNEP ? '9. Questions strictly test Competency-Based Education (CBE) as per NEP-2020 & NCF-SE 2023.\n' : ''}
${p.chapterWeightageTable ? p.chapterWeightageTable + '\n' : ''}================================================================================
EXAM BLUEPRINT MATRIX (CBSE SESSION 2026-27)

| Section | Question Type | No. of Qs | Marks per Q | Total Marks | Targeted Competency Level |
|---|---|---|---|---|---|
| Section A | MCQs & Assertion-Reason | 10 | 1 | 10 Marks | Conceptual Recall & Reasoning |
| Section B | Short Answer - I (SA-I) | 3 | 2 | 6 Marks | Application & Problem Solving |
| Section C | Short Answer - II (SA-II) | 3 | 3 | 9 Marks | Analytical Proof / Derivation / Case |
| Section D | Long Answer (LA) | 1 | 5 | 5 Marks | Evaluation / Synthesis / Theorem |
| Section E | Case-Study / Source Integrated | 1 | 4 | 4 Marks | Integrated Real-World HOTS |
| **TOTAL** | **Full Question Paper** | **18** | | **35 Marks** | **100% CBSE Aligned** |

================================================================================
SECTION A (10 Marks) - MULTIPLE CHOICE & ASSERTION-REASON QUESTIONS
`;

    if (subj.includes("Math")) {
        paper += `
Q1. [Competency - Application [Ap]]
If alpha and beta are the zeroes of the quadratic polynomial f(x) = x^2 - 5x + k such that alpha - beta = 1, then the value of k is:
(A) 6    (B) 4    (C) 12    (D) 5

Q2. [Competency - Conceptual Analysis [An]]
If tan(theta) + cot(theta) = 2, then the value of tan^10(theta) + cot^10(theta) is equal to:
(A) 1    (B) 2    (C) 10    (D) 2^10

Q3. [Competency - Problem Solving [Ap]]
The 11th term of an Arithmetic Progression -3, -1/2, 2, ... is:
(A) 28   (B) 22   (C) -38   (D) 46/2

Q4. [NCERT Concept Check [R]]
The distance of point P(-6, 8) from the origin (0, 0) is:
(A) 8 units   (B) 2 sqrt(7) units   (C) 10 units   (D) 6 units

Q5. [Competency - Analytical Reasoning [An]]
If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in:
(A) Equal ratio   (B) Inverse ratio   (C) Square ratio   (D) Perpendicular ratio

Q6. [Competency - Probability [Ap]]
A card is drawn at random from a well-shuffled deck of 52 playing cards. The probability of getting a face card of red color is:
(A) 3/13   (B) 3/26   (C) 1/26   (D) 6/13

Q7. [NCERT Exemplar Pattern [U]]
If the perimeter and area of a circle are numerically equal, then the radius of the circle is:
(A) 2 units   (B) pi units   (C) 4 units   (D) 7 units

---
DIRECTION FOR Q8 - Q10:
In the following questions, a statement of Assertion (A) is followed by Reason (R):
(A) Both A and R are true, and R is correct explanation of A.
(B) Both A and R are true, but R is NOT correct explanation of A.
(C) A is true, R is false.
(D) A is false, R is true.

Q8. Assertion (A): The HCF of two numbers is 5 and their product is 150, then their LCM is 30.
Reason (R): For any two positive integers a and b, HCF(a, b) x LCM(a, b) = a x b.

Q9. Assertion (A): The line 3x + 2y - 12 = 0 cuts the x-axis at (4, 0).
Reason (R): At any point on the x-axis, the y-coordinate is always zero.

Q10. Assertion (A): Sin(A+B) = Sin A + Sin B for all angles A and B.
Reason (R): Trigonometric ratios follow linear algebraic distributive laws.

================================================================================
SECTION B (6 Marks) - SHORT ANSWER QUESTIONS - I (2 Marks Each)

Q11. Prove that 3 + 2 sqrt(5) is an irrational number, given that sqrt(5) is irrational. (2 Marks)
Q12. Find the coordinates of the point which divides the line segment joining (4, -3) and (8, 5) internally in the ratio 3:1. (2 Marks)
Q13. Solve the pair of linear equations for x and y:
     2x + 3y = 11  and  2x - 4y = -24. (2 Marks)

================================================================================
SECTION C (9 Marks) - SHORT ANSWER QUESTIONS - II (3 Marks Each)

Q14. The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP. (3 Marks)
Q15. Prove the trigonometric identity: (sin theta - 2 sin^3 theta) / (2 cos^3 theta - cos theta) = tan theta. (3 Marks)
Q16. Find the area of the unshaded region enclosed between a square of side 14 cm and four congruent circles touching each other internally. (3 Marks)

================================================================================
SECTION D (5 Marks) - LONG ANSWER QUESTIONS (5 Marks Each)

Q17. [Compulsory Internal Choice]
Q17(A). State and prove Basic Proportionality Theorem (Thales Theorem) for a triangle. (5 Marks)
OR
Q17(B). A straight highway leads to the foot of a tower. A man standing at the top of the tower observes two cars at angles of depression 30 deg and 60 deg, which are approaching the foot of the tower with uniform speed. If one car is 50 m behind the other, calculate the height of the tower. (5 Marks)

================================================================================
SECTION E (4 Marks) - CASE STUDY & INTEGRATED REAL-WORLD TASK (4 Marks)

Q18. [CASE STUDY - ARCHITECTURAL PARABOLIC ARCH]
An architect designs an entrance gate for a Kendriya Vidyalaya campus in the shape of a parabola given by equation f(x) = -x^2 + 4x + 12.
(a) Find the zeroes of the polynomial representing the gate height. [1 Mark]
(b) Find the maximum height achieved by the parabolic arch above ground level. [1 Mark]
(c) If the polynomial is shifted vertically upwards by 4 units, write the new polynomial expression and state its vertex coordinates. [2 Marks]`;
    } else if (subj.includes("Social") || subj.includes("History") || subj.includes("Geography") || subj.includes("Pol")) {
        paper += `
Q1. [Competency - History [R]]
Who among the following hosted the Congress of Vienna in 1815?
(A) Duke Metternich  (B) Otto von Bismarck  (C) Giuseppe Mazzini  (D) Napoleon Bonaparte

Q2. [Competency - Geography [U]]
Which type of soil is predominantly formed by intense leaching due to heavy rain in tropical areas?
(A) Alluvial Soil  (B) Black Soil  (C) Laterite Soil  (D) Arid Soil

Q3. [Competency - Political Science [An]]
Which of the following is an example of 'Coming Together' Federation?
(A) India  (B) Spain  (C) United States of America  (D) Belgium

Q4. [Competency - Economics [Ap]]
Gross Domestic Product (GDP) is the total market value of:
(A) All goods and services produced in a year.
(B) All final goods and services produced within a country during a specific year.
(C) All intermediate goods processed by manufacturing units.
(D) Total exports minus total imports.

Q5. [Competency - History [R]]
Which pact signed in September 1932 gave depressed classes reserved seats in provincial legislative councils?
(A) Gandhi-Irwin Pact  (B) Poona Pact  (C) Lucknow Pact  (D) Shimla Accord

---
DIRECTION FOR Q8 - Q10: Choose (A) Both A & R true and R is correct explanation, (B) Both true but R NOT correct explanation, (C) A true R false, (D) A false R true.

Q8. Assertion (A): Democracies are more successful in accommodating social diversities than non-democratic regimes.
Reason (R): Democracy ensures that decision making is based on norms and procedures with transparent consultation.

Q9. Assertion (A): Money in hand cannot buy all the goods and services that one may need to live well.
Reason (R): Income by itself is not a completely adequate indicator of material goods and quality life services.

Q10. Assertion (A): The Black Soils are ideal for growing cotton crops.
Reason (R): Black Soil has high moisture retention capacity and is rich in soil nutrients like calcium carbonate.

================================================================================
SECTION B (6 Marks) - SHORT ANSWER QUESTIONS - I (2 Marks Each)
Q11. Explain two main decisions taken at the Bretton Woods Conference in 1944. (2 Marks)
Q12. Distinguish between Renewable and Non-Renewable Resources with two examples each. (2 Marks)
Q13. State two reasons why power sharing is desirable in a modern democracy. (2 Marks)

================================================================================
SECTION C (9 Marks) - SHORT ANSWER QUESTIONS - II (3 Marks Each)
Q14. Describe the role of Women in the Nationalist Struggles of Europe during 19th Century. (3 Marks)
Q15. Explain three major steps taken by the Indian Government towards Decentralisation in 1992. (3 Marks)
Q16. How does the Tertiary Sector differ from Primary and Secondary sectors? Explain with examples. (3 Marks)

================================================================================
SECTION D (5 Marks) - LONG ANSWER QUESTIONS (5 Marks Each)
Q17. [Compulsory Internal Choice]
Q17(A). "The Non-Cooperation Movement spread from cities to the countryside." Support this statement with examples from Awadh and Andhra Pradesh. (5 Marks)
OR
Q17(B). Explain the economic impacts of Globalisation on small-scale producers and workers in India. (5 Marks)

================================================================================
SECTION E (4 Marks) - CASE STUDY & MAP INTEGRATED TASK (4 Marks)
Q18. Read the passage on Water Scarcity and answer:
"Water water everywhere, not a drop to drink. Multi-purpose river valley projects built after independence were hailed as temples of modern India..."
(a) Mention one ecological problem caused by large dams. [1M]
(b) Why is rainwater harvesting gaining preference over large dam projects? [1M]
(c) On an outline map of India, locate and label: (i) Bhakra Nangal Dam (ii) Sardar Sarovar Dam. [2M]`;
    } else if (subj.includes("English") || subj.includes("Hindi")) {
        paper += `
================================================================================
SECTION A: READING COMPREHENSION & VOCABULARY (10 Marks)
Passage: "Artificial Intelligence (AI) and Machine Learning have transformed contemporary educational paradigms. Far from replacing human educators, AI acts as an empowering co-pilot..."
Q1. What is the central thesis of the passage regarding AI in education? [1M]
Q2. According to the author, how does AI act as an empowering tool for teachers? [1M]
Q3. Find a word in Paragraph 2 which means 'omnipresent / existing everywhere'. [1M]
Q4-Q7. 4 Objective MCQs on factual comprehension and vocabulary inference. [4M]
Q8-Q10. Assertion-Reason items on reading analysis. [3M]

================================================================================
SECTION B: WRITING SKILLS & GRAMMAR (11 Marks)
Q11. You are Sunita/Sameer, Head Student of Kendriya Vidyalaya. Draft a Notice in about 50 words informing students of Classes 9-12 about an upcoming Inter-School AI & Robotics Competition. (4 Marks)
Q12. Write a formal Letter to the Editor of a national daily expressing concern over rising digital addiction among school adolescents and proposing school-level digital wellness measures. (7 Marks)

================================================================================
SECTION C: LITERATURE & TEXTBOOK ANALYSIS (14 Marks)
Q13. Read the extract and answer sub-questions: "The way a crow / Shook down on me / The dust of snow / From a hemlock tree..." (4 Marks)
Q14. Short Answer Literature Questions (3 x 2 = 6 Marks):
     (a) Why was Lencho angry when he counted the money received in the letter?
     (b) How does Nelson Mandela define 'courage' in his autobiography?
     (c) What message does the poet convey through the poem 'Keeping Quiet'?
Q15. Long Answer Literature Essay (5 Marks - Internal Choice):
     Discuss the theme of human resilience and faith in the face of natural adversity with reference to prescribed literature texts.`;
    } else {
        // Default Science / Physics / Chemistry / Biology / CS / Commerce Paper
        paper += `
Q1. [Competency - Application [Ap]]
In ${p.chapter}, if the primary operating variable is doubled while keeping other parameters constant, the net response:
(A) Doubles linearly    (B) Quadruples (Square relation)    (C) Remains unchanged    (D) Reduces to half

Q2. [Competency - Conceptual Analysis [An]]
Which fundamental conservation law governs the core process described in ${p.chapter}?
(A) Conservation of Mass    (B) Conservation of Energy    (C) Conservation of Linear Momentum    (D) All of the above

Q3. [NCERT Concept Check [U]]
What is the standard SI unit of the primary variable measured in ${p.chapter}?
(A) Standard SI Metric Unit    (B) Dimensionless Ratio    (C) Derived Joules/Second    (D) Pascal per meter

Q4-Q7. 4 Subject-specific MCQs evaluating numerical, graphical, and observational competencies in ${p.chapter}.

---
DIRECTION FOR Q8 - Q10: Standard Assertion (A) & Reason (R) options (A, B, C, D).

Q8. Assertion (A): High precision is essential when recording observational data in ${p.chapter}.
Reason (R): Systematic errors can be minimized by taking mean readings across multiple experimental trials.

Q9. Assertion (A): Equilibrium is achieved when net internal driving force equals external opposing force.
Reason (R): Second law of thermodynamics governs spontaneous directional transformations.

Q10. Assertion (A): Safe operating thresholds must be maintained during practical application of ${p.chapter}.
Reason (R): Exceeding tolerance limits triggers non-linear system breakdown.

================================================================================
SECTION B (6 Marks) - SHORT ANSWER QUESTIONS - I (2 Marks Each)
Q11. State the core law governing ${p.chapter}. Write its mathematical expression and define all symbols with SI units. (2 Marks)
Q12. Explain two key differences between ideal theoretical conditions and practical real-world observations in ${p.chapter}. (2 Marks)
Q13. Solve the standard quantitative numerical problem based on formula application in ${p.chapter}. (2 Marks)

================================================================================
SECTION C (9 Marks) - SHORT ANSWER QUESTIONS - II (3 Marks Each)
Q14. Derive the complete mathematical relation connecting key variables in ${p.chapter}. Draw neat labeled diagram. (3 Marks)
Q15. Explain 3 practical applications of ${p.chapter} in modern technological or daily life systems. (3 Marks)
Q16. Analyze a multi-step problem scenario involving two interconnected components in ${p.chapter}. (3 Marks)

================================================================================
SECTION D (5 Marks) - LONG ANSWER QUESTIONS (5 Marks Each)
Q17. [Compulsory Internal Choice]
Q17(A). Explain the complete working mechanism of ${p.chapter} with a step-by-step mathematical proof and neat diagram. (5 Marks)
OR
Q17(B). Solve a multi-concept HOTS challenge numerical problem combining two fundamental laws in ${p.chapter}. (5 Marks)

================================================================================
SECTION E (4 Marks) - CASE STUDY INTEGRATED TASK (4 Marks)
Q18. Read the case study scenario on real-world industrial implementation of ${p.chapter} and answer 3 sub-questions (1M + 1M + 2M).`;
    }

    // Answer Key
    if (p.includeAnswerKey) {
        paper += `\n\n---ANSWER_KEY_START---
OFFICIAL MARKING SCHEME & STEP-BY-STEP ANSWER KEY
================================================================================
SECTION A - OBJECTIVE KEYS:
Q1: (A) / (B) as derived | Q2: (B) | Q3: (B) | Q4: (C) | Q5: (A) | Q6: (B) | Q7: (A)
Q8: (A) Both A & R true, R correct explanation.
Q9: (A) Both A & R true, R correct explanation.
Q10: (D) A false, R true.

SECTION B - VALUE POINTS & STEPS:
Q11: Correct Law Statement [1M], Mathematical Formula with SI units [1M].
Q12: Key point 1 [1M], Key point 2 [1M].
Q13: Formula substitution [1M], Final calculation with unit [1M].

SECTION C - DERIVATION & STEP MARKS:
Q14: Neat labeled diagram [1M], Derivation steps [2M].
Q15: 3 valid real-world application points with scientific reasoning [3M].
Q16: Step 1 calculation [1.5M], Step 2 final answer [1.5M].

SECTION D - LONG ANSWER MARKING SCHEME:
Q17(A): Principle statement [1M], Labeled technical drawing [1M], Step-by-step derivation [3M].
OR
Q17(B): Given data & formula identification [1M], Step 1 solution [2M], Step 2 solution [2M].

SECTION E - CASE STUDY MARKS DISTRIBUTION:
Q18: (a) Correct sub-answer 1 [1M], (b) Sub-answer 2 [1M], (c) Analytical sub-answer 3 with working [2M].`;
    }

    return paper;
}

// Helper: Universal Subject-Adaptive Worksheet Generator
function buildSubjectWorksheet(p) {
    const subj = p.subject;
    return `CBSE SESSION 2026-27 | DIFFERENTIATED COMPETENCY WORKSHEET
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
TOPIC / CHAPTER: ${p.chapter}
Max Marks: 40 Marks | Targeted Learner Level: ${p.tier}

================================================================================
LEARNING OUTCOMES & COMPETENCIES (NEP-2020 / NCF-SE):
1. [Recall & Understand] Explain foundational definitions and core concepts of ${p.chapter}.
2. [Apply & Analyze] Solve quantitative numericals, grammatical tasks, or case problems using standard frameworks.
3. [Evaluate & Create] Synthesize real-world applications and troubleshoot common misconceptions.

================================================================================
PART A: CONCEPT QUICK CHECK (5 Marks)
1. Fill in the blank: The fundamental unit / term associated with ${p.chapter} is __________.
2. True or False: Core principles of ${p.chapter} remain invariant across isolated closed systems. [_____]
3. Fill in the blank: Increasing input parameter generally __________ the rate of systemic response.
4. True or False: Standard SI metrics or formal structures must be maintained in formal evaluations. [_____]
5. Fill in the blank: The primary tool / method used to evaluate ${p.chapter} is called __________.

================================================================================
PART B: COMPETENCY MCQs & ASSERTION-REASON (10 Marks)
Q1. What happens when the primary parameter in ${p.chapter} is doubled?
(A) Remains constant  (B) Doubles  (C) Quadruples  (D) Halves

Q2. Which standard component / principle is universally applied for safety and precision in ${p.chapter}?
(A) Primary Benchmark  (B) Control Fuse / Standard Key  (C) Variable Attenuator  (D) Null Indicator

Q3. Assertion (A): Rigorous testing is essential when evaluating concepts in ${p.chapter}.
Reason (R): Systematic errors are eliminated through empirical verification and peer review.
(A) Both A and R are true, R is correct explanation.
(B) Both A and R are true, R is NOT correct explanation.
(C) A is true, R is false.
(D) A is false, R is true.

Q4. If two identical values of 10 units each act in parallel in ${p.chapter}, the net result is:
(A) 20 units  (B) 10 units  (C) 5 units  (D) 2.5 units

================================================================================
PART C: DIFFERENTIATED LEARNING TASKS (15 Marks)

[TIER 1 - REMEDIAL & FOUNDATIONAL LEVEL]
Q5. Define the core principle of ${p.chapter}. Draw a simple labeled diagram / flowchart. (3 Marks)
Q6. List 3 everyday real-life examples where ${p.chapter} is observed. (2 Marks)

[TIER 2 - CORE STANDARD LEVEL]
Q7. Solve the standard quantitative / analytical problem in ${p.chapter}:
    (a) Calculate primary output given input = 50 units.
    (b) Determine total efficiency / cost over 30 days. (5 Marks)

[TIER 3 - ADVANCED HOTS & COMPETITIVE LEVEL]
Q8. Derive the general formula governing ${p.chapter}. Explain why this principle is preferred over alternative models in modern practice. (5 Marks)

================================================================================
PART D: CASE STUDY & REAL-WORLD INQUIRY (10 Marks)
Q9. Read the scenario: "During an official audit of a Kendriya Vidyalaya smart lab studying ${p.chapter}, researchers recorded peak efficiency under controlled environmental conditions."
(a) State the primary hypothesis tested in this study. (2 Marks)
(b) Calculate the net system output when load parameter = 3.6 units. (3 Marks)
(c) State two safety / quality precautions to ensure accurate results. (5 Marks)

${p.includeAnswerKey ? `
---ANSWER_KEY_START---
SOLUTIONS & ANSWER KEY:
Part A: 1. Core Term | 2. True | 3. Increases | 4. True | 5. Evaluator Instrument
Part B: Q1: (B) | Q2: (B) | Q3: (A) | Q4: (C)
Part C: Q7: (a) Output = 50 x 2 = 100 units. (b) Total efficiency = 95%.
Part D: Q9: (b) Calculated value = 1.8 units.` : ''}`;
}

// 2. Templates Library (15 Specialized Subject Generators)
const templatesLibrary = [
    {
        id: "qp",
        category: "assessment",
        title: "📝 Blueprint Question Paper Setter",
        subtitle: "Official CBSE Blueprint (Sections A to E)",
        tags: ["Blueprint", "Question Paper", "All Subjects", "CBSE 2026-27"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>`,
        description: "Generate complete ready-to-print CBSE Question Papers for ANY subject (Maths, Science, Social Science, English, Hindi, CS, Commerce) with Blueprint Matrix, Sections A-E, internal choices, and Answer Keys.",
        directContentBuilder: buildSubjectQuestionPaper,
        builder: function(p) {
            return `Act as a Senior CBSE Board Question Paper Setter for ${p.subject} (Class ${p.classLevel}).
Prepare a complete board-standard QUESTION PAPER strictly adhering to CBSE Session 2026-27 specifications.

PARAMETERS:
• Class: ${p.classLevel} | Subject: ${p.subject}
• Syllabus / Chapter: ${p.chapter}
• Total Marks: ${p.marks} Marks | Duration: ${p.time} Minutes
• Tier: ${p.tier}

${p.chapterWeightageTable ? p.chapterWeightageTable + '\n\n' : ''}PART 1: BLUEPRINT MATRIX TABLE
Generate markdown table mapping Sections A-E across chapters summing exactly to ${p.marks} Marks.

PART 2: QUESTION PAPER CONTENT (SECTIONS A TO E)
• SECTION A (1M): 10 MCQs & Assertion-Reason items.
• SECTION B (2M): 3 Short Answer questions.
• SECTION C (3M): 3 Analytical / Numerical / Proof questions.
• SECTION D (5M): 1 Long Answer question with compulsory OR choice.
• SECTION E (4M): 1 Case-Study / Source-Based passage with 3 sub-questions.

${p.includeAnswerKey ? '---ANSWER_KEY_START---\nPART 3: OFFICIAL MARKING SCHEME & STEP-BY-STEP ANSWER KEY\nProvide value points, key step marks (0.5M breakdown), and final answers.\n' : ''}`;
        }
    },

    {
        id: "worksheet",
        category: "assessment",
        title: "📄 Competency Worksheet Generator",
        subtitle: "NEP 2020 Differentiated Subject Worksheet",
        tags: ["Worksheet", "Competency", "All Subjects", "Differentiated"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 1-2 2v16a2 2 0 0 1 2 2h12a2 2 0 0 1 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
        description: "Generate differentiated classroom worksheets with concept checks, MCQs, Tier 1-3 tasks, case studies, and complete solution keys for any subject.",
        directContentBuilder: buildSubjectWorksheet,
        builder: function(p) {
            return `Generate a CLASSROOM-READY COMPETENCY WORKSHEET for ${p.classLevel} ${p.subject} on "${p.chapter}".

INPUTS: Class ${p.classLevel}, Subject ${p.subject}, Chapter ${p.chapter}, Target Marks ${p.marks}M.

SECTIONS:
1. Header & Learning Outcomes (NEP-2020 mapped to Bloom's Taxonomy).
2. Concept Quick Check (5 Fill-in-blanks / True-False).
3. Competency MCQs & Assertion-Reasoning (5 items).
4. Differentiated Learning Tasks (Tier 1 Remedial, Tier 2 Core, Tier 3 HOTS).
5. Real-World Case Study / Application Inquiry Scenario.
${p.includeAnswerKey ? '---ANSWER_KEY_START---\n6. DETAILED ANSWER KEY & MARKING SCHEME.\n' : ''}`;
        }
    },

    {
        id: "curiosity_lab",
        category: "curiosity",
        title: "🔬 NCERT Curiosity Hands-On Activity Lab",
        subtitle: "Low-Cost Experiential Toys & Discovery Lab (VI-X)",
        tags: ["Curiosity", "Activity", "Experiential", "NCF-SE"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        description: "Design low-cost hands-on science & math activities, toy-making projects, observation tables, and curiosity questions mandated by NCERT Curiosity series.",
        directContentBuilder: function(p) {
            return `NCERT CURIOSITY SERIES | HANDS-ON EXPERIENTIAL ACTIVITY MANUAL
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | MODULE: ${p.chapter}

1. ACTIVITY TITLE & OBJECTIVE:
   Hands-on Toy & Model: Exploring Core Principles of ${p.chapter} through low-cost household materials.

2. MATERIALS REQUIRED:
   Cardboard, plastic cups, rubber bands, magnets, measuring ruler, recycled items.

3. STEP-BY-STEP PROCEDURE:
   Step 1: Assemble base structure and align components.
   Step 2: Attach movable or reactive elements.
   Step 3: Apply stimulus and record physical/mathematical response.

4. STUDENT OBSERVATION TABLE:
   | Trial | Parameter Input | Observed Response | Scientific Inference |
   | 1 | Baseline | Normal response | Standard benchmark |
   | 2 | Parameter Doubled | Shift observed | Proportional effect |

5. CURIOSITY INQUIRY QUESTIONS:
   Q1. What surprised you when operating your handmade model?
   Q2. How is this concept applied in modern industrial technology?

---ANSWER_KEY_START---
TEACHER FACILITATION GUIDE & ANSWERS:
• Explains core concept of ${p.chapter} through tactile manipulation.
• Answers to inquiry questions provided.`;
        },
        builder: function(p) {
            return `Act as NCERT Curiosity Textbook Author. Design a Low-Cost Hands-On Activity Manual for ${p.classLevel} ${p.subject} - "${p.chapter}".`;
        }
    },

    {
        id: "curiosity_inquiry",
        category: "curiosity",
        title: "❓ NCERT Curiosity 5E Inquiry Explorer",
        subtitle: "5E Framework & Everyday Phenomenon Analysis",
        tags: ["Curiosity", "5E Model", "Inquiry", "Everyday Phenomena"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        description: "Generate curiosity-driven inquiry sheets with real-world phenomenon analysis, 'What If?' speculative challenges, and self-reflections.",
        directContentBuilder: function(p) {
            return `NCERT CURIOSITY | 5E INQUIRY & EVERYDAY EXPLORER
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TOPIC: ${p.chapter}

1. REAL-WORLD PHENOMENON ("I Wonder Why..."):
   Scenario examining everyday occurrences related to ${p.chapter}.

2. 5E INQUIRY TASKS:
   • ENGAGE: Formulate 2 "Why" and 2 "How" questions.
   • EXPLORE: Design a 5-minute home test.
   • EXPLAIN: Write scientific reasoning using standard terms.
   • ELABORATE: "What If?" challenge - evaluate boundary changes.
   • EVALUATION: Self-reflection rubric.

---ANSWER_KEY_START---
TEACHER INQUIRY FACILITATION GUIDE & MODEL ANSWERS.`;
        },
        builder: function(p) {
            return `Create a 5E Curiosity Inquiry Explorer Worksheet for Class ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "stem_math",
        category: "stem",
        title: "📐 Mathematics Proof & Numerical Suite",
        subtitle: "Theorems, Step-by-Step Proofs & Problem Bank",
        tags: ["Mathematics", "Proofs", "Numericals", "CBSE Board"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="14" y2="10"/></svg>`,
        description: "Comprehensive Mathematics teaching suite featuring NCERT theorem proofs, step-by-step numerical problem banks, geometric constructions, and board exam tips.",
        directContentBuilder: function(p) {
            return `CBSE MATHEMATICS MASTER SUITE
CLASS: ${p.classLevel} | SUBJECT: Mathematics | CHAPTER: ${p.chapter}

1. THEOREM PROOF & CONCEPTUAL DERIVATION:
   Theorem: State and prove fundamental theorem of ${p.chapter}.
   Given: Triangle / Circle / Equation setup.
   To Prove: LHS = RHS.
   Proof: Step-by-step geometric/algebraic derivation.

2. TIERED NUMERICAL PROBLEM BANK:
   [Tier 1 - Standard Board (2M)]: Basic formula application problem.
   [Tier 2 - Analytical (3M)]: Multi-step algebraic / geometric problem.
   [Tier 3 - Exemplar HOTS (5M)]: Complex challenge problem with diagram.

---ANSWER_KEY_START---
MATHEMATICS STEP-BY-STEP SOLUTIONS & VALUE POINTS.`;
        },
        builder: function(p) {
            return `Generate a Mathematics Theorem Proof & Problem Bank Pack for ${p.classLevel} on ${p.chapter}.`;
        }
    },

    {
        id: "stem_science",
        category: "stem",
        title: "⚛ Science XI-XII Master Suite (Phy/Chem/Bio)",
        subtitle: "Derivations, Reactions, Genetics & JEE/NEET",
        tags: ["Science", "Physics", "Chemistry", "Biology", "JEE/NEET"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>`,
        description: "Master teaching pack for Senior Secondary Science (Physics, Chemistry, Biology): NCERT derivations, organic mechanisms, ray diagrams, genetics pedigree analysis, and JEE/NEET numericals.",
        directContentBuilder: function(p) {
            return `SENIOR SECONDARY SCIENCE MASTER SUITE
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | CHAPTER: ${p.chapter}

1. CORE NCERT DERIVATION / MECHANISM / DIAGRAM:
   Step-by-step mathematical proof / chemical reaction mechanism / labeled biological diagram.

2. NUMERICAL & CONCEPTUAL PROBLEM BANK:
   • Tier 1 (CBSE Board Standard - 3M)
   • Tier 2 (NCERT Exemplar - 4M)
   • Tier 3 (JEE / NEET Challenge - 5M)

---ANSWER_KEY_START---
STEP-BY-STEP SOLUTIONS, FORMULA STEPS & MARKING SCHEME.`;
        },
        builder: function(p) {
            return `Generate a Senior Secondary Science Master Pack for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "humanities_sst",
        category: "humanities",
        title: "🌍 Social Science Source & Map Explorer",
        subtitle: "History, Geography, Civics & Economics Suite",
        tags: ["Social Science", "History", "Geography", "Map Work"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        description: "Generate Social Science source-based questions, historical timeline analysis, geographical map work identification tasks, and democratic policy evaluation items.",
        directContentBuilder: function(p) {
            return `CBSE SOCIAL SCIENCE SOURCE & MAP EXPLORER
CLASS: ${p.classLevel} | SUBJECT: Social Science | CHAPTER: ${p.chapter}

1. HISTORICAL / GEOGRAPHICAL SOURCE PASSAGE:
   Read the excerpt from historical document / economic report and answer 3 analytical sub-questions.

2. POLICY EVALUATION & ASSERTION-REASON SET:
   Questions analyzing federalism, economic growth, and resource sustainability.

3. MAP WORK IDENTIFICATION & LOCATION TASK:
   Locate and label key historical sites / dams / ports on map outline.

---ANSWER_KEY_START---
SOCIAL SCIENCE MODEL ANSWERS, MAP POINTS & VALUE POINTS.`;
        },
        builder: function(p) {
            return `Generate a Social Science Source Passage & Map Explorer Pack for Class ${p.classLevel} on ${p.chapter}.`;
        }
    },

    {
        id: "languages_eng_hin",
        category: "humanities",
        title: "✍ English & Hindi Language Studio",
        subtitle: "Reading Passages, Grammar & Formal Writing",
        tags: ["English", "Hindi", "Grammar", "Writing Skills"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
        description: "Complete studio for English and Hindi: Unseen reading comprehension passages, grammar error correction, formal letter/notice drafting, and literary text analysis.",
        directContentBuilder: function(p) {
            return `CBSE LANGUAGE & LITERATURE STUDIO
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | UNIT: ${p.chapter}

1. UNSEEN COMPREHENSION PASSAGE:
   Read 250-word passage on modern socio-cultural themes + 5 factual & vocabulary MCQs.

2. GRAMMAR & WRITING SKILLS TASK:
   • Grammar: Error editing / sentence transformation.
   • Formal Writing: Letter to Editor / Notice / Analytical Paragraph drafting prompt.

3. LITERATURE TEXTBOOK EXTRACT & ANALYSIS:
   Prescribed prose/poetry extract + 3 comprehension questions.

---ANSWER_KEY_START---
LANGUAGE MARKING SCHEME, SAMPLE LETTER FORMAT & EXTRACT ANSWERS.`;
        },
        builder: function(p) {
            return `Generate an English/Hindi Reading, Writing & Literature Studio Pack for Class ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "commerce_suite",
        category: "commerce",
        title: "📊 Commerce Master Suite (Acc/BStd/Eco)",
        subtitle: "Ledgers, Case Studies & Macroeconomic Curves",
        tags: ["Commerce", "Accountancy", "Business Studies", "Economics"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        description: "Senior secondary Commerce pack: Journal entries, partnership admission ledgers, corporate Business Studies case studies, and National Income numericals.",
        directContentBuilder: function(p) {
            return `CBSE COMMERCE & ECONOMICS MASTER SUITE
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | CHAPTER: ${p.chapter}

1. ACCOUNTANCY / NUMERICAL PROBLEM TASK:
   Partnership admission ledger preparation / Share capital journal entries / National Income numerical calculation.

2. BUSINESS STUDIES / ECONOMIC CASE STUDY:
   Corporate management scenario analyze 3 strategic decision questions.

3. GRAPHICAL & POLICY ANALYSIS:
   Demand elasticity / Government budget deficit analysis.

---ANSWER_KEY_START---
STEP-BY-STEP LEDGER ACCOUNTS, JOURNAL NARRATIONS & ECONOMIC ANSWERS.`;
        },
        builder: function(p) {
            return `Generate a Senior Commerce Pack for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "google",
        category: "quizzes",
        title: "📋 Google Form & Online Quiz AI",
        subtitle: "Auto-Graded Quiz with Answer Key & Explanations",
        tags: ["Google Form", "Auto-Grading", "MCQs", "Online Quiz"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
        description: "Generate auto-grading Google Form ready quizzes for any subject with descriptions, options, correct answer keys, and pedagogical feedback.",
        directContentBuilder: function(p) {
            return `GOOGLE FORMS IMPORT-READY AUTO-GRADED QUIZ
QUIZ TITLE: CBSE ${p.classLevel} ${p.subject} Mastery Quiz - ${p.chapter}
DESCRIPTION: Competency-based self-assessment quiz for Session 2026-27. Attempt all questions.

--------------------------------------------------
Q1. What is the core principle associated with ${p.chapter}?
Question Type: Multiple Choice | Points: 1
Option A: Standard Primary Option (Correct)
Option B: Distractor based on common misconception
Option C: Inverse parameter option
Option D: Irrelevant boundary option

Q2-Q5. 4 additional auto-graded MCQs with 1 point each.

---ANSWER_KEY_START---
AUTO-GRADED ANSWER KEY & PEDAGOGICAL FEEDBACK GUIDE:
Q1. ✔ Correct Answer: Option A
💡 Feedback: Option A directly reflects standard CBSE/NCERT guidelines.`;
        },
        builder: function(p) {
            return `Create an Auto-Graded Google Forms Quiz for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "competency",
        category: "assessment",
        title: "🎯 Competency & HOTS Question Bank",
        subtitle: "100% CBSE 2026-27 Competency Aligned",
        tags: ["Competency", "HOTS", "PYQ", "Case Study"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        description: "Generate a rich set of high-yield competency-focused questions (Assertion-Reason, Source-Based, Data Analysis) aligned with CBSE sample papers.",
        directContentBuilder: function(p) {
            return `HIGH-YIELD COMPETENCY & HOTS QUESTION BANK
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TOPIC: ${p.chapter}

1. DATA & GRAPHICAL ANALYSIS QUESTIONS:
   Analyze the given chart / diagram / dataset related to ${p.chapter} and answer 2 analytical questions.

2. REAL-WORLD CASE-BASED SCENARIO:
   Case study evaluating practical application and troubleshooting.

---ANSWER_KEY_START---
COMPETENCY QUESTION BANK - STEP-BY-STEP SOLUTIONS & MARKING SCHEME.`;
        },
        builder: function(p) {
            return `Generate a High-Yield Competency Question Bank for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "practicals",
        category: "practicals",
        title: "🔬 Practical Lab & Viva Assistant",
        subtitle: "CBSE Lab Manual & Viva-Voce Generator",
        tags: ["Lab", "Practicals", "Viva Voce", "Rubrics"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A1 1 0 0 0 5.607 22h12.786a1 1 0 0 0 .886-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>`,
        description: "Create complete practical manual guides: Aim, Theory, Diagrams, Observation Tables, Precautions, and Viva Voce questions.",
        directContentBuilder: function(p) {
            return `CBSE LABORATORY PRACTICAL MANUAL & VIVA-VOCE GUIDE
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | EXPERIMENT: ${p.chapter}

1. AIM & APPARATUS REQUIRED.
2. UNDERLYING PRINCIPLE & FORMULA.
3. CIRCUIT / SCHEMATIC DIAGRAM.
4. OBSERVATION TABLE SCHEMA.
5. VIVA-VOCE QUESTIONS (10 Questions).

---ANSWER_KEY_START---
SAMPLE OBSERVATION DATA & VIVA VOCE MODEL ANSWERS.`;
        },
        builder: function(p) {
            return `Generate a Practical Lab Manual & Viva Guide for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "rubric",
        category: "assessment",
        title: "📜 Assessment Rubrics Grid",
        subtitle: "Analytic 4-Level Evaluation Criteria",
        tags: ["Rubrics", "Assessment", "NEP 2020", "Evaluation"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
        description: "Create analytic rubric grids for subject projects, lab reports, and subjective answers.",
        directContentBuilder: function(p) {
            return `CBSE ANALYTIC ASSESSMENT RUBRIC GRID
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TASK: ${p.chapter}

| Criteria | Level 1: Beginning (1-2 pts) | Level 2: Developing (3-4 pts) | Level 3: Proficient (5-6 pts) | Level 4: Exemplary (7-8 pts) |
|---|---|---|---|---|
| Conceptual Accuracy | Major misconceptions. | Basic definitions only. | Accurate with minor gaps. | Mastered concepts; applies flawlessly. |
| Problem Solving | Cannot identify formulas/terms. | Identifies terms with calculation error. | Solves standard problems correctly. | Solves multi-step HOTS with full steps. |
| Technical Presentation | Lacks structure. | Needs better alignment. | Neat and organized. | Exemplary presentation & technical drawing. |

---ANSWER_KEY_START---
TEACHER SCORING GUIDELINES & GRADE CONVERSION MATRIX.`;
        },
        builder: function(p) {
            return `Generate an Analytic Assessment Rubric Grid for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "lessonplan",
        category: "feedback",
        title: "📘 NEP 2020 5E Lesson Plan",
        subtitle: "Engage, Explore, Explain, Elaborate, Evaluate",
        tags: ["Lesson Plan", "NEP 2020", "5E Model", "Pedagogy"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Generate a complete 5E model lesson plan (Engage, Explore, Explain, Elaborate, Evaluate) with learning objectives for any subject.",
        directContentBuilder: function(p) {
            return `NEP-2020 COMPLIANT 5E MODEL LESSON PLAN
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TOPIC: ${p.chapter}
Duration: 40 Mins (1 Period) | Pedagogical Framework: NCF-SE 2023

1. LEARNING OBJECTIVES:
   - SLO 1: Students will explain core concepts of ${p.chapter}.
   - SLO 2: Students will apply formulas / skills to solve problems.

2. 5E PHASES EXECUTION:
   • ENGAGE (5 Mins): Teacher shows real-life hook / question.
   • EXPLORE (10 Mins): Student group investigation activity.
   • EXPLAIN (10 Mins): Teacher formalizes concept & writes formulas on board.
   • ELABORATE (10 Mins): Students solve HOTS application problem.
   • EVALUATE (5 Mins): Exit Ticket test with 2 MCQs.

---ANSWER_KEY_START---
EXIT TICKET ANSWER KEY & EVALUATION GUIDELINES.`;
        },
        builder: function(p) {
            return `Create a NEP-2020 5E Lesson Plan for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    },

    {
        id: "feedback",
        category: "feedback",
        title: "📊 Student & Parent Feedback Form",
        subtitle: "Diagnostic Feedback & Teaching Evaluation",
        tags: ["Feedback", "Likert Scale", "Diagnosis", "KVS Standard"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        description: "Generate professional feedback forms for students and parents with Likert scales for diagnostic teaching feedback.",
        directContentBuilder: function(p) {
            return `KENDRIYA VIDYALAYA SANGATHAN | DIAGNOSTIC FEEDBACK FORM
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | MODULE: ${p.chapter}

1. STUDENT SELF-ASSESSMENT GRID (1 to 5 Likert Scale):
   [ ] I understand the core concepts of ${p.chapter}. (1 2 3 4 5)
   [ ] I can solve subject problems independently. (1 2 3 4 5)
   [ ] ICT tools were effectively used in classroom. (1 2 3 4 5)

2. OPEN FEEDBACK & REMEDIAL SUGGESTIONS.

---ANSWER_KEY_START---
TEACHER DIAGNOSTIC EVALUATION & ACTION PLAN GUIDE.`;
        },
        builder: function(p) {
            return `Generate a Diagnostic Feedback Form for ${p.classLevel} ${p.subject} on ${p.chapter}.`;
        }
    }
];

// 3. Application State & Storage
let activeCategory = "all";
let selectedTemplateId = "qp";
let activeTagFilter = null;
let activeOutputTab = "qp"; // "qp" | "ak" | "combined"
let savedTemplates = [];

// Multi-Chapter Selection & Weightage State
let selectedChaptersState = {}; // Key: chapter name, Value: marks
let weightageUnitState = "marks";

try {
    savedTemplates = JSON.parse(localStorage.getItem("cbse_saved_prompts") || "[]");
} catch (e) {
    savedTemplates = [];
}

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    bindEvents();
    updateSubjectDropdown();
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

// Dynamically update Subject dropdown based on selected Class level
function updateSubjectDropdown() {
    const classVal = document.getElementById("paramClass").value;
    const subjectSelect = document.getElementById("paramSubject");
    if (!subjectSelect) return;

    const currentSubj = subjectSelect.value;
    const isSenior = classVal === "Class 11" || classVal === "Class 12";
    const validSubjects = isSenior ? subjectOptionsByClass.senior : subjectOptionsByClass.junior;

    subjectSelect.innerHTML = "";
    validSubjects.forEach(subj => {
        const opt = document.createElement("option");
        opt.value = subj;
        opt.textContent = subj;
        subjectSelect.appendChild(opt);
    });

    if (validSubjects.includes(currentSubj)) {
        subjectSelect.value = currentSubj;
    } else {
        subjectSelect.value = validSubjects[0];
    }
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

    // Output Mode change listener
    const outputModeEl = document.getElementById("paramOutputMode");
    if (outputModeEl) {
        outputModeEl.addEventListener("change", updatePromptPreview);
    }

    // Class selection change -> sync subject dropdown and chapters
    document.getElementById("paramClass").addEventListener("change", () => {
        updateSubjectDropdown();
        populateChapters();
        updatePromptPreview();
    });

    // Subject selection change -> sync chapters
    document.getElementById("paramSubject").addEventListener("change", () => {
        populateChapters();
        updatePromptPreview();
    });

    // Parameter input listeners
    const paramInputs = [
        "paramChapterSelect", "paramChapterCustom", "paramTier", "paramTime",
        "toggleAnswerKey", "toggleNEP", "toggleBloom", "toggleNCERT", "toggleRubrics"
    ];

    paramInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", updatePromptPreview);
            el.addEventListener("change", updatePromptPreview);
        }
    });

    const marksInput = document.getElementById("paramMarks");
    if (marksInput) {
        marksInput.addEventListener("input", () => {
            autoBalanceWeightages(true);
            updatePromptPreview();
        });
        marksInput.addEventListener("change", () => {
            autoBalanceWeightages(true);
            updatePromptPreview();
        });
    }

    // Multi-Chapter Selection Quick Actions
    const btnSelectAll = document.getElementById("btnSelectAllChapters");
    if (btnSelectAll) {
        btnSelectAll.addEventListener("click", () => {
            const checkboxes = document.querySelectorAll("#chapterChecklistContainer input[type='checkbox']");
            checkboxes.forEach(cb => {
                cb.checked = true;
                cb.closest(".chapter-item-row")?.classList.add("selected");
                const chName = cb.getAttribute("data-chapter");
                if (chName) selectedChaptersState[chName] = 1;
            });
            autoBalanceWeightages(true);
            updatePromptPreview();
            showToast("Selected All Chapters!");
        });
    }

    const btnDeselectAll = document.getElementById("btnDeselectAllChapters");
    if (btnDeselectAll) {
        btnDeselectAll.addEventListener("click", () => {
            const checkboxes = document.querySelectorAll("#chapterChecklistContainer input[type='checkbox']");
            selectedChaptersState = {};
            checkboxes.forEach((cb, i) => {
                if (i === 0) {
                    cb.checked = true;
                    cb.closest(".chapter-item-row")?.classList.add("selected");
                    const chName = cb.getAttribute("data-chapter");
                    if (chName) selectedChaptersState[chName] = parseFloat(marksInput ? marksInput.value : 80) || 80;
                } else {
                    cb.checked = false;
                    cb.closest(".chapter-item-row")?.classList.remove("selected");
                }
            });
            autoBalanceWeightages(true);
            updatePromptPreview();
            showToast("Cleared selections (1 Chapter retained)");
        });
    }

    const btnAutoBalance = document.getElementById("btnAutoBalanceWeight");
    if (btnAutoBalance) {
        btnAutoBalance.addEventListener("click", () => {
            autoBalanceWeightages(true);
            updatePromptPreview();
            showToast("⚡ Auto-balanced marks equally across selected chapters!");
        });
    }

    // Weightage Unit Radio Toggle
    document.querySelectorAll('input[name="weightageUnit"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            weightageUnitState = e.target.value;
            renderWeightageControls();
        });
    });

    // Textarea word count
    const promptBox = document.getElementById("promptBox");
    if (promptBox) {
        promptBox.addEventListener("input", () => {
            const text = promptBox.value;
            const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
            document.getElementById("wordCountBadge").textContent = `${words} words`;
        });
    }

    // Reset button
    document.getElementById("resetParamsBtn").addEventListener("click", () => {
        document.getElementById("paramClass").value = "Class 10";
        updateSubjectDropdown();
        document.getElementById("paramSubject").value = "General Science";
        document.getElementById("paramMarks").value = "80";
        populateChapters();
        document.getElementById("paramChapterCustom").value = "";
        document.getElementById("paramTier").value = "Balanced (Remedial + Standard + HOTS)";
        document.getElementById("paramTime").value = "180";
        document.getElementById("toggleAnswerKey").checked = true;
        document.getElementById("toggleNEP").checked = true;
        document.getElementById("toggleBloom").checked = true;
        document.getElementById("toggleNCERT").checked = true;
        document.getElementById("toggleRubrics").checked = false;
        if (outputModeEl) outputModeEl.value = "direct";
        switchOutputTab("qp");
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

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            if (clearSearchBtn) clearSearchBtn.hidden = !e.target.value;
            renderCards();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            clearSearchBtn.hidden = true;
            renderCards();
        });
    }

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

    if (exportBtn) {
        exportBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (exportMenu) exportMenu.classList.toggle("show");
        });
    }

    document.addEventListener("click", () => {
        if (exportMenu) exportMenu.classList.remove("show");
    });

    // Saved templates modal
    const savedBtn = document.getElementById("savedTemplatesBtn");
    if (savedBtn) savedBtn.addEventListener("click", openSavedModal);
}

// Populate NCERT Chapter Selector dynamically & build multi-chapter checklist
function populateChapters() {
    const classVal = document.getElementById("paramClass").value;
    const subjectSelect = document.getElementById("paramSubject");
    let subjectVal = subjectSelect ? subjectSelect.value : "General Science";

    const chapterSelect = document.getElementById("paramChapterSelect");
    const container = document.getElementById("chapterChecklistContainer");
    if (chapterSelect) chapterSelect.innerHTML = "";
    if (container) container.innerHTML = "";

    let chapters = [];
    if (cbseChapterDatabase[classVal] && cbseChapterDatabase[classVal][subjectVal]) {
        chapters = cbseChapterDatabase[classVal][subjectVal];
    } else if (cbseChapterDatabase[classVal]) {
        const firstKey = Object.keys(cbseChapterDatabase[classVal])[0];
        chapters = cbseChapterDatabase[classVal][firstKey] || ["Chapter 1: Core Syllabus Concepts"];
    } else {
        chapters = ["Chapter 1: Core Syllabus Concepts"];
    }

    selectedChaptersState = {};
    const totalMarks = parseFloat(document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80) || 80;
    const defaultMarks = Math.max(1, Math.round((totalMarks / chapters.length) * 10) / 10);

    chapters.forEach((ch, idx) => {
        if (chapterSelect) {
            const opt = document.createElement("option");
            opt.value = ch;
            opt.textContent = ch;
            chapterSelect.appendChild(opt);
        }

        selectedChaptersState[ch] = defaultMarks;

        if (container) {
            const row = document.createElement("div");
            row.className = "chapter-item-row selected";
            row.innerHTML = `
                <input type="checkbox" class="chapter-item-checkbox" id="chk_ch_${idx}" data-chapter="${ch.replace(/"/g, '&quot;')}" checked>
                <label for="chk_ch_${idx}" class="chapter-item-label">${ch}</label>
            `;

            const checkbox = row.querySelector("input");
            checkbox.addEventListener("change", (e) => {
                if (e.target.checked) {
                    selectedChaptersState[ch] = defaultMarks;
                    row.classList.add("selected");
                } else {
                    delete selectedChaptersState[ch];
                    row.classList.remove("selected");
                }
                autoBalanceWeightages(true);
                updatePromptPreview();
            });

            container.appendChild(row);
        }
    });

    autoBalanceWeightages(true);
}

// Auto-Balance Weightages evenly across selected chapters
function autoBalanceWeightages(isEqualSplit = true) {
    const selectedKeys = Object.keys(selectedChaptersState);
    const totalTargetMarks = parseFloat(document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80) || 80;

    if (selectedKeys.length === 0) {
        renderWeightageControls();
        return;
    }

    if (isEqualSplit) {
        const perChapter = Math.floor(totalTargetMarks / selectedKeys.length);
        let remainder = totalTargetMarks - (perChapter * selectedKeys.length);

        selectedKeys.forEach((key, idx) => {
            selectedChaptersState[key] = perChapter + (idx < remainder ? 1 : 0);
        });
    }

    renderWeightageControls();
}

// Render Chapter Weightage Control Rows
function renderWeightageControls() {
    const listContainer = document.getElementById("chapterWeightageList");
    const badge = document.getElementById("selectedChaptersBadge");
    const totalTargetMarks = parseFloat(document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80) || 80;

    const selectedKeys = Object.keys(selectedChaptersState);

    if (badge) badge.textContent = `${selectedKeys.length} Selected`;
    if (!listContainer) return;

    listContainer.innerHTML = "";

    if (selectedKeys.length === 0) {
        listContainer.innerHTML = `
            <div style="font-size:12px; color:var(--accent-rose); text-align:center; padding:10px;">
                ⚠️ No chapters selected. Please select at least one chapter above.
            </div>
        `;
        updateAllocationStatus();
        return;
    }

    const isMarksUnit = weightageUnitState === "marks";

    selectedKeys.forEach((key) => {
        const val = selectedChaptersState[key] || 0;
        const displayVal = isMarksUnit ? val : (totalTargetMarks > 0 ? ((val / totalTargetMarks) * 100).toFixed(1) : 0);

        const row = document.createElement("div");
        row.className = "weightage-row";
        row.innerHTML = `
            <span class="weightage-ch-name" title="${key.replace(/"/g, '&quot;')}">${key}</span>
            <div class="weightage-input-group">
                <input type="number" class="weightage-input" min="0" max="${isMarksUnit ? totalTargetMarks : 100}" step="${isMarksUnit ? 1 : 0.5}" value="${displayVal}">
                <span class="weightage-unit-label">${isMarksUnit ? 'm' : '%'}</span>
            </div>
        `;

        const input = row.querySelector("input");
        input.addEventListener("input", (e) => {
            const raw = parseFloat(e.target.value) || 0;
            if (isMarksUnit) {
                selectedChaptersState[key] = Math.max(0, raw);
            } else {
                const calculatedMarks = Math.max(0, Math.round((raw / 100) * totalTargetMarks * 10) / 10);
                selectedChaptersState[key] = calculatedMarks;
            }
            updateAllocationStatus();
            updatePromptPreview();
        });

        listContainer.appendChild(row);
    });

    updateAllocationStatus();
}

// Update Weightage Allocation Status Bar & Progress Fill
function updateAllocationStatus() {
    const statusText = document.getElementById("allocatedMarksText");
    const statusPercent = document.getElementById("allocatedPercentText");
    const progressFill = document.getElementById("allocationProgressFill");
    const statusInfo = document.querySelector(".allocation-info");

    const selectedKeys = Object.keys(selectedChaptersState);
    const totalTargetMarks = parseFloat(document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80) || 80;

    let allocatedTotal = 0;
    selectedKeys.forEach(key => {
        allocatedTotal += (parseFloat(selectedChaptersState[key]) || 0);
    });

    const pct = totalTargetMarks > 0 ? Math.round((allocatedTotal / totalTargetMarks) * 100) : 0;

    if (statusText) statusText.textContent = `Allocated: ${allocatedTotal} / ${totalTargetMarks} Marks`;
    if (statusPercent) statusPercent.textContent = `(${pct}%)`;

    if (progressFill) {
        progressFill.style.width = `${Math.min(pct, 100)}%`;
        if (allocatedTotal === totalTargetMarks) {
            progressFill.className = "allocation-progress-fill valid";
            if (statusInfo) statusInfo.className = "allocation-info valid";
        } else if (allocatedTotal > totalTargetMarks) {
            progressFill.className = "allocation-progress-fill over";
            if (statusInfo) statusInfo.className = "allocation-info invalid";
        } else {
            progressFill.className = "allocation-progress-fill";
            if (statusInfo) statusInfo.className = "allocation-info";
        }
    }
}

// Render Categories Counts in Sidebar Nav
function renderCategoriesCount() {
    const counts = {
        all: templatesLibrary.length,
        assessment: 0,
        curiosity: 0,
        stem: 0,
        humanities: 0,
        commerce: 0,
        quizzes: 0,
        practicals: 0,
        feedback: 0
    };

    templatesLibrary.forEach(t => {
        if (counts[t.category] !== undefined) {
            counts[t.category]++;
        }
    });

    const setBadge = (id, count) => {
        const el = document.getElementById(id);
        if (el) el.textContent = count;
    };

    setBadge("countAll", counts.all);
    setBadge("countAssessment", counts.assessment);
    setBadge("countCuriosity", counts.curiosity);
    setBadge("countStem", counts.stem);
    setBadge("countHumanities", counts.humanities);
    setBadge("countCommerce", counts.commerce);
    setBadge("countQuizzes", counts.quizzes);
    setBadge("countPracticals", counts.practicals);
    setBadge("countFeedback", counts.feedback);
}

// Render Generator Template Cards
function renderCards() {
    const grid = document.getElementById("cardsGrid");
    const countBadge = document.getElementById("libraryCount");
    const searchVal = (document.getElementById("searchInput") ? document.getElementById("searchInput").value : "").toLowerCase().trim();

    if (!grid) return;

    let filtered = templatesLibrary.filter(t => {
        // Category filter
        if (activeCategory !== "all" && t.category !== activeCategory) {
            return false;
        }

        // Tag filter
        if (activeTagFilter && !t.tags.includes(activeTagFilter)) {
            return false;
        }

        // Search text query
        if (searchVal) {
            const matchesTitle = t.title.toLowerCase().includes(searchVal);
            const matchesSub = t.subtitle.toLowerCase().includes(searchVal);
            const matchesDesc = t.description.toLowerCase().includes(searchVal);
            const matchesTags = t.tags.some(tag => tag.toLowerCase().includes(searchVal));
            if (!matchesTitle && !matchesSub && !matchesDesc && !matchesTags) {
                return false;
            }
        }

        return true;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} available`;
    }

    grid.innerHTML = "";

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary); background: var(--bg-card); border-radius: 12px; border: 1px dashed var(--border-color);">
                <p style="font-size: 16px; font-weight: 600;">No generators match your filter criteria.</p>
                <p style="font-size: 13px; margin-top: 6px;">Try clearing your search query or selecting 'All Generators'.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(t => {
        const card = document.createElement("div");
        card.className = `card ${t.id === selectedTemplateId ? 'active' : ''}`;
        card.dataset.id = t.id;

        const tagChipsHtml = t.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${t.icon}</div>
                <div>
                    <h4 class="card-title">${t.title}</h4>
                    <p class="card-subtitle">${t.subtitle}</p>
                </div>
            </div>
            <p class="card-desc">${t.description}</p>
            <div class="card-tags">${tagChipsHtml}</div>
        `;

        card.addEventListener("click", () => {
            document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            selectedTemplateId = t.id;
            updatePromptPreview();
        });

        grid.appendChild(card);
    });
}

// Gather Current Parameters with Multi-Chapter Weightage Breakdown
function getParams() {
    const customChapter = document.getElementById("paramChapterCustom").value.trim();
    const outputModeEl = document.getElementById("paramOutputMode");
    const totalMarks = parseFloat(document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80) || 80;

    const selectedKeys = Object.keys(selectedChaptersState);

    let chapterSummary = "";
    if (customChapter) {
        chapterSummary = customChapter;
    } else if (selectedKeys.length === 0) {
        chapterSummary = "All Chapters";
    } else if (selectedKeys.length === 1) {
        chapterSummary = `${selectedKeys[0]} (${selectedChaptersState[selectedKeys[0]]} Marks)`;
    } else {
        chapterSummary = `Multi-Chapter: ${selectedKeys.length} Chapters (${selectedKeys.map(k => `${k.split(':')[0]} [${selectedChaptersState[k]}m]`).join(', ')})`;
    }

    // Build structured Chapter-Wise Weightage Table
    let chapterWeightageTable = "";
    if (selectedKeys.length > 0) {
        let allocatedSum = 0;
        const rows = selectedKeys.map((key, i) => {
            const m = parseFloat(selectedChaptersState[key]) || 0;
            allocatedSum += m;
            const p = totalMarks > 0 ? ((m / totalMarks) * 100).toFixed(1) : "0.0";
            return `| ${i + 1} | ${key} | ${m} Marks | ${p}% |`;
        }).join('\n');

        chapterWeightageTable = `================================================================================
CHAPTER-WISE WEIGHTAGE & BLUEPRINT ALLOCATION:
================================================================================
| S.No | NCERT Chapter Name | Weightage (Marks) | Contribution (%) |
|---|---|---|---|
${rows}
| **TOTAL** | **${selectedKeys.length} Selected Chapters** | **${allocatedSum} / ${totalMarks} Marks** | **100%** |`;
    }

    return {
        outputMode: outputModeEl ? outputModeEl.value : "direct",
        classLevel: document.getElementById("paramClass").value,
        subject: document.getElementById("paramSubject") ? document.getElementById("paramSubject").value : "General Science",
        chapter: chapterSummary,
        selectedChapters: selectedKeys.map(k => ({
            name: k,
            marks: selectedChaptersState[k] || 0,
            percent: totalMarks > 0 ? (((selectedChaptersState[k] || 0) / totalMarks) * 100).toFixed(1) : "0"
        })),
        chapterWeightageTable: chapterWeightageTable,
        tier: document.getElementById("paramTier").value,
        marks: document.getElementById("paramMarks") ? document.getElementById("paramMarks").value : 80,
        time: document.getElementById("paramTime") ? document.getElementById("paramTime").value : 180,
        includeAnswerKey: document.getElementById("toggleAnswerKey").checked,
        includeNEP: document.getElementById("toggleNEP").checked,
        includeBloom: document.getElementById("toggleBloom").checked,
        includeNCERT: document.getElementById("toggleNCERT").checked,
        includeRubrics: document.getElementById("toggleRubrics").checked
    };
}

// Separate Content Engine: Splits raw generator content into Question Paper & Answer Key
function getSeparatedContent(tpl, params) {
    let rawText = "";
    if (params.outputMode === "direct" && typeof tpl.directContentBuilder === "function") {
        rawText = tpl.directContentBuilder(params);
    } else {
        rawText = tpl.builder(params);
    }

    let qpText = rawText;
    let akText = "";

    if (rawText.includes("---ANSWER_KEY_START---")) {
        const parts = rawText.split("---ANSWER_KEY_START---");
        qpText = parts[0].trim();
        akText = parts[1].trim();
    }

    if (!params.includeAnswerKey && akText) {
        akText = `[ANSWER KEY IS DISABLED]\nEnable "Include Step-by-Step Solutions / Answer Key" in the sidebar parameter options to view the detailed marking scheme.`;
    } else if (!akText) {
        akText = `[NO SEPARATE ANSWER KEY DEFINED FOR THIS TEMPLATE]`;
    }

    const combinedHeader = "\n================================================================================\nOFFICIAL MARKING SCHEME & STEP-BY-STEP ANSWER KEY\n================================================================================\n";
    const combinedText = qpText + "\n\n" + (params.includeAnswerKey ? (combinedHeader + akText) : `[ANSWER KEY DISABLED IN SIDEBAR OPTIONS]`);

    return {
        qp: qpText,
        ak: akText,
        combined: combinedText
    };
}

// Switch Output Tab (QP vs AK vs Combined)
function switchOutputTab(tabMode) {
    activeOutputTab = tabMode;

    const tabQP = document.getElementById("tabQP");
    const tabAK = document.getElementById("tabAK");
    const tabCombined = document.getElementById("tabCombined");

    if (tabQP) {
        tabQP.classList.toggle("active", tabMode === "qp");
        tabQP.setAttribute("aria-selected", tabMode === "qp");
    }
    if (tabAK) {
        tabAK.classList.toggle("active", tabMode === "ak");
        tabAK.setAttribute("aria-selected", tabMode === "ak");
    }
    if (tabCombined) {
        tabCombined.classList.toggle("active", tabMode === "combined");
        tabCombined.setAttribute("aria-selected", tabMode === "combined");
    }

    const badge = document.getElementById("currentViewBadge");
    const copyBtnText = document.getElementById("copyBtnText");

    if (tabMode === "qp") {
        if (badge) badge.textContent = "📄 Question Paper Mode";
        if (copyBtnText) copyBtnText.textContent = "Copy Question Paper";
    } else if (tabMode === "ak") {
        if (badge) badge.textContent = "🔑 Answer Key Mode";
        if (copyBtnText) copyBtnText.textContent = "Copy Answer Key";
    } else {
        if (badge) badge.textContent = "📑 Combined View Mode";
        if (copyBtnText) copyBtnText.textContent = "Copy Combined Set";
    }

    updatePromptPreview();
}

// Update Live Prompt / Direct Content Textarea
function updatePromptPreview() {
    const tpl = templatesLibrary.find(t => t.id === selectedTemplateId) || templatesLibrary[0];
    const params = getParams();
    const separated = getSeparatedContent(tpl, params);

    let outputText = "";
    if (activeOutputTab === "qp") {
        outputText = separated.qp;
    } else if (activeOutputTab === "ak") {
        outputText = separated.ak;
    } else {
        outputText = separated.combined;
    }

    if (document.getElementById("activePromptTitle")) document.getElementById("activePromptTitle").textContent = tpl.title;
    if (document.getElementById("activePromptSubtitle")) document.getElementById("activePromptSubtitle").textContent = `Configured for ${params.classLevel} ${params.subject} • ${params.chapter}`;
    
    const tagPrefix = params.outputMode === "direct" ? "📄 Direct Paper" : "🤖 AI Meta-Prompt";
    const tagView = activeOutputTab === "qp" ? "Question Paper" : activeOutputTab === "ak" ? "Answer Key" : "Combined Set";
    if (document.getElementById("activePromptTag")) document.getElementById("activePromptTag").textContent = `${tagPrefix} (${tagView})`;

    const promptBox = document.getElementById("promptBox");
    if (promptBox) {
        promptBox.value = outputText;
    }

    // Update word count
    const words = outputText.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (document.getElementById("wordCountBadge")) document.getElementById("wordCountBadge").textContent = `${words} words`;
}

// Copy Prompt to Clipboard
function copyPrompt() {
    const promptBox = document.getElementById("promptBox");
    const copyBtnText = document.getElementById("copyBtnText");
    if (!promptBox) return;

    promptBox.select();
    const viewName = activeOutputTab === "qp" ? "Question Paper" : activeOutputTab === "ak" ? "Answer Key" : "Combined Set";

    if (copyBtnText) {
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = `Copied ${viewName}!`;
        setTimeout(() => { copyBtnText.textContent = originalText; }, 2000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(promptBox.value).then(() => {
            showToast(`${viewName} Copied to Clipboard!`);
        }).catch(() => {
            document.execCommand("copy");
            showToast(`${viewName} Copied Successfully!`);
        });
    } else {
        document.execCommand("copy");
        showToast(`${viewName} Copied Successfully!`);
    }
}

// Show Toast Notification
function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    if (!toast) return;

    if (toastMsg) toastMsg.textContent = msg;
    toast.hidden = false;

    setTimeout(() => {
        toast.hidden = true;
    }, 3000);
}

// Save Prompt to Favorites LocalStorage
function saveToFavorites() {
    const params = getParams();
    const tpl = templatesLibrary.find(t => t.id === selectedTemplateId) || templatesLibrary[0];
    const content = document.getElementById("promptBox") ? document.getElementById("promptBox").value : "";

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
    const countEl = document.getElementById("savedCount");
    if (countEl) countEl.textContent = savedTemplates.length;
}

// Open Saved Templates Modal
function openSavedModal() {
    const modal = document.getElementById("savedModal");
    const list = document.getElementById("savedTemplatesList");
    if (!modal || !list) return;

    list.innerHTML = "";

    if (savedTemplates.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding:30px; color:var(--text-secondary);">
                <p>No saved templates yet.</p>
                <p style="font-size:12px; margin-top:4px;">Click 'Save Preset' in the editor workspace to store your custom content.</p>
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
    const modal = document.getElementById("savedModal");
    if (modal) modal.hidden = true;
}

function loadSavedItem(id) {
    const item = savedTemplates.find(t => t.id === id);
    if (item) {
        const box = document.getElementById("promptBox");
        if (box) box.value = item.content;
        if (document.getElementById("activePromptTitle")) document.getElementById("activePromptTitle").textContent = item.title;
        if (document.getElementById("activePromptSubtitle")) document.getElementById("activePromptSubtitle").textContent = item.subtitle;
        
        const words = item.content.trim().split(/\s+/).filter(w => w.length > 0).length;
        if (document.getElementById("wordCountBadge")) document.getElementById("wordCountBadge").textContent = `${words} words`;

        closeSavedModal();
        showToast("Loaded saved item into workspace!");
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
    if (confirm("Are you sure you want to clear all saved items?")) {
        savedTemplates = [];
        try {
            localStorage.removeItem("cbse_saved_prompts");
        } catch(e){}
        updateSavedCount();
        openSavedModal();
    }
}

// Export Content to PDF, MS Word (.doc), Markdown, Text, or Printable View
function exportPrompt(format, source = 'active') {
    const exportMenu = document.getElementById("exportMenu");
    if (exportMenu) exportMenu.classList.remove("show");

    const tpl = templatesLibrary.find(t => t.id === selectedTemplateId) || templatesLibrary[0];
    const params = getParams();
    const separated = getSeparatedContent(tpl, params);

    let targetMode = source;
    if (source === 'active') {
        targetMode = activeOutputTab;
    }

    let exportContent = "";
    let docTitle = "";

    if (targetMode === 'qp') {
        exportContent = separated.qp;
        docTitle = `CBSE_${params.classLevel}_${params.subject}_QuestionPaper`;
    } else if (targetMode === 'ak') {
        exportContent = separated.ak;
        docTitle = `CBSE_${params.classLevel}_${params.subject}_AnswerKey`;
    } else {
        exportContent = separated.combined;
        docTitle = `CBSE_${params.classLevel}_${params.subject}_FullExamSet`;
    }

    // 1. MS WORD EXPORT (.doc / .docx compatible)
    if (format === 'word') {
        const headerTitle = targetMode === 'qp' ? 'KENDRIYA VIDYALAYA SANGATHAN / CBSE BOARD EXAMINATION 2026-27' :
                            targetMode === 'ak' ? 'CONFIDENTIAL - OFFICIAL MARKING SCHEME & ANSWER KEY' :
                            'CBSE BOARD EXAMINATION 2026-27 (QUESTION PAPER & ANSWER KEY)';
        
        const bannerColor = targetMode === 'ak' ? '#dc2626' : '#2563eb';
        const badgeLabel = targetMode === 'qp' ? 'QUESTION PAPER ONLY (FOR STUDENTS)' :
                           targetMode === 'ak' ? 'CONFIDENTIAL ANSWER KEY & MARKING SCHEME' :
                           'FULL EXAM SET (QP + KEY)';

        const wordHtml = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head>
                <meta charset='utf-8'>
                <title>${docTitle}</title>
                <style>
                    @page { size: A4; margin: 20mm; }
                    body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #0f172a; margin: 20px; }
                    .header-box { border-bottom: 3pt solid ${bannerColor}; padding-bottom: 8pt; margin-bottom: 15pt; }
                    h1 { font-size: 16pt; color: ${bannerColor}; text-transform: uppercase; margin: 0 0 4pt 0; font-weight: bold; }
                    p.meta { font-size: 10pt; color: #475569; margin: 0; }
                    .badge { display: inline-block; background: ${bannerColor}; color: #ffffff; padding: 3pt 8pt; font-weight: bold; font-size: 9pt; border-radius: 3pt; margin-top: 6pt; }
                    pre { font-family: 'Consolas', 'Courier New', monospace; font-size: 10pt; white-space: pre-wrap; word-wrap: break-word; background: #f8fafc; padding: 12pt; border: 1pt solid #cbd5e1; border-radius: 4pt; line-height: 1.4; color: #0f172a; }
                </style>
            </head>
            <body>
                <div class="header-box">
                    <h1>${headerTitle}</h1>
                    <p class="meta"><strong>Class:</strong> ${params.classLevel} | <strong>Subject:</strong> ${params.subject} | <strong>Syllabus:</strong> ${params.chapter}</p>
                    <div class="badge">${badgeLabel}</div>
                </div>
                <pre>${exportContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            </body>
            </html>
        `;

        const blob = new Blob(['\ufeff' + wordHtml], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${docTitle}.doc`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`Exported ${docTitle}.doc (MS Word Format)`);
        return;
    }

    // 2. PDF EXPORT (High-Resolution Print-to-PDF Window)
    if (format === 'pdf' || format === 'print') {
        const printWin = window.open('', '_blank');
        const headerTitle = targetMode === 'qp' ? 'KENDRIYA VIDYALAYA / CBSE BOARD EXAMINATION 2026-27' :
                            targetMode === 'ak' ? 'CONFIDENTIAL - OFFICIAL MARKING SCHEME & ANSWER KEY' :
                            'CBSE BOARD EXAMINATION 2026-27 (QUESTION PAPER & ANSWER KEY)';
        
        const bannerColor = targetMode === 'ak' ? '#dc2626' : '#2563eb';
        const badgeLabel = targetMode === 'qp' ? '📄 QUESTION PAPER ONLY (FOR STUDENTS)' :
                           targetMode === 'ak' ? '🔑 CONFIDENTIAL ANSWER KEY & MARKING SCHEME' :
                           '📑 FULL EXAM SET (QP + KEY)';

        printWin.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${docTitle} - CBSE 2026-27</title>
                <style>
                    @page { size: A4; margin: 15mm; }
                    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; line-height: 1.6; color: #111; background: #fff; }
                    .header-banner { border-bottom: 3px solid ${bannerColor}; padding-bottom: 12px; margin-bottom: 20px; }
                    .header-banner h1 { font-size: 18px; color: ${bannerColor}; margin: 0 0 6px 0; text-transform: uppercase; font-weight: 800; }
                    .header-banner p { font-size: 13px; color: #475569; margin: 0; }
                    .badge { display: inline-block; background: ${bannerColor}; color: white; padding: 4px 12px; border-radius: 4px; font-weight: 700; font-size: 11px; margin-top: 8px; text-transform: uppercase; }
                    pre { background: #f8fafc; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5; color: #0f172a; }
                    @media print {
                        body { padding: 0; }
                        pre { border: none; background: transparent; padding: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="header-banner">
                    <h1>${headerTitle}</h1>
                    <p><strong>Class:</strong> ${params.classLevel} | <strong>Subject:</strong> ${params.subject} | <strong>Syllabus:</strong> ${params.chapter}</p>
                    <span class="badge">${badgeLabel}</span>
                </div>
                <pre>${exportContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                        }, 300);
                    }
                </script>
            </body>
            </html>
        `);
        printWin.document.close();
        showToast(`Opening PDF / Print Dialog for ${docTitle}`);
        return;
    }

    // 3. TEXT / MARKDOWN EXPORTS (.txt / .md)
    const filename = `${docTitle}.${format === 'md' ? 'md' : 'txt'}`;
    const blob = new Blob([exportContent], { type: format === 'md' ? 'text/markdown' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Exported ${filename}`);
}
