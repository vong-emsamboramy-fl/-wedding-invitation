# Wedding Invitation Deployment Guide

## 🚀 Complete Deployment Flow

### Prerequisites
- Node.js 18+ (use nvm to manage versions)
- Git installed
- GitHub account
- Vercel account

---

## 📋 Step-by-Step Deployment Process

### 1. Environment Setup
```bash
# Install/Update Node.js using nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts

# Verify versions
node --version  # Should be 18+
npm --version
```

### 2. Project Setup
```bash
# Create Next.js project with Tailwind
npx create-next-app@latest wedding-invitation --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project
cd wedding-invitation
```

### 3. Development
```bash
# Start development server
npm run dev

# Build for production (test before deployment)
npm run build

# Start production server locally
npm run start
```

### 4. Code Preparation
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Wedding invitation

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 5. GitHub Repository Setup

#### A. Create Repository
1. Go to https://github.com
2. Click "New repository"
3. Repository name: `wedding-invitation`
4. Make it **Public** ✅
5. Don't initialize with README
6. Click "Create repository"

#### B. SSH Key Setup (One-time)
```bash
# Generate SSH key for GitHub
ssh-keygen -t ed25519 -C "your-email@github.com" -f ~/.ssh/github_ed25519 -N ""

# Display public key
cat ~/.ssh/github_ed25519.pub

# Add SSH config
echo "Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_ed25519" >> ~/.ssh/config
```

**Add the public key to GitHub:**
1. Go to https://github.com/settings/keys
2. Click "New SSH key"
3. Title: `MacBook ED25519`
4. Key: Paste the public key
5. Click "Add SSH key"

#### C. Push to GitHub
```bash
# Test SSH connection
ssh -T git@github.com

# Add remote origin
git remote add origin git@github.com:username/wedding-invitation.git

# Push code
git branch -M main
git push -u origin main
```

### 6. Vercel Deployment

#### A. Install Vercel CLI
```bash
npm install -g vercel
```

#### B. Login to Vercel
```bash
vercel login
# Choose your login method (GitHub recommended)
```

#### C. Configure for Public Access
Create `vercel.json` in project root:
```json
{
  "version": 2,
  "public": true
}
```

#### D. Deploy
```bash
# Deploy to production
vercel --prod --yes

# Or deploy with public flag
vercel --prod --yes --public
```

### 7. Verify Deployment
- Test the Vercel URL in incognito/private browser
- Test personalized URLs: `https://your-site.vercel.app?name=John`
- Check that no login is required

---

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "public": true
}
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 📝 Dynamic Name Feature

### Implementation
```javascript
// In page.tsx
const [inviteeName, setInviteeName] = useState('Dear Guest');

useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  if (name) {
    setInviteeName(`Dear ${name}`);
  }
}, []);
```

### Usage Examples
- Default: `https://your-site.vercel.app`
- Personalized: `https://your-site.vercel.app?name=John`
- With spaces: `https://your-site.vercel.app?name=Sarah%20Johnson`

---

## 🚨 Common Issues & Solutions

### Issue: Vercel asks for login
**Solution:** Add `vercel.json` with `"public": true`

### Issue: Build fails with ESLint errors
**Solution:** Fix quotes in JSX:
```javascript
// Wrong
"Don't wait"

// Correct  
&ldquo;Don&rsquo;t wait&rdquo;
```

### Issue: SSH authentication failed
**Solution:** 
1. Generate new ED25519 key
2. Add to GitHub settings
3. Test with `ssh -T git@github.com`

### Issue: Git push requires password
**Solution:** Use SSH instead of HTTPS:
```bash
git remote set-url origin git@github.com:username/repo.git
```

---

## 🔄 Update/Redeploy Process

### For Code Changes
```bash
# Make changes to code
# Test locally
npm run build

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# Deploy to Vercel
vercel --prod --yes
```

### For Emergency Fixes
```bash
# Quick deploy without GitHub
vercel --prod --yes
```

---

## 📋 Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] Project builds successfully (`npm run build`)
- [ ] Git repository initialized
- [ ] SSH keys configured for GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel CLI installed and authenticated
- [ ] `vercel.json` configured with `"public": true`
- [ ] Deployed to Vercel
- [ ] Tested in incognito browser (no login required)
- [ ] Dynamic name feature working
- [ ] Mobile responsive design verified

---

## 📞 Support Commands

```bash
# Check Node version
node --version

# Check git status
git status

# Test SSH connection
ssh -T git@github.com

# Check Vercel projects
vercel projects ls

# View deployment logs
vercel logs [deployment-url]
```

---

## 🎯 Final URLs Template

- **GitHub Repository:** `https://github.com/username/wedding-invitation`
- **Vercel Production:** `https://project-name.vercel.app`
- **Personalized Invites:** `https://project-name.vercel.app?name=Guest%20Name`

---

*This guide covers the complete deployment process for the wedding invitation project. Keep this document for future reference and updates.*