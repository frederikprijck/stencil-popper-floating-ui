/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyExamplePopover {
    }
    interface MyExamplePopoverFloating {
    }
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface MyPopover {
        /**
          * True if the content within the popover should be visible
         */
        "open": boolean;
        /**
          * Decides the popover's location in relation to its trigger
         */
        "openDirection": string;
    }
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface MyPopoverFloating {
        /**
          * True if the content within the popover should be visible
         */
        "open": boolean;
        /**
          * Decides the popover's location in relation to its trigger
         */
        "openDirection": string;
    }
    /**
     * @private 
     */
    interface MyPopoverSurface {
        /**
          * Content to render
         */
        "contentCollection": HTMLCollection;
    }
    /**
     * @private 
     */
    interface MyPopoverSurfaceFloating {
        /**
          * Content to render
         */
        "contentCollection": HTMLCollection;
    }
    interface MyPortal {
        /**
          * The element that the content should be positioned relative to. Defaults to the my-portal element.
         */
        "anchor"?: HTMLElement;
        /**
          * A unique ID.
         */
        "containerId": string;
        /**
          * Dynamic styling that can be applied to the container holding the content.
         */
        "containerStyle": object;
        /**
          * Used to make a dropdown have the same width as the trigger, for example in `my-picker`.
         */
        "inheritParentWidth": boolean;
        /**
          * Decides which direction the portal content should open.
         */
        "openDirection": string;
        /**
          * Parent element to move the content to.
         */
        "parent": HTMLElement;
        /**
          * Position of the content.
         */
        "position": 'fixed' | 'absolute';
        /**
          * True if the content within the portal should be visible.  If the content is from within a dialog for instance, this can be set to true from false when the dialog opens to position the content properly.
         */
        "visible": boolean;
    }
    interface MyPortalFloating {
        /**
          * The element that the content should be positioned relative to. Defaults to the my-portal element.
         */
        "anchor"?: HTMLElement;
        /**
          * A unique ID.
         */
        "containerId": string;
        /**
          * Dynamic styling that can be applied to the container holding the content.
         */
        "containerStyle": object;
        /**
          * Used to make a dropdown have the same width as the trigger, for example in `my-picker`.
         */
        "inheritParentWidth": boolean;
        /**
          * Decides which direction the portal content should open.
         */
        "openDirection": string;
        /**
          * Parent element to move the content to.
         */
        "parent": HTMLElement;
        /**
          * Position of the content.
         */
        "position": 'fixed' | 'absolute';
        /**
          * True if the content within the portal should be visible.  If the content is from within a dialog for instance, this can be set to true from false when the dialog opens to position the content properly.
         */
        "visible": boolean;
    }
}
export interface MyPopoverCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyPopoverElement;
}
export interface MyPopoverFloatingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyPopoverFloatingElement;
}
declare global {
    interface HTMLMyExamplePopoverElement extends Components.MyExamplePopover, HTMLStencilElement {
    }
    var HTMLMyExamplePopoverElement: {
        prototype: HTMLMyExamplePopoverElement;
        new (): HTMLMyExamplePopoverElement;
    };
    interface HTMLMyExamplePopoverFloatingElement extends Components.MyExamplePopoverFloating, HTMLStencilElement {
    }
    var HTMLMyExamplePopoverFloatingElement: {
        prototype: HTMLMyExamplePopoverFloatingElement;
        new (): HTMLMyExamplePopoverFloatingElement;
    };
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface HTMLMyPopoverElement extends Components.MyPopover, HTMLStencilElement {
    }
    var HTMLMyPopoverElement: {
        prototype: HTMLMyPopoverElement;
        new (): HTMLMyPopoverElement;
    };
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface HTMLMyPopoverFloatingElement extends Components.MyPopoverFloating, HTMLStencilElement {
    }
    var HTMLMyPopoverFloatingElement: {
        prototype: HTMLMyPopoverFloatingElement;
        new (): HTMLMyPopoverFloatingElement;
    };
    /**
     * @private 
     */
    interface HTMLMyPopoverSurfaceElement extends Components.MyPopoverSurface, HTMLStencilElement {
    }
    var HTMLMyPopoverSurfaceElement: {
        prototype: HTMLMyPopoverSurfaceElement;
        new (): HTMLMyPopoverSurfaceElement;
    };
    /**
     * @private 
     */
    interface HTMLMyPopoverSurfaceFloatingElement extends Components.MyPopoverSurfaceFloating, HTMLStencilElement {
    }
    var HTMLMyPopoverSurfaceFloatingElement: {
        prototype: HTMLMyPopoverSurfaceFloatingElement;
        new (): HTMLMyPopoverSurfaceFloatingElement;
    };
    interface HTMLMyPortalElement extends Components.MyPortal, HTMLStencilElement {
    }
    var HTMLMyPortalElement: {
        prototype: HTMLMyPortalElement;
        new (): HTMLMyPortalElement;
    };
    interface HTMLMyPortalFloatingElement extends Components.MyPortalFloating, HTMLStencilElement {
    }
    var HTMLMyPortalFloatingElement: {
        prototype: HTMLMyPortalFloatingElement;
        new (): HTMLMyPortalFloatingElement;
    };
    interface HTMLElementTagNameMap {
        "my-example-popover": HTMLMyExamplePopoverElement;
        "my-example-popover-floating": HTMLMyExamplePopoverFloatingElement;
        "my-popover": HTMLMyPopoverElement;
        "my-popover-floating": HTMLMyPopoverFloatingElement;
        "my-popover-surface": HTMLMyPopoverSurfaceElement;
        "my-popover-surface-floating": HTMLMyPopoverSurfaceFloatingElement;
        "my-portal": HTMLMyPortalElement;
        "my-portal-floating": HTMLMyPortalFloatingElement;
    }
}
declare namespace LocalJSX {
    interface MyExamplePopover {
    }
    interface MyExamplePopoverFloating {
    }
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface MyPopover {
        /**
          * Emits an event when the component is closing
         */
        "onClose"?: (event: MyPopoverCustomEvent<void>) => void;
        /**
          * True if the content within the popover should be visible
         */
        "open"?: boolean;
        /**
          * Decides the popover's location in relation to its trigger
         */
        "openDirection"?: string;
    }
    /**
     * A popover is an impermanent layer that is displayed on top of other content
     * when user taps an element that triggers the popover. This element can be
     * practically anything, a button, piece of text, and icon, etc.
     * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
     * that darkens the content below them. Also for the same reason, they can be
     * dismissed by tapping or clicking another part of the screen, but not by a
     * clicking a button or link on the popover itself.
     * :::warning
     * The component is emitting a close event when you click outside its container
     * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
     * properly on this event and hide the component (preferably by setting the
     * property `open` to `false`).
     * :::
     * ## Usage
     * Use a popover to show **options** or **information** related to the trigger
     * onscreen. A typical use case for popovers is a tooltip, in which you show
     * help text or contextual information to users.
     * Popovers are most appropriate on larger screens but can be used on smaller
     * screens too, as long as their content is responsive and takes into account
     * the context they are displayed on.
     * When a popover is displayed, interactions with other controls are blocked,
     * until user dismisses the popover.
     * ## Layout
     * Popovers has only one slot in which you can import a custom web-component.
     * :::note
     * You must make sure that web-components that you import into the slot has
     * a `width: 100%;` style so that it can horizontally stretch across the popover.
     * However, `width` of the popover can be controlled by specifying a CSS variable
     * of `--popover-surface-width`. If you don't specify any width, the popover
     * will grow as wide as its content.
     * :::
     * :::important
     * Do not make a popover too big. They should never take over the entire screen.
     * If your content is that big, you should probably be using a Modal instead.
     * :::
     * @exampleComponent my-example-popover
     */
    interface MyPopoverFloating {
        /**
          * Emits an event when the component is closing
         */
        "onClose"?: (event: MyPopoverFloatingCustomEvent<void>) => void;
        /**
          * True if the content within the popover should be visible
         */
        "open"?: boolean;
        /**
          * Decides the popover's location in relation to its trigger
         */
        "openDirection"?: string;
    }
    /**
     * @private 
     */
    interface MyPopoverSurface {
        /**
          * Content to render
         */
        "contentCollection"?: HTMLCollection;
    }
    /**
     * @private 
     */
    interface MyPopoverSurfaceFloating {
        /**
          * Content to render
         */
        "contentCollection"?: HTMLCollection;
    }
    interface MyPortal {
        /**
          * The element that the content should be positioned relative to. Defaults to the my-portal element.
         */
        "anchor"?: HTMLElement;
        /**
          * A unique ID.
         */
        "containerId"?: string;
        /**
          * Dynamic styling that can be applied to the container holding the content.
         */
        "containerStyle"?: object;
        /**
          * Used to make a dropdown have the same width as the trigger, for example in `my-picker`.
         */
        "inheritParentWidth"?: boolean;
        /**
          * Decides which direction the portal content should open.
         */
        "openDirection"?: string;
        /**
          * Parent element to move the content to.
         */
        "parent"?: HTMLElement;
        /**
          * Position of the content.
         */
        "position"?: 'fixed' | 'absolute';
        /**
          * True if the content within the portal should be visible.  If the content is from within a dialog for instance, this can be set to true from false when the dialog opens to position the content properly.
         */
        "visible"?: boolean;
    }
    interface MyPortalFloating {
        /**
          * The element that the content should be positioned relative to. Defaults to the my-portal element.
         */
        "anchor"?: HTMLElement;
        /**
          * A unique ID.
         */
        "containerId"?: string;
        /**
          * Dynamic styling that can be applied to the container holding the content.
         */
        "containerStyle"?: object;
        /**
          * Used to make a dropdown have the same width as the trigger, for example in `my-picker`.
         */
        "inheritParentWidth"?: boolean;
        /**
          * Decides which direction the portal content should open.
         */
        "openDirection"?: string;
        /**
          * Parent element to move the content to.
         */
        "parent"?: HTMLElement;
        /**
          * Position of the content.
         */
        "position"?: 'fixed' | 'absolute';
        /**
          * True if the content within the portal should be visible.  If the content is from within a dialog for instance, this can be set to true from false when the dialog opens to position the content properly.
         */
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "my-example-popover": MyExamplePopover;
        "my-example-popover-floating": MyExamplePopoverFloating;
        "my-popover": MyPopover;
        "my-popover-floating": MyPopoverFloating;
        "my-popover-surface": MyPopoverSurface;
        "my-popover-surface-floating": MyPopoverSurfaceFloating;
        "my-portal": MyPortal;
        "my-portal-floating": MyPortalFloating;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-example-popover": LocalJSX.MyExamplePopover & JSXBase.HTMLAttributes<HTMLMyExamplePopoverElement>;
            "my-example-popover-floating": LocalJSX.MyExamplePopoverFloating & JSXBase.HTMLAttributes<HTMLMyExamplePopoverFloatingElement>;
            /**
             * A popover is an impermanent layer that is displayed on top of other content
             * when user taps an element that triggers the popover. This element can be
             * practically anything, a button, piece of text, and icon, etc.
             * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
             * that darkens the content below them. Also for the same reason, they can be
             * dismissed by tapping or clicking another part of the screen, but not by a
             * clicking a button or link on the popover itself.
             * :::warning
             * The component is emitting a close event when you click outside its container
             * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
             * properly on this event and hide the component (preferably by setting the
             * property `open` to `false`).
             * :::
             * ## Usage
             * Use a popover to show **options** or **information** related to the trigger
             * onscreen. A typical use case for popovers is a tooltip, in which you show
             * help text or contextual information to users.
             * Popovers are most appropriate on larger screens but can be used on smaller
             * screens too, as long as their content is responsive and takes into account
             * the context they are displayed on.
             * When a popover is displayed, interactions with other controls are blocked,
             * until user dismisses the popover.
             * ## Layout
             * Popovers has only one slot in which you can import a custom web-component.
             * :::note
             * You must make sure that web-components that you import into the slot has
             * a `width: 100%;` style so that it can horizontally stretch across the popover.
             * However, `width` of the popover can be controlled by specifying a CSS variable
             * of `--popover-surface-width`. If you don't specify any width, the popover
             * will grow as wide as its content.
             * :::
             * :::important
             * Do not make a popover too big. They should never take over the entire screen.
             * If your content is that big, you should probably be using a Modal instead.
             * :::
             * @exampleComponent my-example-popover
             */
            "my-popover": LocalJSX.MyPopover & JSXBase.HTMLAttributes<HTMLMyPopoverElement>;
            /**
             * A popover is an impermanent layer that is displayed on top of other content
             * when user taps an element that triggers the popover. This element can be
             * practically anything, a button, piece of text, and icon, etc.
             * Popovers are nonmodal, thus they don't have a semi-transparent backdrop layer
             * that darkens the content below them. Also for the same reason, they can be
             * dismissed by tapping or clicking another part of the screen, but not by a
             * clicking a button or link on the popover itself.
             * :::warning
             * The component is emitting a close event when you click outside its container
             * or press the <kbd>Esc</kbd> key. However, it’s up to you as consumer to react
             * properly on this event and hide the component (preferably by setting the
             * property `open` to `false`).
             * :::
             * ## Usage
             * Use a popover to show **options** or **information** related to the trigger
             * onscreen. A typical use case for popovers is a tooltip, in which you show
             * help text or contextual information to users.
             * Popovers are most appropriate on larger screens but can be used on smaller
             * screens too, as long as their content is responsive and takes into account
             * the context they are displayed on.
             * When a popover is displayed, interactions with other controls are blocked,
             * until user dismisses the popover.
             * ## Layout
             * Popovers has only one slot in which you can import a custom web-component.
             * :::note
             * You must make sure that web-components that you import into the slot has
             * a `width: 100%;` style so that it can horizontally stretch across the popover.
             * However, `width` of the popover can be controlled by specifying a CSS variable
             * of `--popover-surface-width`. If you don't specify any width, the popover
             * will grow as wide as its content.
             * :::
             * :::important
             * Do not make a popover too big. They should never take over the entire screen.
             * If your content is that big, you should probably be using a Modal instead.
             * :::
             * @exampleComponent my-example-popover
             */
            "my-popover-floating": LocalJSX.MyPopoverFloating & JSXBase.HTMLAttributes<HTMLMyPopoverFloatingElement>;
            /**
             * @private 
             */
            "my-popover-surface": LocalJSX.MyPopoverSurface & JSXBase.HTMLAttributes<HTMLMyPopoverSurfaceElement>;
            /**
             * @private 
             */
            "my-popover-surface-floating": LocalJSX.MyPopoverSurfaceFloating & JSXBase.HTMLAttributes<HTMLMyPopoverSurfaceFloatingElement>;
            "my-portal": LocalJSX.MyPortal & JSXBase.HTMLAttributes<HTMLMyPortalElement>;
            "my-portal-floating": LocalJSX.MyPortalFloating & JSXBase.HTMLAttributes<HTMLMyPortalFloatingElement>;
        }
    }
}
