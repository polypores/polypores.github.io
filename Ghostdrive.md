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

# How to remove ghost network drive still remained after disconnecting

## Method 1: The Command Line Force (Recommended)

- Press Windows Key + R, type cmd, and press Enter.

- Type the following command (replace Z: with the actual letter of your stuck drive) and press Enter:

        net use
        net use Z: /delete

![](https://i.postimg.cc/3xDrD6Mx/2026-01-15-172211.png)

## Method 2: Delete from Registry (The "Nuclear" Option)

- Press **Win + R**, type **regedit**, and press **Enter**.

- Navigate to this path (you can paste it into the address bar at the top):
        
        Computer\HKEY_CURRENT_USER\Network

- You will see folders named with drive letters (e.g., Z, X, etc.).

- Right-click the folder corresponding to your stuck drive letter. Select **Delete** and **confirm**.

![](https://i.postimg.cc/Z5yYygkK/2026-01-15-172333.png)

- Restart your computer (or restart **File Explorer**) for the change to take effect.

## Method 3: Restart File Explorer

- Right-click the Start button and select **Task Manager**.

![](https://i.postimg.cc/B6htCKmv/Screenshot-2026-01-15-172417.png)

- Find **Windows Explorer** in the list of processes. The process may move up and down, may be very hard to click. Consider sort by Name before selecting to avoid restarting incorrect process. 

![](https://i.postimg.cc/RF3xjJMz/2026-01-15-172458.png)

- Or you could use **Details** section in **Task Manager**, and restart **explorer.exe** task.

![](https://i.postimg.cc/0Q61LK8R/2026-01-15-172516.png)

- Right-click it and select **Restart**.

- Check **This PC** again to see if the ghost drive has vanished.