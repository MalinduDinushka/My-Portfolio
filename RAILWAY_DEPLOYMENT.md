# Railway Deployment Guide

## Prerequisites
- Railway account ([railway.app](https://railway.app))
- GitHub repository connected

## Environment Variables to Set in Railway

Add these variables in your Railway project settings:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

## Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository: `MalinduDinushka/My-Portfolio`
5. Railway will auto-detect the configuration
6. Add environment variables in Settings > Variables
7. Deploy!

### Option 2: Deploy with Railway CLI

1. Install Railway CLI:
   ```powershell
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```powershell
   railway login
   ```

3. Initialize project:
   ```powershell
   railway init
   ```

4. Add environment variables:
   ```powershell
   railway variables set EMAIL_USER=your-email@gmail.com
   railway variables set EMAIL_PASS=your-app-password
   railway variables set NODE_ENV=production
   ```

5. Deploy:
   ```powershell
   railway up
   ```

## What's Configured

- ✅ Server serves static React build files
- ✅ Backend API endpoint `/contact` for form submissions
- ✅ Port configured from environment variable
- ✅ Build command set to compile React app
- ✅ Start command runs Express server

## Post-Deployment

1. Railway will provide a public URL (e.g., `https://your-app.up.railway.app`)
2. Update any hardcoded API URLs in your React app to use relative paths or the Railway URL
3. Test the contact form functionality

## Troubleshooting

- Check Railway logs if deployment fails
- Ensure all environment variables are set
- Verify Gmail app password is correct
- Check build logs for any compilation errors
