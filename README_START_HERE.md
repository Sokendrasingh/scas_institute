# SCAS Website — HTML, CSS and JavaScript अलग-अलग

## सबसे पहले

- `index.html` — मुख्य पेज का HTML code.
- `style.css` — मुख्य पेज की CSS styling.
- `script.js` — मुख्य पेज की browser JavaScript, including editing controls.
- `assets/` — logo और तस्वीरें.
- `courses.html`, `university-courses.html`, `college-training.html`, `corporate-training.html` — captured read-only copies of the other pages, with matching `.css` and `.js` files.
- `backend/` — original full Worker source, build scripts, saved content and restore instructions.

ZIP extract करके इन files को एक ही folder में रखें। HTML, CSS और JavaScript को VS Code / Notepad में अलग-अलग खोलकर edit कर सकते हैं। HTML के कुछ छोटे element-specific style attributes मूल saved layout को सुरक्षित रखने के लिए वैसे ही रखे गए हैं; stylesheet blocks `style.css` में अलग हैं।

## चलाने का तरीका

`index.html` browser में खोल सकते हैं। ज्यादा सही local preview के लिए terminal में इसी folder से:

```bash
python -m http.server 8000
```

फिर browser में http://localhost:8000 खोलें। इससे local preview चलेगा; यह public Internet deployment नहीं है। Google Forms के लिए Internet जरूरी है।

## Live करने से पहले जरूरी बात

ये अलग HTML/CSS/JS files frontend preview हैं। केवल static hosting पर upload करने से website editor का Save, image upload और submissions APIs नहीं चलेंगे। उनके लिए `backend/source/worker/index.js`, authenticated Worker hosting और R2 storage binding `BUCKET` चाहिए। `backend/BACKEND_RESTORE.md` में पूरा restore map और authentication requirements हैं। अन्य चार पेजों की copies read-only हैं; full editable category pages original backend से मिलते हैं।

Existing live website और उसकी access settings में कोई बदलाव नहीं किया गया। Google Forms के जवाब उनकी Google Sheets में ही हैं। This export is based on the latest captured site from this conversation, source version 39.
