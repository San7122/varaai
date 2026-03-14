# 📬 How to Receive Messages — Email + WhatsApp

When someone fills your contact form, you'll get:
✅ An email in your Gmail inbox
✅ A WhatsApp message on your phone — instantly!

---

## PART 1 — Setup EmailJS (Free, 200 emails/month)

### Step 1 — Create Free Account
Go to 👉 https://www.emailjs.com
Click "Sign Up Free" → use your Gmail

### Step 2 — Add Email Service
1. Dashboard → "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Click "Connect Account" → sign in with your Gmail
4. Click "Create Service"
5. 📋 COPY the **Service ID** (looks like: service_abc1234)

### Step 3 — Create Email Template
1. Dashboard → "Email Templates" → "Create New Template"
2. Paste this template:

**Subject:**
```
🪷 New Lead from VaraAI: {{from_name}}
```

**Body:**
```
You have a new message from your VaraAI website!

👤 Name:        {{from_name}}
📧 Email:       {{from_email}}
📞 Phone:       {{from_phone}}
🎯 Interested In: {{services}}

💬 Message:
{{message}}

---
Reply to: {{reply_to}}
```

3. Click "Save"
4. 📋 COPY the **Template ID** (looks like: template_xyz5678)

### Step 4 — Get Your Public Key
1. Dashboard → Top right → "Account"
2. Under "API Keys" → 📋 COPY the **Public Key**

---

## PART 2 — Setup WhatsApp Number

Just make sure your WhatsApp number is correct in the config.
Format: Country code + number, no + or spaces
Example India: `919876543210`

---

## PART 3 — Add Your Keys to the Website

Open this file:
```
src/components/Contact.jsx
```

Find this section at the top (around line 12):
```js
const CONFIG = {
  EMAILJS_SERVICE_ID:  'YOUR_SERVICE_ID',   // ← paste here
  EMAILJS_TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // ← paste here
  EMAILJS_PUBLIC_KEY:  'YOUR_PUBLIC_KEY',   // ← paste here
  WHATSAPP_NUMBER:     '919876543210',      // ← your number
};
```

Replace the 4 values with your actual keys. Save the file.

---

## PART 4 — Test It!

1. Run: `npm run dev`
2. Go to the Contact section
3. Fill the form and click Send
4. ✅ Check your Gmail — email should arrive
5. ✅ Check WhatsApp — message should pop up!

---

## Summary of Free Limits

| Service   | Free Limit         | Cost if exceeded |
|-----------|--------------------|-----------------|
| EmailJS   | 200 emails/month   | $9/month for more |
| WhatsApp  | Unlimited (wa.me)  | Always free! ✅ |

For a small business, 200 emails/month is more than enough!

---

## Questions?
Email: hello@varaai.in
WhatsApp: +91 98765 43210
