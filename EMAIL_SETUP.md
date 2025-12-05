# Email Setup Instructions for Contact Form

## Quick Setup Guide

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Gmail App Password

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Navigate to **Security**

2. **Enable 2-Step Verification** (if not already enabled)
   - Click on "2-Step Verification"
   - Follow the setup process

3. **Generate App Password**
   - Go back to Security
   - Click "2-Step Verification"
   - Scroll down to "App passwords"
   - Click "App passwords"
   - Select app: **Mail**
   - Select device: **Other (Custom name)** - enter "Portfolio Website"
   - Click **Generate**
   - Copy the 16-character password (remove spaces)

### Step 3: Update .env File

Open the `.env` file in the root directory and update:

```env
EMAIL_USER=mdhherath@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

Replace `your-16-character-app-password-here` with the app password you generated.

### Step 4: Run the Application

**Terminal 1 - Start Backend Server:**
```bash
node server.js
```

**Terminal 2 - Start React App:**
```bash
npm start
```

### Step 5: Test the Contact Form

1. Navigate to the "Get In Touch" section
2. Fill out the form with test data
3. Click "Send"
4. Check your email inbox (mdhherath@gmail.com)

## Important Notes

- **Never commit .env file to Git** - It's already in .gitignore
- The server runs on `http://localhost:5000`
- The React app runs on `http://localhost:3000`
- Make sure both servers are running simultaneously
- Gmail may block less secure apps - use App Password method above

## Troubleshooting

### "Invalid login" Error
- Make sure you're using an App Password, not your regular Gmail password
- Ensure 2-Step Verification is enabled
- Check that EMAIL_USER and EMAIL_PASS in .env are correct

### "Server not responding" Error
- Make sure server.js is running: `node server.js`
- Check that port 5000 is not being used by another application
- Verify CORS is enabled in server.js

### Email not received
- Check spam/junk folder
- Verify EMAIL_USER in .env is correct
- Check server terminal for error messages
- Ensure Gmail account allows less secure apps or use App Password

## Security Best Practices

1. Always use App Passwords for nodemailer
2. Never share your .env file
3. Add .env to .gitignore (already done)
4. For production, use environment variables on your hosting platform
5. Consider rate limiting for production deployments

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Set environment variables in your hosting dashboard:
   - `EMAIL_USER=mdhherath@gmail.com`
   - `EMAIL_PASS=your-app-password`

2. Deploy backend separately (Heroku, Railway, Render):
   - Update the fetch URL in Contact.js to your backend URL
   - Example: `https://your-backend.herokuapp.com/contact`

3. Update CORS settings in server.js for production domain
