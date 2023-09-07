import { Component, h, Prop, Element } from '@stencil/core';

/**
 * @slot - Content to put inside the surface
 * @private
 */

@Component({
    tag: 'my-popover-surface',
    shadow: true,
    styleUrl: 'popover-surface-component.scss',
})
export class PopoverSurface {
    /**
     * Content to render
     */
    @Prop()
    public contentCollection: HTMLCollection;

    @Element()
    private host: any;

    public componentDidLoad() {
        this.appendElement();
    }

    public render() {
        return <div class="my-popover-surface" tabindex="0" />;
    }

    private appendElement() {
        const portalContainer = this.host.shadowRoot.querySelector(
            '.my-popover-surface'
        );

        Array.from(this.contentCollection).forEach((child) => {
            if (child.slot === 'trigger') {
                return;
            }

            portalContainer.appendChild(child);
        });
    }
}
