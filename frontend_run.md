# **BMG Fleet Dashboard - Setup & Run Guide (npm on Windows)**  
**Root Directory:** `C:\Users\ADMIN\Documents\nick_bmg\bmg-fleet-adm`  

This guide provides step-by-step instructions to set up and run the Next.js frontend using **npm** on a Windows PC.  

---

## **Prerequisites**  
✅ **Node.js (v18 or later)**  
- Download from [https://nodejs.org](https://nodejs.org)  
- Verify installation:  
  ```cmd
  node -v
  npm -v
  ```  

✅ **Git (Optional, if cloning the repo)**  
- Download from [https://git-scm.com](https://git-scm.com)  

---

## **Setup Instructions**  

### **1. Open Command Prompt**  
Press `Win + R`, type `cmd`, and hit **Enter**.  

### **2. Navigate to Project Directory**  
```cmd
cd C:\Users\ADMIN\Documents\nick_bmg\bmg-fleet-adm
```  

### **3. Install Dependencies**  
```cmd
npm install
```  
*(This installs all packages listed in `package.json`)*  

### **4. Set Up Environment Variables (If Needed)**  
- Create a `.env` file in the root folder (`bmg-fleet-adm`).  
- Open it in **Notepad** or **VS Code** and add required variables (if any):  
  ```env
  NEXT_PUBLIC_API_URL=http://localhost:3001
  NEXT_PUBLIC_MAP_API_KEY=your_key_here
  ```  

### **5. Run the Development Server**  
```cmd
npm run dev
```  

### **6. Access the Application**  
Open your browser and go to:  
👉 [http://localhost:3000](http://localhost:3000)  

---

## **Production Build (Optional)**  
To build and run in production mode:  
```cmd
npm run build
npm run start
```  

---

## **Troubleshooting**  

### **1. Dependency Installation Fails**  
- Delete `node_modules` and `package-lock.json`:  
  ```cmd
  rmdir /s /q node_modules
  del package-lock.json
  ```  
- Reinstall:  
  ```cmd
  npm install
  ```  

### **2. Port 3000 Already in Use**  
- Find and kill the process:  
  ```cmd
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```  
- Restart the dev server:  
  ```cmd
  npm run dev
  ```  

### **3. TypeScript Errors**  
If missing types, install them:  
```cmd
npm install --save-dev @types/react @types/node
```  

---

## **Summary of Commands**  
| Action | Command |  
|--------|---------|  
| Install dependencies | `npm install` |  
| Run dev server | `npm run dev` |  
| Build for production | `npm run build` |  
| Start production server | `npm run start` |  

---

🚀 **Your app should now be running!**  
- Modify pages in `app/`  
- Update components in `components/`  
- Add utilities in `lib/`  

Let me know if you need further assistance! 🛠️

You're running into a **dependency conflict** because you're using **React v19.1.0**, but `react-day-picker@8.10.1` only supports React v16–18.

---

### ✅ Best Options to Resolve the Issue

#### ✅ Option 1: Use `--legacy-peer-deps`
This tells npm to install packages without strictly resolving peer dependency issues (safe for dev):

```bash
npm install --legacy-peer-deps
```

#### ✅ Option 2: Use `--force`
This forces installation even with dependency issues (not recommended unless necessary):

```bash
npm install --force
```

---

### ✅ Option 3: Downgrade React to a Compatible Version

If you're not **required to use React 19**, downgrade to React 18 (which is stable and widely supported):

```bash
npm uninstall react react-dom
npm install react@18 react-dom@18
```

Then run:

```bash
npm install
```

This avoids breaking other packages like `react-day-picker`.

---

### ✅ Option 4: Upgrade the Conflicting Package

You can try upgrading `react-day-picker` (if a version compatible with React 19 exists):

```bash
npm info react-day-picker versions
```

Then try:

```bash
npm install react-day-picker@latest
```

(But at the time of your error, `react-day-picker@8.10.1` is the one installed, which doesn't yet support React 19.)

---

### 💡 Recommendation for Stability

Since many packages haven't yet fully adopted React 19:

> 🔧 **Use React 18 for now** unless you're testing React 19 features.

---

Would you like me to regenerate a fresh `package.json` that’s React 18 compatible and includes common packages like `react-day-picker`, `react-router-dom`, etc.?