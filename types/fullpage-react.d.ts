declare module "@fullpage/react-fullpage" {
  import React from "react";

  export interface fullpageOptions<T> {
    anchors?: T;
    animateAnchor?: boolean;
    autoScrolling?: boolean;
    /**
     * Defines how to scroll to a section which height is bigger than the viewport and when not using
     * `scrollOverflow:true`.
     *
     * By default fullPage.js scrolls to the top if you come from a section above the destination one and to the bottom
     * if you come from a section below the destination one.
     */
    bigSectionsDestination?: "top" | "bottom" | null;
    continuousHorizontal?: boolean;
    continuousVertical?: boolean;
    controlArrowColor?: string;
    controlArrows?: boolean;
    css3?: boolean;
    dragAndMove?: boolean | "vertical" | "horizontal" | "fingersonly" | "mouseonly";
    easing?: string;
    easingcss3?: string;
    /**
     * Defines whether to use a fading effect or not instead of the default scrolling one. It can therefore be applied
     * just vertically or horizontally, or to both at the time. It can only be used when using: `autoScrolling:true`.
     */
    fadingEffect?: boolean | "sections" | "slides";
    fitToSection?: boolean;
    fitToSectionDelay?: number;
    fixedElements?: string; // '#header, .footer'
    hybrid?: boolean;
    /**
     * Determines whether moving one horizontal slider will force the sliding of sliders in other section in the same
     * direction.
     *
     * Possible values are true, false or an array with the interlocked sections. For example [1,3,5] starting by 1.
     */
    interlockedSlides?: boolean | number[];
    keyboardScrolling?: boolean;
    lazyLoading?: boolean;
    licenseKey?: string;
    lockAnchors?: boolean;
    loopBottom?: boolean;
    loopHorizontal?: boolean;
    loopTop?: boolean;
    menu?: string;
    navigation?: boolean;
    navigationPosition?: string;
    navigationTooltips?: string[]; // ['firstSlide', 'secondSlide']
    normalScrollElementTouchThreshold?: number;
    normalScrollElements?: string; // '#element1, .element2',
    offsetSections?: boolean;
    paddingBottom?: string;
    paddingTop?: string;
    /**
     * Defines whether or not to use the parallax backgrounds effects on sections / slides.
     */
    parallax?: boolean | "sections" | "slides"; // true, false, 'sections', 'slides'
    parallaxOptions?: {
      percentage?: number;
      /**
       * Defines if we want to apply the parallax effect to the fp-bg element or directly to the section's or slides'
       * background property.
       *
       * It is recommended to use the default value for this option.
       */
      property?: "translate" | "background";
      /**
       * Provides a way to choose if the current section/slide will be above or below the destination one.
       *
       * When using cover, the next section or slide will appear covering a portion of the current one.
       *
       * Using reveal will just invert the effect and covers a bit of the destination one while revealing it.
       */
      type?: "cover" | "reveal";
    };
    recordHistory?: boolean;
    resetSliders?: boolean;
    responsive?: number;
    responsiveHeight?: number;
    responsiveSlides?: boolean;
    responsiveWidth?: number;
    scrollBar?: boolean;
    scrollHorizontally?: boolean;
    scrollOverflow?: boolean;
    scrollOverflowHandler?: any;
    scrollOverflowOptions?: IScrollOptions;
    scrollOverflowReset?: boolean;
    scrollingSpeed?: number;
    sectionSelector?: string;
    sectionsColor?: string[];
    showActiveTooltip?: boolean;
    slideSelector?: string;
    slidesNavPosition?: string;
    slidesNavigation?: boolean;
    touchSensitivity?: number;
    v2compatible?: boolean;
    verticalCentered?: boolean;

    /* callback and events */
    afterLoad?(
      origin?: sectionOrSlideCallbackArg<T[number]>,
      destination?: sectionOrSlideCallbackArg<T[number]>,
      direction?: verticalDirection
    ): void;

    afterRender?(): void;

    afterResize?(width: number, height: number): void;

    afterReBuild?(): void;

    afterResponsive?(isResponsive?: boolean): void;

    afterSlideLoad?(
      section?: sectionOrSlideCallbackArg<T[number]>,
      origin?: sectionOrSlideCallbackArg<T[number]>,
      destination?: sectionOrSlideCallbackArg<T[number]>,
      direction?: horizontalDirection
    ): void;

    onLeave?(
      origin?: sectionOrSlideCallbackArg<T[number]>,
      destination?: sectionOrSlideCallbackArg<T[number]>,
      direction?: verticalDirection
    ): void;

    onSlideLeave?(
      section?: sectionOrSlideCallbackArg<T[number]>,
      origin?: sectionOrSlideCallbackArg<T[number]>,
      destination?: sectionOrSlideCallbackArg<T[number]>,
      direction?: horizontalDirection
    ): void;

    /* keys for extensions */
    fadingEffectKey?: string;
    responsiveSlidesKey?: string;
    continuousHorizontalKey?: string;
    interlockedSlidesKey?: string;
    scrollHorizontallyKey?: string;
    resetSlidersKey?: string;
    offsetSectionsKey?: string;
    dragAndMoveKey?: string;
    parallaxKey?: string;
    /* end key sections */
  }

  type verticalDirection = "up" | "down";

  type horizontalDirection = "left" | "right";

  export interface sectionOrSlideCallbackArg<T> {
    anchor?: T;
    index: number;
    item: HTMLElement;
    isFirst: boolean;
    isLast: boolean;
  }

  export interface fullpageApi<T extends ReadonlyArray<string> = never> {
    continuousHorizontal: any;
    dragAndMove: any;
    fadingEffect: any;
    interlockedSlides: any;
    offsetSections: any;
    parallax: any;
    resetSliders: any;
    responsiveSlides: any;
    scrollHorizontally: any;
    scrollOverflowReset: any;
    version: string;

    destroy(n?: any): void;

    fitToSection(): void;

    getActiveSection(): sectionOrSlideCallbackArg<T>;

    getActiveSlide(): any;

    getFullpageData(): any;

    landscapeScroll(e?: any, t?: any, n?: any): void;

    moveSectionDown(): void;

    moveSectionUp(): void;

    moveSlideLeft(e?: any): void;

    moveSlideRight(e?: any): void;

    moveTo(e?: number | T[number], t?: number): void;

    reBuild(t?: any): void;

    setAllowScrolling(e?: any, t?: any): void;

    setAutoScrolling(e?: any, t?: any): void;

    setFitToSection(e?: any, t?: any): void;

    setKeyboardScrolling(e?: any, t?: any): void;

    setLockAnchors(e?: any): void;

    setMouseWheelScrolling(n?: any): void;

    setRecordHistory(e?: any, t?: any): void;

    setResponsive(e?: any): void;

    setScrollingSpeed(e?: any, t?: any): void;

    silentMoveTo(e?: any, t?: any): void;

    shared: {
      afterRenderActions(): void;
    };
    test: {
      left: number[];
      top: string;
      translate3d: string;
      translate3dH: string[];
      setAutoScrolling(e?: any, t?: any): void;
      options: fullpageOptions<T>;
    };
  }

  interface FullPageProps<T> extends fullpageOptions<T> {
    licenseKey?: string;
    render: (comp: {state: any; fullpageApi: fullpageApi<T>}) => React.ReactElement | void;
    debug?: boolean;
    pluginWrapper?: () => void;
  }

  // should actually be: class ReactFullpage extends React.Component<FullPageProps>{}
  // not sure how to extend Wrapper to a class so typed as a function
  // FIX: https://github.com/alvarotrigo/react-fullpage/issues/163#issuecomment-650498351
  function ReactFullpage<T extends ReadonlyArray<string> = never>(props: FullPageProps<T>): React.ReactElement;

  interface WrapperProps {
    children: React.ReactNode;
  }

  function Wrapper(props: WrapperProps): React.ReactElement;

  ReactFullpage.Wrapper = Wrapper;

  export default ReactFullpage;
}
