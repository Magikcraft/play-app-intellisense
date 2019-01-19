# Play App Intellisense

To test Intellisense:

```bash
cd test-server
npm i
npm start
```

The server will start an editor and retrieve the `index.json` from the `definitions` directory. The specified files will be loaded into the Intellisense of the editor, with the option of also adding an import statement to the editor content.