# bio_cell_miniproject_html_css
This is an HTML file that creates a webpage about the human body's organ systems. The webpage has a navigation menu with links to different sections, each covering a specific organ system or topic.

Here's a breakdown of the HTML structure:

1. The header section contains:
    - A dropdown menu listing group members.
    - A home button that links to the top of the page.
    - A title "Human Body" in a large font size.
    - A navigation menu with links to different sections (Skeletal, Respiratory, Muscular, etc.).
2. The main content is divided into sections, each with:
    - A heading (h1) with the topic name.
    - An image related to the topic.
    - A horizontal rule (hr) to separate sections.
3. The sections are:
    - Home: An introduction to the human body organ systems.
    - Skeletal: Covers the vertebral column, joints, and bones.
    - Respiratory: Covers the lungs, nose, trachea, and diaphragm.
    - Muscular: Covers skeletal, cardiac, and smooth muscles.
    - Circulatory: Covers the heart, arteries, veins, and blood.
    - Digestive: Covers the mouth, pharynx, esophagus, stomach, small intestine, large intestine, rectum, and anus.
    - Nervous: Covers the spinal cord, medulla, pons, cerebellum, midbrain, diencephalon, and cerebral hemispheres.

This is a CSS stylesheet that defines the visual styling and layout for the HTML file you provided earlier. Here's a breakdown of the styles:

Global Styles

- *: Sets default styles for all elements, including:
    - margin and padding to 0
    - box-sizing to border-box
    - scroll-margin to 100px
    - scroll-behavior to smooth
    - font-family to 'Popins', sans-serif

Navigation Menu Styles

- ul: Styles for unordered lists (navigation menus)
    - list-style to none
    - background to #11141a (dark gray)
- ul li: Styles for list items (menu items)
    - display to inline-block
    - position to relative
- ul li a: Styles for links within menu items
    - opacity to 0.9
    - display to block
    - padding to 15px 25px
    - color to #fff (white)
    - text-decoration to none
    - text-align to center
    - font-size to 18px
- ul li ul.dropdown and ul li ul.dropdown2: Styles for dropdown menus
    - width to 100% or 150% (depending on the dropdown)
    - opacity to 0.9
    - background to #11141a (dark gray)
    - position to absolute
    - z-index to 999
    - display to none (hidden by default)
- ul li:hover ul.dropdown and ul li:hover ul.dropdown2: Styles for displaying dropdown menus on hover
    - display to block

Header Styles

- header: Styles for the header section
    - position to fixed
    - top to 0
    - left to 0
    - width to 100%
    - padding to 20px 70px
    - background to #11141a (dark gray)
    - display to flex
    - justify-content to space-between
    - align-items to center
    - z-index to 100

Logo and Home Link Styles

- .logo and .home: Styles for the logo and home link
    - font-size to 18px
    - color to #FF8F01 (orange) or #fff (white)
    - text-decoration to none
    - font-weight to 600
    - transition to .3s

Navigation Link Styles

- nav a: Styles for navigation links
    - font-size to 18px
    - color to #fff (white)
    - text-decoration to none
    - font-weight to 500
    - margin-left to 1px

These styles create a dark gray navigation menu with orange and white accents, and a fixed header with a logo and home link. The dropdown menus are hidden by default and display on hover.
