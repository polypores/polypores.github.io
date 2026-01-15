---
layout: null
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

<style>
    body {
        /* A4 Width Settings */
        max-width: 210mm;        /* Standard A4 width */
        width: 100%;             /* Ensures it shrinks on mobile phones */
        
        /* Centering */
        margin: 0 auto;          /* Top/Bottom=0, Left/Right=Auto (Centers it) */
        
        /* Reading Experience */
        padding: 20px;           /* Prevents text from hitting the very edge */
        font-family: Roboto, sans-serif;
        color: #333;             /* Dark grey is easier on eyes than pure black */
    }
    
    /* Optional: Improves images if you ever add them */
    img {
        max-width: 100%;
        height: auto;
    }
</style>

# Enable Audio remotely for RDP

To configure RDP so that audio plays on the remote laptop instead of your local device, follow these steps before you connect.

## 1. Configure Remote Desktop Connection Settings

- Open **Remote Desktop Connection (mstsc)** on your local computer.

- Click **Show Options** at the bottom left to expand the window.

- Go to the **Local Resources** tab.

- Under the "Remote audio" section, click the **Settings...** button.

- Select Play on remote computer.

    Note: **Play on this computer** brings the sound to you. **Play on remote computer** keeps the sound there.

- Click **OK** and then **Connect**.

## 2. Check Remote Audio Service (If Step 1 Doesn't Work)

- Connect to the remote laptop. Press **Win + R**. Type **services.msc** and hit **Enter**.

- Scroll down to find **Windows Audio**.

- Double-click it and ensure the **Startup type** is set to **Automatic** and the Service status is **Running**.

    If the volume icon on the remote laptop has a red "X" over it, click it to trigger the troubleshooter, which often forces the audio service to wake up.

## 3. Verify Group Policy (Advanced)

If you are on a corporate network or using Windows Pro/Enterprise, a policy might be overriding your settings.

-  On the Remote Laptop, run **gpedit.msc**.

-  Navigate to: **Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Device and Resource Redirection**.

-  Ensure **Allow audio and video playback redirection** is set to **Enabled** or **Not Configured** (Disabled will block audio entirely).