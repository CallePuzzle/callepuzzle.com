import { escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import relativeImages from 'mdsvex-relative-images';

const config = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'nginx', 'ini', 'terraform', 'yaml', 'go']
			});
			await highlighter.loadLanguage(
				'javascript',
				'typescript',
				'nginx',
				'ini',
				'terraform',
				'yaml',
				'go'
			);
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [relativeImages]
};

export default config;
