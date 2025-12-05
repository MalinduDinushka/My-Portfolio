# Vercel Deployment - Contact Form Setup

Your portfolio is now configured for Vercel with a working contact form!

## What's Changed

1. ✅ Created serverless API endpoint at `/api/contact.js`
2. ✅ Updated Contact component to use `/api/contact` instead of `localhost:5000`
3. ✅ Added `vercel.json` configuration file

## Environment Variables Setup

You **MUST** add these environment variables in your Vercel project:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-gmail-app-password
```

### How to get Gmail App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to: https://myaccount.google.com/apppasswords
4. Create an "App Password" for "Mail"
5. Copy the 16-character password and use it as `EMAIL_PASS`

## Deploy to Vercel

### Option 1: Automatic Deployment (Git Push)
```powershell
git add .
git commit -m "Add Vercel serverless function for contact form"
git push origin main
```

Vercel will automatically redeploy.

### Option 2: Manual Deployment
```powershell
npm install -g vercel
vercel --prod
```

## Testing

After deployment:
1. Go to your live site
2. Fill out the contact form
3. Check if the email arrives at your inbox
4. Check Vercel Function Logs if there are issues

## Important Notes

- The API endpoint is now `/api/contact` (serverless function)
- No Express server needed on Vercel
- Environment variables must be set in Vercel dashboard
- Function logs are available in Vercel dashboard under "Functions"

## Troubleshooting

**If emails aren't sending:**
- Verify environment variables are set correctly in Vercel
- Check Vercel Function Logs for errors
- Ensure Gmail App Password is correct (not regular password)
- Verify 2-Step Verification is enabled on Gmail

**Function timeout:**
- Vercel free tier has 10s timeout (usually enough for email)
- Upgrade plan if needed for longer timeouts
