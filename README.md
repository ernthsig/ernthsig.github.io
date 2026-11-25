# Ernesto Sigalas · Engineering Portfolio

This is a static site built with HTML, CSS, and JavaScript. Open `index.html` in a browser to preview it locally. It has no build step or package dependencies. The Google font and YouTube videos use an internet connection.

## Add your photos

Copy your existing `Media` directory next to `index.html`. Match the folder names and filename casing shown below. The site shows a placeholder wherever it cannot load the corresponding photo.

| Folder inside `Media/` | Files referenced |
| --- | --- |
| `AboutMe` | `aboutme_1.HEIC`, `aboutme_2.HEIC`, `aboutme_3.JPG`, `aboutme_4.JPG`, `aboutme_5.JPG` |
| `DPilotPowerModule` | `dpilot_1.HEIC`, `dpilot_2.HEIC`, `dpilot_3.JPG`, `dpilot_4.jpg` |
| `FMRTFV` | `fmrtfv_1.jpg` or `fmrtfv_1.HEIC`, `fmrtfv_2.JPG`, `fmrtfv_3.jpg` |
| `MarinaAutomation` | `marina_1.HEIC`, `marina_2.png`, `marina_3.HEIC`, `marina_4.png` |
| `ThesisTFV` | `thesistfv_1.HEIC`, `thesistfv_2.HEIC`, `thesistfv_3.HEIC` |
| `WireHarnessBSPD` | `fslv_1.heic`, `fslv_2.HEIC`, `fslv_3.HEIC`, `fslv_4.HEIC` |

Export each HEIC as a JPEG for broader browser support. Save it beside the original with the same base name and a `.jpg` extension, for example `marina_1.HEIC` → `marina_1.jpg`. The site tries the JPEG first, then the original HEIC. The FMR cover and gallery accept both names supplied for `fmrtfv_1`. Place the Formula Student photos under `Media/WireHarnessBSPD`, including any you currently keep in your Internship directory.

## Edit the site

- `index.html`, `about.html`, `projects.html`, and `contact.html` are the main pages.
- Individual project write-ups live in `projects/`.
- `assets/site.css` controls the shared design. `assets/site.js` handles image loading, the slideshow, and the gallery viewer.

## Publish with GitHub Pages

1. Extract the ZIP. Add your photos under `Media/`.
2. Commit the contents of the extracted folder to the root of your GitHub repository so that `index.html` is at the root. Include the supplied `.nojekyll` file.
3. In your GitHub repository, open **Settings → Pages**. Select **Deploy from a branch**, select your branch and **/ (root)**, then save.
4. Once GitHub shows the published URL, open it and check the photos, videos, and navigation.

The site uses relative paths so it works at both a personal GitHub Pages domain and a repository subpath.
