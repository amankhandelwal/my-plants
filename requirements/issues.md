## I've identified the following issues:

### Solved:
- [x] I've renamed all the image files to the relevant names of the plants. Replace them in the plants.json accordingly. I also have 2 coleus plants. I've prefixed their files as coleus_1 and coleus_2
- [x] Images are not rendering on the Browser. The image urls are not being read correctly from the src folder probably.
- [x] One plant can only support one image as of now. We want to support multiple images, with the first one being the primary image that's displayed on the home page. However we should be able to see all the images on the subsequent pages.
- [x] Instead of using numbers on the page url, we should make it more readable by actually using the plant's name (hyphen separated incase of multiple words). Page URL can also be part of the json config
- [x] The images and content are appearing correctly on localhost however on github, the content and image are both disappearing. Try looking at the website using the link and comparing it with localhost

### Unsolved