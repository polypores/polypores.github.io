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

# Estalish SSH on Windows

Windows 10 and 11 (as well as Windows Server 2019/2022) have a built-in OpenSSH Server that allows you to manage the machine via a command line, just like you would with a Linux server.

## 1. Enable SSH on the Remote Windows Computer

Unlike RDP, SSH is not usually enabled by default on Windows. You must install the OpenSSH Server on the remote machine first (you only need to do this once).

### 1.1. Install OpenSSH Server:

On Windows, go to **Settings > System > Optional Features**. Click **View Features**.

![image](https://i.postimg.cc/59ZRLYgS/2026-01-03-032717.png)

Click See available features, search for *"OpenSSH Server"* in Available features section, and click Add.

If you want to delete, click See added features, search for "OpenSSH Server" and 
alternatively, via PowerShell Admin: 

    Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

![image](https://i.postimg.cc/J792ZDxc/2026-01-03-032722.png)


### 1.2. Start the Service:
Open services.msc, find OpenSSH SSH Server, set it to Automatic, and Start it.

Alternatively, via PowerShell Admin: 

    Start-Service sshd; Set-Service -Name sshd -StartupType 'Automatic'

## 2. Connect via SSH

From your local computer (Windows, Mac, or Linux), open your terminal (CMD or PowerShell) and run:

    ssh username@remote_ip_address