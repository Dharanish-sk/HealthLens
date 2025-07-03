 🩺 MedicalAnalyser

**MedicalAnalyser** is a full-stack AI-powered health report analysis application that helps users upload lab reports (PDF or image), extract health parameters using OCR, analyze them, and receive AI-generated medical insights along with trend visualizations.

---

## 🧩 Project Structure

medicalanalyser/
├── frontend/ # React + Tailwind + Framer Motion UI
├── backend/ # Django REST API + OCR (Tesseract) + Gemini AI
└── README.md # You're here!

yaml
Copy
Edit

---

## 🚀 Features

✅ Upload PDF/JPG/PNG lab reports  
✅ OCR-based data extraction using Tesseract  
✅ AI insights via Gemini API for each health parameter  
✅ Trend charts to visualize report history  
✅ Beautiful modern UI with animation  
✅ Secure authentication (token-based)

---

## 🖥️ Frontend: React + Tailwind

### Path: `medicalanalyser/frontend`

### Setup

```bash
cd frontend
npm install
npm run dev
Tech Stack
⚛️ React 18+

🎨 Tailwind CSS

🎞️ Framer Motion

📈 Recharts

🔒 Token-based auth

🧠 Backend: Django + OCR + Gemini
Path: medicalanalyser/backend
Setup
bash
Copy
Edit
cd backend
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
Run Server
bash
Copy
Edit
python manage.py runserver
Environment Variables (create .env)
ini
Copy
Edit
GOOGLE_API_KEY=your_gemini_api_key
DEBUG=True
📸 Tesseract OCR Setup (Required)
Install Tesseract for OCR functionality:

Download: https://github.com/tesseract-ocr/tesseract

Add Tesseract path (e.g., C:\Program Files\Tesseract-OCR\tesseract.exe) to your system PATH.

🔐 Authentication
Token-based login is used.

Token is saved to localStorage

Automatically attached to API requests

📊 AI Insight & Trend Charts
Each extracted parameter can be clicked for a Gemini-generated insight.

Trends visualized over time with Recharts in a clean graph.

📦 API Endpoints
Method	Endpoint	Description
POST	/api/login/	Auth login, returns JWT token
POST	/api/upload/	Uploads and analyzes reports
GET	/api/insight/	Fetch AI insight on demand

🧪 Example Report
You can test with any lab report (PDF or image). The app will:

Extract parameters using OCR

Identify units, values, ranges

Flag abnormalities


🛠️ Troubleshooting
❌ TesseractNotFoundError – Ensure Tesseract is installed and in PATH

❌ 429 Quota Exceeded – Gemini API quota reached, check usage

❌ PermissionError – Run backend with admin privileges if needed

❌ git push failed – Ensure you're authenticated and remote is set

📚 Contributing
Feel free to fork and improve this project!

bash
Copy
Edit
git clone https://github.com/yourname/MedicalAnalyser.git
cd medicalanalyser
Open issues and PRs are welcome 💙

📄 License
MIT License. Use for educational or research purposes freely.

🧑‍💻 Author
Dharanish Selvaraj
🔗 GitHub • LinkedIn

markdown
Copy
Edit
