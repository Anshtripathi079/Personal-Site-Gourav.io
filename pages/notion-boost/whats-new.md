---
layout: "projectLayout"
title: "Notion Boost - What's new?"
desc: "See what's new in the latest update of Notion Boost browser extension"
date: "09-12-2020"
og: "notion-boost/img/og.png"
---

import { Img, A } from "@/components/tags";
import { Title, Social,NavbarNotion } from "@/components/notionBoost";
import showHoverText from "./img/showHoverText.gif";
import leftAlignImage from "./img/leftAlignImage.gif";
import hideHiddenColumns from "./img/hideHiddenColumns.gif";

import og from "./img/og.png";
import logo from "./img/logo.png";

<Title logo={logo}/>

<NavbarNotion />

## What's new in this update ✨

### v1.7

Added new features 🎉

- **Show full text on hover:**  
   Show full text in table cells on mouse hover.
  <Img src={showHoverText} type="ss" />

- **Hide 'Hidden columns' in board view:**  
  Truly hide 'Hidden columns' in Kanban board view.
  <Img src={hideHiddenColumns} type="ss" />
- **Left align images:**  
   Align document images to left instead of center.
  <Img src={leftAlignImage} type="ss" />

**Other info:**

- Reached 2k+ downloads within 3 months of launch in Chrome store 🙌. Thank you all!
- Fixed bug: slash menu wasn't hiding after space in some cases.

---

<Social/>

---

## Previous updates

### v1.6

Added 3 new features 🎉

- 'Scroll to top' button:  
  Added button at the bottom-right corner of page for scrolling back to top. Quite useful for lengthy pages. The button will be visible only when the page has scrolled down a bit.
- Close Slash command menu after space:  
  Slash command menu which appears when pressing '/' key will be closed back by pressing the space key.
- Don't show Slash command menu when pressing '/':  
  Don't show the Slash command menu when pressing '/' key. Slash command menu will still be shown by clicking + ⁝⁝ icon. This setting can't be enabled along with 'Close Slash command menu after space' and vice-versa.
- Fixed bug where the outline wasn't visible for 2 column headings.

### v1.5

- Small text & Full width for all pages:  
  Option to set small text and full width for all pages by default. This locally adjusts the text and width without clicking on the Notion page toggles. So no page change is saved to the server.
- Hide comments section from all pages. Useful when working solo.

### v1.0

Birth of this extension 🐣

- Show Outline:  
  Show sticky outline (table of contents) for pages that have headings or sub-headings. The outline will be shown on the right side of the page. Very useful for navigating a page with lots of content.
- Hide floating help button from all pages. This button is located on the bottom-right corner of pages.
- Bolder text in dark mode:  
  Fix poorly recognizable bold text when using Notion in dark mode
