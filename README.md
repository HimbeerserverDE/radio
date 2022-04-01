# radio
Web app to play random music of your choice

# Installation instructions
A web browser is required to use this.

## Linux or (probably) OS X
```
sudo apt update && sudo apt install -y python3
./install_depends.sh
```

## Windows
Run (double click) the `install_depends.bat` file.

# Adding songs
Go to the `static` directory and create a `song` subdirectory.
Put raw audio files (or symlinks or hardlinks) in the newly created directory.
You can use `youtube-dl -x <URL>` for this, where URL is a video or playlist
URL.
This can be done while the web server is running.

# Usage instructions
Open a terminal (or command prompt for the Windows users) and use the `cd`
command to change to the project directory. Then simply type `flask run`
and hit enter. Depending on your terminal emulator you may be able to click
the link. If not, copy it into your browser's URL bar manually.
_It may be necessary to click play if your browser doesn't allow autoplay._
