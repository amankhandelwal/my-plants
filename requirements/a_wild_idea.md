# The Plan
I love the fact that we've reached a decent place with the website. I had a wild idea and wanted to explore that. 
All of these images are of actual plants in my balcony. I was thinking of taking a 360 degree image of my balcony and having tooltips/clickable buttons on top of all my individual plants. You could click on that plant and get details about that plant as a tooltip there itself. And you could use the image to explore the entire balcony and all the plants. Bonus points if you could zoom in as some of the plants might be smaller in size, making clicking a little difficult.

# Rules
Considering this is a wild idea, we are going to execute this on a separate git branch - so we don't mess up the existing code.
- Branch name - 360degree/init
- We'll create a Pull request on Github once the development is completed

All library installations should always be restricted to the scope of this directory. There shouldn't be any global level installations

# Technical Requirements
Let's talk about technical requirements:
- We'll change the navigation
  - The 360 degree balcony view shall be the landing page / home page
    - Clicking on plants in the balcony view would open the plant details as a tooltip there itself.
  - There should be a link on top that would take you to the list view - current home_page
    - Clicking on items in the homepage would open the plant_details_page
- I'll share the 360 degree image. I need you to tell me how i can capture that with an Iphone 14 pro (for free)
- I need you to tell me how I can place Points of interest on the 360 degree image
- I need you to tell me what libraries are we planning on adding for building this
- I need you to ensure the 360 degree view still stays responsive
- Bonus: The 360 degree navigation works using the phone's gyroscope. Essentially, I am able to nagivate just by moving my phone around.
- This still needs to work on Github Pages.

# UI/UX
I'll just go through the UX for 360 degree image. Imagine something very similar to Google Street view. I have a 360 degree image of my balcony, and I have points of interest. I should be able to easily identify those points of interest through visual cues. I should be able to click on the points of interest and get tooltips to know more about these points of interest. 
I should be able to move around the 360 degree image of my balcony by swiping around or by simply moving my phone around.

The page should be responsive and clearly work on a phone.

# GEMINI's plan

1.  **360-degree Image Capture (iPhone 14 Pro, free):**
    *   **Method:** The iPhone 14 Pro's native Panorama mode is a good starting point. While it creates a wide panoramic image, it's not a full 360-degree equirectangular image needed for most web viewers.
    *   **Recommendation:** For a true 360-degree photo (sphere), you'll need a dedicated app. "Google Street View" (available for free on iOS) is an excellent option. It allows you to capture a "Photo Sphere" by guiding you through a series of overlapping photos, which it then stitches into a seamless 360-degree image. This image can then be exported and used in our application.
    *   **Tips for Capture:** Ensure good, even lighting. Stand in the center of your balcony and rotate slowly, keeping the phone as level as possible. Overlap each shot significantly (the app will guide you). Avoid moving objects during capture.

2.  **Web Libraries for 360-degree Viewers:**
    *   After researching several options, **Pannellum** appears to be a strong candidate.
        *   **Pros:** Lightweight, open-source, supports hotspots, zoom, and gyroscope control. It's well-documented and relatively easy to integrate. It renders directly in the browser using WebGL, ensuring good performance.
        *   **Alternatives (and why Pannellum is preferred for this scope):**
            *   *Photo Sphere Viewer:* Also good, but Pannellum is slightly more straightforward for basic interactive panoramas.
            *   *A-Frame:* Powerful for VR/AR, but might be overkill and add unnecessary complexity/bundle size for just a 360-degree image viewer with hotspots.

3.  **Placing Points of Interest (POIs):**
    *   **Pannellum's Approach:** Pannellum uses spherical coordinates (pitch, yaw, and optionally roll) to define hotspot positions.
        *   `pitch`: Vertical angle (up/down), from -90 (down) to 90 (up).
        *   `yaw`: Horizontal angle (left/right), from -180 to 180 (or 0 to 360).
    *   **How to Define:** You'll likely need a manual process for initial setup.
        1.  Load your 360-degree image into Pannellum (or a similar viewer that provides coordinates on hover/click).
        2.  Navigate to each plant's location in the 360-degree view.
        3.  Note down the `pitch` and `yaw` coordinates displayed by the viewer (many viewers have a debug mode or a way to show current coordinates).
        4.  These coordinates will be added to your `plants.json` data for each plant.
    *   **Tooltip Integration:** Pannellum supports custom HTML content for tooltips, which means we can render your plant details directly within them.

4.  **Integration with Existing React App:**
    *   **New Home Page:** The current `HomePage` will become the "List View." I'll create a new `BalconyView` component that will house the Pannellum viewer.
    *   **Routing:**
        *   The root path (`/`) will now render the `BalconyView` component.
        *   A new link (e.g., "View All Plants") will be added to the `BalconyView` to navigate to the existing `HomePage` (List View).
        *   Clicking on a plant hotspot in the `BalconyView` will trigger a tooltip displaying the plant's details. This will involve passing the plant data to the Pannellum hotspot configuration.
    *   **Data Flow:** The `plants.json` file will be extended to include the `pitch` and `yaw` coordinates for each plant. The `BalconyView` component will read this data to render the hotspots.

5.  **Responsiveness and GitHub Pages:**
    *   **Pannellum Responsiveness:** Pannellum is designed to be responsive and will adapt to different screen sizes.
    *   **GitHub Pages:** Since Pannellum is a client-side JavaScript library, it will work seamlessly with GitHub Pages, just like the rest of your React app. The `homepage` and `basename` configurations will continue to handle the subdirectory deployment.

6.  **Gyroscope Navigation:**
    *   Pannellum has built-in support for gyroscope control on devices that support the DeviceOrientation API. This will be enabled during the Pannellum initialization.

### Implementation Steps (High-Level):

1.  **Capture 360 Image:** You'll need to capture your balcony's 360-degree image using an app like Google Street View and place it in the `public` folder.
2.  **Update `plants.json`:** Add `pitch` and `yaw` coordinates to each plant entry in `public/plants.json`.
3.  **Install Pannellum:** Add Pannellum to your project (e.g., `npm install pannellum`).
4.  **Create `BalconyView` Component:**
    *   Initialize Pannellum with your 360-degree image.
    *   Iterate through `plants.json` to create hotspots for each plant, using their `pitch` and `yaw` coordinates.
    *   Configure hotspots to display plant details as tooltips on click.
    *   Enable gyroscope control.
5.  **Update `App.js`:** Modify routing to make `BalconyView` the new home page.
6.  **Add Navigation Link:** Add a link in `BalconyView` to navigate to the `HomePage` (List View).
7.  **Refine Styling:** Adjust CSS as needed for the new `BalconyView` and ensure overall responsiveness.

# GEMINI's recorded Checkpoints
