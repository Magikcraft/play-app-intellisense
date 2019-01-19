import * as monaco from 'monaco-editor';
import * as axios from 'axios';

const intellisenseFiles = [
	'tools.d.ts'
];

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}

// Remove default web browser typings
// https://stackoverflow.com/a/43231372
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });

axios.get('../../definitions/index.json').then(res => {
	console.log(res.data)
	Promise.all(
		res.data
		.map(f => {
			const filename = f.file;
			return axios.get(`../../definitions/${filename}`)
				.then(res => {
					console.log(`Adding ${filename}...`);
					monaco.languages.typescript.typescriptDefaults.addExtraLib(res.data, filename);
					monaco.languages.typescript.javascriptDefaults.addExtraLib(res.data, filename);
					return f.addImport;
				});
			})
		)
	.then(imports => {
		const filteredImports = imports.filter(e => e);
		monaco.editor.create(document.getElementById('container'), {
			value: filteredImports.join('\n'),
			language: 'typescript'
		});
	});
})
