"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[5159],{60771:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return g}});var a=t(58168),o=t(80045),i=(t(88763),t(15680)),m=t(83407);const c=["components"],r={},s={_frontmatter:r},d=m.A;function g(e){let{components:n}=e,t=(0,o.A)(e,c);return(0,i.mdx)(d,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"merge-pages"},"Merge pages"),(0,i.mdx)("p",null,"Sections can be merged into pages to cover your extension."),(0,i.mdx)("p",null,"In this example we add a section that may be relevant to our extension to the list of sections underneath one page."),(0,i.mdx)("h2",{id:"starting-page"},"Starting page"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page name="AdminCategoryPage" url="catalog/category/" area="admin" module="Magento_Catalog">\n    <section name="AdminCategorySidebarActionSection"/>\n    <section name="AdminCategoryMainActionsSection"/>\n    <section name="AdminCategorySidebarTreeSection"/>\n    <section name="AdminCategoryBasicFieldSection"/>\n    <section name="AdminCategorySEOSection"/>\n    <section name="AdminCategoryProductsSection"/>\n    <section name="AdminCategoryProductsGridSection"/>\n    <section name="AdminCategoryModalSection"/>\n    <section name="AdminCategoryMessagesSection"/>\n    <section name="AdminCategoryContentSection"/>\n</page>\n')),(0,i.mdx)("h2",{id:"file-to-merge"},"File to merge"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page name="AdminCategoryPage" url="catalog/category/" area="admin" module="Magento_Catalog">\n    \x3c!-- myExtensionSection will simply be added to the page --\x3e\n    <section name="MyExtensionSection"/>\n</page>\n')),(0,i.mdx)("h2",{id:"resultant-page"},"Resultant page"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page name="AdminCategoryPage">\n    <section name="AdminCategorySidebarActionSection"/>\n    <section name="AdminCategoryMainActionsSection"/>\n    <section name="AdminCategorySidebarTreeSection"/>\n    <section name="AdminCategoryBasicFieldSection"/>\n    <section name="AdminCategorySEOSection"/>\n    <section name="AdminCategoryProductsSection"/>\n    <section name="AdminCategoryProductsGridSection"/>\n    <section name="AdminCategoryModalSection"/>\n    <section name="AdminCategoryMessagesSection"/>\n    <section name="AdminCategoryContentSection"/>\n    \x3c!-- New section merged --\x3e\n    <section name="MyExtensionSection"/>\n</page>\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-merge-points-merge-pages-md-369eb42dfdbbeb895de3.js.map