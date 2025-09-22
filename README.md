# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6897fc64-a38d-45dc-b6de-8bb0d9292385

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6897fc64-a38d-45dc-b6de-8bb0d9292385) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Password Reset Flow

The application implements a password recovery flow using Supabase.

### Request a Reset Link

1. Navigate to the `Auth` page (`/auth`).
2. Click on the "Forgot password?" link in the Sign In tab.
3. Enter your account email and submit. A toast will confirm that a reset link was sent (if the email exists).

### Reset the Password

1. Open the email from Supabase and click the recovery link.
2. The link will redirect you to `/reset-password` where you can enter a new password.
3. After updating successfully you will be redirected to your account page.

### Supabase Configuration

In the Supabase Dashboard, ensure the redirect URL `https://YOUR_DOMAIN/reset-password` (and your local dev URL like `http://localhost:5173/reset-password`) is added to the list of allowed redirect URLs under Authentication Settings.

The code uses `supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/reset-password' })`.

### Security Notes

- Reset link is sent regardless of whether the email exists (to avoid account enumeration).
- Token validity and session creation is handled by `@supabase/supabase-js` automatically when the user lands on the page with the recovery token.
- Users must choose a password with a minimum length of 6 characters (align with Supabase defaults; adjust as needed).

### Future Enhancements (Ideas)

- Add password strength indicator.
- Add rate limiting / cooldown for repeated reset requests.
- Localize user-facing text.
- Add resend link option if token expired.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6897fc64-a38d-45dc-b6de-8bb0d9292385) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
