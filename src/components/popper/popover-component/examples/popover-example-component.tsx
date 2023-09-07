import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-example-popover',
  shadow: true,
})
export class PopoverExampleComponent {
  @State()
  private isOpen = false;

  public render() {
    return [
      <my-popover open={this.isOpen} onClose={this.onPopoverClose}>
        <button slot="trigger" onClick={this.openPopover}>
          Click me!
        </button>
        <p style={{ margin: '0.5rem 1rem' }} tabindex="0">
          Content
        </p>
      </my-popover>,
    ];
  }

  private openPopover = (event: MouseEvent) => {
    event.stopPropagation();
    console.log('opening');
    this.isOpen = true;
  };

  private onPopoverClose = (event: CustomEvent) => {
    event.stopPropagation();
    console.log('closing');
    this.isOpen = false;
  };
}
