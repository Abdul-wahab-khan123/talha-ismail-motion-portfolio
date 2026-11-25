import { ServiceItem, ProcessStep } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: '2d-animation',
    number: '01',
    title: '2D ANIMATION',
    tagline: 'Character acting, organic movement, and frame-by-frame soul.',
    description: 'Expressive character animation, cartoon animation and frame-by-frame storytelling. Bringing characters and illustrative assets to life with natural weight, physical drag, and emotional depth.',
    deliverables: ['Custom Character Rigs', 'Walk Cycles & Action Poses', 'Frame-by-Frame FX', 'Annotated Animatics'],
    technique: 'Classical 12 Principles + DUIK Inverse Kinematics',
    metric: '24 FPS Broadcast Standard'
  },
  {
    id: 'logo-animation',
    number: '02',
    title: 'LOGO ANIMATION',
    tagline: 'Precision identity in motion for modern brands.',
    description: 'Premium logo reveals and animated brand identities. We craft bespoke easing curves and layered precomps to achieve cinematic polish and instantaneous brand recognition.',
    deliverables: ['Broadcast Ident Packs', 'Transparent Alpha Web Video', 'Social Media Idents', 'Animated Brand Guidelines'],
    technique: 'Mathematical Vector Geometry + Custom Deceleration Curves',
    metric: '60 FPS Ultra-Smooth'
  },
  {
    id: 'kinetic-typography',
    number: '03',
    title: 'KINETIC TYPOGRAPHY',
    tagline: 'Words that command the screen and rhythmically breathe.',
    description: 'Typography-driven motion, animated titles and impactful text sequences. Making every word count with Swiss design discipline, micro-timing, and audio-reactive pacing.',
    deliverables: ['Commercial Title Sequences', 'Lyric & Speech Synchronizations', 'Event Screen Graphics', 'Manifesto Videos'],
    technique: 'Variable Font Interpolation + Audio Frequency Snapping',
    metric: 'Sub-Frame Word Accuracy'
  },
  {
    id: 'explainer-videos',
    number: '04',
    title: 'EXPLAINER VIDEOS',
    tagline: 'Unraveling complex tech and business ideas with visual clarity.',
    description: 'Whiteboard animation and visual storytelling that simplifies complex concepts. Transforming intricate products into memorable, persuasive visual narratives that convert viewers.',
    deliverables: ['SaaS Product Overviews', 'Process Flow Animations', 'Whiteboard Metaphors', 'Isometric 2.5D Scenes'],
    technique: 'Continuous Camera Rigging + Narrative Metaphor Design',
    metric: 'Zero Cognitive Overload'
  },
  {
    id: 'storyboarding',
    number: '05',
    title: 'STORYBOARDING',
    tagline: 'Directing the visual rhythm before a single keyframe is set.',
    description: 'Visual scripting, scene planning, camera direction and animatics. Laying the bulletproof foundation for timing, shot composition, and visual hooks to eliminate costly production revisions.',
    deliverables: ['Annotated Shot Boards', 'Camera Pacing Animatics', 'Style Frames & Color Scripts', 'Director Notes'],
    technique: 'Visual Scripting + Dynamic Editorial Timing',
    metric: 'Revision-Proof Architecture'
  },
  {
    id: 'motion-design',
    number: '06',
    title: 'MOTION DESIGN',
    tagline: 'Atmospheric transitions, visual effects, and graphic polish.',
    description: 'Creative compositions, seamless transitions and visual effects. Enhancing footage and UI with motion graphics that tie entire digital and broadcast campaigns together seamlessly.',
    deliverables: ['Commercial Bumpers', 'Transition Kits', 'Social Motion Assets', 'Multi-Layer Compositing'],
    technique: 'Multi-Pass Post Production + Rec.709 Color Finishing',
    metric: 'Broadcast Color Grading'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    subtitle: 'Deconstruct The Message',
    description: 'Understanding the brief, message, target audience, and core narrative objective. We unearth the emotional hook and define platform specifications.',
    deliverable: 'Creative Brief & Visual Goal Sheet',
    studioAction: 'Core Angle Identification'
  },
  {
    number: '02',
    name: 'CONCEPT',
    subtitle: 'Style & World Building',
    description: 'Developing the visual direction, mood boards, character style frames, and typographic treatment tailored to your brand identity.',
    deliverable: 'Style Frames & Color Palette',
    studioAction: 'Visual Identity Conception'
  },
  {
    number: '03',
    name: 'STORYBOARD',
    subtitle: 'Composition & Pacing',
    description: 'Planning every scene, camera movement, composition, and cut. We build an animatic to lock in timing and sound sync before animation starts.',
    deliverable: 'Timed Animatic with Scratch Audio',
    studioAction: 'Shot Architecture Locking'
  },
  {
    number: '04',
    name: 'ANIMATE',
    subtitle: 'Movement & Life',
    description: 'Bringing illustrations, character rigs, and kinetic text to life. Hand-crafting anticipation, follow-through, and bespoke easing curves.',
    deliverable: 'Rough Animation & Keyframe Passes',
    studioAction: 'Full Motion Execution'
  },
  {
    number: '05',
    name: 'POLISH',
    subtitle: 'Craft & Atmosphere',
    description: 'Compositing multi-layer passes, atmospheric lighting, color grading, sound design sync, and subtle textural treatments.',
    deliverable: 'Near-Final Broadcast Review Cut',
    studioAction: 'Compositing & Precision Timing'
  },
  {
    number: '06',
    name: 'DELIVER',
    subtitle: 'Multi-Format Mastering',
    description: 'Preparing pixel-perfect final assets with appropriate codecs, aspect ratios (16:9, 9:16, 1:1), transparent web alpha, and source handoff.',
    deliverable: 'Master Renders & Handoff Checklist',
    studioAction: 'Full Platform Readiness'
  }
];

export const SOFTWARE_TOOLS = [
  {
    name: 'Adobe After Effects',
    category: 'Core Motion & Compositing',
    level: 'Advanced Daily Weapon',
    description: 'Keyframe graphing, DUIK rigging, shape animation, expressions, and 32-bit compositing.'
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector Asset Architecture',
    level: 'Production Essential',
    description: 'Layer-separated character design, precision isometric grids, and vector asset preparation.'
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Editorial & Sound Assembly',
    level: 'Finishing & Audio Sync',
    description: 'Animatic assembly, timeline pacing, multitrack audio synchronization, and final packaging.'
  },
  {
    name: 'Adobe Photoshop',
    category: 'Raster Texturing & Frame FX',
    level: 'Texture & Hand-Drawn',
    description: 'Matte backgrounds, frame-by-frame sketches, texture overlays, and storyboard drafting.'
  }
];

export const CORE_SKILLS = [
  'Cartoon Animation',
  'Logo Animation',
  'Typography Animation',
  'Kinetic Text',
  'Whiteboard Animation',
  'Storyboard Development',
  'Character Animation',
  'Compositing & Finishing',
  'Visual Storytelling'
];
