<h1 align="center">Dynamic-Readme-Images</h1>

This isn't some genius level newest technology, but something like this wasn't there when I needed it. When I figured out how to do this, I thought of making it accessible to the world - and that's why it's open source. 

Dynamic-Readme-Images is a template repository that uses GitHub Actions and Puppeteer to automatically capture a screenshot of a website and update it at a set interval. This way, you can embed a “dynamically updating image” in your project or article (or pretty much everything static) even though the image file is static.

For reference, I've set this repository to fetch an automatic screenshot from [Artificialanalysis.ai](https://artificialanalysis.ai/) (VERY cool website btw) that updates every 24 hours
<p align="center">
    <img src="https://raw.githubusercontent.com/kuberwastaken/Dynamic-Readme-Images/main/screenshot.png" alt="Artificialanalysis-auto-update">
</p>

## Setup & Usage

### 1. Fork the Repository

Click the **Fork** button at the top-right corner of the GitHub page to create your own copy of the repository. This allows you to modify the workflow and code as needed without affecting this original template.

### 2. Configure Your Repository

- **Enable GitHub Actions Write Access:**  
  Go to your repository’s settings under `Settings -> Actions` and ensure that actions are allowed to write changes (commit updates).

- **Customize as Needed:**  
  - Modify the target URL in `screenshot.js` if you want to capture a different website.
  - Adjust the cron schedule or add additional steps in the workflow file if desired.
  - There are tons of code comments so it's actually pretty easy to set up to your requirements

### 3. Embed the Dynamic Image

Once the workflow has run (daily at midnight UTC), your updated screenshot will be available at:

https://raw.githubusercontent.com/[yourusername]/Dynamic-Readme-Images/main/screenshot.png


Embed it in your README or any markdown-supported platform like so:
```markdown
![Dynamic Screenshot](https://raw.githubusercontent.com/[yourusername]/Dynamic-Readme-Images/main/screenshot.png)
```

## Features

- **Automated Screenshot Updates:**  
  Uses a GitHub Actions workflow to take a screenshot every 24 hours (at midnight UTC) from a specified website.

- **Dynamic Image Link:**  
  The generated image is available at:  
  `https://raw.githubusercontent.com/[yourusername]/Dynamic-Readme-Images/main/screenshot.png`  
  (Replace `[yourusername]` with your actual GitHub username.)

- **Well-Commented Code:**  
  Both the workflow file and the screenshot script are extensively commented to help you understand and customize each step.

## Customization Options
- **Change the Target Website:**
Edit the URL in screenshot.js at the page.goto() method.

- **Adjust Screenshot Settings:**
Tweak the viewport dimensions, resolution (device scale factor), or add custom CSS styles as per your needs.

- **Extend the Workflow:**
Feel free to add more processing steps (by just uncommenting) in the GitHub Actions workflow, such as image compression, resizing, or sending notifications upon update.

## How It Works

1. **Scheduled Workflow:**  
   The workflow defined in `.github/workflows/update_images` is triggered every x time (or on push, if needed). It uses cron syntax to schedule the execution.

2. **Screenshot Capture:**  
   The `screenshot.js` script uses Puppeteer to launch a headless browser, navigate to the target website (currently set to [Artificial Analysis](https://artificialanalysis.ai/)), and capture a full-page screenshot saved as `screenshot.png`.

3. **Automatic Update:**  
   After capturing the screenshot, the script commits and pushes the updated image back to the repository. This means your image link always points to the latest version.

## Repository Structure

- **.github/workflows/update_images:**  
  Contains the GitHub Actions workflow file. This file is heavily commented to explain:
  - How the job is triggered (daily via cron and optionally on push).
  - The process of setting up Node.js and installing dependencies.
  - The steps to capture the screenshot using Puppeteer.
  - Committing the updated screenshot back to the repository.

- **screenshot.js:**  
  A Node.js script that handles:
  - Launching Puppeteer with proper configuration.
  - Setting viewport properties for high-resolution screenshots.
  - Navigating to the target website.
  - Capturing and saving a full-page screenshot.
  - Optional customizations (e.g., forcing a color scheme, adding custom CSS, waiting for specific elements).

## Contributing
Contributions are welcome! Since the code is well-commented and modular, you can easily add more if you like :)

## License
This project is licensed under the MIT License. See the [LICENSE file](https://github.com/Kuberwastaken/Dynamic-Readme-Images/blob/main/LICENSE) for details.