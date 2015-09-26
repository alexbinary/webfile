# webfile
HTTP endpoint that returns files from a directory

## Install

```
npm install -g webfile
```

## Usage

```
webfile [dir] [port]
```

- `dir` is the directory containing the files you want to serve.
Must contain only files, server will crash when trying to serve something else.
Defaults to `./`  
- `port` is the port the server should listen on, if omitted a random port is selected.

Then visit `http://yourhost:port`. You will get a random file from the specified folder.
Reload to get a new random file.

### Example

```
> webfile Pictures/

Server running at :::63832
Serving files from /Users/Alex/Pictures
```

Files are accessible at http://localhost:63832
