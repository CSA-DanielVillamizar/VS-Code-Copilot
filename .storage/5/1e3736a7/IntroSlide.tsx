import React from "react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import type { SlideAnimationType } from "@/types/ppt";

const IntroSlideComponent: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const slideAnimation = useSlideAnimation();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent repeated initialization
    if (initializedRef.current) {
      return;
    }

    slideAnimation
      .addElement("title", titleRef, {
        enter: { type: "slideInLeft", duration: 600 },
        group: 0,
      })
      .addElement("desc", descRef, {
        enter: { type: "fadeInTopLeft", duration: 600, delay: 200 },
        group: 1,
      })
      .addElement("buttons", btnRef, {
        enter: { type: "flipInY", duration: 600, delay: 400 },
        group: 2,
      })
      .addElement("buttons2", btnRef, {
        enter: { type: "tada", duration: 600, delay: 400 },
        group: 3,
      })
      .setMode("parallel")
      .startGrouped();

    initializedRef.current = true;

    // Expose to the global scope for page switching control
    useAppStore.getState().setCurrentSlideAPI(slideAnimation);

    return () => {
      slideAnimation.reset();
      useAppStore.getState().setCurrentSlideAPI(null);
      initializedRef.current = false;
    };
  }, []); // Remove the dependency on slideAnimation to avoid infinite loops

  return (
    <section className="flex h-full flex-col items-center justify-center text-center gap-6 px-8">
      <h1 ref={titleRef} className="text-5xl font-bold tracking-tight">
        MGX Presentation
      </h1>
      <p ref={descRef} className="max-w-2xl text-lg text-muted-foreground">
        A modern PPT framework built with React · Vite · TailwindCSS ⚡, featuring built-in Shadcn-ui components and a rich animation API to help you quickly create interactive
        slides.
      </p>
    </section>
  );
};

RegisterSlide({
  title: "Tech Stack" /** Page Title */,
  order: 99 /** Page Order, the order of the home/start/introduction page must be 0 */,
  /**
   * For page entry and exit animations, refer to the SlideAnimation definition in /src/types/ppt.ts for more animations
   */
  // enterAnimation: { type: "zoom", duration: 100 },
  // exitAnimation: { type: "zoom", duration: 100 },
})(IntroSlideComponent);

export default IntroSlideComponent;
