# Wilmslow SCARAB Tri Club — website

A simple, fast website built with plain HTML and CSS. **No build tools, no
frameworks, nothing to install.** Anyone can open a file, change some text, and
the site updates. It's designed to be cheap (free hosting + your domain) and to
keep working for years without maintenance.

---

## What's in here

| File / folder        | What it is                                                        |
|----------------------|-------------------------------------------------------------------|
| `index.html`         | The main page (About, Training, Membership, Team, Governance, FAQ, Contact) |
| `blog.html`          | Club news / blog                                                  |
| `gallery.html`       | Photo gallery                                                     |
| `404.html`           | The "page not found" page                                         |
| `styles.css`         | **All the styling.** Brand colours are at the very top.           |
| `scripts.js`         | The menu, FAQ accordion and animations                            |
| `assets/img/`        | Images — the logo lives here; add your photos here                |
| `netlify.toml`       | Hosting settings (you don't need to touch this)                   |

> 💡 To preview the site on your computer, just double-click `index.html` — it
> opens in your web browser. (The contact form only sends for real once the site
> is live on Netlify; see below.)

---

## How to make common changes

### Change some text
Open the relevant `.html` file in any text editor (even Notepad), find the words
you want to change, type over them, and save. That's it.

### Add a blog post
1. Open `blog.html`.
2. Copy one of the `<article class="post-card"> ... </article>` blocks.
3. Paste it at the **top** of the list (newest first) and edit the title, date and text.
4. Save.

### Add photos to the gallery
1. Put your image files in the `assets/img/` folder (around 1200px wide is plenty).
2. Open `gallery.html` and point the `src="assets/img/..."` at your file names.

### Change the brand colours
Open `styles.css`. The first few lines (under `:root`) control the green, yellow
and background colours for the whole site.

### Change the menu
The menu (the `<nav>` block) appears near the top of `index.html`, `blog.html`
and `gallery.html`. If you add or rename a menu item, update it in those three files.

---

## ⚠️ Before launch — things to check/replace

- [ ] **A hero background photo:** add a photo named `hero.jpg` to `assets/img/`.
      Without one, the top of the page just shows a dark background (which still
      looks fine). A wide action shot works best.
- [ ] **Real gallery photos** in `assets/img/` (see "Add photos" above).
- [ ] Add bios/photos for Susan Dickinson and Dan Piercy if you'd like to expand them
      (their text is currently brief).
- [ ] Double-check the **AGM minutes links** still work (they point at the old Wix site).

Confirmed and done: membership prices (£50 adult / £50 student-senior / £80 couple /
£6 pay-as-you-go), swim session times, the full 6-person team, kit lists and policies.

---

## Putting it live (one-time setup)

You'll host it free on **Netlify** and keep your existing **scarabtri.com** domain.

### Step 1 — Put the code on GitHub
Upload the contents of this folder to a GitHub repository (you already have one:
`Olivergold1/scarab-tri-club-site`). The quickest way is GitHub's website:
**Add file → Upload files → drag everything in here → Commit.**

### Step 2 — Connect Netlify
1. Go to [netlify.com](https://www.netlify.com) and sign up (free) with your GitHub account.
2. Click **Add new site → Import an existing project → GitHub**, and pick the repo.
3. Leave the build settings empty (it's a static site) and click **Deploy**.
4. In about a minute you'll get a free live URL like `scarab-tri.netlify.app`. Test it.

### Step 3 — Turn on the contact form email
1. In Netlify, open your site → **Forms**. You'll see the `contact` form.
2. Go to **Forms → Settings & notifications → Add notification → Email notification**.
3. Enter `scarabtriathlonclub@gmail.com`. Now every message is emailed to the club.
   (Free tier covers 100 messages/month — plenty.)

### Step 4 — Point your domain at the new site
1. In Netlify: **Domain settings → Add a domain → `scarabtri.com`.**
2. Netlify shows you the DNS records to set. Log in wherever the domain is
   registered (likely **Wix**, or a registrar like GoDaddy/123-Reg) and update
   the DNS to point at Netlify, following Netlify's on-screen instructions.
3. Netlify provides a free HTTPS certificate automatically.
4. Once DNS updates (can take a few hours), `scarabtri.com` shows the new site.

> Keep the old Wix site running until the new one is live and tested, then cancel
> the Wix subscription to stop paying for it.

### Updating the site afterwards
Edit a file on GitHub (or upload a changed file) → Netlify automatically
re-publishes within a minute. No other steps.

---

## Costs

- **Hosting (Netlify):** free.
- **Domain (scarabtri.com):** your usual yearly renewal (~£10–15) — unchanged.
- **Wix:** can be cancelled once you've switched, saving its monthly fee.
