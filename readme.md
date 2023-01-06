# Info-Area Web Component

A simple Web Component that will allow a developer to drop in a component into the HTML like any othr tag. Consists of a title and body information. A card like info box that is divided into two sections. A colored column to the left with an attention getter, like Hey!, or Stop!, followed by an information area to the right where the programmer can offer vital information about the current subject matter.

Messages may be removed wih the use of an optional close button.

## Features:

- Easy default usage, add the tag, and enter your message.
- Flexible display options. User can adjust colors, Title, font, font sizes, borders.
- Message can be reponsive up to a max width or 100% of it;s container.
- Optional close button allows viewer to close out the message if desired.
- Any valid HTML canbe displayed as the "information".

This seems like a simple enough Component to gain a solid understanding of how it all works.


## On Second Thought:
This example seems to be about as simple as they get. I opted to create my elements using `innerHTML` rather than `createElement()`, and the like thus far. I know this method is not best practice, but it just seems a lot easier to follow. It seems more like how one creates Components in React. There is no `state` in this component. Only a static model. And this is as per usual with my first off endeavors, not the correct way to do it. It works, but I really just encapsulated the code nside a class and called `customElements.define()`. I'm learning there is much more to doing this correctly with `state`, `attributeChangedCallback`, `connectedCallback`, and a lot more I need to read up on. But for what this little component does, it's a good start. 

View it [live](https://ddcroft73.github.io/info-area/).
---