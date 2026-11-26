import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'character-stories',
    number: '01',
    title: 'CHARACTER STORIES',
    category: '2D ANIMATION',
    categoryDisplay: '2D Character Animation',
    year: '2024',
    client: 'Studio Prototype / Concept Series',
    role: 'Lead 2D Animator & Rig Designer',
    shortDesc: 'Handcrafted character rigging with expressive micro-acting and weight-driven locomotion.',
    duration: '00:34',
    fps: 24,
    tools: ['After Effects', 'DUIK Bassel', 'Illustrator', 'Photoshop'],
    // Curated high quality cinematic motion loop
    thumbnail: '/images/video-thumbnails/project-01.jpg',
    videoUrl: '/videos/1.mp4',
    aspectRatio: 'tall',
    overview: 'An exploratory character performance showcase developed to test complex limb overlapping, secondary physics, and emotional face gestures without heavy voiceover support.',
    challenge: 'Achieving a natural sense of weight and physical drag in digital puppet rigs without relying on standard rigid interpolation curves.',
    concept: 'Rooted in the 12 classical principles of animation, translating squash, stretch, and anticipation into modular Adobe After Effects comps.',
    process: [
      'Anatomical line breakdown and layer segmentation in Adobe Illustrator',
      'Custom inverse kinematic rigging and facial joystick controllers',
      'Annotated timing charts at 24fps with hand-keyed anticipation arcs',
      'Secondary momentum passes on hair, fabric, and character props'
    ],
    finalResult: 'Delivered an energetic 34-second commercial character reel featuring seamless loops and high visual appeal across broadcast and mobile formats.',
    stats: [
      { label: 'Keyframes Keyed', value: '1,420+' },
      { label: 'Framerate', value: '24 FPS' },
      { label: 'Comps Layered', value: '38 Passes' }
    ],
    colorPalette: ['#1A1829', '#E06D53', '#F9C846', '#2A9D8F'],
    tags: ['Character Rigging', 'Squash & Stretch', 'Facial Acting', 'DUIK']
  },
  {
    id: 'brand-in-motion',
    number: '02',
    title: 'BRAND IN MOTION',
    category: 'LOGO ANIMATION',
    categoryDisplay: 'Logo & Brand Identity Motion',
    year: '2023',
    client: 'Kinetic Identity Lab',
    role: 'Motion Designer & Compositor',
    shortDesc: 'Precision geometry unfolding into an authoritative, cinematic brand reveal.',
    duration: '00:15',
    fps: 60,
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    thumbnail: '/images/video-thumbnails/project-02.jpg',
    videoUrl: '/videos/2.mp4',
    aspectRatio: 'tall',
    overview: 'A bespoke brand identity ident engineered for tech-forward enterprises. Focuses on rhythmic tension, vector slicing, and tactile momentum.',
    challenge: 'Balancing minimal corporate restraint with dynamic motion choreography that commands immediate visual focus within 3 seconds.',
    concept: 'Monolithic geometric shapes collide, shear, and resolve into a unified emblem, inspired by architectural brutalism and precision Swiss grids.',
    process: [
      'Mathematical vector deconstruction along isometric grids',
      'Value graphing with custom exponential easing curves (tighter deceleration)',
      'Sub-frame motion blur passes and optical flare integration',
      'Sound design synchronization with tactile mechanical foley'
    ],
    finalResult: 'A 60fps modular ident toolkit featuring horizontal, vertical, and square bumpers with alpha transparency channels.',
    stats: [
      { label: 'Deliverable Formats', value: '16:9 / 9:16 / 1:1' },
      { label: 'Render Depth', value: '32-bit Float' },
      { label: 'Audience Recall', value: 'Instant' }
    ],
    colorPalette: ['#0B0B0B', '#C8FF45', '#F4F1EB', '#333333'],
    tags: ['Logo Reveal', 'Kinetic Identity', '60 FPS', 'Vector Motion']
  },
  {
    id: 'words-that-move',
    number: '03',
    title: 'WORDS THAT MOVE',
    category: 'TYPOGRAPHY',
    categoryDisplay: 'Kinetic Typography & Editorial Motion',
    year: '2024',
    client: 'Editorial Voice Experiment',
    role: 'Art Director & Kinetic Typographer',
    shortDesc: 'Typographic sequences where letterforms breathe, collide, and pace the spoken narrative.',
    duration: '00:30',
    fps: 24,
    tools: ['After Effects', 'Type Tooling', 'Photoshop'],
    thumbnail: '/images/video-thumbnails/project-03.jpg',
    videoUrl: '/videos/3.mp4',
    aspectRatio: 'tall',
    overview: 'An editorial typographic film exploring semantic hierarchy, variable font axes, and mechanical kinetic rhythms synchronized to tempo.',
    challenge: 'Preserving instant legibility for rapid-fire sentences while injecting high artistic expression and spatial dimensionality.',
    concept: 'Words as architectural blocks: scaling, shearing, masking, and stretching to reflect the cadence and gravity of each spoken phrase.',
    process: [
      'Audio waveform alignment and syllable-by-syllable cue plotting',
      'Variable font weight interpolation across custom time curves',
      'Kinetic displacement maps and subtle chromatic aberration',
      'Grain application simulating archival 16mm celluloid exposure'
    ],
    finalResult: 'A viral kinetic type piece celebrated for exceptional pacing, crisp kerning preservation, and zero motion clutter.',
    stats: [
      { label: 'Words Choreographed', value: '184 Words' },
      { label: 'Pacing Accuracy', value: 'Exact Frame' },
      { label: 'Letter Spacing', value: 'Bespoke Curving' }
    ],
    colorPalette: ['#0E0E10', '#EAE6DF', '#C8FF45', '#7A7A7A'],
    tags: ['Kinetic Type', 'Editorial Motion', 'Audio Sync', 'Swiss Style']
  },
  {
    id: 'explain-it-better',
    number: '04',
    title: 'EXPLAIN IT BETTER',
    category: 'EXPLAINER',
    categoryDisplay: 'Whiteboard & Technical Explainer',
    year: '2023',
    client: 'FinTech Platform Concept',
    role: 'Visual Scriptwriter & Animator',
    shortDesc: 'Converting complex algorithmic flows into digestible visual metaphors and clean pacing.',
    duration: '01:08',
    fps: 30,
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    thumbnail: '/images/video-thumbnails/project-04.jpg',
    videoUrl: '/videos/4.mp4',
    aspectRatio: 'wide',
    overview: 'A high-impact product narrative designed to distill decentralized infrastructure and multi-tier transaction security into intuitive visuals.',
    challenge: 'Preventing viewer cognitive fatigue during abstract conceptual explanations without resorting to trite clip-art stereotypes.',
    concept: 'Fluid continuous camera transitions connecting isometric node diagrams, human customer journeys, and live data telemetry.',
    process: [
      'Script breakdown into high-concept storyboard thumbnails',
      'Continuous 2.5D camera rigging in After Effects avoiding hard cuts',
      'Modular vector asset libraries constructed in Adobe Illustrator',
      'Visual emphasis highlights guiding viewer eye-tracking'
    ],
    finalResult: 'Helped stakeholders visualize multi-stage user onboarding with a 42% reduction in perceived technical complexity.',
    stats: [
      { label: 'Scene Transitions', value: '14 Continuous' },
      { label: 'Cut Count', value: '0 Hard Cuts' },
      { label: 'Clarity Rating', value: '98%' }
    ],
    colorPalette: ['#121316', '#2EC4B6', '#E71D36', '#FF9F1C'],
    tags: ['Explainer Video', 'Data Visualization', 'Isometric 2.5D', 'Storyboarding']
  },
  {
    id: 'frame-by-frame',
    number: '05',
    title: 'FRAME BY FRAME',
    category: '2D ANIMATION',
    categoryDisplay: 'Traditional Cartoon & FX Animation',
    year: '2024',
    client: 'Indie Game Narrative Sequence',
    role: 'Traditional Animator & Colorist',
    shortDesc: 'Hand-drawn organic fluid splashes, smoke plumes, and dynamic physical impacts.',
    duration: '00:20',
    fps: 12,
    tools: ['Photoshop (Timeline)', 'After Effects', 'Premiere Pro'],
    thumbnail: '/images/video-thumbnails/project-05.jpg',
    videoUrl: '/videos/5.mp4',
    aspectRatio: 'wide',
    overview: 'An expressive study in traditional 2D hand-drawn effects (sakuga-style smoke, electricity arcs, and liquid morphing) animated straight-ahead and pose-to-pose on 2s.',
    challenge: 'Achieving genuine volume preservation and organic fluidity without computer tweening stiffness.',
    concept: 'Channeling the dynamic energy of golden age animation with high-contrast silhouette design and punchy frame-by-frame smears.',
    process: [
      'Rough pencil gesture passes establishing key trajectory paths',
      'Clean line tracing with deliberate line-weight variation',
      'Frame-by-frame solid color fills with dynamic highlight rimming',
      'Composite glow, paper grain overlay, and film dust integration'
    ],
    finalResult: 'A beloved 12fps stylized action sequence showcasing pure animation craft and tactile energy.',
    stats: [
      { label: 'Individual Frames', value: '300+ Drawings' },
      { label: 'Cadence', value: 'Animated on 2s' },
      { label: 'Craft Style', value: 'Hand-Drawn' }
    ],
    colorPalette: ['#0A0A0C', '#FF4365', '#00D9C0', '#F4F1EB'],
    tags: ['Frame-by-Frame', 'Cartoon Animation', 'Sakuga FX', 'Pose-to-Pose']
  },
  {
    id: 'visual-experiments',
    number: '06',
    title: 'VISUAL EXPERIMENTS',
    category: 'TYPOGRAPHY',
    categoryDisplay: 'Experimental Motion Design & Compositing',
    year: '2024',
    client: 'Personal Research / Lab Work',
    role: 'Motion Artist',
    shortDesc: 'Abstract geometry, audio spectrum distortions, and multi-pass compositor testing.',
    duration: '00:35',
    fps: 30,
    tools: ['After Effects', 'Illustrator', 'Photoshop'],
    thumbnail: '/images/video-thumbnails/project-06.jpg',
    videoUrl: '/videos/6.mp4',
    aspectRatio: 'wide',
    overview: 'A creative sandbox dissecting optical illusions, moiré patterns, recursive loop mechanics, and glitch aesthetics for progressive brand experiences.',
    challenge: 'Breaking conventional design boundaries while maintaining aesthetic polish, visual cohesion, and reproducible project templates.',
    concept: 'Treating the digital composition canvas as a cathode ray tube laboratory with signal decay, scanlines, and tactile tactile response.',
    process: [
      'Algorithmic shape instancing and chromatic channel shifting',
      'Mathematical time expressions driving sinusoidal offset values',
      'Multi-pass compositing combining analog texture scans with vector assets',
      'Final mastering for ultra-widescreen projections and installations'
    ],
    finalResult: 'Yielded reusable expression rigs and transition presets integrated into daily commercial production.',
    stats: [
      { label: 'Custom Presets', value: '18 Assets' },
      { label: 'Color Space', value: 'Rec.709' },
      { label: 'Style', value: 'Avant-Garde' }
    ],
    colorPalette: ['#0F0F12', '#C8FF45', '#9B51E0', '#EEEEEE'],
    tags: ['Experimental', 'Visual Effects', 'Expressions', 'Compositing']
  }
];
