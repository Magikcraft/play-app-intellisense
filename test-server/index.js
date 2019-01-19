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

axios.get('../../definitions').then(res => {
	Promise.all(
		window.$('td.display-name', res.data)
		.map(function () {
			return this.textContent;
		})
		.get()
		.map(f => {
			if (!f || !f.indexOf || f.indexOf('.d.ts') == -1) {
				return Promise.resolve();
			}
			return axios.get(`../../definitions/${f}`)
				.then(res => {
					const filename = `${f}.d.ts`;
					console.log(`Adding ${f}...`);
					const moduleName = f.replace('.d.ts', '');
					const variable = moduleName;
					monaco.languages.typescript.typescriptDefaults.addExtraLib(res.data, filename);
					monaco.languages.typescript.javascriptDefaults.addExtraLib(res.data, filename);
					return `import * as ${variable} from '${moduleName}';`;
				});
			})
		)
	.then(imports => {
		console.log(imports)
		monaco.editor.create(document.getElementById('container'), {
			value: imports.join('\n'),
			language: 'javascript'
		});
	});
})
