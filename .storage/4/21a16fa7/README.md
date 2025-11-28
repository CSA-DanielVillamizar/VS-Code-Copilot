# Slide Development Guide

> This document explains how to develop custom slide components in **MGX Presentation**.

## Basic Conventions

| Project | Requirements |
|---|---|
| **Menu** | All slides are placed in the `src/pages/slides/` directory, one file corresponds to one Slide |
| **Naming** | The file name is the component name, ensure `id` is globally unique |
| **Export** | Must `export default` the component itself |
| **Registration** | Use `RegisterSlide({ ... })(Component)` to complete registration |
| **Size** | Fixed **1280 × 720 (16:9)** canvas design |

## File Structure
- `index.html` - HTML entry point
- `vite.config.ts` - Vite configuration file
- `tailwind.config.js` - Tailwind CSS configuration file
- `package.json` - Project dependencies and scripts
- `src/app.tsx` - Root component, sets up global Providers (e.g., QueryClientProvider, Router), UI config, and routes
- `src/main.tsx` - Project entry point
- `src/index.css` - Existing CSS configuration
- `src/pages/Index.tsx` - Home page logic
- `src/components/ui/` - Reusable UI components
- `src/components/core/` - Core components (e.g., PPTContainer.tsx, PPTNavigation.tsx, SlideRegistry.ts) for slide rendering and management
- `src/decorators/RegisterSlide.ts` - Slide registration decorator
- `src/hooks/useSlideAnimation.ts` - Element animation hook
- `src/types/ppt.ts` - PPT types

## Element Animation (Optional)

```tsx
import { useSlideAnimation } from "@/hooks/useSlideAnimation";

const Demo: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const api = useSlideAnimation();

  useEffect(() => {
    api
      .addElement("title", titleRef, {
        enter: { type: "slideInLeft", duration: 600 },
        group: 0,
      })
      .setMode("parallel")
      .startGrouped();
  }, []);

  return <h1 ref={titleRef}>Title</h1>;
};
```
**Note**：Element animation is only enabled in full screen preview.

**Warning**: Never use variable names that conflict with React hooks (e.g., naming a variable `useRef`, `useState`, etc.) as it will cause initialization errors.

## Image Processing Best Practices

1. **Generate AI Images**: Always use ImageCreator.generate_image to create high-quality, contextually relevant images. This provides stable, consistent results tailored to your content needs.

**ImageCreator Command Format:**
```xml
<ImageCreator.generate_image>
<description>Detailed visual description including subject, mood, elements, colors, and composition</description>
<filename>descriptive-image-name.jpg</filename>
<style>photorealistic|cartoon|sketch|watercolor|minimalist|3d</style>
</ImageCreator.generate_image>
```

**Parameter Guidelines:**
- `<description>`: Be specific and detailed about the visual content. Include subject, elements, atmosphere, colors, and composition - do NOT include style keywords (e.g., "Modern office workspace with large windows, natural lighting, minimalist furniture, plants, warm atmosphere with soft shadows")
- `<filename>`: Use descriptive kebab-case names with .jpg extension (e.g., "modern-office-workspace.jpg")
- `<style>`: Choose from available styles:
  - `photorealistic` - Photorealistic, high detail, professional photography
  - `cartoon` - Cartoon style, colorful, animated
  - `sketch` - Pencil sketch, black and white, artistic
  - `watercolor` - Watercolor painting, soft edges, artistic
  - `minimalist` - Minimalist design, clean, simple
  - `3d` - 3D render, blender, octane render

2. **Image Layout with Dynamic Height Control** (PREVENTS OVERFLOW):
   **Use Flex Layout for Auto-Adaptive Images:**
   ```tsx
   // ✅ BEST: Flex layout - images adapt to remaining space automatically
   <section className="flex h-full flex-col px-16 py-12">
     {/* Fixed height: title */}
     <h1 className="text-5xl font-bold mb-6">Title</h1>
     
     {/* Flexible: auto fills remaining space */}
     <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
       <div className="space-y-4">
         {/* Text content */}
       </div>
       
       {/* Image container: automatically sized */}
       <div className="flex flex-col gap-4 min-h-0">
         <div className="flex-1 min-h-0">
           <img src="/assets/image1.jpg" alt="Desc" 
                className="w-full h-full object-cover rounded-lg" />
         </div>
         <div className="flex-1 min-h-0">
           <img src="/assets/image2.jpg" alt="Desc" 
                className="w-full h-full object-cover rounded-lg" />
         </div>
       </div>
     </div>
   </section>
   ```
   
   **Key Classes Explained:**
   - `flex-1`: Element grows to fill remaining space
   - `min-h-0`: Fixes flex container overflow issue (REQUIRED!)
   - `h-full`: Image fills its container height
   - `object-cover`: Crops image to fit (alternative: `object-contain` shows full image)

## Specification

- **Chart Components**：Use `Chart` component in `src/components/ui/chart.tsx`. The Chart component uses Recharts API and **REQUIRES** these properties:
  - `type`: Required - one of "line", "bar", "area", "pie", or "radar"
  - `data`: Required - array of data objects
  - `series`: Required - array of data key strings to plot
  - `xKey`: Optional - category field name (default: "x")
  - `colors`: Optional - array of color strings
  - `height`: Optional - chart height in pixels (default: 260)

- **Core Files**：Do not modify files under `src/components/core/`

# Design Guidelines

## Design Style Guide
All slides MUST maintain consistent background colors throughout the presentation. Use variations of the SAME color family (e.g., from-blue-50 to-blue-100) - DO NOT mix drastically different backgrounds (blue → red → green). Visual coherence is mandatory.
Images and charts are PRIMARY content, text is SECONDARY. Images should be large and prominent, not small decorations. Balance text density with strong visual elements.
Use charts and images whenever possible. Emphasize the clarity of charts (bar charts, pie charts, line charts) using a variety of shapes and strong contrast. Use the ImageCreator tool to generate contextually relevant, high-quality images that match your presentation theme.
The combined bounds of slide elements (text blocks, charts, images) must fit within the **1280 × 720 (16:9)** resolution and must not extend beyond the slide boundaries.

**Mandatory Rules:**
1. **Always use `h-full` on the root `<section>` tag**: This ensures the section fills the container exactly

2. **[CRITICAL] Vertical Stacking Rule - STRICTLY ENFORCED**:
   - **DETECTION**: If your slide has 4+ content blocks (cards, features, points), you MUST use grid layout
   - **REQUIRED ✅**: 
     * For 1-3 items: Use vertical layout `flex flex-col space-y-4` or `space-y-6`
     * For 4+ items: MUST use horizontal grid `grid grid-cols-2 gap-4` or `grid-cols-3 gap-4`
     * Alternative: Split content into 2 separate slides (recommended for 6+ items)
   - **Card/Box Definition**: Any `<div>` with background, border, padding, or shadow (feature cards, info boxes, stat cards, process steps, etc.)

3. **Control spacing carefully**:
   - Use `gap-4` to `gap-8` (16px-32px) between elements, avoid `gap-12` or larger
   - Use `space-y-4` to `space-y-6` for vertical spacing


## Slide Structure Guidelines

### 1. Cover Slide

**Typography**:
- Main Title: `text-6xl font-bold` (60px) - use **Main Title** from Typography System
- Subtitle: `text-3xl` (30px) - use **Section Title** sizing
- Metadata: `text-xl` or `text-lg` (20px/18px)

**Visual Elements**:
- **Use HERO Images as backgrounds**: Used a HERO Image as background. Large, impactful background images are essential for professional presentations. Hero images should cover the full slide area and create visual depth.

**Layout Requirements**:
- Center-align all text for visual balance
- Ensure ample whitespace - title should be the clear focal point
- Use Image as the bottom background of the entire cover page.

---
### 2. Table of Contents Slide
**Design Principles**:
- Use consistent numbering or icons for each section
- Apply `gap-8` spacing between items (following 8px grid system)
- Limit to 4-6 sections maximum (if more, consider splitting or grouping)
- ONE accent color only (primary theme color)
---

### 3. Content Slides Content slides vary by purpose. Choose the appropriate pattern from the Layout Pattern Library: 

#### 3.1 Data/Statistics Slide **Requirements**: - **Title**: Outcome-oriented, not descriptive - **Chart**: Prominent, taking 50-60% of slide space - **Labels**: text-base for data labels 

#### 3.2 Process/Timeline Slide **Design Notes**: - Limit to 3-5 steps maximum - Use consistent node styling (circles with accent color) - Text below each node: title in text-xl font-semibold, description in text-base 

#### 3.3 Feature/Benefit Slide **Requirements**: - Cards with shadow-lg, rounded-2xl - Icon area: w-24 h-24, background in light theme color - Text hierarchy: title text-2xl font-semibold, description text-lg 

#### 3.4 Image-Focused Slide

**Image Guidelines**:
- **ALWAYS generate images using ImageCreator** - no placeholders
- Styling: Keep images clean and simple (no rounded corners or shadows by default)
- Images should be PRIMARY content, not decoration

---

### 4. Closing/Thank You Slide

**Design Principles**:
- Echo the cover slide's color scheme for cohesion
- Keep it minimal - "Thank You" should be the focal point
- Center-align all content
- Optional elements: summary quote, contact info, QR code, logo
- Use same background gradient as cover slide

## Slide Content Creation Process

### Workflow Overview
The slide creation process consists of two distinct phases:
1. **Phase A: Global Preparation** (once for entire presentation)
2. **Phase B: Per-Slide Creation Loop** (repeated for each slide)

---

## Phase A: Global Preparation

Complete ALL steps in this phase BEFORE creating any individual slides. This ensures all resources (outlines, search results, images) are ready for efficient slide construction.

### A1. Generate Presentation Outline
Create a todo.md file with structured entries for each slide:

```markdown
#### Slide 1: [Slide Title]
slide_type: Cover
key_points:
- Main title and theme
- Subtitle or tagline
- Visual style direction

#### Slide 2: [Slide Title]
slide_type: Content | Data | Analysis
key_points:
- Key point 1
- Key point 2
- Key point 3
```

### A2. Validate & Prevent Overflow
For EACH content slide in your outline, count content blocks (cards, feature boxes, stat boxes, process steps):

**Critical Rule**: 4+ content blocks WILL cause overflow in 720px height
- **1-3 blocks**: Use vertical layout `flex flex-col space-y-4`
- **4+ blocks**: MUST use `grid grid-cols-2 gap-4` OR split into 2 slides
- **Flag** any slide with 4+ blocks and adjust outline accordingly

### A3. Batch Information Retrieval (CRITICAL for Content Richness)

**Query Strategy - Be Specific and Request Details:**

```markdown
❌ BAD: "What is AI?" (too vague)
✅ GOOD: "What is AI? Include definition, history, 3-4 real-world examples with company names, and key statistics"

❌ BAD: "Machine learning types"  
✅ GOOD: "Explain supervised, unsupervised, and reinforcement learning with concrete examples and applications"
```

**Search Volume per Slide:**
- **1-2 searches per content slide** (Cover/End slides: 0-1 searches)
- Each search should yield **200-300 words minimum**
- Always request: examples, statistics, company names, dates, case studies

**Storage Format in todo.md:**

```markdown
#### Slide 2: Machine Learning Types
slide_type: Content

### Search Results Cached:
**Query 1: "What is machine learning? Include definition, core principles, 3 real-world examples"**
Result: [200-300 words with specific examples like "Netflix uses ML for recommendations, processing 1 billion views/day"]

**Query 2: "Explain supervised, unsupervised, reinforcement learning with industry applications"**  
Result: [300+ words with concrete examples: "Amazon uses unsupervised learning for customer segmentation"]


image_files:
- ml-types-diagram.jpg
```

**Query Template (use for detailed results):**
```
"Explain [TOPIC] including:
- Definition and key concepts
- 3-4 concrete examples with company/product names  
- Statistics, numbers, or market data
- Historical context or current trends"
```

**Key Requirements:**
- ✅ Include **specific names** (companies, products, people)
- ✅ Include **numbers** (percentages, dates, statistics)
- ✅ Include **examples** (3-5 concrete cases per major concept)
- ✅ Store **full detailed responses** (don't summarize, keep all details)

Run multiple SearchEnhancedQA.run calls in batch and store ALL results verbatim in todo.md

### A4. Batch Image Generation
- Review outline and identify which slides need images (typically: Cover, Content, Data slides)
- Plan suitable images for every slide, ensuring thematic consistency
- Generate ALL images using ImageCreator.generate_image (see "Image Processing Best Practices" section above for command format)
- Record actual generated filenames in todo.md

**Critical**: MUST complete all 4 steps before proceeding to Phase B.

---

## Phase B: Per-Slide Creation Loop

Repeat these steps for EACH slide sequentially (complete Slide 1 before starting Slide 2):

### B1. Design Slide Structure
Transform outline into concrete content structure:
- Define content hierarchy (title, subtitle, 2-4 supporting elements)
- Choose layout pattern from "Slide Structure Guidelines" section
- Map cached resources (search results, images) to slide elements
- Sketch content skeleton in todo.md

### B2. Build TSX Component
Create the slide file using:
- **Text content**: Use cached search results from Phase A3
- **Images**: Reference actual filenames from Phase A4 using `/assets/[filename]`
- **Charts**: Use Chart component with appropriate type and data
- **Layout**: Follow Design Guidelines (spacing, typography, color consistency)
- **Styling**: Ensure `h-full` on root `<section>`, proper gap/spacing values

**Example image reference:**
```tsx
<img src="/assets/ai-robot-collaboration.jpg" alt="AI Collaboration" className="..." />
```

### B3. Move to Next Slide
Mark current slide complete in todo.md, proceed to next slide.

---

### Execution Rules
- ❌ **NEVER** skip Phase A or start Phase B before completing Phase A
- ❌ **NEVER** work on multiple slides simultaneously - complete current slide before starting next
- ✅ **ALWAYS** verify image filenames match exactly what ImageCreator generated

---

## Common Issues & Reminders

1. **Animation Invalid** → Confirm whether in full screen preview mode
2. **Images not displaying** → Check filename spelling, extension matching (.jpg, .png), and verify files exist in `public/assets/` directory
3. **Image Usage Principles** → When ImageCreator generates image files, MUST use the actual filenames provided. Prohibit CSS placeholders - always generate real images using ImageCreator.generate_image.
4. **JSX Curly Braces in Text** → When displaying literal curly braces in text (e.g., mathematical sets like {a, b}), escape them using `{"{"}` and `{"}"}` to avoid JSX parsing errors.
5. **⚠️ Image Overflow with flex-1 Not Working** → If images overflow despite using `flex-1 min-h-0`, check the parent container. `flex-1` ONLY works in **flex containers** (`flex flex-col`), NOT in `space-y-*` containers (which use block layout). Use `flex flex-col gap-*` for dynamic height distribution.

## Reference Files

### Core Components
- Register Decorator：`src/decorators/RegisterSlide.ts`
- Animation Hook：`src/hooks/useSlideAnimation.ts`
- Example Component：`src/pages/slides/IntroSlide.tsx`

## Your Task
Make sure to delete the example component `src/pages/slides/IntroSlide.tsx` and `src/pages/slides/end.tsx` before you begin coding.