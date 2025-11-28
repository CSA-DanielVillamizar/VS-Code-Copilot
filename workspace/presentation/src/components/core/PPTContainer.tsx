/** Start: This code should always be kept as is */
import React, { useState, useCallback, useEffect, useRef } from "react";
import { PPTSlide } from "@/types/ppt";
import { cn } from "@/lib/utils";
import { useSlideThumbnail } from "@/hooks/useSlideThumbnail";
import { SlideAnimationWrapper } from "./SlideAnimationWrapper";
import { useAppStore } from "@/store/useAppStore";

interface PPTContainerProps {
  slides: PPTSlide[];
  className?: string;
  /** Callback to receive slide thumbnail dataURL */
  onSnapshot?: (slideId: string, dataUrl: string) => void;
  /**
   * If provided, the container becomes a controlled component for slide index.
   */
  externalCurrentSlideIndex?: number;
  /**
   * Callback fired whenever the current slide index changes (through navigation, auto-play, etc.).
   */
  onExternalSlideChange?: (index: number) => void;
  /** Callback for PDF export */
  onExportPDF?: () => void;
  /** Whether PDF export is in progress */
  isExporting?: boolean;
  /** PDF export progress */
  exportProgress?: { current: number; total: number } | null;
  /** Whether to enable slide animations (true only in full-screen preview). */
  enableAnimations?: boolean;
}

export const PPTContainer: React.FC<PPTContainerProps> = ({
  slides,
  className,
  onSnapshot,
  externalCurrentSlideIndex,
  onExternalSlideChange,
  onExportPDF,
  isExporting,
  exportProgress,
  enableAnimations,
}) => {
  const isFullScreen = useAppStore((s) => s.isFullScreen);
  const setAnimationEnabled = useAppStore((s) => s.setAnimationEnabled);
  const animationsEnabled = enableAnimations ?? isFullScreen;

  // immediately synchronize global flag, ensure child components can read immediately on first render
  if (animationsEnabled) {
    setAnimationEnabled(true);
  }
  // enable element animations in full-screen mode, globally shared
  useEffect(() => {
    setAnimationEnabled(animationsEnabled);
    return () => setAnimationEnabled(false);
  }, [animationsEnabled]);

  const [currentSlideIndexInternal, setCurrentSlideIndexInternal] = useState(externalCurrentSlideIndex ?? 0);
  const [displayedSlideIndex, setDisplayedSlideIndex] = useState(externalCurrentSlideIndex ?? 0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideAnimationsComplete, setSlideAnimationsComplete] = useState(true);
  const [pendingSlideIndex, setPendingSlideIndex] = useState<number | null>(null);

  // Track whether a slide's iframe has finished loading
  const [loadedSlides, setLoadedSlides] = useState<Record<string, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);

  // dynamic zoom calculation in full-screen mode
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    if (!isFullScreen) {
      setZoomScale(1);
      return;
    }

    const calculateZoom = () => {
      const baseWidth = 1280;
      const baseHeight = 720;

      // get current window size, minus some margins
      const windowWidth = window.innerWidth; // left and right 20px margins
      const windowHeight = window.innerHeight; // top and bottom 60px margins, for control bar

      // calculate aspect ratio
      const windowRatio = windowWidth / windowHeight;
      const baseRatio = baseWidth / baseHeight;

      let scale: number;

      if (windowRatio > baseRatio) {
        // window wider, use height
        scale = windowHeight / baseHeight;
      } else {
        // window higher, use width
        scale = windowWidth / baseWidth;
      }

      // limit minimum and maximum zoom ratio
      scale = Math.max(0.5, Math.min(scale, 2));

      setZoomScale(scale);
    };

    // initial calculation
    calculateZoom();

    // listen to window size change
    window.addEventListener("resize", calculateZoom);

    return () => {
      window.removeEventListener("resize", calculateZoom);
    };
  }, [isFullScreen]);

  // Helper to get the source of truth for current slide index
  const currentSlideIndex = externalCurrentSlideIndex ?? currentSlideIndexInternal;

  // Handle slide change request
  const handleSlideChangeRequest = useCallback(
    (newIndex: number) => {
      // Skip if the requested slide is already displayed
      if (newIndex === displayedSlideIndex) return;

      // If animations are disabled, switch immediately
      if (!animationsEnabled) {
        if (externalCurrentSlideIndex === undefined) {
          setCurrentSlideIndexInternal(newIndex);
        }
        setDisplayedSlideIndex(newIndex);
        return;
      }

      // If animations are still running, queue the request
      if (!slideAnimationsComplete) {
        setPendingSlideIndex(newIndex);
        console.log("animations are in progress, please wait for the animations to complete or click skip"); // eslint disable unused variable warning
        return;
      }

      // Start transition with animations
      setIsTransitioning(true);
      setSlideAnimationsComplete(false);

      if (externalCurrentSlideIndex === undefined) {
        setCurrentSlideIndexInternal(newIndex);
      }
    },
    [displayedSlideIndex, slideAnimationsComplete, externalCurrentSlideIndex, animationsEnabled]
  );

  // Sync with external prop if component is controlled
  useEffect(() => {
    if (externalCurrentSlideIndex !== undefined) {
      if (externalCurrentSlideIndex !== displayedSlideIndex) {
        handleSlideChangeRequest(externalCurrentSlideIndex);
      }
    }
  }, [externalCurrentSlideIndex, displayedSlideIndex, handleSlideChangeRequest]);

  // Handle slide exit animations complete
  const handleSlideExitComplete = useCallback(() => {
    setDisplayedSlideIndex(currentSlideIndex);
    setIsTransitioning(false);
  }, [currentSlideIndex]);

  // Handle slide enter animations complete
  const handleSlideEnterComplete = useCallback(() => {
    setSlideAnimationsComplete(true);

    // If there's a pending slide change, execute it now
    if (pendingSlideIndex !== null) {
      const nextIndex = pendingSlideIndex;
      setPendingSlideIndex(null);
      setTimeout(() => {
        handleSlideChangeRequest(nextIndex);
      }, 100);
    }
  }, [pendingSlideIndex, handleSlideChangeRequest]);

  // Handle skip animations
  const handleSkipAnimations = useCallback(() => {
    setSlideAnimationsComplete(true);
    setPendingSlideIndex(null);
  }, []);

  // Callback when an individual slide iframe finishes loading
  const handleSlideLoaded = useCallback((slideId: string) => {
    setLoadedSlides((prev) => ({
      ...prev,
      [slideId]: true,
    }));
  }, []);

  // Pre-mark any React component slides as loaded to avoid overlay
  useEffect(() => {
    const slide = slides[displayedSlideIndex];
    if (slide?.component && !loadedSlides[slide.id]) {
      handleSlideLoaded(slide.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedSlideIndex, slides]);

  // Prepare thumbnail hook (must run unconditionally)
  const slideIdForThumb = slides[displayedSlideIndex]?.id ?? "";
  const alreadyThumbed = slideIdForThumb ? !!loadedSlides[slideIdForThumb] : false;
  const thumbnailRef = useSlideThumbnail(slideIdForThumb, onSnapshot, alreadyThumbed);

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No slides to display</p>
      </div>
    );
  }

  const currentSlide = slides[displayedSlideIndex];
  const isVisible = animationsEnabled ? !isTransitioning || displayedSlideIndex === currentSlideIndex : true;

  // full-screen mode container style
  const containerStyle = isFullScreen
    ? {
        width: "1280px",
        height: "720px",
        transform: `scale(${zoomScale})`,
        transformOrigin: "center center",
        aspectRatio: "16 / 9" as const,
      }
    : { aspectRatio: "16 / 9" as const };

  return (
    <div className={cn(isFullScreen ? "" : "w-full", className)}>
      <div ref={containerRef} className="relative bg-black overflow-hidden shadow-inner" data-current-slide={currentSlide.id} style={containerStyle}>
        {/* Render current slide with animation */}
        {currentSlide.component &&
          (animationsEnabled ? (
            <SlideAnimationWrapper
              isVisible={isVisible}
              enterAnimation={currentSlide.enterAnimation}
              exitAnimation={currentSlide.exitAnimation}
              onEnterComplete={handleSlideEnterComplete}
              onExitComplete={handleSlideExitComplete}
            >
              <div ref={thumbnailRef as React.Ref<HTMLDivElement>} className="w-full h-full flex items-center justify-center overflow-hidden bg-white" data-slide-content>
                <div className="max-w-full max-h-full w-full h-full">{React.createElement(currentSlide.component)}</div>
              </div>
            </SlideAnimationWrapper>
          ) : (
            <div ref={thumbnailRef as React.Ref<HTMLDivElement>} className="w-full h-full flex items-center justify-center overflow-hidden bg-white" data-slide-content>
              <div className="max-w-full max-h-full w-full h-full">{React.createElement(currentSlide.component)}</div>
            </div>
          ))}

        {/* Loading Overlay (only for iframe slides) */}
        {!currentSlide.component && !(loadedSlides[currentSlide.id] || currentSlide.isLoaded) && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-30">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading slide...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PPTContainer;
/* End: This code should always be kept as is */
