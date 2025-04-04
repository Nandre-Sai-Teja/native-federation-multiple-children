HOSTED URLS:

https://your-shell2-host.netlify.app
https://your-todo1-remote.netlify.app
https://your-todo2-remote.netlify.app

dist/shell/browse (_headers file):

/remoteEntry.json
  Access-Control-Allow-Origin: https://your-shell2-host.netlify.app
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type

dist/todo1/browse (_headers file):

/remoteEntry.json
  Access-Control-Allow-Origin: https://your-shell2-host.netlify.app
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type

/*.js
  Access-Control-Allow-Origin: https://your-shell2-host.netlify.app
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type

dist/todo2/browse (_headers file):

/remoteEntry.json
  Access-Control-Allow-Origin: https://your-shell2-host.netlify.app
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type

/*.js
  Access-Control-Allow-Origin: https://your-shell2-host.netlify.app
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type

projects/shell/public/federation.manifest.json

{
	"todo1": "https://your-todo1-remote.netlify.app/remoteEntry.json",
	"todo2": "https://your-todo2-remote.netlify.app/remoteEntry.json"
}
