#!/bin/bash

# Create lovable-uploads directory if it doesn't exist
mkdir -p public/lovable-uploads

# Download icons from win98icons.alexmeub.com
cd public/lovable-uploads

# Win98 icons
curl -O https://win98icons.alexmeub.com/icons/png/notepad-0.png
curl -O https://win98icons.alexmeub.com/icons/png/write_file-0.png
curl -O https://win98icons.alexmeub.com/icons/png/excel_file-0.png
curl -O https://win98icons.alexmeub.com/icons/png/directory_closed-4.png
curl -O https://win98icons.alexmeub.com/icons/png/paint_file-0.png
curl -O https://win98icons.alexmeub.com/icons/png/video_file-0.png
curl -O https://win98icons.alexmeub.com/icons/png/sound-0.png
curl -O https://win98icons.alexmeub.com/icons/png/help_book-0.png
curl -O https://win98icons.alexmeub.com/icons/png/settings_gear-0.png
curl -O https://win98icons.alexmeub.com/icons/png/joystick-0.png
curl -O https://win98icons.alexmeub.com/icons/png/network_computer_2-0.png
curl -O https://win98icons.alexmeub.com/icons/png/computer_2-0.png
curl -O https://win98icons.alexmeub.com/icons/png/cd_drive-5.png

# MyComputer icons
curl -O https://win98icons.alexmeub.com/icons/png/hard_disk_drive-4.png
curl -O https://win98icons.alexmeub.com/icons/png/floppy_drive-4.png
curl -O https://win98icons.alexmeub.com/icons/png/printer-0.png

echo "Icons downloaded successfully!" 