import { codeToHtml } from 'shiki';
import { escapeSvelte } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';

const config = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const returned = await codeToHtml(code, {
				theme: 'github-dark',
				lang
			});
			const html = escapeSvelte(returned);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [relativeImages]
};

export default config;
