import { Component, Element, h, Prop, Watch } from '@stencil/core';
import {
  autoUpdate,
  computePosition,
} from '@floating-ui/dom';

@Component({
  tag: 'my-portal-floating',
  styleUrl: 'portal-component.css',
  shadow: true,
})
export class PortalComponent {
  /**
     * Decides which direction the portal content should open.
     */
  @Prop({ reflect: true })
  public openDirection: string = 'bottom';

  /**
   * Position of the content.
   */
  @Prop({ reflect: true })
  public position: 'fixed' | 'absolute' = 'absolute';

  /**
   * A unique ID.
   */
  @Prop({ reflect: true })
  public containerId: string;

  /**
   * Dynamic styling that can be applied to the container holding the content.
   */
  @Prop()
  public containerStyle: object = {};

  /**
   * Parent element to move the content to.
   */
  @Prop()
  public parent: HTMLElement = document.body;

  /**
   * Used to make a dropdown have the same width as the trigger, for example
   * in `my-picker`.
   */
  @Prop({ reflect: true })
  public inheritParentWidth = false;

  /**
   * True if the content within the portal should be visible.
   *
   * If the content is from within a dialog for instance, this can be set to
   * true from false when the dialog opens to position the content properly.
   */
  @Prop({ reflect: true })
  public visible = false;

  /**
   * The element that the content should be positioned relative to.
   * Defaults to the my-portal element.
   */
  @Prop()
  public anchor?: HTMLElement = null;

  @Element()
  private host: any;

  private parents: WeakMap<HTMLElement, HTMLElement>;
  private container: HTMLElement;
  private cleanup: () => void;
  private loaded = false;
  private observer: ResizeObserver;

  constructor() {
      this.parents = new WeakMap();
  }

  public disconnectedCallback() {
      this.removeContainer();
      this.destroyPopper();
      if (this.observer) {
          this.observer.unobserve(this.container);
      }
  }

  public connectedCallback() {
      if (!this.loaded) {
          return;
      }

      this.createContainer();
      this.hideContainer();
      this.attachContainer();

      if (this.visible) {
          this.createPopper();
          this.showContainer();
      }
  }

  public componentDidLoad() {
      this.loaded = true;
      this.connectedCallback();
  }

  public render() {
      return <slot />;
  }

  @Watch('visible')
  protected onVisible() {
      if (!this.visible) {
          this.hideContainer();
          this.destroyPopper();

          return;
      }

      this.createPopper();
      requestAnimationFrame(() => {
          this.showContainer();
      });
  }

  private createContainer() {
      const slot: HTMLSlotElement =
          this.host.shadowRoot.querySelector('slot');
      const content =
          (slot.assignedElements && slot.assignedElements()) || [];

      this.container = document.createElement('div');
      this.container.setAttribute('id', this.containerId);
      this.container.setAttribute('class', 'my-portal--container');
      Object.assign(this.container, {
          portalSource: this.host,
      });

      content.forEach((element: HTMLElement) => {
          this.parents.set(element, element.parentElement);
          this.container.appendChild(element);
      });
  }

  private attachContainer() {
      this.parent.appendChild(this.container);
  }

  private removeContainer() {
      if (!this.container) {
          return;
      }

      Array.from(this.container.children).forEach((element: HTMLElement) => {
          const parent = this.parents.get(element);
          if (!parent) {
              return;
          }

          parent.appendChild(element);
      });

      this.hideContainer();
      this.container.parentElement.removeChild(this.container);
  }

  private hideContainer() {
      this.container.style.opacity = '0';
  }

  private showContainer() {
      this.container.style.opacity = '1';
  }

  private createPopper() {
      this.cleanup = autoUpdate(this.anchor || this.host, this.container, () => {
        computePosition(this.anchor || this.host, this.container, {
          placement: 'bottom',
          strategy: this.position,
        }).then(({x, y}) => {
          console.log({x, y})
          Object.assign(this.container.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      });
  }

  private destroyPopper() {
      this.cleanup();
  }
}
