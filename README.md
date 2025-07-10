
# 🧠 Top Gadgets Under ₹20,000

A simple and smart Flask web application that showcases the **best gadgets available under ₹20,000**, with search, price filter, and dark mode toggle.

---

## 🚀 Features

- 🔍 **Search** gadgets by name  
- 🏷️ **Filter** by and price range  
- 🎨 **Light/Dark mode** toggle  
- 📱 Responsive and mobile-friendly UI  
- ⚡ Instant product links to Flipkart and Amazon  

---

## 📦 Tech Stack

- **Frontend:** HTML, CSS (with variables for themes), JavaScript  
- **Backend:** Python Flask  
- **Data Source:** `gadgets.json` (static JSON file with product info)  

---

## 📁 Folder Structure

```
Top-Gadgets-Under-20000/
│
├── app.py                  # Flask backend
├── gadgets.json            # Product data (title, price, category, etc.)
├── requirements.txt        # Python dependencies
│
├── static/
│   ├── css/
│   │   └── style.css       # Styling and dark mode
│   └── js/
│       └── script.js       # DOM logic, filtering, theme, etc.
│
└── templates/
    └── index.html          # Main webpage template
```

---

## 🧪 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sinhaatharv23/Top-Gadgets-Under-20000.git
cd Top-Gadgets-Under-20000
```

### 2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the app
```bash
python app.py
```

Visit `http://127.0.0.1:5000/` in your browser to explore.

---

## ✨ Future Enhancements (Ideas)

- 🧠 AI chatbot for gadget recommendations  
- 💾 MongoDB integration for dynamic data  
- 📱 Progressive Web App (PWA) version  
- 📊 Ratings & reviews feature  

---
## 🌐 Live Demo

[Click here to view the deployed app on Render](https://top-gadgets-under-20000.onrender.com)
---
## 📄 License

This project is open source and free to use for educational purposes.
