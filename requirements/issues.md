## I've identified the following issues:

### Solved:
- [x] I've renamed all the image files to the relevant names of the plants. Replace them in the plants.json accordingly. I also have 2 coleus plants. I've prefixed their files as coleus_1 and coleus_2
- [x] Images are not rendering on the Browser. The image urls are not being read correctly from the src folder probably.
- [x] One plant can only support one image as of now. We want to support multiple images, with the first one being the primary image that's displayed on the home page. However we should be able to see all the images on the subsequent pages.
- [x] Instead of using numbers on the page url, we should make it more readable by actually using the plant's name (hyphen separated incase of multiple words). Page URL can also be part of the json config
- [x] The images and content are appearing correctly on localhost however on github, the content and image are both disappearing. Try looking at the website using the link and comparing it with localhost
- [x] Due to heavy caching on React, my design changes don't appear on reloading the page. I have to actually shut the tab and reopen it. Can you fix this? Let's not hamper the performance of the page though.
- [x] Fonts updated to Roboto (content), Atma (sub headings), and DynaPuff (Headings).
- [x] Plant Details Page: Back button alignment and styling improved, title color adjusted for visibility, text content left-aligned, and an interactive image gallery implemented.
- [x] Header redesigned for a modern aesthetic, with adjusted subheading and header colors.
- [x] Overall styling, padding, and margins improved, and emojis/icons added for visual interest.
- [x] Design references (references/sample_website_1.png, references/sample_website_2.png) used for inspiration.

### Unsolved:
- [ ] Back button is on top of Image Gallery. Ideally Back button should be on it's own row at the top. Below that the split view of image gallery and Plant details should happen
- [ ] Let's stick to the material Icon for the back button
- [ ] Image Gallery is not working correctly. Reduce the size of the thumbnails below. Check references/plant_details_page.png on the size of the main image vs thumbnails
- [ ] Thumbnail should include the original image too. Selected Image should be highlighted in some way
- [ ] Use Atma font for the Plant name heading in Plant Details Page