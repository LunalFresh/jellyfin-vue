1. Install `build-essential` and `debhelper`:

`sudo apt install build-essential debhelper`

2. Build the package:

`dpkg-buildpackage -us -uc`

The `root` symlink in this directory points to the repository root and is used by the Debian packaging scripts to access the entire project tree during the build process.
