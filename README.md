# webpix
HTTP endpoint that returns pictures from a directory

## Usage

```
webpix [folder] [port]
```

`folder` is the path to the directory you want to serve the picture from, defaults to `./`.
`port` is the port the server should listen on, if omitted a random port is selected.

Then visit `http://yourhost:port`. You will get a random picture from the specified folder.
Reload to get a new random pix.

`folder` must contain only `.jpg` files. Any other file will be
directory crash
