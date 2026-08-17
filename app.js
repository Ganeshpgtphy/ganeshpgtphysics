/* ==========================================================================
   CBSE Science Teacher AI Studio 2026-27 - Application Logic
   Authoritative CBSE/KVS Prompt & Direct Question Paper Assembly Engine
   ========================================================================== */

// 1. NCERT 2026-27 Curiosity & CBSE Science Chapter Database (Classes 6-12)
const cbseChapterDatabase = {
    "Class 6": {
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
        ]
    },
    "Class 7": {
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
        ]
    },
    "Class 8": {
        "General Science": [
            "Chapter 1: Exploring the Investigative World of Science",
            "Chapter 2: The Invisible Living World: Beyond Our Naked Eye",
            "Chapter 3: Health: The Ultimate Treasure",
            "Chapter 4: Electricity: Magnetic and Heating Effects",
            "Chapter 5: Exploring Forces",
            "Chapter 6: Pressure, Winds, Storms, and Cyclones",
            "Chapter 7: Particulate Nature of Matter",
            "Chapter 8: Nature of Matter: Elements, Compounds, and Mixtures",
            "Chapter 9: The Amazing World of Solutes, Solvents, and Solutions",
            "Chapter 10: Light: Mirrors and Lenses",
            "Chapter 11: Keeping Time with the Skies (Astronomy & Solar System)",
            "Chapter 12: How Nature Works in Harmony (Ecosystems & Balance)",
            "Chapter 13: Our Home: Earth, a Unique Life Sustaining Planet"
        ]
    },
    "Class 9": {
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
        ]
    },
    "Class 10": {
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
        id: "curiosity_lab",
        category: "curiosity",
        title: "🔬 NCERT Curiosity Hands-On Activity & Toy Lab",
        subtitle: "Low-Cost Experiential Toys & Discovery Lab",
        tags: ["Curiosity", "Activity", "Toy Making", "Experiential", "NCF-SE 2023"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        description: "Design low-cost hands-on science activities, toy-making projects (e.g. magnetic floating top, pinhole camera, red cabbage indicator), observation sheets, and curiosity questions mandated by NCERT Curiosity series.",
        
        directContentBuilder: function(p) {
            return `NCERT CURIOSITY SCIENCE SERIES | EXPERIENTIAL TOY & ACTIVITY MANUAL
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
CHAPTER / CURIOSITY MODULE: ${p.chapter}
Pedagogical Model: NCF-SE 2023 Experiential Learning & Joy of Learning (NEP 2020)

================================================================================
1. CURIOSITY ACTIVITY TITLE & OBJECTIVE
Title: "Hands-On Science Toy & Activity: Exploring ${p.chapter}"
Objective: To build a working low-cost model / toy using everyday materials to observe, test, and explain the core scientific principle of ${p.chapter}.

================================================================================
2. MATERIALS REQUIRED (ZERO / LOW-COST HOUSEHOLD ITEMS)
• Cardboard strips, plastic cups, rubber bands, stainless steel spoons, sewing thread.
• Recycled plastic bottles, bar magnet / iron nails, drops of turmeric / lemon juice or vinegar.
• Ruler, measuring tape, water container, stop watch / smartphone timer.

================================================================================
3. STEP-BY-STEP TOY MAKING & ASSEMBLY PROCEDURE
Step 1: Take the base container/cardboard and arrange the components in alignment with ${p.chapter}.
Step 2: Construct the pivot/terminal point and attach the movable or reactive element using thread/tape.
Step 3: Test the initial equilibrium state before applying external stimulus (temperature, magnetic field, force, or solution pH).
Step 4: Gradually trigger the system and observe the mechanical motion, deflection, color transition, or state change.

================================================================================
4. STUDENT CURIOSITY OBSERVATION SHEET
| Trial / Test Case | Input Condition / Variable | Observed Response / Deflection | Scientific Inference (${p.chapter}) |
|---|---|---|---|
| Trial 1 (Control) | Standard room condition | Baseline state recorded | Reference benchmark |
| Trial 2 (Modified) | Parameter doubled / changed | Noticeable shift / reaction | ${p.chapter} effect confirmed |
| Trial 3 (Extreme) | Maximum load / limit | Saturation / rapid transition | Boundary condition verified |

================================================================================
5. CURIOSITY INQUIRY QUESTIONS ("JOY OF LEARNING")
Q1. [Wondering Question] What surprised you most when you operated your handmade science toy?
Q2. [Cause & Effect] If you double the length or concentration in your activity, how does the response time change?
Q3. [Real-World Link] How is this simple toy mechanism utilized in large-scale modern technology or nature?

---ANSWER_KEY_START---
NCERT CURIOSITY ACTIVITY TEACHER FACILITATION GUIDE & ANSWERS:
================================================================================
• Core Principle: Explains the primary mechanism of ${p.chapter} through hands-on tactile manipulation.
• Teacher Tip: Prompt students to formulate their own hypotheses BEFORE assembling the toy.
• Q1 Guidance: Encourage qualitative descriptions of energy transformation, force deflection, or chemical color shifts.
• Q2 Guidance: Emphasize linear or square-law mathematical relations (e.g. double input yields direct/proportional response).
• Q3 Guidance: Link to real-life applications like sensors, motors, water filtration, or ecological balance.`;
        },

        builder: function(p) {
            return `Act as an NCERT Curiosity Textbook Author and National Science Activity Specialist.

Design a COMPLETE LOW-COST HANDS-ON SCIENCE ACTIVITY & TOY-MAKING MANUAL strictly adhering to NCERT Curiosity (Grade 6-8) and CBSE Guidelines (Grade 9-10).

PARAMETERS:
• Class Level: ${p.classLevel}
• Subject: ${p.subject}
• Curiosity Chapter: ${p.chapter}
• Targeted Learner Tier: ${p.tier}

PART 1: EXPERIENTIAL TOY & ACTIVITY MANUAL
1. Activity & Toy Title mapped to NCERT Curiosity chapter.
2. Low-cost / Household materials list.
3. Step-by-step assembly and experimentation guide.
4. Student Observation Worksheet & Data Matrix.
5. "Joy of Learning" Inquiry Questions (Why, How, What If?).

---ANSWER_KEY_START---
PART 2: TEACHER PEDAGOGICAL FACILITATION GUIDE
1. Expected observational outcomes and scientific rationale.
2. Troubleshooting common student errors during toy assembly.
3. Model answers for Inquiry Questions.`;
        }
    },

    {
        id: "curiosity_inquiry",
        category: "curiosity",
        title: "❓ NCERT Curiosity Inquiry & Real-World Explorer",
        subtitle: "5E Inquiry Framework & Everyday Phenomena",
        tags: ["Curiosity", "Inquiry", "NCF-SE 2023", "Everyday Science"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        description: "Generate curiosity-driven inquiry sheets with real-world phenomenon analysis, 'What If?' speculative science challenges, cross-curricular STEM links, and self-reflection prompts.",
        
        directContentBuilder: function(p) {
            return `NCERT CURIOSITY SCIENCE SERIES | INQUIRY & EVERYDAY PHENOMENA EXPLORER
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
THEMATIC UNIT: ${p.chapter}
NCF-SE 2023 Competency Framework: Inquiry-Driven Thinking & Critical Reasoning

================================================================================
1. REAL-WORLD PHENOMENON TO EXPLORE ("I WONDER WHY...")
Scenario: "Observe a daily situation related to ${p.chapter}. Have you ever wondered why certain objects behave differently under changing environmental conditions?"

Key Observation Challenge:
- Notice what happens when you alter one parameter while observing ${p.chapter} in your home or surrounding environment.

================================================================================
2. 5E CURIOSITY INQUIRY TASKS

[TASK 1: ENGAGE - SPARKING CURIOSITY]
Look at the given situation in ${p.chapter}. Formulate 2 "Why" questions and 2 "How" questions about what causes this phenomenon.

[TASK 2: EXPLORE - INVESTIGATIVE EXPERIMENT]
Design a simple 5-minute home investigation using easily available items to test one of your questions about ${p.chapter}.
• Hypothesis: "I predict that if I change __________, then __________ will happen."
• Method: Detail your setup in 3 simple bullet points.

[TASK 3: EXPLAIN - SCIENTIFIC REASONING]
Explain the scientific reason behind your observation using the concept of ${p.chapter}. Use correct scientific terms (e.g. force, energy, particles, reaction, adaptation).

[TASK 4: ELABORATE - "WHAT IF?" CHALLENGE]
• What if the fundamental constant or environmental factor in ${p.chapter} were doubled?
• What if this process stopped occurring on Earth for 24 hours? Describe the impact on living organisms or technology.

[TASK 5: EVALUATE - REFLECTION CHIP]
Rate your understanding of ${p.chapter}:
[ ] I can explain this to a classmate.  [ ] I can connect it to daily life.  [ ] I need to explore more.

---ANSWER_KEY_START---
NCERT CURIOSITY INQUIRY TEACHER REFERENCE & MODEL RESPONSES:
================================================================================
• Phenomenon Breakdown: Connects ${p.chapter} to observable physical, chemical, or biological processes in nature.
• Model Hypothesis: Clear testable statement identifying independent and dependent variables.
• Model "What If" Rationale: Evaluates higher-order consequences and systems thinking.
• Cross-Curricular Link: Combines Science, Mathematics (graphing/ratios), and Environmental Education.`;
        },

        builder: function(p) {
            return `You are a Master Educator specializing in NCERT Curiosity Inquiry-Based Learning and NEP 2020 NCF-SE Pedagogy.

Create a CURIOSITY INQUIRY & REAL-WORLD EXPLORER WORKSHEET for Class ${p.classLevel} Science on "${p.chapter}".

PART 1: STUDENT INQUIRY EXPLORER
1. Real-World Phenomenon hook ("I Wonder Why...").
2. 5E Curiosity Tasks (Engage, Explore, Explain, Elaborate "What-If", Evaluate).
3. Cross-Curricular STEM Connection (Science + Math/Art/Environment).

---ANSWER_KEY_START---
PART 2: TEACHER INQUIRY FACILITATION & MODEL ANSWERS
1. Model scientific explanations for student inquiry prompts.
2. Guidance for leading classroom discussions.`;
        }
    },

    {
        id: "qp",
        category: "assessment",
        title: "📝 Blueprint Question Paper Setter",
        subtitle: "Official CBSE Exam Pattern (Sections A to E)",
        tags: ["Blueprint", "Question Paper", "PYQ Pattern", "Internal Choice"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>`,
        description: "Generate a proper, complete, ready-to-print CBSE Competency-Based Question Paper with Blueprint matrix, Section A to E breakdown, internal choices, and Answer Key.",
        
        directContentBuilder: function(p) {
            return `KENDRIYA VIDYALAYA SANGATHAN / CBSE BOARD EXAMINATION 2026-27
OFFICIAL COMPETENCY-BASED QUESTION PAPER

Subject: ${p.subject} | Class: ${p.classLevel}
Syllabus / Chapter Focus: ${p.chapter}
Maximum Marks: ${p.marks} Marks | Time Allowed: ${p.time} Minutes
Target Learner Tier: ${p.tier}

================================================================================
GENERAL INSTRUCTIONS:
1. This question paper consists of 39 compulsory questions divided into 5 Sections: A, B, C, D, and E.
2. Section A contains 20 objective type questions (16 MCQs and 4 Assertion-Reason questions) of 1 mark each.
3. Section B contains 6 Short Answer (SA-I) questions of 2 marks each (Answers in 30-50 words).
4. Section C contains 7 Short Answer (SA-II) questions of 3 marks each (Answers in 50-80 words).
5. Section D contains 3 Long Answer (LA) questions of 5 marks each. Internal choice is provided in all 3 questions.
6. Section E contains 3 Case-Based / Data-Integrated units of assessment of 4 marks each with sub-parts.
7. Use of calculators is NOT permitted. Logarithmic tables may be provided on request.
${p.includeBloom ? '8. Bloom\'s Taxonomy Levels are tagged for each question [R: Remember, U: Understand, Ap: Apply, An: Analyze, Ev: Evaluate, C: Create].\n' : ''}${p.includeNEP ? '9. Questions strictly test Competency-Based Education (CBE) as per NEP-2020 & NCF-SE 2023.\n' : ''}
${p.chapterWeightageTable ? p.chapterWeightageTable + '\n' : ''}================================================================================
EXAM BLUEPRINT MATRIX (CBSE SESSION 2026-27)

| Section | Question Type | No. of Qs | Marks per Q | Total Marks | Targeted Bloom's Taxonomy |
|---|---|---|---|---|---|
| Section A | MCQs & Assertion-Reason | 20 | 1 | 20 Marks | Remember / Understand / Apply |
| Section B | Short Answer - I (SA-I) | 6 | 2 | 12 Marks | Apply / Conceptual Analysis |
| Section C | Short Answer - II (SA-II) | 7 | 3 | 21 Marks | Apply / Numerical / Derivation |
| Section D | Long Answer (LA) | 3 | 5 | 15 Marks | Evaluate / Design / Synthesis |
| Section E | Case-Study Integrated | 3 | 4 | 12 Marks | Analyze / Real-World HOTS |
| **TOTAL** | **Full Question Paper** | **39** | | **80 Marks** | **100% Competency Aligned** |

================================================================================
SECTION A (20 Marks) - MULTIPLE CHOICE & ASSERTION-REASON QUESTIONS

Q1. [Competency - Application [Ap]] 
A student sets up an experiment based on ${p.chapter}. If the primary operating parameter is doubled while keeping other variables constant, what happens to the net output?
(A) It remains unchanged because the parameter is independent.
(B) It increases by a factor of 2 (linear relation).
(C) It increases by a factor of 4 (quadratic/inverse-square relation).
(D) It decreases to half of its initial value.

Q2. [Competency - Conceptual Analysis [U]]
Which of the following physical/chemical statements accurately describes the primary mechanism in ${p.chapter}?
(A) Energy is conserved by converting potential energy directly into non-recoverable heat.
(B) The net charge/mass remains conserved across all closed system transformations.
(C) The process occurs spontaneously only at absolute zero.
(D) The rate of reaction/change is independent of temperature and pressure gradient.

Q3. [Competency - Graphical Interpretation [An]]
In a standard graph plotting response versus input for ${p.chapter}, a straight line passing through the origin indicates:
(A) Inverse proportionality between the variables.
(B) Direct linear proportionality with constant slope equal to the system property.
(C) Non-linear exponential growth.
(D) Zero correlation between independent and dependent parameters.

Q4. [NCERT Activity Based [Ap]]
During a laboratory demonstration of ${p.chapter}, a teacher adds a indicator/meter across the system. What key observation confirms the successful completion of the phenomenon?
(A) Color change / needle deflection due to potential difference/chemical shift.
(B) Evolution of a pungent gas with a pop sound.
(C) Rapid decrease in system temperature to 0°C.
(D) Formation of a soluble colored complex that dissolves completely.

Q5. [Competency - Problem Solving [Ap]]
Calculate the magnitude of the core quantity in ${p.chapter} when a system operates with 10 units of input over a duration of 2 seconds:
(A) 5 units (SI metric)
(B) 20 units (SI metric)
(C) 12 units (SI metric)
(D) 0.2 units (SI metric)

Q6. [NCERT Exemplar Pattern [U]]
Identify the incorrect statement regarding the fundamental laws governing ${p.chapter}:
(A) They obey the principle of conservation of energy.
(B) They apply strictly to microscopic quantum systems only and fail macroscopically.
(C) Dimensional homogeneity must be maintained across all terms in equations.
(D) Vector quantities must be added using the parallelogram law of addition.

Q7. [Real-World Life Application [Ap]]
In modern household/industrial devices operating on principles of ${p.chapter}, safety devices (like fuses, earthing, or insulation) are connected in:
(A) Series with the live line to interrupt current during overload.
(B) Parallel across neutral and ground to bypass voltage spikes.
(C) Series with neutral wire only.
(D) Parallel across all secondary loads regardless of current rating.

Q8. [Competency - Data Interpretation [An]]
A research data table for ${p.chapter} shows values of [X: 2, 4, 6] corresponding to [Y: 8, 16, 24]. The value of the proportionality constant K (Y/X) is:
(A) 0.25
(B) 4.0
(C) 12.0
(D) 48.0

Q9. [NCERT Concept Check [R]]
The SI unit for the primary physical quantity measured in ${p.chapter} is:
(A) Joule (J) / Newton (N) / Volt (V) / Ampere (A) as applicable.
(B) Watt per second (W/s).
(C) Erg per centimeter (erg/cm).
(D) Dimensionless ratio without units.

Q10. [HOTS Analysis [An]]
If the distance between two interacting components in ${p.chapter} is reduced to one-third (1/3), the magnitude of the force/field becomes:
(A) 3 times greater
(B) 9 times greater
(C) 1/3 of the initial value
(D) 1/9 of the initial value

Q11 - Q16. [MCQs covering NCERT Exemplar & CBSE Board PYQ Trends]
(Standard 1-mark objective questions on formulas, definitions, and applications in ${p.chapter}).

---
DIRECTION FOR Q17 - Q20:
In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:
(A) Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).
(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is NOT the correct explanation of Assertion (A).
(C) Assertion (A) is true, but Reason (R) is false.
(D) Assertion (A) is false, but Reason (R) is true.

Q17. [Assertion-Reason - Conceptual]
Assertion (A): In ${p.chapter}, high voltage transmission is preferred over long distances.
Reason (R): Power loss in transmission cables is inversely proportional to the square of voltage (P_loss ∝ 1/V²).

Q18. [Assertion-Reason - NCERT Activity]
Assertion (A): Pure water does not conduct electricity, but acidic water conducts electricity readily.
Reason (R): Acid provides free mobile ions (H+ / OH-) which act as charge carriers in solution.

Q19. [Assertion-Reason - Physical Laws]
Assertion (A): The magnetic field lines inside a current-carrying solenoid are parallel straight lines.
Reason (R): The magnetic field is uniform at all points inside a long solenoid.

Q20. [Assertion-Reason - Advanced]
Assertion (A): Convex mirrors are universally used as rear-view mirrors in automobiles.
Reason (R): Convex mirrors always produce an erect, diminished image and provide a wider field of view.

================================================================================
SECTION B (12 Marks) - SHORT ANSWER QUESTIONS - I (2 Marks Each)

Q21. [Competency - Reasoning [U]]
State the fundamental law governing ${p.chapter}. Write its mathematical expression and specify the SI units for each term involved.

Q22. [NCERT Activity Based [Ap]]
During a laboratory activity on ${p.chapter}, a student observes a change when temperature rises by 20°C.
(a) Why does temperature affect the physical/chemical state of the system?
(b) Predict what happens if the system is cooled back to 0°C.

Q23. [Diagram / Conceptual [Ap]]
Draw a neat labeled schematic diagram representing the primary phenomenon in ${p.chapter}. Indicate the direction of flow/forces with arrows.

Q24. [Numerical Problem [Ap]]
A device operating on principles of ${p.chapter} draws a current of 2.5 A from a 220 V supply.
(a) Calculate the resistance / power rating of the device.
(b) Find the electrical energy consumed in 4 hours of continuous operation (in kWh).

Q25. [OR / Internal Choice Question]
Q25(A). Explain why fuse wire must have high resistivity and low melting point in electrical circuits.
OR
Q25(B). Differentiate between series and parallel combinations of components based on voltage drop, current distribution, and total effective value.

Q26. [HOTS Short Answer [An]]
Two thin lenses / components of powers +5 D and -2 D are placed in contact.
(a) Calculate the net power of the combination.
(b) Determine the focal length of the combined system in centimeters.

================================================================================
SECTION C (21 Marks) - SHORT ANSWER QUESTIONS - II (3 Marks Each)

Q27. [Competency - Derivation / Mathematical Rigor [Ap]]
Derive the complete mathematical expression for the net equivalent value in ${p.chapter} when three components (R1, R2, R3 or C1, C2, C3) are connected in parallel. Draw the circuit diagram.

Q28. [Step-by-Step Numerical [Ap]]
An object of height 4.0 cm is placed at a distance of 25.0 cm in front of a concave mirror of focal length 15.0 cm.
(a) Find the position (v) of the image formed.
(b) Calculate the height (h') and nature (real/virtual, inverted/erect) of the image.
(c) Draw a ray diagram showing the image formation.

Q29. [NCERT Exemplar Case [An]]
Explain the underlying scientific reasons for the following observations in ${p.chapter}:
(a) Why do stars twinkle while planets do not twinkle?
(b) Why does the sky appear dark to an astronaut in outer space?
(c) Why is danger signal light red in color?

Q30. [Experimental Setup [Ap]]
Describe an activity to demonstrate the magnetic field pattern produced around a straight current-carrying conductor using iron filings and a compass needle.
(a) State Right-Hand Thumb Rule used to find field direction.
(b) How does field strength change if current is doubled?

Q31. [OR / Internal Choice Question]
Q31(A). (i) Define 1 Ohm and 1 Volt in terms of SI base units.
(ii) Calculate the total resistance between points A and B for a network of four 10-Ohm resistors arranged in a bridge.
OR
Q31(B). (i) Define Joule's Law of Heating and derive H = I² R t.
(ii) Why are alloy heating elements (Nichrome) preferred over pure metals in electric irons?

Q32. [Multi-Concept Application [An]]
A copper wire has a diameter of 0.5 mm and resistivity ρ = 1.6 × 10⁻⁸ Ω·m.
(a) What will be the length of this wire to make its resistance 10 Ω?
(b) How much does the resistance change if the diameter is doubled without changing length?

Q33. [Competency - Chemical / Physical Mechanism [U]]
Write balanced chemical/physical equations and observations for 3 key reactions/transformations in ${p.chapter}.

================================================================================
SECTION D (15 Marks) - LONG ANSWER QUESTIONS (5 Marks Each)

Q34. [Compulsory Internal Choice - 5 Marks]
Q34(A). [Comprehensive Derivation & Ray Diagram]
(i) State Snell's Law of Refraction and define refractive index of a medium. (1M)
(ii) Derive the lens formula 1/f = 1/v - 1/u for a thin convex lens forming a real image. (3M)
(iii) A convex lens forms a real image 4 times larger than the object. If object distance is -10 cm, find the focal length. (1M)
OR
Q34(B). [Human Eye & Vision Correction]
(i) Name the defect of vision in which a person cannot see nearby objects clearly. State two causes of this defect. (2M)
(ii) Draw ray diagrams showing: (a) Myopic Eye, (b) Hypermetropic Eye, (c) Correction using a suitable lens. (2M)
(iii) A hypermetropic person has a near point of 75 cm. Calculate power of lens required to read at 25 cm. (1M)

Q35. [Compulsory Internal Choice - 5 Marks]
Q35(A). [Electromagnetism & Motor/Generator Principle]
(i) State Fleming's Left-Hand Rule and Fleming's Right-Hand Rule. (2M)
(ii) Explain the working principle and construction of an Electric Motor / Electromagnetic Induction setup with a labeled diagram. (2M)
(iii) State two methods to increase the strength of induced current. (1M)
OR
Q35(B). [Electric Power Distribution & Household Wiring]
(i) Explain why household domestic circuits are connected in parallel and not in series. Give 3 advantages. (3M)
(ii) An electric oven rated 2 kW, 220 V is operated in a 5 A domestic circuit. What will happen? Explain with calculation. (2M)

Q36. [Compulsory Internal Choice - 5 Marks]
Q36(A). [Advanced Topic - ${p.chapter}]
(i) Explain the phenomenon of Total Internal Reflection (TIR). State two necessary conditions for TIR to occur. (2M)
(ii) Derive the relation between critical angle (i_c) and refractive index (μ). (1.5M)
(iii) Explain how optical fibers transmit light signals over long distances with zero loss. (1.5M)
OR
Q36(B). [Exemplar Analytical Comprehensive Question]
(i) State Ohm's law. Draw V-I graph for ohmic and non-ohmic conductors. (2M)
(ii) A battery of 9V is connected in series with resistors of 0.2 Ω, 0.3 Ω, 0.4 Ω, 0.5 Ω and 12 Ω. How much current flows through the 12 Ω resistor? (2M)
(iii) Why does a conductor get heated when an electric current flows through it? (1M)

================================================================================
SECTION E (12 Marks) - CASE-STUDY & INTEGRATED DATA UNITS (4 Marks Each)

Q37. [CASE STUDY 1 - Household Electricity & Energy Conservation]
Read the passage below and answer the sub-questions that follow:
"In a modern Kendriya Vidyalaya smart classroom, electrical safety and power monitoring are regulated using smart meters. The room uses 4 LED tube lights (20 W each running for 8 hours/day), 2 ceiling fans (80 W each running for 10 hours/day), and 1 smart interactive board (300 W running for 5 hours/day). Electrical energy is billed at a rate of ₹ 6.50 per commercial unit (kWh)."

Sub-questions:
(a) [1 Mark] Calculate the total daily energy consumption of the classroom in kWh (units).
(b) [1 Mark] Find the total electricity bill for the month of April (30 days).
(c) [2 Marks] If the main line voltage is 220 V, calculate the peak current drawn when all appliances operate simultaneously. Select an appropriate fuse rating (5A, 10A, or 15A) with justification.

Q38. [CASE STUDY 2 - Advanced Optics & Solar Energy Harvesting]
Read the passage below and answer the sub-questions that follow:
"Solar concentrators use large parabolic and spherical mirrors to focus sunlight onto a central receiver tube containing fluid. The temperature at the focal spot reaches up to 500°C, driving steam turbines to generate green electricity. Precision tracking motors continuously adjust the mirror angle relative to the sun's altitude."

Sub-questions:
(a) [1 Mark] Which type of spherical mirror is used in solar concentrators and why?
(b) [1 Mark] Where should the absorber tube be positioned relative to the mirror's pole?
(c) [2 Marks] If a solar mirror has a radius of curvature of 4.0 meters, calculate its focal length. If an object is placed 8 meters away, determine the position and magnification of the image formed.

Q39. [CASE STUDY 3 - Laboratory Experiment & Data Analysis]
Read the passage below and answer the sub-questions that follow:
"A group of Class 10 students performed an experiment to study the variation of current (I) with potential difference (V) across a resistor wire 'X'. They recorded the following observation table in their science journal:
Table: [V (Volts): 1.5, 3.0, 4.5, 6.0 | I (Amperes): 0.3, 0.6, 0.9, 1.2]"

Sub-questions:
(a) [1 Mark] Plot the slope of the V-I graph and state what physical quantity the slope represents.
(b) [1 Mark] Calculate the resistance of resistor wire 'X'.
(c) [2 Marks] If another resistor wire 'Y' of twice the length and half the cross-sectional area of 'X' is connected in parallel with 'X', calculate the new equivalent resistance of the parallel combination.

================================================================================
${p.includeAnswerKey ? `---ANSWER_KEY_START---
OFFICIAL MARKING SCHEME & STEP-BY-STEP ANSWER KEY
================================================================================
SECTION A - ANSWER KEY:
Q1: (C) | Q2: (B) | Q3: (B) | Q4: (A) | Q5: (A) | Q6: (B) | Q7: (A) | Q8: (B)
Q9: (A) | Q10: (B) | Q11: (A) | Q12: (A) | Q13: (A) | Q14: (B) | Q15: (C) | Q16: (A)
Q17: (A) Both A and R are true, R is correct explanation.
Q18: (A) Both A and R are true, R is correct explanation.
Q19: (A) Both A and R are true, R is correct explanation.
Q20: (A) Both A and R are true, R is correct explanation.

SECTION B - ANSWER KEY & VALUE POINTS:
Q21: Law statement [1M], Formula V = IR or equivalent with SI units [1M].
Q22: (a) Thermal kinetic energy increases mobility [1M], (b) Reversible state restoration [1M].
Q23: Correct schematic diagram with arrows [1.5M], labeling [0.5M].
Q24: (a) R = V/I = 220/2.5 = 88 Ω [1M], (b) E = P × t = 0.55 kW × 4 h = 2.2 kWh [1M].
Q25: (A) High resistivity generates heat (I²R), low melting point breaks circuit during overload [2M].
Q26: (a) P = P1 + P2 = +5 - 2 = +3 D [1M], (b) f = 1/P = 1/3 m = +33.33 cm [1M].

SECTION C - ANSWER KEY & VALUE POINTS:
Q27: Parallel circuit diagram [1M], I = I1 + I2 + I3 => V/Rp = V/R1 + V/R2 + V/R3 => 1/Rp = 1/R1 + 1/R2 + 1/R3 [2M].
Q28: (a) 1/f = 1/v + 1/u => -1/15 = 1/v - 1/25 => v = -37.5 cm [1.5M], (b) m = -v/u = -(-37.5)/(-25) = -1.5 => h' = -6.0 cm (Real & Inverted) [1.5M].
Q29: (a) Atmospheric refraction due to turbulent density layers [1M], (b) No atmosphere to scatter light in space [1M], (c) Red light has longest wavelength λ, least scattered by air molecules [1M].
Q30: Iron filings concentric circles pattern [1M], Right-hand thumb rule statement [1M], Field strength is directly proportional to current (B ∝ I), doubles [1M].
Q31: (A) (i) 1 Ohm = 1 Volt / 1 Ampere [1M], (ii) R_net = 10 Ω for balanced bridge [2M].
Q32: (a) A = π d²/4 = 1.96 × 10⁻⁷ m² => L = R A / ρ = (10 × 1.96 × 10⁻⁷) / 1.6 × 10⁻⁸ = 122.7 m [2M], (b) R ∝ 1/d², doubling d reduces R to R/4 = 2.5 Ω [1M].

SECTION D - ANSWER KEY & VALUE POINTS:
Q34: (A) (i) Snell's law: sin(i)/sin(r) = μ [1M], (ii) Complete convex lens formula derivation with diagram [3M], (iii) m = -4 => v = 40 cm, f = +8.0 cm [1M].
Q35: (A) (i) Fleming's Left Hand & Right Hand rules stated clearly [2M], (ii) Motor diagram and split ring commutator principle [2M], (iii) Increase turns N, increase magnetic field B [1M].
Q36: (B) (i) Ohm's law statement & V-I straight line graph [2M], (ii) In series circuit, current is same through all resistors: R_total = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 Ω => I = 9 / 13.4 = 0.67 A [2M], (iii) Free electrons collide with lattice ions converting electrical energy into heat [1M].

SECTION E - CASE STUDY ANSWER KEY:
Q37: (a) Total Power = 4(20) + 2(80) + 300 = 80 + 160 + 300 = 540 W = 0.54 kW. Daily Energy = (80×8 + 160×10 + 300×5)/1000 = (640 + 1600 + 1500)/1000 = 3.74 kWh [1M].
(b) Bill = 3.74 × 30 × 6.50 = ₹ 729.30 [1M].
(c) Peak Power = 540 W => I = P/V = 540/220 = 2.45 A. Select 5 A fuse rating as 2.45 A < 5 A [2M].

Q38: (a) Concave mirror because it converges parallel sun rays to a sharp focus [1M].
(b) Positioned at the Principal Focus (F) [1M].
(c) f = R/2 = 4.0/2 = 2.0 meters. 1/v = 1/f - 1/u = 1/(-2) - 1/(-8) => v = -2.67 meters, m = -v/u = -0.33 [2M].

Q39: (a) Slope = ΔV / ΔI = Resistance R [1M].
(b) R = 1.5 / 0.3 = 5.0 Ω [1M].
(c) R_Y = R_X × (L_Y/L_X) × (A_X/A_Y) = 5 × 2 × 2 = 20 Ω. Parallel combination: 1/R_eq = 1/5 + 1/20 = 5/20 => R_eq = 4.0 Ω [2M].` : ''}`;
        },

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

${p.chapterWeightageTable ? p.chapterWeightageTable + '\n\n' : ''}PART 1: BLUEPRINT MATRIX TABLE
Generate a markdown table mapping:
| Chapter / Unit | VSA / MCQ (1M) | SA-I (2M) | SA-II (3M) | LA (5M) | Case Study (4M) | Total Marks |
Ensure questions are distributed strictly according to the configured chapter weightages above so that the blueprint total sums exactly to ${p.marks} Marks.

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

${p.includeAnswerKey ? '---ANSWER_KEY_START---\nPART 3: OFFICIAL MARKING SCHEME & ANSWER KEY\nProvide value points, key step markings (0.5M distribution), and final answers for every single question.\n' : ''}

RULES:
- NO DIRECT REPETITION of basic textbook definitions; prioritize application and reasoning.
- Language must be formal, unambiguous, and board-exam ready.`;
        }
    },

    {
        id: "worksheet",
        category: "assessment",
        title: "📄 Competency Worksheet Generator",
        subtitle: "NEP 2020 Aligned Differentiated Worksheet",
        tags: ["Competency", "Worksheet", "NCERT 2026-27", "Bloom's"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 1-2 2v16a2 2 0 0 1 2 2h12a2 2 0 0 1 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
        description: "Generate complete classroom-ready competency worksheets with MCQs, Assertion-Reason, Case Studies, and Differentiated Tiers.",
        
        directContentBuilder: function(p) {
            return `CBSE SESSION 2026-27 | DIFFERENTIATED COMPETENCY WORKSHEET
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
TOPIC / CHAPTER: ${p.chapter}
Max Marks: 40 Marks | Targeted Learner Level: ${p.tier}

================================================================================
LEARNING OUTCOMES & COMPETENCIES (NEP-2020 / NCF-SE):
1. [Understand] Explain core mechanisms and principles underlying ${p.chapter}.
2. [Apply & Analyze] Solve quantitative numericals and graphical scenarios using SI units.
3. [Evaluate & Create] Synthesize real-world applications and troubleshoot common misconceptions.

================================================================================
PART A: CONCEPT QUICK CHECK (5 Marks)
1. Fill in the blank: The primary SI unit for measuring the core quantity in ${p.chapter} is __________.
2. True or False: Energy in an isolated system during ${p.chapter} transformations is always conserved. [_____]
3. Fill in the blank: Increasing system temperature generally __________ the rate of kinetic interaction.
4. True or False: Parallel circuits have different voltages across each parallel branch. [_____]
5. Fill in the blank: The instrument used to measure current / potential in ${p.chapter} is called __________.

================================================================================
PART B: COMPETENCY MCQs & ASSERTION-REASON (10 Marks)
Q1. A student doubles the input variable in ${p.chapter}. The resulting effect on net output is:
(A) Remains unchanged  (B) Doubles  (C) Quadruples  (D) Halves

Q2. Which device is connected in series as a primary safety component in household applications?
(A) Voltmeter  (B) Electric Fuse  (C) Galvanometer  (D) Parallel resistor

Q3. Assertion (A): Pure water is a poor conductor of electricity, whereas acidulated water conducts readily.
Reason (R): Acid provides free mobile H+ ions that facilitate electrical conduction.
(A) Both A and R are true, R is correct explanation.
(B) Both A and R are true, R is NOT correct explanation.
(C) A is true, R is false.
(D) A is false, R is true.

Q4. If two identical resistors of 10 Ω each are connected in parallel, the total net resistance is:
(A) 20 Ω  (B) 10 Ω  (C) 5 Ω  (D) 2.5 Ω

================================================================================
PART C: DIFFERENTIATED LEARNING TASKS (15 Marks)

[TIER 1 - REMEDIAL & FOUNDATIONAL LEVEL]
Q5. State Ohm's law / fundamental principle governing ${p.chapter}. Draw a simple labeled circuit/setup diagram. (3M)
Q6. List 3 everyday real-world applications where principles of ${p.chapter} are utilized. (2M)

[TIER 2 - CORE STANDARD LEVEL]
Q7. A appliance rated 1000 W operates for 5 hours daily. Calculate:
(a) Electrical energy consumed in kWh.
(b) Total cost for 30 days at ₹ 6 per unit. (5M)

[TIER 3 - ADVANCED HOTS & COMPETITIVE LEVEL]
Q8. Derive the formula for effective parallel resistance 1/Rp = 1/R1 + 1/R2. Explain why parallel connection is preferred over series in domestic lighting. (5M)

================================================================================
PART D: CASE STUDY & REAL-WORLD INQUIRY (10 Marks)
Q9. Read the scenario: "During an industrial audit of a solar power station based on ${p.chapter}, engineers recorded a peak efficiency when mirrors were positioned at a focal distance f = R/2."
(a) Why are parabolic/concave surfaces preferred for solar concentrators? (2M)
(b) Calculate the focal length of a solar mirror having a radius of curvature R = 3.6 meters. (3M)
(c) State two safety precautions when working with concentrated thermal radiation. (5M)

${p.includeAnswerKey ? `
---ANSWER_KEY_START---
SOLUTIONS & ANSWER KEY:
Part A: 1. Relevant SI unit | 2. True | 3. Increases | 4. False | 5. Ammeter/Voltmeter
Part B: Q1: (B) | Q2: (B) | Q3: (A) | Q4: (C)
Part C: Q7: (a) E = 1 kW × 5 h = 5 kWh/day. (b) 5 × 30 × 6 = ₹ 900.
Part D: Q9: (b) f = R/2 = 3.6/2 = 1.8 meters.` : ''}`;
        },

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
${p.includeAnswerKey ? '---ANSWER_KEY_START---\n11. DETAILED ANSWER KEY & MARKING SCHEME: Provide full step-by-step solutions, key points, and marking distribution for every question.\n' : ''}
${p.includeRubrics ? '12. ASSESSMENT RUBRIC: Analytic 4-level rubric grid (Needs Improvement, Developing, Proficient, Advanced).\n' : ''}

PEDAGOGICAL DIRECTIVES:
${p.includeNEP ? '✔ Strictly integrate NEP-2020 Competency Based Education (CBE).\n' : ''}
${p.includeBloom ? '✔ Tag every question with Bloom\'s Taxonomy Level [Remember/Understand/Apply/Analyze/Evaluate/Create].\n' : ''}
${p.includeNCERT ? '✔ Map questions to exact NCERT 2026-27 textbook concepts.\n' : ''}
✔ Ensure crisp formatting, ready for immediate printing or digital distribution.`;
        }
    },

    {
        id: "google",
        category: "quizzes",
        title: "📋 Google Form & Online Quiz AI",
        subtitle: "Auto-Graded Quiz with Answer Key & Explanations",
        tags: ["Google Form", "Auto-Grading", "MCQs", "Online Quiz"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
        description: "Generate auto-grading Google Form ready quizzes with descriptions, options, correct answer keys, and pedagogical feedback.",
        
        directContentBuilder: function(p) {
            return `GOOGLE FORMS IMPORT-READY AUTO-GRADED QUIZ
QUIZ TITLE: CBSE ${p.classLevel} ${p.subject} Mastery Quiz - ${p.chapter}
DESCRIPTION: Competency-based self-assessment quiz for Session 2026-27. Attempt all questions.

--------------------------------------------------
Q1. What is the primary SI unit used to measure key quantities in ${p.chapter}?
Question Type: Multiple Choice | Points: 1
Option A: Joule (J) / Volt (V) / Newton (N)
Option B: Watt per hour (W/h)
Option C: Meter per second squared (m/s²)
Option D: Calorie (cal)

--------------------------------------------------
Q2. In ${p.chapter}, if current/input is doubled in a constant resistance system, heat produced (H = I²Rt) increases by:
Question Type: Multiple Choice | Points: 1
Option A: 2 times
Option B: 4 times
Option C: 8 times
Option D: Remains identical

--------------------------------------------------
Q3. Which safety component automatically opens the circuit during a severe current overload?
Question Type: Multiple Choice | Points: 1
Option A: Ammeter
Option B: Electric Fuse / MCB
Option C: Rheostat
Option D: Voltmeter

--------------------------------------------------
Q4. Statement 1: Pure distilled water conducts electricity. Statement 2: Free mobile ions are required for conduction.
Question Type: Multiple Choice | Points: 1
Option A: Both statements are true
Option B: Statement 1 is false, Statement 2 is true
Option C: Statement 1 is true, Statement 2 is false
Option D: Both statements are false

--------------------------------------------------
Q5. Calculate equivalent resistance when two 12 Ω resistors are connected in parallel:
Question Type: Multiple Choice | Points: 1
Option A: 24 Ω
Option B: 12 Ω
Option C: 6 Ω
Option D: 3 Ω

---ANSWER_KEY_START---
AUTO-GRADED ANSWER KEY & PEDAGOGICAL FEEDBACK GUIDE:
--------------------------------------------------
Q1. ✔ Correct Answer: Option A
💡 Feedback: Option A is the standard SI metric unit recognized under CBSE/NCERT guidelines.

Q2. ✔ Correct Answer: Option B
💡 Feedback: According to Joule's law of heating, heat is directly proportional to the square of current (H ∝ I²).

Q3. ✔ Correct Answer: Option B
💡 Feedback: Fuses and MCBs melt or trip to break the live circuit when current exceeds maximum safety ratings.

Q4. ✔ Correct Answer: Option B
💡 Feedback: Pure water lacks free ions and is an insulator; adding acid creates mobile ions for conduction.

Q5. ✔ Correct Answer: Option C
💡 Feedback: 1/Rp = 1/12 + 1/12 = 2/12 = 1/6 => Rp = 6 Ω.`;
        },

        builder: function(p) {
            return `Act as a Google Forms AI Quiz Architect and E-Learning Content Designer.

Create an AUTO-GRADED ONLINE QUIZ ready for instant import into Google Forms or Kahoot/Quizizz.

TARGET INFORMATION:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Chapter / Topic: ${p.chapter}
• Number of Questions: 15-20 Questions

PART 1: QUESTION PAPER / STUDENT QUIZ ITEMS
• Create 15-20 Multiple Choice Questions (Options A, B, C, D) with Points distribution.
• Group into Recall, Application, Diagram reasoning, and HOTS.

---ANSWER_KEY_START---
PART 2: ANSWER KEY & PEDAGOGICAL FEEDBACK
• Provide correct answer choice (Option A/B/C/D) for each question.
• Include detailed feedback explanation for each question explaining why distractor options are incorrect.`;
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
        
        directContentBuilder: function(p) {
            return `CLASSROOM MASTER TEACHING PACK | SENIOR SECONDARY PHYSICS
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
CHAPTER / TOPIC: ${p.chapter}

================================================================================
1. CORE DERIVATION & MATHEMATICAL PROOF TASK
Topic: Derivation of fundamental relation in ${p.chapter}

Assumptions to state:
- System is isolated from external non-conservative dissipative forces.
- Media involved are homogeneous, isotropic, and linear.

Mathematical proof steps to demonstrate:
1. Consider differential element dx subjected to field E / potential V.
2. Formulate work done expression dW = F · dx = (q E) dx.
3. Integrate from initial state r1 to final state r2.

================================================================================
2. TIERED NUMERICAL PROBLEM BANK

[TIER 1 - CBSE BOARD STANDARD (3 Marks)]
Q1. A potential difference of 100 V is applied across a conductor of length 0.5 m. If drift velocity of free electrons is 2.5 × 10⁻⁴ m/s, calculate electron mobility.

[TIER 2 - EXEMPLAR & CONCEPTUAL (4 Marks)]
Q2. Two point charges q1 = +3 μC and q2 = -3 μC are located 20 cm apart in vacuum.
(a) Find electric field at midpoint O.
(b) If a test charge q_test = -1.5 × 10⁻⁹ C is placed at O, find net force experienced.

[TIER 3 - JEE MAIN / NEET CHALLENGE (5 Marks)]
Q3. In a Wheatstone bridge, three arms have resistances 10 Ω, 20 Ω, and 30 Ω. Calculate resistance to connect in parallel with 30 Ω resistor to balance bridge.

================================================================================
3. VIVA-VOCE QUESTION BANK FOR PRACTICALS
Q1. What is the physical significance of drift velocity?
Q2. Why is a potentiometer preferred over a voltmeter for measuring EMF?

---ANSWER_KEY_START---
PHYSICS XI-XII STEP-BY-STEP SOLUTIONS & VIVA MODEL ANSWERS:
================================================================================
1. DERIVATION SOLUTION:
Result: Output parameter = K (A / d) or V = I R as applicable. W = ∫ q E dx = q (V2 - V1) = q ΔV.

2. NUMERICAL SOLUTIONS:
Q1 Solution: Mobility μ = v_d / E = v_d / (V/L) = (2.5 × 10⁻⁴) / (100 / 0.5) = 1.25 × 10⁻⁶ m²/(V·s) [3M].
Q2 Solution: (a) E_net = 2 × (k q / r²) = 2 × (9×10⁹ × 3×10⁻⁶ / (0.1)²) = 5.4 × 10⁶ N/C towards q2 [2M]. (b) Force F = q_test × E_net = (1.5×10⁻⁹) × (5.4×10⁶) = 8.1 × 10⁻³ N [2M].
Q3 Solution: For balance, R1/R2 = R3_eff/30 => 10/20 = R3_eff / 30 => R3_eff = 15 Ω. 1/15 = 1/30 + 1/R_parallel => R_parallel = 30 Ω [5M].

3. VIVA VOCE MODEL ANSWERS:
Q1 Ans: Average velocity attained by free electrons in a conductor due to applied electric field.
Q2 Ans: Potentiometer draws zero current at null deflection point, measuring true EMF without terminal voltage drop.`;
        },

        builder: function(p) {
            return `You are India's Premier CBSE Physics Author & Senior Educator for Classes XI & XII.

Generate a COMPREHENSIVE CLASSROOM MASTER TEACHING PACK for Class XI/XII Physics.

TOPIC SPECIFICATION:
• Target Class: ${p.classLevel}
• Subject: ${p.subject} (Physics Focus)
• Chapter / Module: ${p.chapter}
• Level: ${p.tier}

PART 1: LESSON PLAN, DERIVATIONS & QUESTION BANK
1. Lesson Plan & Concept Map outline.
2. NCERT Step-by-step Derivation tasks.
3. Tiered Numerical Problem Bank (Tier 1 Board, Tier 2 Exemplar, Tier 3 JEE/NEET).
4. Viva-Voce Questions for laboratory practice.

---ANSWER_KEY_START---
PART 2: DETAILED SOLUTIONS & VIVA MODEL ANSWERS
1. Step-by-step mathematical proofs and derivations.
2. Complete numerical solutions with SI units and step marks.
3. Viva-Voce model answers.`;
        }
    },

    {
        id: "competency",
        category: "assessment",
        title: "🎯 Competency & HOTS Question Bank",
        subtitle: "100% CBSE 2026-27 Competency Aligned",
        tags: ["Competency", "HOTS", "PYQ", "Case Study"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        description: "Generate a rich set of competency-focused questions (Assertion-Reason, Source-Based, Data Analysis) aligned with CBSE sample papers.",
        
        directContentBuilder: function(p) {
            return `HIGH-YIELD COMPETENCY & HOTS QUESTION BANK
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TOPIC: ${p.chapter}

================================================================================
1. DATA & GRAPHICAL ANALYSIS QUESTIONS
Q1. A student plots V versus I graph for two metallic wires A and B made of same material and same length, but different thicknesses. Wire A has steeper slope than Wire B.
(a) Which wire has higher resistance? Explain using slope definition.
(b) Which wire is thicker? Justify using R = ρ L / A.

================================================================================
2. REAL-WORLD CASE-BASED SCENARIO
Q2. Scenario: "An electric kettle rated 2.2 kW operates on 220 V mains supply. The user connects it using a thin two-core flex wire without earth connection."
(a) Calculate current drawn by the kettle.
(b) Explain two electrical hazards present in this setup and propose safety corrections.

---ANSWER_KEY_START---
COMPETENCY QUESTION BANK - STEP-BY-STEP SOLUTIONS & MARKING SCHEME:
================================================================================
Q1 Solution:
(a) Slope = V/I = Resistance R. Wire A has steeper slope, so Wire A has higher resistance [1.5M].
(b) Resistance is inversely proportional to cross-sectional area (R ∝ 1/A). Wire B has lower resistance, so Wire B is thicker [1.5M].

Q2 Solution:
(a) Current I = P / V = 2200 W / 220 V = 10 A [1.5M].
(b) Hazards: 10 A current in thin flex causes severe overheating (I²Rt hazard). Absence of earth wire poses electrical shock risk if metal casing gets energized. Correction: Use 15 A 3-pin cable with proper earthing [2.5M].`;
        },

        builder: function(p) {
            return `Generate a HIGH-YIELD COMPETENCY-BASED QUESTION BANK according to CBSE 2026-27 Sample Paper Specifications.

TARGET SPECS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Chapter: ${p.chapter}

PART 1: COMPETENCY QUESTION BANK ITEMS
1. Graphical & Data Analysis Questions.
2. Case-Study & Real-world Scenarios.
3. Assertion-Reasoning Questions.
4. NCERT Activity-based Inquiry Questions.

---ANSWER_KEY_START---
PART 2: OFFICIAL MARKING SCHEME & ANSWER KEY
Provide complete step-by-step marking schemes with explicit references to NCERT concepts and value points.`;
        }
    },

    {
        id: "practicals",
        category: "practicals",
        title: "🔬 Practical Lab & Viva Assistant",
        subtitle: "CBSE Science Lab Manual & Viva-Voce Generator",
        tags: ["Lab", "Practicals", "Viva Voce", "Rubrics"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A1 1 0 0 0 5.607 22h12.786a1 1 0 0 0 .886-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="9" y1="11" x2="15" y2="11"/></svg>`,
        description: "Create complete practical manual guides: Aim, Theory, Diagrams, Observation Tables, Precautions, and Viva Voce questions.",
        
        directContentBuilder: function(p) {
            return `CBSE LABORATORY PRACTICAL MANUAL & VIVA-VOCE GUIDE
CLASS: ${p.classLevel} | SUBJECT: ${p.subject}
EXPERIMENT / ACTIVITY: ${p.chapter}

1. EXPERIMENT TITLE & OBJECTIVE (AIM):
   To determine the relationship between potential difference and current, and find the resistance per unit length of a wire.

2. APPARATUS REQUIRED:
   Resistance wire, Ammeter (0-3A), Voltmeter (0-5V), Rheostat, Plug Key, Battery Eliminator (0-6V), Connecting wires.

3. UNDERLYING PRINCIPLE & FORMULA:
   Ohm's Law: V = I R => R = V / I.

4. SCHEMATIC CIRCUIT DIAGRAM:
   [ Battery (+) ] ---> [ Plug Key ] ---> [ Rheostat ] ---> [ Ammeter ] ---> [ Wire X ] ---> [ (-) Battery ]
                                                                 |            |
                                                                 +--[Voltmeter]--+

5. TABULAR OBSERVATION RECORD TEMPLATE:
   | Trial No. | Voltmeter Reading V (Volts) | Ammeter Reading I (Amps) | Resistance R = V/I (Ω) |
   |---|---|---|---|
   | 1 | _____ | _____ | _____ |
   | 2 | _____ | _____ | _____ |
   | 3 | _____ | _____ | _____ |

6. VIVA VOCE QUESTIONS:
   Q1. Why should the key be plugged only while taking observations?
   Q2. What is an ideal voltmeter resistance?

---ANSWER_KEY_START---
EXPECTED PRACTICAL RESULTS, SAMPLE OBSERVATIONS & VIVA MODEL ANSWERS:
================================================================================
SAMPLE OBSERVATION DATA:
| Trial No. | Voltmeter V (V) | Ammeter I (A) | Resistance R = V/I (Ω) |
| 1 | 1.0 | 0.2 | 5.0 |
| 2 | 2.0 | 0.4 | 5.0 |
| 3 | 3.0 | 0.6 | 5.0 |
Mean Resistance = 5.0 Ω.

VIVA VOCE MODEL ANSWERS:
Q1 Ans: Continuous current heats the resistance wire, causing resistance to increase and violating constant temperature condition.
Q2 Ans: An ideal voltmeter has infinite resistance so that it draws zero current from the main circuit branch.`;
        },

        builder: function(p) {
            return `Act as a CBSE Laboratory Examiner & Science Practical Incharge.

Generate a COMPLETE LABORATORY PRACTICAL GUIDE & VIVA-VOCE PACK.

DETAILS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Experiment / Activity: ${p.chapter}

PART 1: LAB MANUAL & VIVA QUESTIONS
1. Aim, Apparatus, Principle, Circuit Diagram, Procedure, Observation Table schema.
2. Precautions & Viva-Voce Questions (10 Questions).

---ANSWER_KEY_START---
PART 2: SAMPLE DATA, CALCULATIONS & VIVA MODEL ANSWERS
1. Completed sample observation data and mean calculation.
2. Complete model answers for all 10 Viva-Voce questions.`;
        }
    },

    {
        id: "feedback",
        category: "feedback",
        title: "📊 Student & Parent Feedback Form",
        subtitle: "Diagnostic Feedback & Teaching Evaluation",
        tags: ["Feedback", "Likert Scale", "Diagnosis", "KVS Standard"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        description: "Generate professional feedback forms for students and parents with Likert scales.",
        
        directContentBuilder: function(p) {
            return `KENDRIYA VIDYALAYA SANGATHAN | DIAGNOSTIC FEEDBACK FORM
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | MODULE: ${p.chapter}

Rating Scale: 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree

1. STUDENT SELF-ASSESSMENT GRID:
   [ ] I understand the core concepts of ${p.chapter}. (1 2 3 4 5)
   [ ] I can solve numerical problems independently. (1 2 3 4 5)
   [ ] Lab practical demonstrations helped clarify concepts. (1 2 3 4 5)
   [ ] Smart classroom ICT tools were effectively used. (1 2 3 4 5)

2. OPEN FEEDBACK:
   - What topic in ${p.chapter} requires additional revision? ____________________
   - Suggestions for improvement: ____________________

---ANSWER_KEY_START---
TEACHER DIAGNOSTIC EVALUATION & ACTIONABLE FEEDBACK GUIDE:
1. Scoring Interpretation:
   - Score < 3 in Concept Clarity indicates need for remedial teaching modules.
   - Score < 3 in Numericals indicates need for step-by-step formula practice sheets.
2. Follow-up Action Plan Template for Departmental Record.`;
        },

        builder: function(p) {
            return `Generate a PROFESSIONAL FEEDBACK & DIAGNOSTIC EVALUATION FORM for Kendriya Vidyalaya / CBSE Science Department.

TARGET DETAILS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Module / Term: ${p.chapter}

PART 1: STUDENT & PARENT FEEDBACK FORM
1. Student Self-Assessment Grid (5-point Likert Scale).
2. Teaching Methodology Evaluation.
3. Open-ended Reflection Questions.

---ANSWER_KEY_START---
PART 2: DIAGNOSTIC ANALYSIS & ACTION PLAN FOR TEACHERS
1. Evaluation benchmarks & rubric thresholds.
2. Action plan recommendations for student remediation.`;
        }
    },

    {
        id: "rubric",
        category: "assessment",
        title: "📜 Assessment Rubrics Grid",
        subtitle: "Analytic 4-Level Evaluation Criteria",
        tags: ["Rubrics", "Assessment", "NEP 2020", "Evaluation"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
        description: "Create analytic rubric grids for science projects, lab reports, and subjective answers.",
        
        directContentBuilder: function(p) {
            return `CBSE ANALYTIC ASSESSMENT RUBRIC GRID
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TASK: ${p.chapter}

| Criteria | Level 1: Beginning (1-2 pts) | Level 2: Developing (3-4 pts) | Level 3: Proficient (5-6 pts) | Level 4: Exemplary (7-8 pts) |
|---|---|---|---|---|
| Conceptual Accuracy | Shows major misconceptions in ${p.chapter}. | Explains basic definitions; struggles with application. | Accurately explains principles with minor gaps. | Mastered concepts; applies flawlessly to novel contexts. |
| Problem Solving & Numericals | Cannot identify formulas or SI units. | Identifies formula but makes calculation errors. | Solves standard numericals with correct SI units. | Solves multi-step HOTS problems with full steps. |
| Diagrammatic Skill | Omits diagrams or draws inaccurate shapes. | Diagram lacks proper labels or arrow directions. | Neat labeled diagram with minor alignment flaws. | Perfect technical drawing with clear labels & scale. |

---ANSWER_KEY_START---
TEACHER SCORING GUIDELINES & GRADE WEIGHTAGE DISTRIBUTION:
1. Total Points Calculation: Max Score = 32 Points.
2. Grade Translation:
   - 28-32 Points: Grade A+ (Exemplary)
   - 20-27 Points: Grade A (Proficient)
   - 12-19 Points: Grade B (Developing - Needs Practice)
   - Below 12 Points: Grade C (Remedial Support Required)`;
        },

        builder: function(p) {
            return `Generate a DETAILED ANALYTIC ASSESSMENT RUBRIC GRID for Science Evaluation.

SPECS:
• Class: ${p.classLevel}
• Subject: ${p.subject}
• Task / Project Type: ${p.chapter}

PART 1: ANALYTIC RUBRIC MATRIX
| Criteria | Level 1: Beginning (1-2 pts) | Level 2: Developing (3-4 pts) | Level 3: Proficient (5-6 pts) | Level 4: Exemplary (7-8 pts) |

---ANSWER_KEY_START---
PART 2: TEACHER GRADING INSTRUCTIONS & SCORE WEIGHTAGE
1. Scoring guidelines & grade conversion matrix.
2. Qualitative feedback comment templates for report cards.`;
        }
    },

    {
        id: "lessonplan",
        category: "physics",
        title: "📘 NEP 2020 5E Lesson Plan",
        subtitle: "Engage, Explore, Explain, Elaborate, Evaluate",
        tags: ["Lesson Plan", "NEP 2020", "5E Model", "Pedagogy"],
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Generate a complete 5E model lesson plan (Engage, Explore, Explain, Elaborate, Evaluate) with learning objectives.",
        
        directContentBuilder: function(p) {
            return `NEP-2020 COMPLIANT 5E MODEL LESSON PLAN
CLASS: ${p.classLevel} | SUBJECT: ${p.subject} | TOPIC: ${p.chapter}
Duration: 40 Mins (1 Period) | Pedagogical Framework: NCF-SE 2023

1. LEARNING OBJECTIVES:
   - SLO 1: Students will explain core principles of ${p.chapter}.
   - SLO 2: Students will apply formulas to solve quantitative problems.

2. 5E PHASES EXECUTION:
   • ENGAGE (5 Mins): Teacher shows real-life demo/video clip. Asks: "What happens when...?"
   • EXPLORE (10 Mins): Students work in groups of 4 with lab equipment to record observation data.
   • EXPLAIN (10 Mins): Teacher facilitates discussion, writes core formula V = IR on board.
   • ELABORATE (10 Mins): Students solve 1 HOTS application problem connecting concept to daily life.
   • EVALUATE (5 Mins): 3-minute Exit Ticket test with 2 MCQs.

---ANSWER_KEY_START---
ASSESSMENT EXIT TICKET ANSWER KEY & EVALUATION RUBRIC:
1. Exit Ticket Question 1 Key: Option B (Direct linear relation).
2. Exit Ticket Question 2 Key: Option A (Energy conservation).
3. Differentiated extension task solution key.`;
        },

        builder: function(p) {
            return `You are a CBSE Master Pedagogy Specialist and KVS Principal Evaluator.

Create a FULL NEP-2020 COMPLIANT 5E MODEL LESSON PLAN.

PART 1: 5E MODEL LESSON PLAN DOCUMENT
1. General Information & Learning Objectives (GLO & SLO).
2. 5E Phases: Engage, Explore, Explain, Elaborate, Evaluate.
3. Differentiated Instruction Strategy & Home Assignment.

---ANSWER_KEY_START---
PART 2: EXIT TICKET ANSWER KEY & EVALUATION GUIDELINES
1. Answer key for evaluation phase wrap-up test.
2. Homework evaluation criteria and model solution keys.`;
        }
    }
];

// 3. Application State & Storage
let activeCategory = "all";
let selectedTemplateId = "qp";
let activeTagFilter = null;
let activeOutputTab = "qp"; // "qp" | "ak" | "combined"
let savedTemplates = [];

// Multi-Chapter Selection & Chapter-Wise Weightage State
let selectedChaptersState = {}; // Key: chapter string, Value: allocated marks (number)
let weightageUnitState = "marks"; // "marks" | "percent"

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

    // Output Mode change listener
    const outputModeEl = document.getElementById("paramOutputMode");
    if (outputModeEl) {
        outputModeEl.addEventListener("change", updatePromptPreview);
    }

    // Class & Subject changes with auto sync
    document.getElementById("paramClass").addEventListener("change", () => {
        populateChapters();
        updatePromptPreview();
    });

    document.getElementById("paramSubject").addEventListener("change", () => {
        populateChapters();
        updatePromptPreview();
    });

    // Parameter input listeners including Total Marks
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

    // Weightage Unit Radio Toggle (Marks vs Percent)
    document.querySelectorAll('input[name="weightageUnit"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            weightageUnitState = e.target.value;
            renderWeightageControls();
        });
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

// Populate NCERT Chapter Selector dynamically & build multi-chapter checklist
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
    const container = document.getElementById("chapterChecklistContainer");
    if (chapterSelect) chapterSelect.innerHTML = "";
    if (container) container.innerHTML = "";

    let chapters = [];
    if (cbseChapterDatabase[classVal] && cbseChapterDatabase[classVal][subjectVal]) {
        chapters = cbseChapterDatabase[classVal][subjectVal];
    } else if (cbseChapterDatabase[classVal] && cbseChapterDatabase[classVal]["General Science"]) {
        chapters = cbseChapterDatabase[classVal]["General Science"];
    } else {
        chapters = ["Chapter 1: Core Concepts & Principles"];
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

    if (badge) {
        badge.textContent = `${selectedKeys.length} Selected`;
    }

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
        chapterSummary = "General Science (All Chapters)";
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
        subject: document.getElementById("paramSubject").value,
        chapter: chapterSummary,
        selectedChapters: selectedKeys.map(k => ({
            name: k,
            marks: selectedChaptersState[k] || 0,
            percent: totalMarks > 0 ? (((selectedChaptersState[k] || 0) / totalMarks) * 100).toFixed(1) : "0"
        })),
        chapterWeightageTable: chapterWeightageTable,
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

    document.getElementById("activePromptTitle").textContent = tpl.title;
    document.getElementById("activePromptSubtitle").textContent = `Configured for ${params.classLevel} ${params.subject} • ${params.chapter}`;
    
    const tagPrefix = params.outputMode === "direct" ? "📄 Direct Paper" : "🤖 AI Meta-Prompt";
    const tagView = activeOutputTab === "qp" ? "Question Paper" : activeOutputTab === "ak" ? "Answer Key" : "Combined Set";
    document.getElementById("activePromptTag").textContent = `${tagPrefix} (${tagView})`;

    const promptBox = document.getElementById("promptBox");
    if (promptBox) {
        promptBox.value = outputText;
    }

    // Update word count
    const words = outputText.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById("wordCountBadge").textContent = `${words} words`;
}

// Copy Prompt to Clipboard
function copyPrompt() {
    const promptBox = document.getElementById("promptBox");
    const copyBtnText = document.getElementById("copyBtnText");
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
                    <p class="meta"><strong>Class:</strong> ${params.classLevel} | <strong>Subject:</strong> ${params.subject} | <strong>Syllabus Focus:</strong> ${params.chapter}</p>
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
