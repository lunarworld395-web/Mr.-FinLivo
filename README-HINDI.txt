MR. FINLIVO WEBSITE — HINDI SETUP GUIDE
========================================

इस ZIP में ये फाइलें हैं:
1. index.html  — Entrance / Welcome page
2. home.html   — Main homepage, cards, calculator, YouTube videos, contact
3. library.html — Search/filter वाली Knowledge Library
4. style.css  — सभी पेज का design, colours, responsive layout और animations
5. script.js  — Calculator, library search, article buttons, Help Centre

STEP 1 — ZIP खोलें
- ZIP file पर right-click करें और Extract All चुनें।
- निकले हुए Mr-FinLivo-Website folder को किसी आसान जगह, जैसे Desktop, पर रखें।

STEP 2 — VS Code में खोलें
- VS Code खोलें।
- File > Open Folder पर क्लिक करें।
- Mr-FinLivo-Website folder चुनें।
- बाईं तरफ Explorer में सभी पांच फाइलें दिखेंगी।

STEP 3 — वेबसाइट चलाएं
- index.html पर right-click करें।
- अगर “Open with Live Server” दिखे, तो उस पर क्लिक करें।
- अगर Live Server नहीं है: VS Code के Extensions आइकन पर जाएं, “Live Server” खोजें,
  Ritwick Dey का Live Server extension install करें, फिर index.html पर right-click करके
  Open with Live Server चुनें।
- Entrance page खुलेगा। ENTER THE EXPERIENCE से home page पर जाएं।

STEP 4 — अपना YouTube चैनल जोड़ें
- script.js खोलें।
- ऊपर FINLIVO_SETTINGS में यह लाइन खोजें:
  youtubeChannelUrl: "https://www.youtube.com/",
- https://www.youtube.com/ को अपने असली चैनल URL से बदलें।
- URL को quotes के अंदर रखें। उदाहरण:
  youtubeChannelUrl: "https://www.youtube.com/@YourChannelName",

STEP 5 — Support email बदलें
- script.js में supportEmail: "hello@example.com" खोजें।
- इसे अपने असली support email से बदलें।
- home.html और library.html में mailto:hello@example.com भी खोजकर अपना email डालें।
- Help Centre सिर्फ email app खोलकर message तैयार करता है; यह खुद से message भेजता नहीं है।
  वेबसाइट से सीधे message जमा करने के लिए backend/form service चाहिए।

STEP 6 — Website text और links बदलें
- index.html = entrance page का text
- home.html = homepage का text, video cards और contact links
- library.html = articles और categories
- style.css = colours, sizes, spacing, layout और effects
- script.js = calculator और interactive features

ध्यान दें:
- अभी YouTube links सामान्य YouTube homepage पर जाते हैं। ऊपर दिए STEP 4 के बाद वे आपके चैनल पर जाएंगे।
- EMI और SIP tiles फिलहाल design-only हैं; budget calculator working है।
- वेबसाइट अभी आपके कंप्यूटर पर चल रही है। इसे सबके लिए online करने के लिए hosting/domain की जरूरत होगी।
- यह educational project है, professional financial advice नहीं।


STEP 7 — Registration और Subscription pages
- register.html = Registration interest form (demo).
- subscription.html = Subscription plans / income model का design preview.
- Entrance page पर Subscribe और Create Account buttons जोड़े गए हैं।
- Home और Library के header में भी Subscribe और Register links हैं।
- अभी registration किसी database में account नहीं बनाता। यह email draft तैयार करता है।
- Subscription page पर अभी कोई payment नहीं लिया जाता। Paid membership के लिए payment provider
  (जैसे Razorpay/Stripe, availability और eligibility के अनुसार), backend, secure user accounts,
  refund/terms/privacy details और payment testing सेटअप करना होगा।
